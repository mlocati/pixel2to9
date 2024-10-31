import { Converter } from '../../Converter';
import Block from '../Block';

export default class ImageSlider extends Block implements Converter
{
    public convert(doc: XMLDocument, warnings: string[]): void
    {
        this.processconvertBlockTemplates(doc, 'image_slider', {
            pixel_owl: {newTemplate: '', warning: 'The pixel_owl custom template of the Image Slider block is deprecated'},
        }, warnings);
    }
}
