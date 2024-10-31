import { Converter } from '../../Converter';
import Block from '../Block';

export default class TopicList extends Block implements Converter
{
    public convert(doc: XMLDocument, warnings: string[]): void
    {
        this.processconvertBlockTemplates(doc, 'topic_list', {
            pixel_filter: {deprecated: true},
            pixel_filter_js: {deprecated: true},
            pixel_list: {deprecated: true},
        }, warnings);
    }
}
