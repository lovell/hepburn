var assert = require("assert");
var hepburn = require("../lib/hepburn");

var tests = {
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
  "さいとう": "SAITO"
};

for (var hiragana in tests) {
  assert.equal(hepburn.fromHiragana(hiragana), tests[hiragana], "Conversion failed");
}
