const parser = new DOMParser();

export default function loadXML(xml: string): XMLDocument
{
  const doc = parser.parseFromString(xml, "application/xml");
  const errorElement = doc.querySelector('parsererror');
  if (errorElement) {
    throw new Error(errorElement.innerHTML)
  }
  if (doc.documentElement.tagName !== "concrete5-cif") {
    throw new Error("It seems the provided XML is not a Concrete CIF file");
  }
  return doc;
}
