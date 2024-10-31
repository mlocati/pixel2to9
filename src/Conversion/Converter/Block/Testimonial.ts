import { Converter } from '../../Converter';
import Block from '../Block';

export default class Testimonial extends Block implements Converter
{
    public convert(doc: XMLDocument, warnings: string[]): void
    {
        this.processconvertBlockTemplates(doc, 'testimonial', {
            pixel_grid: {newTemplate: 'pixel'},
            pixel_list: {newTemplate: 'pixel', newCustomClasses: 'layout:center'},
        }, warnings);
    }
}
