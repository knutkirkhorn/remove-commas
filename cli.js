#!/usr/bin/env node
import meow from 'meow';
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

const input = cli.input[0];
console.log(removeCommas(input));
