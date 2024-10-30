import { Converter } from '../../Converter';
import Block from '../Block';

export default class WhaleImageSlider extends Block implements Converter
{
    public convert(doc: XMLDocument): void
    {
        this.renameBlockTypeHandle(doc, 'whale_image_slider', 'pixel_slider');
        this.renameDataTable(doc, 'btWhaleImageSlider', 'btPixelSlider');
        this.renameDataTable(doc, 'btWhaleImageSliderEntries', 'btPixelSliderEntries');
    }
}
