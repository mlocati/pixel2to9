import { Converter } from '../../Converter';
import Block from '../Block';

export default class ExpressEntryDetail extends Block implements Converter
{
    public convert(doc: XMLDocument, warnings: string[]): void
    {
        this.processconvertBlockTemplates(doc, 'express_entry_detail', {
            pixel_team_member_grid: {newTemplate: '', warning: 'The pixel_team_member_grid custom template of the Express Entry Detail block is deprecated'},
            pixel_team_member_list: {newTemplate: '', warning: 'The pixel_team_member_grid custom template of the Express Entry Detail block is deprecated'},
            pixel_testimonial_grid: {newTemplate: '', warning: 'The pixel_team_member_grid custom template of the Express Entry Detail block is deprecated'},
            pixel_testimonial_list: {newTemplate: '', warning: 'The pixel_team_member_grid custom template of the Express Entry Detail block is deprecated'},
        }, warnings);
    }
}
