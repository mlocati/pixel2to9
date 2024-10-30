import { Converter } from '../../Converter';
import Block from '../Block';

export default class WhalePricingTable extends Block implements Converter
{
    public convert(doc: XMLDocument): void
    {
        this.renameBlockTypeHandle(doc, 'whale_pricing_table', 'pixel_pricing_table');
        this.renameDataTable(doc, 'btWhalePricingTable', 'btPixelPricingTable');
    }
}
