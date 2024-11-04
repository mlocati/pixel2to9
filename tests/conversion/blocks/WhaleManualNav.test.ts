/**
 * @vitest-environment jsdom
 */

import { test } from 'vitest'
import { checkConversion } from '../test-service'

test('WhaleManualNav conversion (mega_menu)', () => {
    checkConversion({
        input: `
            <block type="whale_manual_nav" custom-template="mega_menu.php">
                <data table="btWhaleManualNavPixel">
                    <record>
                    </record>
                </data>
            </block>
        `,
        expectedOutput: `
            <block type="pixel_manual_nav" custom-template="pixel_mega_menu.php">
                <data table="btPixelManualNav">
                    <record>
                    </record>
                </data>
            </block>
        `,
    });
});
