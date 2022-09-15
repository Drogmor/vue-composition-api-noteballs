<template>
  <TheNavBar />
  <div class="container is-max-desktop px-2 py-4">
    <RouterView />
  </div>
</template>

<script setup>
/* 
    imports
*/

import TheNavBar from "@/components/Layout/TheNavBar.vue"
</script>

<style>
@import "bulma/css/bulma.min.css";
</style>
