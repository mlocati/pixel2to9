import { Converter } from '../../Converter';
import Block from '../Block';

export default class PageTitle extends Block implements Converter
{
    public convert(doc: XMLDocument, warnings: string[]): void
    {
        this.processconvertBlockTemplates(doc, 'page_title', {
            pixel_blog_title: {newTemplate: 'pixel_blog_entry_title'},
            pixel_fancy_title_bottom_border: {newTemplate: 'pixel', newCustomClasses: 'title:bottom-border'},
            pixel_fancy_title_bottom_border_short: {newTemplate: 'pixel', newCustomClasses: 'title:bottom-border:short'},
            pixel_fancy_title_center_aligned: {newTemplate: 'pixel', newCustomClasses: 'title:fancy-border:double title:align:center'},
            pixel_fancy_title_emphasis: {deprecated: true},
            pixel_fancy_title_left_aligned: {newTemplate: 'pixel', newCustomClasses: 'title:fancy-border:single'},
            pixel_fancy_title_left_aligned_border_double: {newTemplate: 'pixel', newCustomClasses: 'title:fancy-border:double'},
            pixel_fancy_title_left_border: {newTemplate: 'pixel', newCustomClasses: 'title:left-border'},
            pixel_fancy_title_right_aligned: {newTemplate: 'pixel', newCustomClasses: 'title:fancy-border:double title:align:right'},
            pixel_plain: {deprecated: true},
        }, warnings);
    }
}
