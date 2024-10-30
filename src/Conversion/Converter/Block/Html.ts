import { Converter } from '../../Converter';
import Block from '../Block';

export default class Html extends Block implements Converter
{
    public convert(doc: XMLDocument, warnings: string[]): void
    {
        this.processconvertBlockTemplates(doc, 'html', {
            pixel_test_bordered: {newTemplate: '', warning: 'The pixel_test_bordered custom template of the Html block is deprecated'},
            pixel_test: {newTemplate: '', warning: 'The pixel_test custom template of the Html block is deprecated'},
            'pixel_test-2': {newTemplate: '', warning: 'The pixel_test-2 custom template of the Html block is deprecated'},
        }, warnings);
    }
}
