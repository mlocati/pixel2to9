import xmlFormat from 'xml-formatter';

const xmlSerializer = new XMLSerializer();

function formatXML(el: Element): string
{
  const xml = xmlSerializer.serializeToString(el);
  return xmlFormat(xml, {
    indentation: '   ',
    lineSeparator: '\n',
    whiteSpaceAtEndOfSelfclosingTag: true,
    forceSelfClosingEmptyTag: true,
  });

}
export default function formatCIF(doc: XMLDocument, isFragment: boolean): string
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
