export type ElementCallback = (element: Element) => void;

interface TemplateConversionOption
{
    newCustomClasses?: string;
    newTemplate?: string;
}
interface TemplateConversionOptions
{
    [Identifier: string]: TemplateConversionOption
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
    protected convertBlockTemplateToCSSClass(doc: XMLDocument, blockHandle: string, map: TemplateConversionOptions): void
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
            if (options.newTemplate) {
                blockElement.setAttribute('custom-template', options.newTemplate.endsWith('.php') ? options.newTemplate : `${options.newTemplate}.php`);
            } else {
                blockElement.removeAttribute('custom-template');
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
                const oldCustomClasses = (customClassElement.nodeValue || '').split(/\s+/).filter((c) => c.length > 0);
                const customClassesToBeAdded = newCustomClasses.filter((c) => !oldCustomClasses.includes(c));
                if (customClassesToBeAdded.length > 0) {
                    customClassElement.nodeValue = [... oldCustomClasses, ...customClassesToBeAdded].join(' ');
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
