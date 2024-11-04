/**
 * @vitest-environment jsdom
 */

import { test } from 'vitest'
import { checkConversion } from '../test-service'

test('WhaleGallery conversion', () => {
    checkConversion({
        input: `
            <block type="whale_gallery">
                <data table="btWhaleGallery">
                    <record>
                    </record>
                </data>
            </block>
        `,
        expectedOutput: `
            <block type="pixel_gallery">
                <data table="btPixelGallery">
                    <record>
                        <columnsSm>0</columnsSm>
                        <columnsMd>0</columnsMd>
                        <columnsLg>0</columnsLg>
                        <columnsXl>0</columnsXl>
                        <columnsXxl>0</columnsXxl>
                        <gutter>0</gutter>
                        <cropImage>0</cropImage>
                        <maxWidth>0</maxWidth>
                        <maxHeight>0</maxHeight>
                    </record>
                </data>
            </block>
        `,
    });
});
