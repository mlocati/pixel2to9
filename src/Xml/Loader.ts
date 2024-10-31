const parser = new DOMParser();

export default function loadCIF(xml: string, isFragment: boolean): XMLDocument
{
  if (isFragment) {
    xml = `<root>${xml}</root>`;
  }
  const doc = parser.parseFromString(xml, "application/xml");
  const errorElement = doc.querySelector('parsererror');
  if (errorElement) {
    throw new Error(errorElement.innerHTML)
  }
  if (!isFragment && doc.documentElement.tagName !== "concrete5-cif") {
    throw new Error("It seems the provided XML is not a Concrete CIF file.\nIf it is a part of a CIF file, check the 'Fragment' option.");
  }
  return doc;
}
