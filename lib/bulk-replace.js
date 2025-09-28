// Copyright 2013 John Resig
// SPDX-License-Identifier: MIT License

module.exports = function(str, regex, map) {
  if (arguments.length === 2) {
    map = regex;
    regex = new RegExp(Object.keys(map).join("|"), "ig");
  }
  return str.replace(regex, function(all) {
    if (all in map) {
        return map[all];
    }
    return all;
  });
};
