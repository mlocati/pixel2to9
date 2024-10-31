import { Converter } from '../../Converter';
import Block from '../Block';

export default class ExpressEntryDetail extends Block implements Converter
{
    public convert(doc: XMLDocument, warnings: string[]): void
    {
        this.processconvertBlockTemplates(doc, 'express_entry_detail', {
            pixel_team_member_grid: {deprecated: true},
            pixel_team_member_list: {deprecated: true},
            pixel_testimonial_grid: {deprecated: true},
            pixel_testimonial_list: {deprecated: true},
        }, warnings);
    }
}
