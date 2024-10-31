import { Converter } from '../../Converter';
import Block from '../Block';

export default class WhaleChart extends Block implements Converter
{
    // @ts-ignore: 'warnings' is declared but its value is never read
    public convert(doc: XMLDocument, warnings: string[]): void
    {
        this.renameBlockTypeHandle(doc, 'whale_chart', 'pixel_pie_chart');
        this.removeDataFields(doc, 'btWhaleChart', ['lineCap', 'scaleColor']);
        this.renameDataTable(doc, 'btWhaleChart', 'btPixelPieChart');
    }
}
