hepburn
=======

Node.js module for converting Japanese Hiragana to romaji using [Hepburn romanisation](http://en.wikipedia.org/wiki/Hepburn_romanization).

Based on Takaaki Komura's [kana2hepburn](https://github.com/emon/kana2hepburn) written in Ruby.

# Install

> `npm install hepburn`

# Usage

> `var hepburn = require("hepburn");  
> var text = hepburn.fromHiragana("ひらがな");`

In this example `text` will have the value `HIRAGANA`.

# Testing

Run the unit tests with:

> `node tests/all`

# Licence

Copyright 2013 Lovell Fuller

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at [http://www.apache.org/licenses/LICENSE-2.0](http://www.apache.org/licenses/LICENSE-2.0.html)

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
