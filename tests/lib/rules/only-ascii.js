'use strict';

var rule = require('../../../lib/rules/only-ascii');

var RuleTester = require('eslint').RuleTester;
var ruleTester = new RuleTester();

ruleTester.run('no-japanese', rule, {

  valid : [
    { code : 'console.log("hello")', options : [] },
    { code : 'console.log("hello☆")', options : [{ allowedChars : '☆' }] },
    { code : 'console.log("☆")', filename : 'foo', options : [{ excludePaths : ['foo'] }] },
  ],

  invalid : [{
    code   : 'console.log("ハロー")',
    errors : [{ message : 'Non-ascii character "ハロー" found' }],
  }, {
    code    : 'console.log("ハロー☆")',
    options : [{ allowedChars : '☆' }],
    errors  : [{ message : 'Non-ascii character "ハロー" found' }],
  }, {
    code     : 'console.log("☆")',
    filename : 'foo',
    options  : [{ excludePaths : ['bar'] }],
    errors   : [{ message : 'Non-ascii character "☆" found' }],
  }],
});
