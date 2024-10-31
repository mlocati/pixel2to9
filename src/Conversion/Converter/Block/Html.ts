import { Converter } from '../../Converter';
import Block from '../Block';

export default class Html extends Block implements Converter
{
    public convert(doc: XMLDocument, warnings: string[]): void
    {
        this.processconvertBlockTemplates(doc, 'html', {
            pixel_test_bordered: {deprecated: true},
            pixel_test: {deprecated: true},
            'pixel_test-2': {deprecated: true},
        }, warnings);
    }
}
