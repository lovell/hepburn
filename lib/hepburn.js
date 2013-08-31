var bulkReplace = require("bulk-replace");

var hiraganaMonographs = {
  "あ": "A", "い": "I", "う": "U", "え": "E", "お": "O",
  "か": "KA", "き": "KI", "く": "KU", "け": "KE", "こ": "KO",
  "さ": "SA", "し": "SHI", "す": "SU", "せ": "SE", "そ": "SO",
  "た": "TA", "ち": "CHI", "つ": "TSU", "て": "TE", "と": "TO",
  "な": "NA", "に": "NI", "ぬ": "NU", "ね": "NE", "の": "NO",
  "は": "HA", "ひ": "HI", "ふ": "FU", "へ": "HE", "ほ": "HO",
  "ま": "MA", "み": "MI", "む": "MU", "め": "ME", "も": "MO",
  "や": "YA", "ゆ": "YU", "よ": "YO", "ん": "M'",
  "ら": "RA", "り": "RI", "る": "RU", "れ": "RE", "ろ": "RO",
  "わ": "WA", "ゐ": "WI", "ゑ": "WE", "を": "WO", "ん": "N'",
  "が": "GA", "ぎ": "GI", "ぐ": "GU", "げ": "GE", "ご": "GO",
  "ざ": "ZA", "じ": "JI", "ず": "ZU", "ぜ": "ZE", "ぞ": "ZO",
  "だ": "DA", "ぢ": "DJI", "づ": "DZU", "で": "DE", "ど": "DO",
  "ば": "BA", "び": "BI", "ぶ": "BU", "べ": "BE", "ぼ": "BO",
  "ぱ": "PA", "ぴ": "PI", "ぷ": "PU", "ぺ": "PE", "ぽ": "PO"
};

var hiraganaDigraphs = {
  "きゃ": "KYA", "きゅ": "KYU", "きょ": "KYO",
  "しゃ": "SHA", "しゅ": "SHU", "しょ": "SHO",
  "ちゃ": "CHA", "ちゅ": "CHU", "ちょ": "CHO",
  "にゃ": "NYA", "にゅ": "NYU", "にょ": "NYO",
  "ひゃ": "HYA", "ひゅ": "HYU", "ひょ": "HYO",
  "みゃ": "MYA", "みゅ": "MYU", "みょ": "MYO",
  "りゃ": "RYA", "りゅ": "RYU", "りょ": "RYO",
  "ぎゃ": "GYA", "ぎゅ": "GYU", "ぎょ": "GYO",
  "じゃ": "JA", "じゅ": "JU", "じょ": "JO",
  "びゃ": "BYA", "びゅ": "BYU", "びょ": "BYO",
  "ぴゃ": "PYA", "ぴゅ": "PYU", "ぴょ": "PYO"
};

var katakanaMonographs = {
  "ア": "A", "イ": "I", "ウ": "U", "エ": "E", "オ": "O",
  "カ": "KA", "キ": "KI", "ク": "KU", "ケ": "KE", "コ": "KO",
  "サ": "SA", "シ": "SHI", "ス": "SU", "セ": "SE", "ソ": "SO",
  "タ": "TA", "チ": "CHI", "ツ": "TSU", "テ": "TE", "ト": "TO",
  "ナ": "NA", "ニ": "NI", "ヌ": "NU", "ネ": "NE", "ノ": "NO",
  "ハ": "HA", "ヒ": "HI", "フ": "FU", "ヘ": "HE", "ホ": "HO",
  "マ": "MA", "ミ": "MI", "ム": "MU", "メ": "ME", "モ": "MO",
  "ヤ": "YA", "ユ": "YU", "ヨ": "YO",
  "ラ": "RA", "リ": "RI", "ル": "RU", "レ": "RE", "ロ": "RO",
  "ワ": "WA", "ヰ": "WI", "ヱ": "WE",  "ヲ": "WO", "ン": "N",
  "ガ": "GA", "ギ": "GI", "グ": "GU", "ゲ": "GE", "ゴ": "GO",
  "ザ": "ZA", "ジ": "JI", "ズ": "ZU", "ゼ": "ZE", "ゾ": "ZO",
  "ダ": "DA", "ヂ": "DJI", "ヅ": "DZU", "デ": "DE", "ド": "DO",
  "バ": "BA", "ビ": "BI", "ブ": "BU", "ベ": "BE", "ボ": "BO",
  "パ": "PA", "ピ": "PI", "プ": "PU", "ペ": "PE", "ポ": "PO"
};

var katakanaDigraphs = {
  "キャ": "KYA", "キュ": "KYU", "キョ": "KYO",
  "シャ": "SHA", "シュ": "SHU", "ショ": "SHO",
  "チャ": "CHA", "チュ": "CHU", "チョ": "CHO",
  "ニャ": "NYA", "ニュ": "NYU", "ニョ": "NYO",
  "ヒャ": "HYA", "ヒュ": "HYU", "ヒョ": "HYO",
  "ミャ": "MYA", "ミュ": "MYU", "ミョ": "MYO",
  "リャ": "RYA", "リュ": "RYU", "リョ": "RYO",
  "ギャ": "GYA", "ギュ": "GYU", "ギョ": "GYO",
  "ジャ": "JA", "ジュ": "JU", "ジョ": "JO",
  "ビャ": "BYA", "ビュ": "BYU", "ビョ": "BYO",
  "ピャ": "PYA", "ピュ": "PYU", "ピョ": "PYO"
};

// For use with toHiragana
var hiraganaMap = {};

Object.keys(hiraganaMonographs).forEach(function(key) {
  var value = hiraganaMonographs[key];
  if (!(value in hiraganaMap)) {
    hiraganaMap[value] = key;
  }
});

Object.keys(hiraganaDigraphs).forEach(function(key) {
  var value = hiraganaDigraphs[key];
  if (!(value in hiraganaMap)) {
    hiraganaMap[value] = key;
  }
});

var hiraganaRegex = new RegExp(Object.keys(hiraganaMap).sort(function(a, b) {
  return b.length - a.length;
}).join("|"), "g");

exports.fromKana = function(str) {
  // Initial transliteration
  str = bulkReplace(str, hiraganaDigraphs);
  str = bulkReplace(str, katakanaDigraphs);
  str = bulkReplace(str, hiraganaMonographs);
  str = bulkReplace(str, katakanaMonographs);

  // Correct use of sokuon
  str = str.replace(/っC/g, "TC").replace(/っ(.)/g, "$1$1");

  // Correct usage of N' (M' is a common mistake)
  str = str.replace(/[NM]'([^YAEIOU]|$)/g, "N$1");

  // Ignore use of choonpu and tsu
  return str.replace(/[ーッ]/g, "");
};

exports.toHiragana = function(str) {
  // For to be uppercase
  str = str.toUpperCase();

  // Correct use of sokuon
  str = str.replace(/([^AEIOUN])\1/g, "っ$1");

  // Transliteration
  str = bulkReplace(str, hiraganaRegex, hiraganaMap);

  // Fix any remaining N/M usage (that isn't a N' usage)
  str = str.replace(/N|M/g, "ん");

  return str;
};
