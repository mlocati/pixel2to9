/**
 * @vitest-environment jsdom
 */

import { test } from 'vitest'
import { checkConversion } from '../test-service'

test('WhaleChart conversion', () => {
    checkConversion({
        input: `
            <block type="whale_chart" custom-template="my_custom_template.php">
                <data table="btWhaleChart">
                    <record>
                        <icon>500px</icon>
                    </record>
                </data>
            </block>
        `,
        expectedOutput: `
            <block type="pixel_pie_chart" custom-template="my_custom_template.php">
                <data table="btPixelPieChart">
                    <record>
                        <icon>fab fa-500px</icon>
                    </record>
                </data>
            </block>
        `,
    });
});
