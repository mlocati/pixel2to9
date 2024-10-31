import { Converter } from '../../Converter';
import Block from '../Block';

export default class ImageSlider extends Block implements Converter
{
    public convert(doc: XMLDocument, warnings: string[]): void
    {
        this.processconvertBlockTemplates(doc, 'image_slider', {
            pixel_owl: {deprecated: true},
        }, warnings);
    }
}
