import { Converter } from '../../Converter';
import Block from '../Block';

export default class PageList extends Block implements Converter
{
    public convert(doc: XMLDocument, warnings: string[]): void
    {
        this.processconvertBlockTemplates(doc, 'page_list', {
            pixel_blog_full: {newTemplate: 'pixel_blog_grid', newCustomClasses: 'grid:1'},
            pixel_blog_grid_2: {newTemplate: 'pixel_blog_grid', newCustomClasses: 'grid:1 grid:sm:2'},
            pixel_blog_grid_3: {newTemplate: 'pixel_blog_grid', newCustomClasses: 'grid:1 grid:sm:2 grid:md:3'},
            pixel_blog_grid_4: {newTemplate: '', warning: 'The pixel_blog_grid_4 custom template of the Page List block is deprecated'},
            pixel_blog_horizontal_thumb_small_full: {newTemplate: '', warning: 'The pixel_blog_horizontal_thumb_small_full custom template of the Page List block is deprecated'},
            pixel_blog_horizontal_thumb_x_small_full: {newTemplate: '', warning: 'The pixel_blog_horizontal_thumb_x_small_full custom template of the Page List block is deprecated'},
            pixel_blog_horizontal_thumb_x_small_half: {newTemplate: '', warning: 'The pixel_blog_horizontal_thumb_x_small_half custom template of the Page List block is deprecated'},
            pixel_footer: {newTemplate: '', warning: 'The pixel_footer custom template of the Page List block is deprecated'},
            pixel_portfolio_carousel: {newTemplate: 'pixel_portfolio_carousel', newCustomClasses: 'grid:2 grid:md:3 grid:md:4'},
            pixel_portfolio_carousel_hover: {newTemplate: '', warning: 'The pixel_portfolio_carousel_hover custom template of the Page List block is deprecated'},
            pixel_portfolio_grid_1: {newTemplate: 'pixel_portfolio_grid', newCustomClasses: 'grid:1'},
            pixel_portfolio_grid_1_alt: {newTemplate: '', warning: 'The pixel_portfolio_grid_1_alt custom template of the Page List block is deprecated'},
            pixel_portfolio_grid_2: {newTemplate: 'pixel_portfolio_grid', newCustomClasses: 'grid:1 grid:sm:2'},
            pixel_portfolio_grid_3: {newTemplate: 'pixel_portfolio_grid', newCustomClasses: 'grid:1 grid:sm:2 grid:md:3'},
            pixel_portfolio_grid_4: {newTemplate: 'pixel_portfolio_grid', newCustomClasses: 'grid:1 grid:sm:2 grid:md:4'},
            pixel_portfolio_grid_5: {newTemplate: '', warning: 'The pixel_portfolio_grid_5 custom template of the Page List block is deprecated'},
            pixel_portfolio_grid_6: {newTemplate: 'pixel_portfolio_grid', newCustomClasses: 'grid:1 grid:sm:2 grid:md:6'},
            pixel_top_bar: {newTemplate: '', warning: 'The pixel_top_bar custom template of the Page List block is deprecated'},
        }, warnings);
    }
}
