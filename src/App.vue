<script setup lang="ts">
import Input from './components/Input.vue';
import Output from './components/Output.vue';

import { ref } from 'vue'
import loadCIF from './Xml/Loader';
import Converters from './Conversion/Converter';
import formatCIF from './Xml/Formatter';

const inputXml = ref<string>('');
const inputIsFragment = ref<boolean>(false);
const output = ref<string>('');
const htmlError = ref<string>('');
const warnings = ref<string[]>([]);

function setInputData(xml: string, isFragment: boolean)
{
  inputXml.value = xml;
  inputIsFragment.value = isFragment;
  output.value = '';
  htmlError.value = '';
  if (!xml.match(/\S/)) {
    return;
  }
  try {
    const newWarnings: string[] = [];
    const doc = loadCIF(xml, isFragment);
    Converters.forEach((converter) => converter.convert(doc, newWarnings));
    output.value = formatCIF(doc, isFragment);
    warnings.value.splice(0, warnings.value.length);
    newWarnings.forEach((w) => warnings.value.push(w));
  } catch (e: any) {
    htmlError.value = e?.message || e?.toString() || '?';
  }
}

</script>
<template>
  <header>
    <h1>
      <img src="/images/pixel.svg" alt=""/>
      Pixel 2 to Pixel 9 CIF Converter
      <a href="https://github.com/mlocati/pixel2to9"><img src="/images/github.svg" class="github" alt="View on GitHub" /></a>
    </h1>
  </header>
  <main>
    <section class="input">
      <Input v-on:input="(newXml, newIsFragment) => setInputData(newXml, newIsFragment)" />
    </section>
    <section class="output">
      <Output v-bind:xml="output" v-bind:html-error="htmlError" v-bind:warnings="warnings" />
    </section>
  </main>
</template>
<style lang="css" scoped>
header {
  text-align: center;
  margin: 0;
  padding: 10px;
}
header img {
  height: 2rem;
  vertical-align: text-bottom;
  margin-bottom: 2px;
}
img.github {
  background-color: #ffffff77;
  float: right;
}
img.github:hover {
  background-color: #ffffff;
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
