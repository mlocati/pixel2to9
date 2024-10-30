import { Converter } from '../../Converter';
import Block from '../Block';

export default class File extends Block implements Converter
{
    public convert(doc: XMLDocument, warnings: string[]): void
    {
        this.processconvertBlockTemplates(doc, 'file', {
            pixel: {newCustomClasses: 'promo:border buttom:style:3d fileinfo:show-type fileinfo:show-size'},
            pixel_color: {newTemplate: 'pixel', newCustomClasses: 'promo-dark bg-color buttom:light fileinfo:show-type fileinfo:show-size'},
            pixel_dark: {newTemplate: 'pixel', newCustomClasses: 'promo:dark fileinfo:show-type fileinfo:show-size'},
            pixel_light: {newTemplate: 'pixel', newCustomClasses: 'promo:light buttom:dark fileinfo:show-type fileinfo:show-size'},
        }, warnings);
    }
}
