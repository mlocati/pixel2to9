/**
 * @vitest-environment jsdom
 */

import { test } from 'vitest'
import { checkConversion } from '../test-service'

test('Content conversion (pixel_fancy_title)', () => {
    checkConversion({
        input: '<block type="content" custom-template="pixel_fancy_title.php" />',
        expectedOutput: '<block type="content" custom-template="pixel_page_title.php" />',
    });
});

test('Content conversion (pixel_fancy_title_bottom_border)', () => {
    checkConversion({
        input: '<block type="content" custom-template="pixel_fancy_title_bottom_border.php" />',
        expectedOutput: '<block type="content" custom-template="pixel_page_title.php"><style><customClass>title:bottom-border</customClass></style></block>',
    });
});

test('Content conversion with custom class (pixel_fancy_title_bottom_border)', () => {
    checkConversion({
        input: '<block type="content" custom-template="pixel_fancy_title_bottom_border.php"><style><customClass>previous</customClass></style></block>',
        expectedOutput: '<block type="content" custom-template="pixel_page_title.php"><style><customClass>previous title:bottom-border</customClass></style></block>',
    });
});
