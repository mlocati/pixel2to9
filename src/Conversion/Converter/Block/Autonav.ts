import { Converter } from '../../Converter';
import Block from '../Block';

export default class Autonav extends Block implements Converter
{
    public convert(doc: XMLDocument, warnings: string[]): void
    {
        this.processconvertBlockTemplates(doc, 'autonav', {
            pixel_breadcrumb: {newTemplate: '', warning: 'The pixel_breadcrumb custom template of the Autonav block is deprecated'},
            pixel_tree: {newTemplate: '', warning: 'The pixel_breadcrumb custom template of the Autonav block is deprecated'},
        }, warnings);
    }
}
