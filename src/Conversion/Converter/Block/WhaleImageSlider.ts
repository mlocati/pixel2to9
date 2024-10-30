import { Converter } from '../../Converter';
import Block from '../Block';

export default class WhaleImageSlider extends Block implements Converter
{
    // @ts-ignore: 'warnings' is declared but its value is never read
    public convert(doc: XMLDocument, warnings: string[]): void
    {
        this.renameBlockTypeHandle(doc, 'whale_image_slider', 'pixel_slider');
        this.renameDataTable(doc, 'btWhaleImageSlider', 'btPixelSlider');
        this.renameDataTable(doc, 'btWhaleImageSliderEntries', 'btPixelSliderEntries');
    }
}
