<script lang="ts" setup>
import colors from 'vuetify/util/colors';
import { useTheme } from 'vuetify';
import axios from '@/request';
import { animate, createSpring, stagger } from 'animejs';

interface resetResult{
    show: boolean;
    type: "success" | "error";
    message: string;
}

const dialog = ref(false);
const theme = useTheme();
const resetResult = ref<resetResult>({
    show: false,
    type: 'success',
    message: ''
});

const colorOptions = ref(getColorOptions());
const themeOptions = ref([{
    text: '深色',
    value: 'dark'
}, {
    text: '浅色',
    value: 'light'
}]);

const selectTheme = ref(theme.global.name.value.split('-')[0]);
const selectColor = ref(theme.global.name.value.split('-')[1]);

function changeTheme() {
    console.log(selectTheme.value, selectColor.value);
    theme.global.name.value = `${selectTheme.value}-${selectColor.value}`;
}

function getColorOptions() {
    const options = [];
    for (const key in colors) {
        if (key != "shades") {
            options.push({
                text: key,
                value: key
            });
        }
    }
    return options;
}
function rebuildDatabase() {
    axios.post('/database/reset').then((res) => {
        if (res.status === 200) {
            resetResult.value = {
                show: true,
                type: 'success',
                message: '数据库重建成功！'
            };
        } else {
            resetResult.value = {
                show: true,
                type: 'error',
                message: res.data.msg
            };
        }
    }).catch((err) => {
        resetResult.value = {
            show: true,
            type: 'error',
            message: err.message
        };
    });
    dialog.value = false;
}

const confirmRebuild = () => {
    dialog.value = true;
};

onMounted(()=>{
    animate('.settings-page section',{
        opacity: [0, 1],
        translateX: [50, 0],
        ease: createSpring(),
        delay: stagger(100)
    })
})
</script>

<template>
    <div class="settings-page mt-4 ml-4">
        <section class="mb-4">
            <h2 class="text-h4 font-weight-bold mb-2">设置</h2>
        </section>

        <section class="mb-4">
            <p class="text-h6 font-weight-bold mb-2">数据库管理</p>

            <v-alert
                v-if="resetResult.show"
                :text="resetResult.message"
                :title="resetResult.type === 'error' ? '错误' : '成功'"
                :type="resetResult.type"
                class="mb-4"
                width="90%"
            ></v-alert>

            <div>
                <span class="mr-4">重建数据库</span>
                <v-btn color="error" @click="confirmRebuild">
                    重建
                </v-btn>
            </div>
        </section>

        <section class="mb-4">
            <p class="text-h6 font-weight-bold mb-2">主题管理</p>

            <div>
                <v-select label="选择主题" v-model="selectTheme" :items="themeOptions" item-title="text" item-value="value"
                    @update:modelValue="changeTheme" width="300">
                </v-select>
                <v-select label="选择颜色" v-model="selectColor" :items="colorOptions" item-title="text" item-value="value"
                    @update:modelValue="changeTheme" width="300">
                </v-select>
            </div>
        </section>

        <v-dialog v-model="dialog" max-width="400">
            <v-card>
                <v-card-title>确认操作</v-card-title>
                <v-card-text>
                    您确定要重建数据库吗？此操作不可逆，可能导致数据丢失。
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn text @click="dialog = false">取消</v-btn>
                    <v-btn color="error" @click="rebuildDatabase">确认重建</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>

    </div>
</template>
