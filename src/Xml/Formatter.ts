import xmlFormat from 'xml-formatter';

const xmlSerializer = new XMLSerializer();

export default function formatXML(doc: XMLDocument): string
{
  const xml = xmlSerializer.serializeToString(doc);
  return xmlFormat(xml, {
    indentation: '   ',
    lineSeparator: '\n',
    whiteSpaceAtEndOfSelfclosingTag: true,
    forceSelfClosingEmptyTag: true,
  });
}
