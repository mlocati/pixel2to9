import { Converter } from '../../Converter';
import Block from '../Block';

export default class Form extends Block implements Converter
{
    public convert(doc: XMLDocument, warnings: string[]): void
    {
        this.processconvertBlockTemplates(doc, 'form', {
            pixel_subscribe: {deprecated: true},
        }, warnings);
    }
}
