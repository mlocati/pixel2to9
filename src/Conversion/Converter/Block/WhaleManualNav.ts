import { Converter } from '../../Converter';
import Block from '../Block';

export default class WhaleManualNav extends Block implements Converter
{
    public convert(doc: XMLDocument): void
    {
        this.renameBlockTypeHandle(doc, 'whale_manual_nav', 'pixel_manual_nav');
        this.renameDataTable(doc, 'btWhaleManualNavPixel', 'btPixelManualNav');
    }
}
