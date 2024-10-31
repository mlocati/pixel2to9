import { convertFontAwesomeSuffix } from "../FontAwesome";

export type ElementCallback = (element: Element) => void;

interface TemplateConversionOption
{
    newCustomClasses?: string;
    /** Empty string to remove the custom template, non-empty string to change it, not specified to keep it */
    newTemplate?: string;
    warning?: string;
}
interface TemplateConversionOptionDeprecated
{
    deprecated: true;
}

interface TemplateConversionOptions
{
    [Identifier: string]: TemplateConversionOption | TemplateConversionOptionDeprecated
}

function findElements(doc: XMLDocument, xpath: string, context?: Element|null): Element[]
{
    const elements = doc.evaluate(xpath, context || doc, null, XPathResult.ORDERED_NODE_ITERATOR_TYPE);
    const result: Element[] = [];
    let node: Node|null;
    while ((node = elements.iterateNext()) !== null) {
        if (node.nodeType === Node.ELEMENT_NODE) {
            result.push(<Element>node);
        }
    }
    return result;
}   

export default abstract class Block
{
    protected processconvertBlockTemplates(doc: XMLDocument, blockHandle: string, map: TemplateConversionOptions, warnings: string[]): void
    {
        const blockElements = findElements(doc, `//block[@type="${blockHandle}"]`);
        blockElements.forEach((blockElement) => {
            let customTemplate = blockElement.getAttribute('custom-template');
            if (customTemplate === null || customTemplate === '.php' || !customTemplate.endsWith('.php')) {
                return;
            }
            customTemplate = customTemplate.substring(0, customTemplate.length - '.php'.length);
            if (!map.hasOwnProperty(customTemplate)) {
                return;
            }
            const options = map[customTemplate];
            if ('deprecated' in options) {
                blockElement.removeAttribute('custom-template');
                warnings.push(`The "${customTemplate}" custom template of the "${blockHandle}" block is deprecated`);
            } else {
                if (options.warning) {
                    warnings.push(options.warning);
                }
                if (options.newTemplate === '') {
                    blockElement.removeAttribute('custom-template');
                } else if (typeof options.newTemplate === 'string') {
                    blockElement.setAttribute('custom-template', options.newTemplate.endsWith('.php') ? options.newTemplate : `${options.newTemplate}.php`);
                }
                const newCustomClasses = options.newCustomClasses ? options.newCustomClasses.split(/\s+/).filter((c) => c.length > 0) : [];
                if (newCustomClasses.length > 0) {
                    let styleElement = findElements(doc, './style', blockElement).shift();
                    if (!styleElement) {
                        styleElement = doc.createElement('stype');
                        blockElement.insertBefore(styleElement, blockElement.firstChild);
                    }
                    let customClassElement = findElements(doc, './customClass', styleElement).shift();
                    if (!customClassElement) {
                        customClassElement = doc.createElement('customClass');
                        styleElement.appendChild(customClassElement);
                    }
                    const oldCustomClasses = (customClassElement.textContent || '').split(/\s+/).filter((c) => c.length > 0);
                    const customClassesToBeAdded = newCustomClasses.filter((c) => !oldCustomClasses.includes(c));
                    if (customClassesToBeAdded.length > 0) {
                        customClassElement.textContent = [... oldCustomClasses, ...customClassesToBeAdded].join(' ');
                    }
                }
            }
        });
    }

    protected renameBlockTypeHandle(doc: XMLDocument, oldHandle: string, newHandle: string, callback?: ElementCallback|null): void
    {
        const blockElements = findElements(doc, `//block[@type="${oldHandle}"]`);
        blockElements.forEach((blockElement: Element) => {
            blockElement.setAttribute('type', newHandle);
            if (callback) {
                callback(blockElement);
            }
        });
    }

    protected addDataField(doc: XMLDocument, tableName: string, fieldName: string, callback?: ElementCallback|null): void
    {
        const recordElements = findElements(doc, `//block/data[@table="${tableName}"]/record`);
        recordElements.forEach((recordElement) => {
            if (findElements(doc, `./${fieldName}`, recordElement).length === 0) {
                const field = doc.createElement(fieldName);
                recordElement.appendChild(field);
                if (callback) {
                    callback(field);
                }
            }
        });
    }

    protected convertFontAwesomeDataField(doc: XMLDocument, tableName: string, fieldName: string, warnings: string[]): void
    {
        const fieldElements = findElements(doc, `//block/data[@table="${tableName}"]/record/${fieldName}`);
        fieldElements.forEach((fieldElement) => {
            const oldIcon = fieldElement.textContent?.trim();
            if (oldIcon) {
                const newIcon = convertFontAwesomeSuffix(oldIcon);
                if (newIcon === '') {
                    warnings.push(`Unable to find the new FontAwesome icon corresponding to "${oldIcon}"`)
                }
                fieldElement.textContent = newIcon;
            }
        });
    }

    protected removeDataField(doc: XMLDocument, tableName: string, fieldName: string): void
    {
        this.removeDataFields(doc, tableName, [fieldName]);
    }

    protected removeDataFields(doc: XMLDocument, tableName: string, fieldNames: Array<string>): void
    {
        const recordElements = findElements(doc, `//block/data[@table="${tableName}"]/record`);
        recordElements.forEach((recordElement) => {
            const elementsToBeRemoved: Array<Element> = [];
            recordElement.childNodes.forEach((childNode: Node) => {
                // Controlla se il nodo è un elemento e ha il nome desiderato
                if (childNode.nodeType === Node.ELEMENT_NODE && fieldNames.includes((<Element>childNode).tagName)) {
                    elementsToBeRemoved.push(<Element>childNode);
                }
            });
            elementsToBeRemoved.forEach((elementToBeRemoved) => recordElement.removeChild(elementToBeRemoved));
        });
    }

    protected renameDataTable(doc: XMLDocument, oldName: string, newName: string, callback?: ElementCallback|null): void
    {
        const dataElements = findElements(doc, `//block/data[@table="${oldName}"]`);
        dataElements.forEach((dataElement) => {
            dataElement.setAttribute('table', newName);
            if (callback) {
                callback(dataElement);
            }
        });
    }
}
