import { storeToRefs } from 'pinia';
import { useGlobalStore } from '@/stores/globalStore';

export const loadConfig = async () => {
  const globalStore = useGlobalStore();
  const { nuiConfig } = storeToRefs(globalStore);

  // console.debug(`[loadConfig] Starting to load JSON file: config`);

  try {
    const response = await fetch(`/web/dist/config.json`);
    // console.debug(`[loadConfig] Received response:`, response);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    // console.debug(`[loadConfig] Parsed JSON data:`, JSON.stringify(data));
    nuiConfig.value = data;
  } catch (err) {
    console.error(`[loadConfig] Error loading JSON file config:`, err);
  } finally {
    // console.debug(`[loadConfig] Finished loading JSON file: config`);
  }
};
