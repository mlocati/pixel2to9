import { Converter } from '../../Converter';
import Block from '../Block';

export default class WhaleManualNav extends Block implements Converter
{
    // @ts-ignore: 'warnings' is declared but its value is never read
    public convert(doc: XMLDocument, warnings: string[]): void
    {
        this.renameBlockTypeHandle(doc, 'whale_manual_nav', 'pixel_manual_nav');
        this.renameDataTable(doc, 'btWhaleManualNavPixel', 'btPixelManualNav');
    }
}
