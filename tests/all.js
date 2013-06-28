var assert = require("assert");
var hepburn = require("../lib/hepburn");

var hiraganaTests = {
  "ひらがな": "HIRAGANA",
  "あいうえお かきくけこ": "AIUEO KAKIKUKEKO",
  "きゃきゅきょ": "KYAKYUKYO",
  "あんこ": "ANKO",
  "どらえもん": "DORAEMON",
  "かんぽ": "KAMPO",
  "ほんま": "HOMMA",
  "へっぽこ": "HEPPOKO",
  "べっぷ": "BEPPU",
  "いっしき": "ISSHIKI",
  "えっちゅう": "ETCHU",
  "はっちょう": "HATCHO",
  "うさぎ": "USAGI",
  "たろう": "TARO",
  "おおさま": "OSAMA",
  "きょうと": "KYOTO",
  "きょおと": "KYOTO",
  "とおる": "TORU",
  "さいとう": "SAITO",
  "こんにちは": "KONNICHIHA"
};

var katakanaTests = {
  "カタカナ": "KATAKANA",
  "チャーシュー": "CHASHU",
  "ちぢむ": "CHIJIMU",
  "マッモト": "MAMOTO"
};

for (var hiragana in hiraganaTests) {
  assert.equal(hepburn.fromKana(hiragana), hiraganaTests[hiragana], "Hirigana conversion failed");
}

for (var katakana in katakanaTests) {
  assert.equal(hepburn.fromKana(katakana), katakanaTests[katakana], "Katakana conversion failed");
}
