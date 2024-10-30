import { Converter } from '../../Converter';
import Block from '../Block';

export default class WhaleGallery extends Block implements Converter
{
    public convert(doc: XMLDocument): void
    {
        this.renameBlockTypeHandle(doc, 'whale_gallery', 'pixel_gallery');
        this.renameDataTable(doc, 'btWhaleGallery', 'btPixelGallery');
    }
}
