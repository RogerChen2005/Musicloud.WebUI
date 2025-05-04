<template>
  <div class="app-container">
    <m-header></m-header>
    <div class="app-main">
      <m-sidebar></m-sidebar>
      <div class="app-viewport">
        <router-view />
      </div>
    </div>
  </div>
  <!-- <AppFooter /> -->
</template>

<script lang="ts" setup>
//
</script>

<style lang="scss">
.app-container {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
}

.app-main {
  height: calc(100% - 60px);
  width: 100%;
  display: flex;
  flex-direction: row;
}

.app-viewport {
  height: 100%;
  width: calc(100% - 110px);
  margin-left: 10px;
  overflow-y: auto;
  overflow-x: hidden;
  padding-bottom: 50px;
}
</style>
