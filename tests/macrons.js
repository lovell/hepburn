/*jslint node: true */
'use strict';

var assert = require("assert");
var hepburn = require("../lib/hepburn");

var katakanaTests = {
  "コミッター": "KOMITTĀ",
  "リード": "RĪDO",
  "リユース": "RIYŪSU",
  "リベース": "RIBĒSU",
  "リロード": "RIRŌDO"
};

var toKatakanaTests = {
  "TĀMINARU": "ターミナル",
  "MĪTOAPPU": "ミートアップ",
  "MŪBU": "ムーブ",
  "PĒSU": "ペース",
  "TŌKYŌ": "トーキョー"
};

for (var katakana in katakanaTests) {
  var converted = hepburn.fromKana(katakana);
  var expected = katakanaTests[katakana];
  assert.equal(converted, expected,
    "Katakana conversion failed on " + katakana + ", expected \"" +
      expected + "\" but got \"" + converted + "\".");
}

for (var romaji in toKatakanaTests) {
  assert.equal(hepburn.toKatakana(romaji), toKatakanaTests[romaji], "Hepburn conversion to katakana failed on " + romaji);
  assert.equal(hepburn.fromKana(toKatakanaTests[romaji]), romaji, "Hepburn conversion from katakana failed on " + romaji);
}

