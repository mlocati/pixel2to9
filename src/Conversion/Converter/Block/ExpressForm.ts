import { Converter } from '../../Converter';
import Block from '../Block';

export default class ExpressForm extends Block implements Converter
{
    // @ts-ignore: 'doc' is declared but its value is never read
    // @ts-ignore: 'warnings' is declared but its value is never read
    public convert(doc: XMLDocument, warnings: string[]): void
    {
    }
}
