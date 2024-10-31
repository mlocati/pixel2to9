import { Converter } from '../../Converter';
import Block from '../Block';

export default class Search extends Block implements Converter
{
    public convert(doc: XMLDocument, warnings: string[]): void
    {
        this.processconvertBlockTemplates(doc, 'search', {
            pixel_grouped: {newTemplate: '', warning: 'The pixel_grouped custom template of the Search block is deprecated'},
        }, warnings);
    }
}
