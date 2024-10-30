<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, watch } from 'vue';
import { readFile } from '../Service/File';

const emit = defineEmits(['input']);
const xml = ref<string>('');
watch(xml, (newValue: string) => {
    emit('input', newValue);
});

const filePicker = ref<HTMLInputElement>();
function pickFile()
{
    filePicker.value?.click();
}
async function filePicked(e: Event)
{
    if (filePicker.value?.files?.length !== 1) {
        return;
    }
    try {
        xml.value = await readFile(filePicker.value.files[0]);
    } catch (e: any) {
        window.alert(e?.message || e?.toString() || '?');
    }
}
onMounted(() => {
    filePicker.value?.addEventListener('change', filePicked);
});
onBeforeUnmount(() => {
    filePicker.value?.removeEventListener('change', filePicked);
})

</script>

<template>
    <div class="area">
        <header>Pixel 2 CIF</header>
        <textarea v-model="xml"></textarea>
        <div class="actions">
            <button v-on:click.prevent="pickFile()">Open file</button>
            <input type="file" accept="application/xml" ref="filePicker" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.area
{
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0 20px;
}
textarea {
    height: 100%;
    overflow: auto;
    resize: none;
    font-family: SFMono-Regula, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
}
.actions {
  text-align: center;
}
input[type="file"] {
    display: none;
}
</style>
