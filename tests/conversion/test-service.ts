import { formatCIF, loadCIF } from "../../src/Service/Xml.ts";
import Converters from "../../src/Conversion/Converter";
import { expect, test } from 'vitest'

export function normalizeXML(xml: string, isFragment: boolean): string
{
  return formatCIF(loadCIF(xml, isFragment), isFragment);
}

interface ConversionOutput
{
  xml: string;
  warnings: ReadonlyArray<string>;
}

export function convertXML(input: string,  isFragment: boolean): ConversionOutput
{
  const warnings: string[] = [];
  const doc = loadCIF(input, isFragment);
  Converters.forEach((converter) => converter.convert(doc, warnings));
  return {
    xml: formatCIF(doc, isFragment),
    warnings,
  };
}

interface XmlTestData
{
  input: string,
  expectedOutput: string,
  expectedWarnings?: string[],
  isWholeDocument?: boolean,
}

export function checkConversion(data: XmlTestData)
{
  const actual = convertXML(data.input, data.isWholeDocument ? false : true);
  expect(actual.xml).toBe(normalizeXML(data.expectedOutput, data.isWholeDocument ? false : true));
  expect(actual.warnings.join('\n')).toBe(data.expectedWarnings?.join('\n') || '');
}
