#!/usr/bin/env node

var concat = require('concat-stream')
var Mustache = require('mustache')
var template = require('./main.js')()
var yaml = require('js-yaml')

process.stdin.pipe(concat(makeindex))

function makeindex (data) {
  var state = yaml.safeLoad(data)
  state.version = process.argv[2]
  process.stdout.write(Mustache.render(template, state))
}
