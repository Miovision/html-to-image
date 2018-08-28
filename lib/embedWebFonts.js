(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'babel-runtime/core-js/promise', 'babel-runtime/helpers/toConsumableArray', './utils', './embedResources'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('babel-runtime/core-js/promise'), require('babel-runtime/helpers/toConsumableArray'), require('./utils'), require('./embedResources'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.promise, global.toConsumableArray, global.utils, global.embedResources);
    global.embedWebFonts = mod.exports;
  }
})(this, function (exports, _promise, _toConsumableArray2, _utils, _embedResources) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.parseWebFontRules = parseWebFontRules;
  exports.default = embedWebFonts;

  var _promise2 = _interopRequireDefault(_promise);

  var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

  var _embedResources2 = _interopRequireDefault(_embedResources);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var cov_1854zmxzmu = function () {
    var path = '/Users/jhill/html-to-image/src/embedWebFonts.js',
        hash = 'cf7a3c986d9b7cb225b9bc00baa10595aa6fac66',
        Function = function () {}.constructor,
        global = new Function('return this')(),
        gcv = '__coverage__',
        coverageData = {
      path: '/Users/jhill/html-to-image/src/embedWebFonts.js',
      statementMap: {
        '0': {
          start: {
            line: 5,
            column: 2
          },
          end: {
            line: 16,
            column: 8
          }
        },
        '1': {
          start: {
            line: 6,
            column: 4
          },
          end: {
            line: 13,
            column: 5
          }
        },
        '2': {
          start: {
            line: 7,
            column: 6
          },
          end: {
            line: 9,
            column: 7
          }
        },
        '3': {
          start: {
            line: 8,
            column: 8
          },
          end: {
            line: 8,
            column: 45
          }
        },
        '4': {
          start: {
            line: 12,
            column: 6
          },
          end: {
            line: 12,
            column: 83
          }
        },
        '5': {
          start: {
            line: 15,
            column: 4
          },
          end: {
            line: 15,
            column: 15
          }
        },
        '6': {
          start: {
            line: 20,
            column: 2
          },
          end: {
            line: 22,
            column: 68
          }
        },
        '7': {
          start: {
            line: 21,
            column: 20
          },
          end: {
            line: 21,
            column: 56
          }
        },
        '8': {
          start: {
            line: 22,
            column: 20
          },
          end: {
            line: 22,
            column: 67
          }
        },
        '9': {
          start: {
            line: 26,
            column: 2
          },
          end: {
            line: 33,
            column: 26
          }
        },
        '10': {
          start: {
            line: 27,
            column: 4
          },
          end: {
            line: 29,
            column: 5
          }
        },
        '11': {
          start: {
            line: 28,
            column: 6
          },
          end: {
            line: 28,
            column: 68
          }
        },
        '12': {
          start: {
            line: 30,
            column: 4
          },
          end: {
            line: 30,
            column: 58
          }
        },
        '13': {
          start: {
            line: 40,
            column: 2
          },
          end: {
            line: 59,
            column: 6
          }
        },
        '14': {
          start: {
            line: 41,
            column: 19
          },
          end: {
            line: 44,
            column: 7
          }
        },
        '15': {
          start: {
            line: 42,
            column: 22
          },
          end: {
            line: 42,
            column: 56
          }
        },
        '16': {
          start: {
            line: 43,
            column: 6
          },
          end: {
            line: 43,
            column: 59
          }
        },
        '17': {
          start: {
            line: 45,
            column: 24
          },
          end: {
            line: 45,
            column: 45
          }
        },
        '18': {
          start: {
            line: 47,
            column: 24
          },
          end: {
            line: 47,
            column: 55
          }
        },
        '19': {
          start: {
            line: 48,
            column: 27
          },
          end: {
            line: 48,
            column: 61
          }
        },
        '20': {
          start: {
            line: 50,
            column: 6
          },
          end: {
            line: 50,
            column: 41
          }
        },
        '21': {
          start: {
            line: 52,
            column: 6
          },
          end: {
            line: 56,
            column: 7
          }
        },
        '22': {
          start: {
            line: 53,
            column: 8
          },
          end: {
            line: 53,
            column: 65
          }
        },
        '23': {
          start: {
            line: 55,
            column: 8
          },
          end: {
            line: 55,
            column: 41
          }
        },
        '24': {
          start: {
            line: 58,
            column: 6
          },
          end: {
            line: 58,
            column: 23
          }
        }
      },
      fnMap: {
        '0': {
          name: 'getCssRules',
          decl: {
            start: {
              line: 4,
              column: 9
            },
            end: {
              line: 4,
              column: 20
            }
          },
          loc: {
            start: {
              line: 4,
              column: 69
            },
            end: {
              line: 17,
              column: 1
            }
          },
          line: 4
        },
        '1': {
          name: '(anonymous_1)',
          decl: {
            start: {
              line: 5,
              column: 28
            },
            end: {
              line: 5,
              column: 29
            }
          },
          loc: {
            start: {
              line: 5,
              column: 45
            },
            end: {
              line: 16,
              column: 3
            }
          },
          line: 5
        },
        '2': {
          name: 'getWebFontRules',
          decl: {
            start: {
              line: 19,
              column: 9
            },
            end: {
              line: 19,
              column: 24
            }
          },
          loc: {
            start: {
              line: 19,
              column: 76
            },
            end: {
              line: 23,
              column: 1
            }
          },
          line: 19
        },
        '3': {
          name: '(anonymous_3)',
          decl: {
            start: {
              line: 21,
              column: 12
            },
            end: {
              line: 21,
              column: 13
            }
          },
          loc: {
            start: {
              line: 21,
              column: 20
            },
            end: {
              line: 21,
              column: 56
            }
          },
          line: 21
        },
        '4': {
          name: '(anonymous_4)',
          decl: {
            start: {
              line: 22,
              column: 12
            },
            end: {
              line: 22,
              column: 13
            }
          },
          loc: {
            start: {
              line: 22,
              column: 20
            },
            end: {
              line: 22,
              column: 67
            }
          },
          line: 22
        },
        '5': {
          name: 'parseWebFontRules',
          decl: {
            start: {
              line: 25,
              column: 16
            },
            end: {
              line: 25,
              column: 33
            }
          },
          loc: {
            start: {
              line: 25,
              column: 84
            },
            end: {
              line: 34,
              column: 1
            }
          },
          line: 25
        },
        '6': {
          name: '(anonymous_6)',
          decl: {
            start: {
              line: 26,
              column: 21
            },
            end: {
              line: 26,
              column: 22
            }
          },
          loc: {
            start: {
              line: 26,
              column: 42
            },
            end: {
              line: 31,
              column: 3
            }
          },
          line: 26
        },
        '7': {
          name: 'embedWebFonts',
          decl: {
            start: {
              line: 36,
              column: 24
            },
            end: {
              line: 36,
              column: 37
            }
          },
          loc: {
            start: {
              line: 39,
              column: 24
            },
            end: {
              line: 60,
              column: 1
            }
          },
          line: 39
        },
        '8': {
          name: '(anonymous_8)',
          decl: {
            start: {
              line: 41,
              column: 10
            },
            end: {
              line: 41,
              column: 11
            }
          },
          loc: {
            start: {
              line: 41,
              column: 19
            },
            end: {
              line: 44,
              column: 7
            }
          },
          line: 41
        },
        '9': {
          name: '(anonymous_9)',
          decl: {
            start: {
              line: 41,
              column: 41
            },
            end: {
              line: 41,
              column: 42
            }
          },
          loc: {
            start: {
              line: 41,
              column: 51
            },
            end: {
              line: 44,
              column: 5
            }
          },
          line: 41
        },
        '10': {
          name: '(anonymous_10)',
          decl: {
            start: {
              line: 45,
              column: 10
            },
            end: {
              line: 45,
              column: 11
            }
          },
          loc: {
            start: {
              line: 45,
              column: 24
            },
            end: {
              line: 45,
              column: 45
            }
          },
          line: 45
        },
        '11': {
          name: '(anonymous_11)',
          decl: {
            start: {
              line: 46,
              column: 10
            },
            end: {
              line: 46,
              column: 11
            }
          },
          loc: {
            start: {
              line: 46,
              column: 25
            },
            end: {
              line: 59,
              column: 5
            }
          },
          line: 46
        }
      },
      branchMap: {
        '0': {
          loc: {
            start: {
              line: 7,
              column: 6
            },
            end: {
              line: 9,
              column: 7
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 7,
              column: 6
            },
            end: {
              line: 9,
              column: 7
            }
          }, {
            start: {
              line: 7,
              column: 6
            },
            end: {
              line: 9,
              column: 7
            }
          }],
          line: 7
        },
        '1': {
          loc: {
            start: {
              line: 27,
              column: 4
            },
            end: {
              line: 29,
              column: 5
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 27,
              column: 4
            },
            end: {
              line: 29,
              column: 5
            }
          }, {
            start: {
              line: 27,
              column: 4
            },
            end: {
              line: 29,
              column: 5
            }
          }],
          line: 27
        },
        '2': {
          loc: {
            start: {
              line: 42,
              column: 23
            },
            end: {
              line: 42,
              column: 50
            }
          },
          type: 'binary-expr',
          locations: [{
            start: {
              line: 42,
              column: 23
            },
            end: {
              line: 42,
              column: 44
            }
          }, {
            start: {
              line: 42,
              column: 48
            },
            end: {
              line: 42,
              column: 50
            }
          }],
          line: 42
        },
        '3': {
          loc: {
            start: {
              line: 52,
              column: 6
            },
            end: {
              line: 56,
              column: 7
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 52,
              column: 6
            },
            end: {
              line: 56,
              column: 7
            }
          }, {
            start: {
              line: 52,
              column: 6
            },
            end: {
              line: 56,
              column: 7
            }
          }],
          line: 52
        }
      },
      s: {
        '0': 0,
        '1': 0,
        '2': 0,
        '3': 0,
        '4': 0,
        '5': 0,
        '6': 0,
        '7': 0,
        '8': 0,
        '9': 0,
        '10': 0,
        '11': 0,
        '12': 0,
        '13': 0,
        '14': 0,
        '15': 0,
        '16': 0,
        '17': 0,
        '18': 0,
        '19': 0,
        '20': 0,
        '21': 0,
        '22': 0,
        '23': 0,
        '24': 0
      },
      f: {
        '0': 0,
        '1': 0,
        '2': 0,
        '3': 0,
        '4': 0,
        '5': 0,
        '6': 0,
        '7': 0,
        '8': 0,
        '9': 0,
        '10': 0,
        '11': 0
      },
      b: {
        '0': [0, 0],
        '1': [0, 0],
        '2': [0, 0],
        '3': [0, 0]
      },
      _coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
    },
        coverage = global[gcv] || (global[gcv] = {});

    if (coverage[path] && coverage[path].hash === hash) {
      return coverage[path];
    }

    coverageData.hash = hash;
    return coverage[path] = coverageData;
  }();

  function getCssRules(styleSheets) {
    cov_1854zmxzmu.f[0]++;
    cov_1854zmxzmu.s[0]++;

    return styleSheets.reduce(function (memo, sheet) {
      cov_1854zmxzmu.f[1]++;
      cov_1854zmxzmu.s[1]++;

      try {
        cov_1854zmxzmu.s[2]++;

        if (sheet.cssRules) {
          cov_1854zmxzmu.b[0][0]++;
          cov_1854zmxzmu.s[3]++;

          memo.push.apply(memo, (0, _toConsumableArray3.default)((0, _utils.toArray)(sheet.cssRules)));
        } else {
          cov_1854zmxzmu.b[0][1]++;
        }
      } catch (e) {
        cov_1854zmxzmu.s[4]++;

        // eslint-disable-next-line
        console.log('Error while reading CSS rules from ' + sheet.href, e.toString());
      }

      cov_1854zmxzmu.s[5]++;
      return memo;
    }, []);
  }

  function getWebFontRules(cssRules) {
    cov_1854zmxzmu.f[2]++;
    cov_1854zmxzmu.s[6]++;

    return cssRules.filter(function (rule) {
      cov_1854zmxzmu.f[3]++;
      cov_1854zmxzmu.s[7]++;
      return rule.type === CSSRule.FONT_FACE_RULE;
    }).filter(function (rule) {
      cov_1854zmxzmu.f[4]++;
      cov_1854zmxzmu.s[8]++;
      return (0, _embedResources.shouldEmbed)(rule.style.getPropertyValue('src'));
    });
  }

  function parseWebFontRules(clonedNode) {
    cov_1854zmxzmu.f[5]++;
    cov_1854zmxzmu.s[9]++;

    return new _promise2.default(function (resolve, reject) {
      cov_1854zmxzmu.f[6]++;
      cov_1854zmxzmu.s[10]++;

      if (!clonedNode.ownerDocument) {
        cov_1854zmxzmu.b[1][0]++;
        cov_1854zmxzmu.s[11]++;

        reject(new Error('Provided element is not within a Document'));
      } else {
        cov_1854zmxzmu.b[1][1]++;
      }
      cov_1854zmxzmu.s[12]++;
      resolve((0, _utils.toArray)(clonedNode.ownerDocument.styleSheets));
    }).then(getCssRules).then(getWebFontRules);
  }

  function embedWebFonts(clonedNode, options) {
    cov_1854zmxzmu.f[7]++;
    cov_1854zmxzmu.s[13]++;

    return parseWebFontRules(clonedNode).then(function (rules) {
      cov_1854zmxzmu.f[8]++;
      cov_1854zmxzmu.s[14]++;
      return _promise2.default.all(rules.map(function (rule) {
        cov_1854zmxzmu.f[9]++;

        var baseUrl = (cov_1854zmxzmu.s[15]++, ((cov_1854zmxzmu.b[2][0]++, rule.parentStyleSheet) || (cov_1854zmxzmu.b[2][1]++, {})).href);
        cov_1854zmxzmu.s[16]++;
        return (0, _embedResources2.default)(rule.cssText, baseUrl, options);
      }));
    }).then(function (cssStrings) {
      cov_1854zmxzmu.f[10]++;
      cov_1854zmxzmu.s[17]++;
      return cssStrings.join('\n');
    }).then(function (cssString) {
      cov_1854zmxzmu.f[11]++;

      var styleNode = (cov_1854zmxzmu.s[18]++, document.createElement('style'));
      var sytleContent = (cov_1854zmxzmu.s[19]++, document.createTextNode(cssString));

      cov_1854zmxzmu.s[20]++;
      styleNode.appendChild(sytleContent);

      cov_1854zmxzmu.s[21]++;
      if (clonedNode.firstChild) {
        cov_1854zmxzmu.b[3][0]++;
        cov_1854zmxzmu.s[22]++;

        clonedNode.insertBefore(styleNode, clonedNode.firstChild);
      } else {
        cov_1854zmxzmu.b[3][1]++;
        cov_1854zmxzmu.s[23]++;

        clonedNode.appendChild(styleNode);
      }

      cov_1854zmxzmu.s[24]++;
      return clonedNode;
    });
  }
});