#!/usr/bin/env node
const cowsay = require('../lib/cowsay');

var cowsayCli = module.exports = exports = function(string, writeStream) {
  writeStream = writeStream || process.stdout;
  string = string || process.argv[2];
  string = string || '';
  writeStream.write(cowsay(string));
};

cowsayCli();
