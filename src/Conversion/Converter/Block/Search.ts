import { Converter } from '../../Converter';
import Block from '../Block';

export default class Search extends Block implements Converter
{
    public convert(doc: XMLDocument, warnings: string[]): void
    {
        this.processconvertBlockTemplates(doc, 'search', {
            pixel_grouped: {deprecated: true},
        }, warnings);
    }
}
