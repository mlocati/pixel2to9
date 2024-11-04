/**
 * @vitest-environment jsdom
 */

import { test } from 'vitest'
import { checkConversion } from '../test-service'

test('WhalePricingTable conversion (mega_menu)', () => {
    checkConversion({
        input: `
            <block type="whale_pricing_table" custom-template="pixel_light.php">
                <data table="btWhalePricingTable">
                    <record>
                        <featured>1</featured>
                        <icon>500px</icon>
                    </record>
                </data>
            </block>
        `,
        expectedOutput: `
            <block type="pixel_pricing_table">
                <style>
                    <customClass>pricing:minimal</customClass>
                </style>
                <data table="btPixelPricingTable">
                    <record>
                        <icon>fab fa-500px</icon>
                    </record>
                </data>
            </block>
        `,
    });
});
