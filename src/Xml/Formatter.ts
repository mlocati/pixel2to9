import xmlFormat from 'xml-formatter';

const xmlSerializer = new XMLSerializer();

function formatXML(el: Node): string
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
    doc.documentElement.childNodes.forEach((n) => chunks.push(formatXML(n)));
    return chunks.join('\n');
  }
  return formatXML(doc);
}
