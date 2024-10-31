import { Converter } from '../../Converter';
import Block from '../Block';

export default class PageAttributeDisplay extends Block implements Converter
{
    public convert(doc: XMLDocument, warnings: string[]): void
    {
        this.processconvertBlockTemplates(doc, 'page_attribute_display', {
            pixel_image_responsive_full: {newTemplate: 'pixel_image_responsive'},
        }, warnings);
    }
}
