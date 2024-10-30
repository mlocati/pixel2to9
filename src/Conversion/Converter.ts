import WhaleChart from "./Converter/Block/WhaleChart";
import WhaleCounter from "./Converter/Block/WhaleCounter";
import WhaleCta from "./Converter/Block/WhaleCta";
import WhaleGallery from "./Converter/Block/WhaleGallery";
import WhaleImageSlider from "./Converter/Block/WhaleImageSlider";
import WhaleManualNav from "./Converter/Block/WhaleManualNav";
import WhalePricingTable from "./Converter/Block/WhalePricingTable";

export interface Converter
{
  convert: (doc: XMLDocument) => void;
}

const Converters: ReadonlyArray<Converter> = [
  new WhaleChart(),
  new WhaleCounter(),
  new WhaleCta(),
  new WhaleGallery(),
  new WhaleImageSlider(),
  new WhaleManualNav(),
  new WhalePricingTable(),
];

export default Converters;
