import { Converter } from '../../Converter';
import Block from '../Block';

export default class NextPrevious extends Block implements Converter
{
    public convert(doc: XMLDocument, warnings: string[]): void
    {
        this.processconvertBlockTemplates(doc, 'next_previous', {
            pixel_post_nav: {newTemplate: '', warning: 'The pixel_post_nav custom template of the Next Previous block is deprecated'},
        }, warnings);
    }
}
