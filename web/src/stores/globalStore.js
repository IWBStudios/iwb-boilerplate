import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useGlobalStore = defineStore('global', () => {
  const locales = [];
  const useNuiConfig = ref(false);
  const nuiConfig = ref(null);

  const isAppVisible = ref(false);
  const toggleAppVisiblity = () => (isAppVisible.value = !isAppVisible.value);

  return {
    locales,
    useNuiConfig,
    nuiConfig,
    isAppVisible,
    toggleAppVisiblity,
  };
});
