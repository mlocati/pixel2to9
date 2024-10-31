import { Converter } from '../../Converter';
import Block from '../Block';

export default class WhaleGallery extends Block implements Converter
{
    // @ts-ignore: 'warnings' is declared but its value is never read
    public convert(doc: XMLDocument, warnings: string[]): void
    {
        this.addDataField(doc, 'btWhaleGallery', 'columnsSm', (el) => el.textContent = '0');
        this.addDataField(doc, 'btWhaleGallery', 'columnsMd', (el) => el.textContent = '0');
        this.addDataField(doc, 'btWhaleGallery', 'columnsLg', (el) => el.textContent = '0');
        this.addDataField(doc, 'btWhaleGallery', 'columnsXl', (el) => el.textContent = '0');
        this.addDataField(doc, 'btWhaleGallery', 'columnsXxl', (el) => el.textContent = '0');
        this.addDataField(doc, 'btWhaleGallery', 'gutter', (el) => el.textContent = '0');
        this.addDataField(doc, 'btWhaleGallery', 'cropImage', (el) => el.textContent = '0');
        this.addDataField(doc, 'btWhaleGallery', 'maxWidth', (el) => el.textContent = '0');
        this.addDataField(doc, 'btWhaleGallery', 'maxHeight', (el) => el.textContent = '0');
        this.renameBlockTypeHandle(doc, 'whale_gallery', 'pixel_gallery');
        this.renameDataTable(doc, 'btWhaleGallery', 'btPixelGallery');
    }
}
