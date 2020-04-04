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

### toKatakana(string)

```javascript
var katakana = hepburn.toKatakana("KATAKANA");
var tokyo = hepburn.toKatakana("TŌKYŌ");
```

Converts a string containing Romaji to Katakana.

In this example `katakana` will have the value `カタカナ` and `tokyo` will have the value `トーキョー`.

### cleanRomaji(string)

```javascript
var cleaned = hepburn.cleanRomaji("SYUNNEI");
// cleaned === "SHUN'EI"
```

Cleans up a romaji string, changing old romaji forms into the more-modern
Hepburn form (for further processing). Generally matches the style used by
[Wapro romaji](https://en.wikipedia.org/wiki/W%C4%81puro_r%C5%8Dmaji).
A larger [guide to modern romaji conventions](https://www.nayuki.io/page/variations-on-japanese-romanization)
was used in building this method.

What this methods fixes:

* Incorrect usage of the letter M. For example "Shumman" should be written as "Shunman".
* Changing usage of NN into N', for example "Shunnei" becomes "Shun'ei".
* Converting the usage of OU and OH (to indicate a long vowel) into OO.
* Correct old usages [Nihon-shiki romanization](https://en.wikipedia.org/wiki/Nihon-shiki_romanization) into Hepburn form. A full list of the conversions can be found in the `hepburn.js` file. For example "Eisyosai" becomes "Eishosai" and "Yoshihuji" becomes "Yoshifuji".

### splitKana(string)

```javascript
var hiragana = hepburn.splitKana("ひらがな");
var tokyo = hepburn.splitKana("トーキョー");
```

Splits a string containing Katakana or Hiragana into a syllables array.

In this example `hiragana` will have the value `["ひ", "ら", "が", "な"]` and `tokyo` will have the value `["トー", "キョー"]`.

### splitRomaji(string)

```javascript
var tokyo = hepburn.splitRomaji("TŌKYŌ");
var pakkingu = hepburn.splitRomaji("PAKKINGU");
```

Splits a string containing Romaji into a syllables array.

In this example `tokyo` will have the value `["TŌ", "KYŌ"]` and `pakkingu` will have the value `["PAK", "KI", "N", "GU"]`.

### containsHiragana(string)

Returns `true` if `string` contains Hiragana.

### containsKatakana(string)

Returns `true` if `string` contains Katakana.

### containsKana(string)

Returns `true` if `string` contains any Kana.

### containsKanji(string)

Returns `true` if `string` contains any Kanji.

## Testing [![Build Status](https://travis-ci.org/lovell/hepburn.png?branch=master)](https://travis-ci.org/lovell/hepburn)

Run the unit tests with:

	npm test

## Licence

Copyright 2013, 2014, 2015, 2018, 2020 Lovell Fuller and contributors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at [http://www.apache.org/licenses/LICENSE-2.0](http://www.apache.org/licenses/LICENSE-2.0.html)

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
