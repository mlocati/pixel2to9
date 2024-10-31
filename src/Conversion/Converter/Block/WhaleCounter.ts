import { Converter } from '../../Converter';
import Block from '../Block';

export default class WhaleCounter extends Block implements Converter
{
    public convert(doc: XMLDocument, warnings: string[]): void
    {
        this.processconvertBlockTemplates(doc, 'whale_counter', {
            pixel_large: {deprecated: true},
            pixel_small: {deprecated: true},
        }, warnings);
        this.convertFontAwesomeDataField(doc, 'btWhaleCounter', 'icon', warnings);
        this.renameBlockTypeHandle(doc, 'whale_counter', 'pixel_counter');
        this.renameDataTable(doc, 'btWhaleCounter', 'btPixelCounter');
    }
}
