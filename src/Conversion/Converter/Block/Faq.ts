import { Converter } from '../../Converter';
import Block from '../Block';

export default class Faq extends Block implements Converter
{
    public convert(doc: XMLDocument, warnings: string[]): void
    {
        this.processconvertBlockTemplates(doc, 'faq', {
            pixel_1: {newTemplate: 'pixel_toggle'},
            pixel_2: {newTemplate: '', warning: 'The pixel_2 custom template of the Faq block is deprecated'},
            pixel_3: {newTemplate: '', warning: 'The pixel_3 custom template of the Faq block is deprecated'},
            pixel_4_tabs: {newTemplate: '', warning: 'The pixel_4_tabs custom template of the Faq block is deprecated'},
        }, warnings);
    }
}
