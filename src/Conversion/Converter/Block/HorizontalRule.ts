import { Converter } from '../../Converter';
import Block from '../Block';

export default class HorizontalRule extends Block implements Converter
{
    public convert(doc: XMLDocument, warnings: string[]): void
    {
        this.processconvertBlockTemplates(doc, 'horizontal_rule', {
            //pixel
            pixel_center: {newTemplate: 'pixel', newCustomClasses: 'divider:center icon:circle'},
            pixel_center_border: {newTemplate: 'pixel', newCustomClasses: 'divider:center icon:circle divider:border'},
            pixel_center_border_short: {newTemplate: 'pixel', newCustomClasses: 'divider:center icon:circle divider:sm divider:border'},
            pixel_center_rounded: {newTemplate: 'pixel', newCustomClasses: 'divider:center icon:circle divider:rounded'},
            pixel_center_rounded_short: {newTemplate: 'pixel', newCustomClasses: 'divider:center icon:circle divider:sm divider:rounded'},
            pixel_center_short: {newTemplate: 'pixel', newCustomClasses: 'divider:center icon:circle divider:sm'},
            pixel_left: {newTemplate: 'pixel', newCustomClasses: 'icon:circle'},
            pixel_left_border: {newTemplate: 'pixel', newCustomClasses: 'divider:left icon:circle divider:border'},
            pixel_left_border_short: {newTemplate: 'pixel', newCustomClasses: 'divider:left icon:circle divider:sm divider:border'},
            pixel_left_rounded: {newTemplate: 'pixel', newCustomClasses: 'divider:left icon:circle divider:rounded'},
            pixel_left_rounded_short: {newTemplate: 'pixel', newCustomClasses: 'divider:left icon:circle divider:sm divider:rounded'},
            pixel_left_short: {newTemplate: 'pixel', newCustomClasses: 'divider:left icon:circle divider:sm'},
            pixel_right: {newTemplate: 'pixel', newCustomClasses: 'divider:right icon:circle'},
            pixel_right_border: {newTemplate: 'pixel', newCustomClasses: 'divider:right icon:circle divider:border'},
            pixel_right_border_short: {newTemplate: 'pixel', newCustomClasses: 'divider:right icon:circle divider:sm divider:border'},
            pixel_right_rounded: {newTemplate: 'pixel', newCustomClasses: 'divider:right icon:circle divider:rounded'},
            pixel_right_rounded_short: {newTemplate: 'pixel', newCustomClasses: 'divider:right icon:circle divider:sm divider:rounded'},
            pixel_right_short: {newTemplate: 'pixel', newCustomClasses: 'divider:right icon:circle divider:sm'},
        }, warnings);
    }
}
