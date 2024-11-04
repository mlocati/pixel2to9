/**
 * @vitest-environment jsdom
 */

import { test } from 'vitest'
import { checkConversion } from '../test-service'

test('WhaleCounter conversion (pixel_large)', () => {
    checkConversion({
        input: `
            <block type="whale_counter" custom-template="pixel_large.php">
                <data table="btWhaleCounter">
                    <record>
                        <icon>500px</icon>
                    </record>
                </data>
            </block>
        `,
        expectedOutput: `
            <block type="pixel_counter">
                <data table="btPixelCounter">
                    <record>
                        <icon>fab fa-500px</icon>
                    </record>
                </data>
            </block>
        `,
        expectedWarnings: ['The "pixel_large" custom template of the "whale_counter" block is deprecated'],
    });
});
