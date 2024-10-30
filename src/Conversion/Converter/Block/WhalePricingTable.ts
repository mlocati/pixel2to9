import { Converter } from '../../Converter';
import Block from '../Block';

export default class WhalePricingTable extends Block implements Converter
{
    // @ts-ignore: 'warnings' is declared but its value is never read
    public convert(doc: XMLDocument, warnings: string[]): void
    {
        this.renameBlockTypeHandle(doc, 'whale_pricing_table', 'pixel_pricing_table');
        this.renameDataTable(doc, 'btWhalePricingTable', 'btPixelPricingTable');
    }
}
