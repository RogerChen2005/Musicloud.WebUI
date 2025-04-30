<template>
    <v-row class="m-header-wrapper">
        <div class="m-header-logo">
            <v-icon class="ml-4">$vuetify</v-icon>
            <span class="ml-2">Vuetify App</span>
        </div>
        <v-card variant="plain" width="300">
            <v-card-text>
                <v-text-field prepend-inner-icon="mdi-magnify" density="compact" label="Search templates" variant="solo"
                    hide-details single-line @click:append-inner=""></v-text-field>
            </v-card-text>
        </v-card>
    </v-row>
</template>

<style>
.m-header-wrapper {
    width: 100%;
    height: 70px;
    box-sizing: border-box;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    background-color: var(--v-surface-light);
}

.m-header-logo {
    font-size: 1.5rem
}
</style>