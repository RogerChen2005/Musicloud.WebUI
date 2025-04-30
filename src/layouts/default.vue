<template>
  <m-header></m-header>
  <v-row style="margin: 0;">
    <m-sidebar></m-sidebar>
    <div class="app-main">
      <router-view />
    </div>
  </v-row>
  <!-- <AppFooter /> -->
</template>

<script lang="ts" setup>
//
</script>

<style lang="scss" scoped>
.app-main {
  height: calc(100% - 70px);
  width: calc(100% - 100px);
  overflow: auto;
}
</style>
