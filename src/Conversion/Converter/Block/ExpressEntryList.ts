import { Converter } from '../../Converter';
import Block from '../Block';

export default class ExpressEntryList extends Block implements Converter
{
    public convert(doc: XMLDocument, warnings: string[]): void
    {
        this.processconvertBlockTemplates(doc, 'express_entry_list', {
            pixel_clients_carousel: {newTemplate: 'pixel_client_carousel'},
            pixel_clients_carousel_navigation: {deprecated: true},
            pixel_clients_carousel_pagination: {deprecated: true},
            pixel_clients_grid_2: {newTemplate: 'pixel_client_grid'},
            pixel_clients_grid_3: {newTemplate: 'pixel_client_grid'},
            pixel_clients_grid_4: {newTemplate: 'pixel_client_grid'},
            pixel_clients_grid_5: {newTemplate: 'pixel_client_grid'},
            pixel_clients_grid_6: {newTemplate: 'pixel_client_grid'},
            pixel_team_member_grid_3: {newTemplate: 'pixel_team_member_grid'},
            pixel_team_member_grid_4: {newTemplate: 'pixel_team_member_grid'},
            pixel_team_member_grid_carousel: {newTemplate: 'pixel_team_member_carousel'},
            pixel_team_member_list: {deprecated: true},
            pixel_team_member_list_carousel: {newTemplate: 'pixel_team_member_carousel'},
            pixel_testimonial_slider: {deprecated: true},
            pixel_testimonials_grid_2: {newTemplate: 'pixel_testimonial_grid'},
            pixel_testimonials_grid_3: {newTemplate: 'pixel_testimonial_grid'},
        }, warnings);
    }
}
