import test from 'ava';
import {execa} from 'execa';
import removeCommas from './index.js';

test('cli can print out', async t => {
	const {stdout} = await execa('./cli.js', ['--version']);
	t.true(stdout.length > 0);
});

test('remove commas from a string', t => {
	const result = removeCommas('1,333,337');
	t.is(result, '1333337');
});
