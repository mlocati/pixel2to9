import { Converter } from '../../Converter';
import Block from '../Block';

export default class SocialLinks extends Block implements Converter
{
    public convert(doc: XMLDocument, warnings: string[]): void
    {
        this.processconvertBlockTemplates(doc, 'social_links', {
            pixel_footer_icons: {newTemplate: '', warning: 'The pixel_footer_icons custom template of the Social Links block is deprecated'},
            pixel_top_bar: {newTemplate: '', warning: 'The pixel_top_bar custom template of the Social Links block is deprecated'},
        }, warnings);
    }
}
