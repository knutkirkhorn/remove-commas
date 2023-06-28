#!/usr/bin/env node
import meow from 'meow';
import clipboard from 'clipboardy';
import removeCommas from './index.js';

const cli = meow(`
	Usage
	  $ remove-commas
	  $ remove-commas <input>

	Examples
	  $ remove-commas 1,333,337
`, {
	importMeta: import.meta
});

const input = cli.input.length > 0
	? cli.input.join(' ')
	: clipboard.readSync();
console.log(removeCommas(input));
