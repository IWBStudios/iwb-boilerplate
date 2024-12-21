<script setup>
import { RouterView } from 'vue-router';
import { storeToRefs } from 'pinia';

import EventBus from '@/providers/EventBus.vue';

import { useGlobalStore } from '@/stores/globalStore';
const globalStore = useGlobalStore();
const { isAppVisible } = storeToRefs(globalStore);
</script>

<template>
  <EventBus />

  <RouterView v-if="isAppVisible" />
</template>

<style scoped lang="sass"></style>
