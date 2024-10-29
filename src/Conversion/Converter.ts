import WhaleChart from './Converter/Block/WhaleChart';
import WhaleCounter from './Converter/Block/WhaleCounter';
import WhaleCta from './Converter/Block/WhaleCta';

export interface Converter
{
  convert: (doc: XMLDocument) => void;
}

const Converters: ReadonlyArray<Converter> = [
  new WhaleChart(),
  new WhaleCounter(),
  new WhaleCta(),
];

export default Converters;
