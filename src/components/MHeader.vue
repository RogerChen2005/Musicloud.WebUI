<template>
    <div class="m-header-wrapper">
        <div class="m-header-logo">
            <v-icon class="ml-4">mdi-music-circle</v-icon>
            <span class="ml-2 font-weight-bold">Musicloud</span>
        </div>
        <v-card variant="plain" width="300">
            <v-card-text>
                <v-text-field variant="filled" ref="searchRef" clearable prepend-inner-icon="mdi-magnify"
                    density="compact" label="Search" hide-details single-line v-model="queryString"
                    @click:prepend-inner="search"></v-text-field>
            </v-card-text>
        </v-card>
    </div>
</template>

<style>
.m-header-wrapper {
    width: 100%;
    height: 60px;
    box-sizing: border-box;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    background-color: rgb(var(--v-theme-surface));
}

.m-header-logo {
    font-size: 1.5rem;
    color: rgb(var(--v-theme-accent));
}
</style>

<script lang="ts" setup>
import type { VTextField } from 'vuetify/components'

const queryString = ref<string>("")
const router = useRouter()
const searchRef = ref<InstanceType<typeof VTextField> | null>(null)
function search() {
    router.push({
        path: '/search',
        query: {
            q: queryString.value
        }
    })
}
onMounted(() => {
    if (searchRef.value) {
        searchRef.value.addEventListener('keydown', (event: KeyboardEvent) => {
            if (event.key === 'Enter') {
                search()
            }
        })
    }
})
</script>