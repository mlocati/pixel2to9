import { Converter } from '../../Converter';
import Block from '../Block';

export default class WhalePricingTable extends Block implements Converter
{
    public convert(doc: XMLDocument, warnings: string[]): void
    {
        this.processconvertBlockTemplates(doc, 'whale_pricing_table', {
            pixel_horizontal: {deprecated: true},
            pixel_light: {newTemplate: '', newCustomClasses: 'pricing:minimal'},
        }, warnings);
        this.removeDataField(doc, 'btWhalePricingTable', 'featured');
        this.convertFontAwesomeDataField(doc, 'btWhalePricingTable', 'icon', warnings);
        this.renameBlockTypeHandle(doc, 'whale_pricing_table', 'pixel_pricing_table');
        this.renameDataTable(doc, 'btWhalePricingTable', 'btPixelPricingTable');
    }
}
