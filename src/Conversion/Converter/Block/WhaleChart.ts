import { Converter } from '../../Converter';
import Block from '../Block';

export default class WhaleChart extends Block implements Converter
{
    public convert(doc: XMLDocument, warnings: string[]): void
    {
        this.convertFontAwesomeDataField(doc, 'btWhaleChart', 'icon', warnings);
        this.renameBlockTypeHandle(doc, 'whale_chart', 'pixel_pie_chart');
        this.removeDataFields(doc, 'btWhaleChart', ['lineCap', 'scaleColor']);
        this.renameDataTable(doc, 'btWhaleChart', 'btPixelPieChart');
    }
}
