import { useGlobalStore } from '@/stores/globalStore';
import sendCallback from './sendCallback';

/**
 * This function closes the NUI.
 * By changing the isAppVisible global state and utilizing sendCallback function to callback the client.
 */
const closeNUI = () => {
  const globalStore = useGlobalStore();

  globalStore.isAppVisible = false;
  sendCallback('closeNUI');
};

export default closeNUI;
