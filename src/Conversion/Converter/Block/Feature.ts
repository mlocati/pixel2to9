import { Converter } from '../../Converter';
import Block from '../Block';

export default class Feature extends Block implements Converter
{
    public convert(doc: XMLDocument, warnings: string[]): void
    {
        this.processconvertBlockTemplates(doc, 'feature', {
            pixel_alert: {deprecated: true},
            pixel_alert_bs: {deprecated: true},
            pixel_bordered: {newTemplate: 'pixel_feature_box', newCustomClasses: 'fbox:layout:bordered'},
            pixel_centered_icon: {newTemplate: 'pixel_feature_box', newCustomClasses: 'fbox:layout:center'},
            pixel_side_icon: {newTemplate: 'pixel_feature_box'},
        }, warnings);
    }
}
