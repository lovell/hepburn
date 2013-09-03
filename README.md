# Hepburn

Node.js module for converting Japanese Hiragana and Katakana script to, and from, Romaji using [Hepburn romanisation](http://en.wikipedia.org/wiki/Hepburn_romanization).

Based partly on Takaaki Komura's [kana2hepburn](https://github.com/emon/kana2hepburn).

## Install

	npm install hepburn

## Usage

```javascript
var hepburn = require("hepburn");
```

### fromKana(string)

```javascript
var romaji1 = hepburn.fromKana("ひらがな");
var romaji2 = hepburn.fromKana("カタカナ");
```

Converts a string containing Kana, either Hiragana or Katakana, to Romaji.

In this example `romaji1` will have the value `HIRAGANA`, `romaji2` will have the value `KATAKANA`.

### toHiragana(string)

```javascript
var hiragana = hepburn.toHiragana("HIRAGANA");
```

Converts a string containing Romaji to Hiragana.

In this example `hiragana` will have the value `ひらがな`.

## Testing [![Build Status](https://travis-ci.org/lovell/hepburn.png?branch=master)](https://travis-ci.org/lovell/hepburn)

Run the unit tests with:

	npm test

## Licence

Copyright 2013 Lovell Fuller and John Resig

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at [http://www.apache.org/licenses/LICENSE-2.0](http://www.apache.org/licenses/LICENSE-2.0.html)

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
