<script setup lang="ts">
import Input from './components/Input.vue';
import Output from './components/Output.vue';

import { ref, watch } from 'vue'
import loadXML from './Xml/Loader';
import Converters from './Conversion/Converter';
import formatXML from './Xml/Formatter';

const input = ref<string>('');
const output = ref<string>('');
const htmlError = ref<string>('');
watch(input, (newValue: string) => {
  output.value = '';
  htmlError.value = '';
  if (!newValue.match(/\S/)) {
    return;
  }
  try {
    const doc = loadXML(input.value);
    Converters.forEach((converter) => converter.convert(doc));
    output.value = formatXML(doc);
  } catch (e: any) {
    htmlError.value = e?.message || e?.toString() || '?';
  }
});
</script>
<template>
  <header>
    <h1>
      <img src="/images/pixel.svg" />
      Pixel 2 to Pixel 9 CIF Converter
    </h1>
  </header>
  <main>
    <section class="input">
      <Input v-on:input="input = $event" />
    </section>
    <section class="output">
      <Output v-bind:xml="output" v-bind:html-error="htmlError" />
    </section>
  </main>
</template>
<style lang="css" scoped>
header {
  text-align: center;
}
header img {
  height: 2rem;
  vertical-align: text-bottom;
  margin-bottom: 2px;
}
main
{
  flex: auto;
  display: flex;
  flex-direction: row;
}
.input,
.output {
  width: 50%;
  display: flex;
}
</style>
