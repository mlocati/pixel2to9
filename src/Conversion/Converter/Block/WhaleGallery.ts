import { Converter } from '../../Converter';
import Block from '../Block';

export default class WhaleGallery extends Block implements Converter
{
    // @ts-ignore: 'warnings' is declared but its value is never read
    public convert(doc: XMLDocument, warnings: string[]): void
    {
        this.addDataField(doc, 'btWhaleGallery', 'columnsSm', (el) => el.nodeValue = '0');
        this.addDataField(doc, 'btWhaleGallery', 'columnsMd', (el) => el.nodeValue = '0');
        this.addDataField(doc, 'btWhaleGallery', 'columnsLg', (el) => el.nodeValue = '0');
        this.addDataField(doc, 'btWhaleGallery', 'columnsXl', (el) => el.nodeValue = '0');
        this.addDataField(doc, 'btWhaleGallery', 'columnsXxl', (el) => el.nodeValue = '0');
        this.addDataField(doc, 'btWhaleGallery', 'gutter', (el) => el.nodeValue = '0');
        this.addDataField(doc, 'btWhaleGallery', 'cropImage', (el) => el.nodeValue = '0');
        this.addDataField(doc, 'btWhaleGallery', 'maxWidth', (el) => el.nodeValue = '0');
        this.addDataField(doc, 'btWhaleGallery', 'maxHeight', (el) => el.nodeValue = '0');
        this.renameBlockTypeHandle(doc, 'whale_gallery', 'pixel_gallery');
        this.renameDataTable(doc, 'btWhaleGallery', 'btPixelGallery');
    }
}
