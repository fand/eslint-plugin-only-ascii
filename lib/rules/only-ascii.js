/**
 * @fileoverview Rule to forbid non-ascii Characters
 * @author amagitakayosi
 * @copyright 2017 amagitakayosi. All rights reserved.
 */

'use strict';

var path = require('path');

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

function create (context) {
  return {
    Program : function checkForForbiddenCharacters (node) {

      var options = context.options[0] || {};

      // Ignore specified files
      var excludePaths = options.excludePaths || [];
      var filePathFull = path.resolve(process.cwd(), context.getFilename());

      for (var i = 0; i < excludePaths.length; i++) {
        var excludePathFull = path.resolve(process.cwd(), excludePaths[i]).toString();
        if ((filePathFull).match(excludePathFull)) {
          return;
        }
      }

      // Load characters to ignore
      var allowedChars       = options.allowedChars || '';
      var allowedCharsRegExp = new RegExp(
        '[' +allowedChars + ']+', 'g'
      );

      var errors = [];

      // Get tokens which include non-ascii characters
      var sourceCode = context.getSourceCode();
      var tokens     = sourceCode.getTokens(node);

      tokens.forEach(function (token) {
        var value = token.value;

        var matches = value.match(/([^\x00-\x7F]+)/g);

        if (matches) {
          value = value.replace(allowedCharsRegExp, '');
        }

        matches = value.match(/([^\x00-\x7F]+)/g);
        if (matches) {
          errors.push({
            line   : token.loc.start.line,
            column : token.loc.start.column,
            char   : matches[0],
          });
        }
      });

      // Output errors
      errors.forEach(function (error) {
        context.report(node, {
          line   : error.line,
          column : error.column,
        }, 'Non-ascii character "' + error.char + '" found');
      });
    },
  };
};

const schema = [
  {
    type       : 'object',
    properties : {
      allowedChars : {
        type : 'string',
      },
      excludePaths : {
        type : 'array',
      },
    },
    additionalProperties : false,
  },
];

module.exports = {
  meta : { schema },
  create,
};
