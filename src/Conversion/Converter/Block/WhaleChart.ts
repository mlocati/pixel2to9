import { Converter } from '../../Converter';
import Block from '../Block';

export default class WhaleChart extends Block implements Converter
{
    public convert(doc: XMLDocument): void
    {
        this.renameBlockTypeHandle(doc, 'whale_chart', 'pixel_chart');
        this.removeDataFields(doc, 'btWhaleChart', ['lineCap', 'scaleColor']);
        this.renameDataTable(doc, 'btWhaleChart', 'btPixelPieChart');
    }
}
