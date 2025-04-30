<template>
  <div class="fill-height">
    <!-- Page Title -->
    <h1 class="text-h4 font-weight-bold mb-2">MusiCloud</h1>
    <p class="text-subtitle-1 mb-4">Discover your favorite music</p>

    <!-- Recommended Songs Section -->
    <h2 class="text-h5 font-weight-bold mb-3">Recommended for You</h2>
    <v-slide-group show-arrows>
      <v-slide-group-item v-for="n in 10" :key="n">
        <v-card class="ma-2" width="200" height="250">
          <v-img height="150" cover :src="`https://picsum.photos/200/150?random=${n}`"></v-img>
          <v-card-title class="text-subtitle-1">Song Title {{ n }}</v-card-title>
          <v-card-subtitle>Artist {{ n }}</v-card-subtitle>
        </v-card>
      </v-slide-group-item>
    </v-slide-group>

    <!-- Most Popular Section -->
    <h2 class="text-h5 font-weight-bold mb-3">Most Popular</h2>
    <v-slide-group show-arrows>
      <v-slide-group-item v-for="n in 10" :key="n">
        <v-card class="ma-2" width="200" height="250">
          <v-img height="150" cover :src="`https://picsum.photos/200/150?random=${n + 10}`"></v-img>
          <v-card-title class="text-subtitle-1">Popular Song {{ n }}</v-card-title>
          <v-card-subtitle>Popular Artist {{ n }}</v-card-subtitle>
        </v-card>
      </v-slide-group-item>
    </v-slide-group>
  </div>
</template>

<script lang="ts" setup>
//
</script>

<style></style>
