import * as assert from 'assert';
import * as vscode from 'vscode';

import { Case } from '../../models/case';
import { apply } from '../../utils/case';

// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
// import * as myExtension from '../../extension';

suite('Extension Test Suite', () => {
	vscode.window.showInformationMessage('Start all tests.');

	test('Test cases', () => {
    assert.equal(apply('thisIsAnExampleTest', Case.LowerCamelCase), 'thisIsAnExampleTest');
    assert.equal(apply('thisIsAnExampleTest', Case.UpperCamelCase), 'ThisIsAnExampleTest');
    assert.equal(apply('thisIsAnExampleTest', Case.SnakeCase), 'this_is_an_example_test');
    assert.equal(apply('thisIsAnExampleTest', Case.CapitalSnakeCase), 'THIS_IS_AN_EXAMPLE_TEST');
		// assert.equal(-1, [1, 2, 3].indexOf(5));
		// assert.equal(-1, [1, 2, 3].indexOf(0));
	});
});
