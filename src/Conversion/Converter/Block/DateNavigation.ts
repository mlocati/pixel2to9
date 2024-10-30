import { Converter } from '../../Converter';
import Block from '../Block';

export default class DateNavigation extends Block implements Converter
{
    public convert(doc: XMLDocument, warnings: string[]): void
    {
        this.processconvertBlockTemplates(doc, 'date_navigation', {
            pixel_list: {newTemplate: '', warning: 'The pixel_list custom template of the Date Navigation block is deprecated'},
        }, warnings);
    }
}
