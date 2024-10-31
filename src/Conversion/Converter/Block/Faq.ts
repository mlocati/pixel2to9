import { Converter } from '../../Converter';
import Block from '../Block';

export default class Faq extends Block implements Converter
{
    public convert(doc: XMLDocument, warnings: string[]): void
    {
        this.processconvertBlockTemplates(doc, 'faq', {
            pixel_1: {newTemplate: 'pixel_toggle'},
            pixel_2: {deprecated: true},
            pixel_3: {deprecated: true},
            pixel_4_tabs: {deprecated: true},
        }, warnings);
    }
}
