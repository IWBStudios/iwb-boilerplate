<script setup>
import { onMounted, onBeforeUnmount } from 'vue';
import useNUIEvent from '@/composables/useNUIEvent';
import closeNUI from '@/utils/closeNUI';
import { loadConfig } from '@/utils/loadConfig';

import { useGlobalStore } from '@/stores/globalStore';
const globalStore = useGlobalStore();

useNUIEvent('initNUI', ({ setUseNuiConfig, setLocales }) => {
  globalStore.useNuiConfig = setUseNuiConfig;
  globalStore.locales = setLocales;

  if (globalStore.useNuiConfig) {
    loadConfig();
  }
});

useNUIEvent('showBoilerplate', () => {
  globalStore.isAppVisible = true;
});

const handleKeys = (event) => {
  if (event.key === 'Escape') {
    closeNUI();
  }
};

onMounted(() => document.addEventListener('keyup', handleKeys));
onBeforeUnmount(() => document.removeEventListener('keyup', handleKeys));
</script>
