import xmlFormat from 'xml-formatter';

const parser = new DOMParser();

const xmlSerializer = new XMLSerializer();

function formatXML(el: Element|XMLDocument): string
{
  const xml = xmlSerializer.serializeToString(el);
  return xmlFormat(xml, {
    indentation: '   ',
    lineSeparator: '\n',
    whiteSpaceAtEndOfSelfclosingTag: true,
    forceSelfClosingEmptyTag: true,
  });

}

export function loadCIF(xml: string, isFragment: boolean): XMLDocument
{
  if (isFragment) {
    xml = `<root>${xml.trim()}</root>`;
  }
  const doc = parser.parseFromString(xml, 'application/xml');
  const errorElement = doc.querySelector('parsererror');
  if (errorElement) {
    throw new Error(errorElement.innerHTML)
  }
  if (!isFragment && doc.documentElement.tagName !== 'concrete5-cif') {
    throw new Error('It seems the provided XML is not a Concrete CIF file.\nIf it is a part of a CIF file, check the "Fragment" option.');
  }
  return doc;
}

export function formatCIF(doc: XMLDocument, isFragment: boolean): string
{
  if (isFragment) {
    const chunks: string[] = [];
    doc.documentElement.childNodes.forEach((n) => {
      if (n.nodeType === Node.ELEMENT_NODE) {
        chunks.push(formatXML(<Element>n));
      }
    });
    return chunks.join('\n');
  }
  return formatXML(doc);
}
