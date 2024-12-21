import { onMounted, onBeforeUnmount } from 'vue';

/**
 * Listens for NUI Messages sent from client-side
 * @param { string } action - The action to listen for.
 * @param { function } handler - Handles the data that gets passed from client-side.
 */
export function useNUIEvent(action, handler) {
  const eventListener = (event) => {
    const { action: eventAction, data } = event.data;

    if (eventAction === action) {
      handler(data);
    }
  };

  onMounted(() => {
    window.addEventListener('message', eventListener);
  });

  onBeforeUnmount(() => {
    window.removeEventListener('message', eventListener);
  });
}

export default useNUIEvent;
