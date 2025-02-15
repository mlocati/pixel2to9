<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, watch } from 'vue';
import { readFile } from '../Service/File';
import { formatCIF, loadCIF } from '../Service/Xml';

const LS_KEY_FRAGMENT = 'pixel2to9:input-fragment';

const xml = ref<string>('');
const fragment = ref<boolean>(localStorage.getItem(LS_KEY_FRAGMENT) === 'true');

const emit = defineEmits<{
  input: [xml: string, fragment: boolean],
}>()

const textarea = ref<HTMLTextAreaElement>();

watch(xml, (newValue: string) => {
    emit('input', newValue, fragment.value);
});
watch(fragment, (newValue: boolean) => {
    if (newValue) {
        localStorage.setItem(LS_KEY_FRAGMENT, 'true');
    } else {
        localStorage.removeItem(LS_KEY_FRAGMENT);
    }
    if (xml.value) {
        emit('input', xml.value, newValue);
    }
});

const filePicker = ref<HTMLInputElement>();
function pickFile()
{
    filePicker.value?.click();
}
async function filePicked()
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
async function paste()
{
    try {
        xml.value = await navigator.clipboard.readText();
    } catch {
        try {       
            if (textarea.value) {
                textarea.value.focus();
                textarea.value.select();
                if (document.execCommand('paste')) {
                    return;
                }
            }
            throw new Error('Unsupported');
        } catch (e: any) {
            window.alert(e?.message || e?.toString() || '?');
        }
    }
}

async function format()
{
    try {
        xml.value = formatCIF(loadCIF(xml.value, fragment.value), fragment.value);
    } catch (e: any) {
            window.alert(e?.message || e?.toString() || '?');
    }
}

async function drop(e: DragEvent, preview: boolean)
{
    if (!e?.dataTransfer) {
        return;
    }
    const file = e.dataTransfer.files?.length === 1 ? e.dataTransfer.files[0] : null;
    if (!file?.size) {
        e.dataTransfer.dropEffect = 'none'
        return false;
    }
    e.dataTransfer.dropEffect = 'copy';
    if (preview) {
        return;
    }
    try {
        xml.value = await readFile(file);
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
    <div class="area" v-on:dragenter="drop($event, true)" v-on:dragover="drop($event, true)" v-on:drop.prevent="drop($event, false)">
        <header><h2>Pixel 2 CIF</h2></header>
        <textarea v-model="xml" ref="textarea" autocorrect="off" autocapitalize="off" spellcheck="false" placeholder="Paste here your XML or drop an XML file here.&#10;&#10;<concrete5-cif>&#10;    ...&#10;<concrete5-cif"></textarea>
        <div class="actions">
            <label>
                <input type="checkbox" v-model="fragment" />
                Fragment
            </label>
            <button v-on:click.prevent="paste()">
                <fa v-bind:icon="['fas', 'paste']" />
                Paste
            </button>
            <button v-on:click.prevent="pickFile()">
                <fa v-bind:icon="['fas', 'folder-open']" />
                Open file
            </button>
            <button v-on:click.prevent="format()">
                <fa v-bind:icon="['fas', 'indent']" />
                Format
            </button>
            <input type="file" accept="application/xml" ref="filePicker" />
        </div>
    </div>
</template>

<style lang="css" scoped>
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
    white-space: pre;
    overflow-wrap: normal;
}
.actions {
  text-align: center;
  display: relative;
  padding: 10px 20px 20px 20px;
}
.actions button {
    margin: 0 10px 0 10px;
}
.actions label {
    position: absolute;
    left: 20px;
    margin-top: -10px;
}
input[type="file"] {
    display: none;
}
</style>
