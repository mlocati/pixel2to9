import { Converter } from '../../Converter';
import Block from '../Block';

export default class WhaleCounter extends Block implements Converter
{
    public convert(doc: XMLDocument): void
    {
        this.renameBlockTypeHandle(doc, 'whale_counter', 'pixel_counter');
        this.renameDataTable(doc, 'btWhaleCounter', 'btPixelCounter');
    }
}
