import { Converter } from '../../Converter';
import Block from '../Block';

export default class WhaleCTA extends Block implements Converter
{
    public convert(doc: XMLDocument, warnings: string[]): void
    {
        this.processconvertBlockTemplates(doc, 'whale_cta', {
            pixel_btn: {newTemplate: 'pixel_button'},
            pixel_btn_3d: {newTemplate: 'pixel_button', newCustomClasses: 'button:style:3d'},
            pixel_btn_3d_right: {newTemplate: 'pixel_button', newCustomClasses: 'button:style:3d utl:text:align:end'},
            pixel_btn_border: {newTemplate: 'pixel_button', newCustomClasses: 'button:border'},
            pixel_btn_border_fill_effect: {newTemplate: 'pixel_button', newCustomClasses: 'button-border button-fill'},
            pixel_btn_border_fill_effect_right: {newTemplate: 'pixel_button', newCustomClasses: 'button-border button-fill utl:text:align:end'},
            pixel_btn_border_rightpixel_btn_border_right: {newTemplate: 'pixel_button', newCustomClasses: 'button:border utl:text:align:end'},
            pixel_btn_border_thin: {newTemplate: 'pixel_button', newCustomClasses: 'button:border button:border-thin'},
            pixel_btn_border_thin_right: {newTemplate: 'pixel_button', newCustomClasses: 'button:border button:border-thin utl:text:align:end'},
            pixel_btn_circle: {newTemplate: 'pixel_button', newCustomClasses: 'button:circle'},
            pixel_btn_circle_right: {newTemplate: 'pixel_button', newCustomClasses: 'button:circle utl:text:align:end'},
            pixel_btn_full: {newTemplate: 'pixel_button', newCustomClasses: 'button:full'},
            pixel_btn_reveal: {newTemplate: 'pixel_button', newCustomClasses: 'button:reveal'},
            pixel_btn_reveal_right: {newTemplate: 'pixel_button', newCustomClasses: 'button:reveal utl:text:align:end'},
            pixel_btn_rounded: {newTemplate: 'pixel_button', newCustomClasses: 'button:rounded'},
            pixel_btn_rounded_right: {newTemplate: 'pixel_button', newCustomClasses: 'button:rounded utl:text:align:end'},
            pixel_btn_simple_right: {newTemplate: 'pixel_button', newCustomClasses: 'utl:text:align:end'},
            pixel_image_feature_box: {newTemplate: 'pixel_image_feature_box'},
            pixel_image_feature_box_bordered: {newTemplate: 'pixel_image_feature_box', newCustomClasses: 'ifb:border'},
            pixel_image_feature_box_fancy_title: {deprecated: true},
            pixel_promo: {newTemplate: 'pixel_promo'},
            pixel_promo_border: {newTemplate: 'pixel_promo', newCustomClasses: 'promo:border'},
            pixel_promo_border_center: {newTemplate: 'pixel_promo', newCustomClasses: 'promo:border utl:text:align:center'},
            pixel_promo_border_right: {newTemplate: 'pixel_promo', newCustomClasses: 'promo:border utl:text:align:end'},
            pixel_promo_color: {newTemplate: 'pixel_promo', newCustomClasses: 'promo:color:theme'},
            pixel_promo_dark: {newTemplate: 'pixel_promo', newCustomClasses: 'promo:dark'},
            pixel_promo_full: {newTemplate: 'pixel_promo', newCustomClasses: 'promo:full'},
            pixel_promo_full_color: {newTemplate: 'pixel_promo', newCustomClasses: 'promo:full promo:color:theme'},
            pixel_promo_full_dark: {newTemplate: 'pixel_promo', newCustomClasses: 'promo:full promo:dark'},
            pixel_promo_full_light: {newTemplate: 'pixel_promo', newCustomClasses: 'promo:full promo:light'},
            pixel_promo_full_parallax: {newTemplate: 'pixel_promo', newCustomClasses: 'promo:full promo:color:transparent'},
            pixel_promo_light: {newTemplate: 'pixel_promo', newCustomClasses: 'promo:light'},
            pixel_top_bar_link: {deprecated: true},
            pixel_top_bar_link_color: {deprecated: true},
            pixel_top_bar_link_label: {deprecated: true},
        }, warnings);
        this.addDataField(doc, 'btWhaleCta', 'color', (field) => {
            field.nodeValue = ''; // Set color value
        });
        this.renameBlockTypeHandle(doc, 'whale_cta', 'pixel_cta');
        this.renameDataTable(doc, 'btWhaleCta', 'btPixelCta');
    }
}
