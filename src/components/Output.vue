<script setup lang="ts">
import { computed, ref } from 'vue';

const props = defineProps({
    xml: String,
    htmlError: String,
    warnings: Array<String>,
});
const outputText = ref<HTMLTextAreaElement>();

interface GroupedWarning
{
    count: number,
    text: String,
}

const groupedWarnings = computed<ReadonlyArray<GroupedWarning>>(() => {
    const map: Map<String, number> = new Map();
    props.warnings?.forEach((warning) => {
        map.set(warning, (map.get(warning) || 0) + 1);
    });
    const result: GroupedWarning[] = [];
    map.forEach((count, text) => result.push({count, text}));
    return result;
});

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
                <textarea class="xml" ref="outputText" readonly autocorrect="off" autocapitalize="off" spellcheck="false" v-bind:value="xml"></textarea>
                <div v-if="groupedWarnings.length > 0" class="warnings">
                    Warnings!
                    <ol>
                        <li v-for="groupedWarning in groupedWarnings">
                            {{ groupedWarning.text }}
                            <span v-if="groupedWarning.count > 1" class="count">
                                &times;{{  groupedWarning.count }}
                            </span>
                        </li>
                    </ol>
                </div>
            </div>
            <div class="actions">
                <button v-on:click.prevent="copy()">
                    <fa v-bind:icon="['fas', 'copy']" />
                    Copy
                </button>
                <button v-on:click.prevent="download()">
                    <fa v-bind:icon="['fas', 'floppy-disk']" />
                    Download
                </button>
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
    white-space: pre;
    overflow-wrap: normal;
}
.xml-and-warnings>.warnings ol {
    margin-top: 0;
    margin-bottom: 0;
}
.xml-and-warnings>.warnings li>.count {
    background-color: rgb(108, 117, 125);
    border-radius: 6px;
    color: #fff;
    display: inline-block;
    font-size: 0.75em;
    line-height: 1;
    padding: 0.35em 0.45em;
    text-align: center;
    vertical-align: baseline;
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