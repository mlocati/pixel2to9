import { Converter } from '../../Converter';
import Block from '../Block';

export default class WhaleManualNav extends Block implements Converter
{
    public convert(doc: XMLDocument, warnings: string[]): void
    {
        this.processconvertBlockTemplates(doc, 'whale_manual_nav', {
            mega_menu: {newTemplate: 'pixel_mega_menu'},
            pixel_main_menu: {deprecated: true},
            pixel_submenu: {deprecated: true},
            pixel_tree: {deprecated: true},
        }, warnings);
        this.renameBlockTypeHandle(doc, 'whale_manual_nav', 'pixel_manual_nav');
        this.renameDataTable(doc, 'btWhaleManualNavPixel', 'btPixelManualNav');
    }
}
