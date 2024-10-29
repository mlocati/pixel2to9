const parser = new DOMParser();

export default function loadXML(xml: string): XMLDocument
{
  const doc = parser.parseFromString(xml, "application/xml");
  if (doc.documentElement.nodeName === "parsererror") {
    throw new Error(doc.documentElement.textContent || "Error parsing XML");
  }
  if (doc.documentElement.tagName !== "concrete5-cif") {
    throw new Error("It seems the provided XML is not a Concrete CIF file");
  }
  return doc;
}
