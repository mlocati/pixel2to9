import { Converter } from '../../Converter';
import Block from '../Block';

export default class WhaleCounter extends Block implements Converter
{
    // @ts-ignore: 'warnings' is declared but its value is never read
    public convert(doc: XMLDocument, warnings: string[]): void
    {
        this.renameBlockTypeHandle(doc, 'whale_counter', 'pixel_counter');
        this.renameDataTable(doc, 'btWhaleCounter', 'btPixelCounter');
    }
}
