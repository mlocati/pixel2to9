import { Converter } from '../../Converter';
import Block from '../Block';

export default class Survey extends Block implements Converter
{
    public convert(doc: XMLDocument, warnings: string[]): void
    {
        this.processconvertBlockTemplates(doc, 'survey', {
            pixel: {deprecated: true},
        }, warnings);
    }
}
