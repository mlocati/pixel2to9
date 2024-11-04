/**
 * @vitest-environment jsdom
 */

import { test } from 'vitest'
import { checkConversion } from '../test-service'

test('Autonav conversion (pixel_breadcrumb)', () => {
    checkConversion({
        input: '<block type="autonav" custom-template="pixel_breadcrumb.php" />',
        expectedOutput: '<block type="autonav" />',
        expectedWarnings: ['The "pixel_breadcrumb" custom template of the "autonav" block is deprecated'],
    });
});

test('Autonav conversion (pixel_tree)', () => {
    checkConversion({
        input: '<block type="autonav" custom-template="pixel_tree.php" />',
        expectedOutput: '<block type="autonav" />',
        expectedWarnings: ['The "pixel_tree" custom template of the "autonav" block is deprecated'],
    });
});