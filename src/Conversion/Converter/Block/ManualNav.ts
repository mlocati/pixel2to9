import { Converter } from '../../Converter';
import Block from '../Block';

export default class ManualNav extends Block implements Converter
{
    public convert(doc: XMLDocument, warnings: string[]): void
    {
        this.processconvertBlockTemplates(doc, 'manual_nav', {
            pixel_top_bar: {deprecated: true},
        }, warnings);
    }
}
