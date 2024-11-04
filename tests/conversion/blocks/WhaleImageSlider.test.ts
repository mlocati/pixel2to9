/**
 * @vitest-environment jsdom
 */

import { test } from 'vitest'
import { checkConversion } from '../test-service'

test('WhaleImageSlider conversion', () => {
    checkConversion({
        input: `
            <block type="whale_image_slider">
                <data table="btWhaleImageSlider">
                    <record>
                        <scroller />
                        <heightXss>0</heightXss>
                        <heightXs>test</heightXs>
                    </record>
                </data>
            </block>
        `,
        expectedOutput: `
            <block type="pixel_slider">
                <data table="btPixelSlider">
                    <record>
                        <heightXl>0</heightXl>
                        <slideNumbers>0</slideNumbers>
                        <autoplayOnce>0</autoplayOnce>
                        <disableParallax>0</disableParallax>
                    </record>
                </data>
            </block>
        `,
    });
});
