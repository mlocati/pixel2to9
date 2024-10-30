<template>
  <header>
    <h1>Pixel 2 to Pixel 9 CIF Converter</h1>
  </header>
  <main>
    <section class="input"></section>
    <section class="output"></section>
  </main>
</template>
<style lang="scss" scoped>
header {
  height: 75px;
}
main {
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
