import { Converter } from '../../Converter';
import Block from '../Block';

export default class Feature extends Block implements Converter
{
    public convert(doc: XMLDocument, warnings: string[]): void
    {
        this.processconvertBlockTemplates(doc, 'feature', {
            pixel_alert: {newTemplate: '', warning: 'The pixel_alert custom template of the Feature block is deprecated'},
            pixel_alert_bs: {newTemplate: '', warning: 'The pixel_alert_bs custom template of the Feature block is deprecated'},
            pixel_bordered: {newTemplate: 'pixel_feature_box', newCustomClasses: 'fbox:layout:bordered'},
            pixel_centered_icon: {newTemplate: 'pixel_feature_box', newCustomClasses: 'fbox:layout:center'},
            pixel_side_icon: {newTemplate: 'pixel_feature_box'},
        }, warnings);
    }
}
