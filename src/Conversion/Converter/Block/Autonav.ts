import { Converter } from '../../Converter';
import Block from '../Block';

export default class Autonav extends Block implements Converter
{
    public convert(doc: XMLDocument, warnings: string[]): void
    {
        this.processconvertBlockTemplates(doc, 'autonav', {
            pixel_breadcrumb: {deprecated: true},
            pixel_tree: {deprecated: true},
        }, warnings);
    }
}
