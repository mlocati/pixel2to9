import { Converter } from '../../Converter';
import Block from '../Block';

export default class WhaleImageSlider extends Block implements Converter
{
    // @ts-ignore: 'warnings' is declared but its value is never read
    public convert(doc: XMLDocument, warnings: string[]): void
    {
        this.removeDataFields(doc, 'btWhaleImageSlider', ['scroller', 'heightXss', 'heightXs']);
        this.addDataField(doc, 'btWhaleImageSlider', 'heightXl', (field) => field.nodeValue = '0');
        this.addDataField(doc, 'btWhaleImageSlider', 'slideNumbers', (field) => field.nodeValue = '0');
        this.addDataField(doc, 'btWhaleImageSlider', 'autoplayOnce', (field) => field.nodeValue = '0');
        this.addDataField(doc, 'btWhaleImageSlider', 'disableParallax', (field) => field.nodeValue = '0');
        this.renameDataTable(doc, 'btWhaleImageSlider', 'btPixelSlider');

        this.renameDataTable(doc, 'btWhaleImageSliderEntries', 'btPixelSliderEntries');

        this.renameBlockTypeHandle(doc, 'whale_image_slider', 'pixel_slider');
    }
}
