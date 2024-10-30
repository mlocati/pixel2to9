import { Converter } from '../../Converter';
import Block from '../Block';

export default class Content extends Block implements Converter
{
    public convert(doc: XMLDocument, warnings: string[]): void
    {
        this.processconvertBlockTemplates(doc, 'content', {
            pixel_fancy_title: {newTemplate: 'pixel_page_title'},
            pixel_fancy_title_bottom_border: {newTemplate: 'pixel_page_title', newCustomClasses: 'title:bottom-border'},
            pixel_fancy_title_bottom_border_short: {newTemplate: 'pixel_page_title', newCustomClasses: 'title:bottom-border:short'},
            pixel_fancy_title_center_aligned: {newTemplate: '', warning: 'The pixel_fancy_title_center_aligned custom template of the Content block is deprecated'},
            pixel_fancy_title_emphasis: {newTemplate: 'pixel_page_title', newCustomClasses: 'title:emphasis,title:dark,utl:text:align:center'},
            pixel_fancy_title_left_aligned: {newTemplate: '', warning: 'The pixel_fancy_title_left_aligned custom template of the Content block is deprecated'},
            pixel_fancy_title_left_aligned_border_double: {newTemplate: '', warning: 'The pixel_fancy_title_left_aligned_border_double custom template of the Content block is deprecated'},
            pixel_fancy_title_left_border: {newTemplate: 'pixel_page_title', newCustomClasses: 'title:left-border'},
            pixel_fancy_title_right_aligned: {newTemplate: 'pixel_page_title', newCustomClasses: 'title:bottom-border utl:text:align:end'},
        }, warnings);
    }
}
