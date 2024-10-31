import { Converter } from '../../Converter';
import Block from '../Block';

export default class SocialLinks extends Block implements Converter
{
    public convert(doc: XMLDocument, warnings: string[]): void
    {
        this.processconvertBlockTemplates(doc, 'social_links', {
            pixel_footer_icons: {deprecated: true},
            pixel_top_bar: {deprecated: true},
        }, warnings);
    }
}
