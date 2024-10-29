import { Converter } from '../../Converter';
import Block from '../Block';

export default class WhaleCta extends Block implements Converter
{
    public convert(doc: XMLDocument): void
    {
        this.convertBlockTemplateToCSSClass(doc, 'whale_cta', {
            pixel_btn: {newTemplate: 'pixel_button'},
            pixel_btn_3d: {newTemplate: 'pixel_button', newCustomClasses: 'button:style:3d'},
            pixel_btn_simple_right: {newTemplate: 'pixel_button', newCustomClasses: 'utl:text:align:end'},
        });
        this.renameBlockTypeHandle(doc, 'whale_cta', 'pixel_cta');
        this.renameDataTable(doc, 'btWhaleCta', 'btPixelCta');
        this.addDataField(doc, 'btPixelCta', 'color', (field) => {
            field.nodeValue = ''; // Set color value
        });
    }
}
