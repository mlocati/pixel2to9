<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps({
    xml: String,
    htmlError: String,
    warnings: Array<String>,
});
const outputText = ref<HTMLTextAreaElement>();

async function copy()
{
    if (!props.xml) {
        return;
    }
    try {
        await window.navigator.clipboard.writeText(props.xml);
    } catch {
        outputText.value?.select();
        try {
            document.execCommand('copy');
        } catch {
            window.alert('Copy not supported by your browser');
        }
    }
}

function download()
{
    if (!props.xml) {
        return;
    }
    const a = document.createElement('a');
    a.style.display = 'none';
    document.body.appendChild(a);
    try {
        const blob = new Blob([props.xml], {type: 'application/xml'});
        const url = window.URL.createObjectURL(blob);
        try {
            a.href = url;
            a.download = 'concrete5-cif.xml';
            a.click();
        } catch (e: any) {
            window.alert(e?.message || e?.toString() || '?');
        } finally {
            window.URL.revokeObjectURL(url);
        }
    } finally {
        document.body.removeChild(a);
    }
}
</script>

<template>
    <div class="area">
        <header><h2>Pixel 9 CIF</h2></header>
        <div v-if="htmlError">
            <div class="error" v-html="htmlError"></div>
        </div>
        <template v-else-if="xml">
            <div class="xml-and-warnings">
                <textarea class="xml" ref="outputText" readonly v-bind:value="xml"></textarea>
                <div v-if="warnings?.length" class="warnings">
                    Warnings!
                    <ol>
                        <li v-for="warning in warnings">{{ warning }}</li>
                    </ol>
                </div>
            </div>
            <div class="actions">
                <button v-on:click.prevent="copy()">Copy</button>
                <button v-on:click.prevent="download()">Download</button>
            </div>
        </template>
    </div>
</template>
<style lang="css" scoped>
.error
{
    white-space: pre-wrap;
    padding: 1rem;
    color: rgb(88, 21, 28);
    background-color: rgb(248, 215, 218);
    border: 1px solid #f1aeb5;
    border-radius: 0.375rem;
}
.area
{
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0 20px;
    overflow: auto;
}
.xml-and-warnings {
    height: 100%;
    display: flex;
    flex-direction: column;
}
.xml-and-warnings>.xml {
    height: 100%;
    overflow: auto;
    height: 100%;
    border: solid 1px #ddd;
}
.xml-and-warnings>.warnings ol {
    margin-top: 0;
    margin-bottom: 0;
}
.actions {
    text-align: center;
    padding: 10px 0 20px 0;
}
.actions button {
    margin: 0 10px 0 10px;
}
</style>
<style lang="css">
sourcetext {
    font-family: SFMono-Regula, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;    
}
</style>