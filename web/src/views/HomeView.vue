<script setup>
import { Translate } from '@/utils/translate';
import { format } from '@/utils/formatString';

import { storeToRefs } from 'pinia';
import { useGlobalStore } from '@/stores/globalStore';
const globalStore = useGlobalStore();
const { isAppVisible, nuiConfig } = storeToRefs(globalStore);

const name = 'IWB Studios';
</script>

<template>
  <div class="wrapper">
    <h3>Hello from iwb-boilerplate!</h3>
    <p><strong>isAppVisible state:</strong> {{ isAppVisible }}</p>
    <p><strong>Inline format:</strong> {{ format('%s is Awesome!', name) }}</p>
    <p><strong>Translated key 'test':</strong> {{ Translate('test', name) }}</p>
    <pre><strong>Translations:</strong> {{ globalStore.locales }}</pre>

    <div v-if="nuiConfig">
      <h4>nuiConfig:</h4>
      <pre>{{ nuiConfig }}</pre>
    </div>
    <p style="color: gold">press 'ESC' to close.</p>
  </div>
</template>

<style scoped>
.wrapper {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  gap: 1em;

  padding: 1em 2em;
  border-radius: 7px;

  color: var(--iwb-txt-col);
  background-color: var(--iwb-bg-col);
}
</style>
