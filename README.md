# remove-commas

> Remove all commas in a string

When you need to remove those pesky commas from a string.

## CLI

### Installation

```sh
npm install --global remove-commas
```

### Usage

```
$ remove-commas --help

  Usage
    $ remove-commas
    $ remove-commas <input>

  Examples
    $ remove-commas 1,333,337
```

## API

### Installation

```sh
npm install remove-commas
```

### Usage

```js
import removeCommas from 'remove-commas';

console.log(removeCommas('1,333,337'));
// => 1333337
```
