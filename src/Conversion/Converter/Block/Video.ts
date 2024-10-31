import { Converter } from '../../Converter';
import Block from '../Block';

export default class Video extends Block implements Converter
{
    public convert(doc: XMLDocument, warnings: string[]): void
    {
        this.processconvertBlockTemplates(doc, 'video', {
            pixel: {deprecated: true},
        }, warnings);
    }
}
