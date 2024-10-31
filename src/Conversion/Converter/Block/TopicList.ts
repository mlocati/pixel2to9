import { Converter } from '../../Converter';
import Block from '../Block';

export default class TopicList extends Block implements Converter
{
    public convert(doc: XMLDocument, warnings: string[]): void
    {
        this.processconvertBlockTemplates(doc, 'topic_list', {
            pixel_filter: {newTemplate: '', warning: 'The pixel_filter_js custom template of the Topic List block is deprecated'},
            pixel_filter_js: {newTemplate: '', warning: 'The pixel_filter_js custom template of the Topic List block is deprecated'},
            pixel_list: {newTemplate: '', warning: 'The pixel_filter_js custom template of the Topic List block is deprecated'},
        }, warnings);
    }
}
