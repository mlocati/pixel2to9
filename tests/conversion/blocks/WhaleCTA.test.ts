/**
 * @vitest-environment jsdom
 */

import { test } from 'vitest'
import { checkConversion } from '../test-service'

test('WhaleCTA conversion (pixel_btn_3d)', () => {
    checkConversion({
        input: `
            <block type="whale_cta" custom-template="pixel_btn_3d.php">
                <style>
                    <customClass>my-prev-class1 my-prev-class2</customClass>
                </style>
                <data table="btWhaleCta">
                    <record>
                        <icon>500px</icon>
                    </record>
                </data>
            </block>
        `,
        expectedOutput: `
            <block type="pixel_cta" custom-template="pixel_button.php">
                <style>
                    <customClass>my-prev-class1 my-prev-class2 button:style:3d</customClass>
                </style>
                <data table="btPixelCta">
                    <record>
                        <icon>fab fa-500px</icon>
                        <color />
                    </record>
                </data>
            </block>
        `,
    });
});
