(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', './utils'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('./utils'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.utils);
    global.clonePseudoElements = mod.exports;
  }
})(this, function (exports, _utils) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = clonePseudoElements;

  var cov_24w8k389tz = function () {
    var path = '/Users/jhill/html-to-image/src/clonePseudoElements.js',
        hash = '10153ab66f782bfc43002548c562a75fa538d4d9',
        Function = function () {}.constructor,
        global = new Function('return this')(),
        gcv = '__coverage__',
        coverageData = {
      path: '/Users/jhill/html-to-image/src/clonePseudoElements.js',
      statementMap: {
        '0': {
          start: {
            line: 5,
            column: 18
          },
          end: {
            line: 5,
            column: 51
          }
        },
        '1': {
          start: {
            line: 6,
            column: 2
          },
          end: {
            line: 6,
            column: 48
          }
        },
        '2': {
          start: {
            line: 10,
            column: 2
          },
          end: {
            line: 15,
            column: 14
          }
        },
        '3': {
          start: {
            line: 11,
            column: 18
          },
          end: {
            line: 11,
            column: 46
          }
        },
        '4': {
          start: {
            line: 12,
            column: 21
          },
          end: {
            line: 12,
            column: 52
          }
        },
        '5': {
          start: {
            line: 14,
            column: 4
          },
          end: {
            line: 14,
            column: 63
          }
        },
        '6': {
          start: {
            line: 23,
            column: 19
          },
          end: {
            line: 23,
            column: 44
          }
        },
        '7': {
          start: {
            line: 24,
            column: 18
          },
          end: {
            line: 24,
            column: 83
          }
        },
        '8': {
          start: {
            line: 26,
            column: 2
          },
          end: {
            line: 26,
            column: 59
          }
        },
        '9': {
          start: {
            line: 34,
            column: 16
          },
          end: {
            line: 34,
            column: 59
          }
        },
        '10': {
          start: {
            line: 35,
            column: 18
          },
          end: {
            line: 35,
            column: 51
          }
        },
        '11': {
          start: {
            line: 37,
            column: 2
          },
          end: {
            line: 39,
            column: 3
          }
        },
        '12': {
          start: {
            line: 38,
            column: 4
          },
          end: {
            line: 38,
            column: 10
          }
        },
        '13': {
          start: {
            line: 41,
            column: 20
          },
          end: {
            line: 41,
            column: 26
          }
        },
        '14': {
          start: {
            line: 42,
            column: 23
          },
          end: {
            line: 42,
            column: 54
          }
        },
        '15': {
          start: {
            line: 44,
            column: 2
          },
          end: {
            line: 44,
            column: 75
          }
        },
        '16': {
          start: {
            line: 46,
            column: 2
          },
          end: {
            line: 46,
            column: 63
          }
        },
        '17': {
          start: {
            line: 47,
            column: 2
          },
          end: {
            line: 47,
            column: 38
          }
        },
        '18': {
          start: {
            line: 54,
            column: 2
          },
          end: {
            line: 54,
            column: 93
          }
        },
        '19': {
          start: {
            line: 54,
            column: 42
          },
          end: {
            line: 54,
            column: 92
          }
        }
      },
      fnMap: {
        '0': {
          name: 'formatCssText',
          decl: {
            start: {
              line: 4,
              column: 9
            },
            end: {
              line: 4,
              column: 22
            }
          },
          loc: {
            start: {
              line: 4,
              column: 59
            },
            end: {
              line: 7,
              column: 1
            }
          },
          line: 4
        },
        '1': {
          name: 'formatCssProperties',
          decl: {
            start: {
              line: 9,
              column: 9
            },
            end: {
              line: 9,
              column: 28
            }
          },
          loc: {
            start: {
              line: 9,
              column: 65
            },
            end: {
              line: 16,
              column: 1
            }
          },
          line: 9
        },
        '2': {
          name: '(anonymous_2)',
          decl: {
            start: {
              line: 10,
              column: 28
            },
            end: {
              line: 10,
              column: 29
            }
          },
          loc: {
            start: {
              line: 10,
              column: 38
            },
            end: {
              line: 15,
              column: 3
            }
          },
          line: 10
        },
        '3': {
          name: 'getPseudoElementStyle',
          decl: {
            start: {
              line: 18,
              column: 9
            },
            end: {
              line: 18,
              column: 30
            }
          },
          loc: {
            start: {
              line: 22,
              column: 15
            },
            end: {
              line: 27,
              column: 1
            }
          },
          line: 22
        },
        '4': {
          name: 'clonePseudoElement',
          decl: {
            start: {
              line: 29,
              column: 9
            },
            end: {
              line: 29,
              column: 27
            }
          },
          loc: {
            start: {
              line: 33,
              column: 2
            },
            end: {
              line: 48,
              column: 1
            }
          },
          line: 33
        },
        '5': {
          name: 'clonePseudoElements',
          decl: {
            start: {
              line: 50,
              column: 24
            },
            end: {
              line: 50,
              column: 43
            }
          },
          loc: {
            start: {
              line: 53,
              column: 2
            },
            end: {
              line: 55,
              column: 1
            }
          },
          line: 53
        },
        '6': {
          name: '(anonymous_6)',
          decl: {
            start: {
              line: 54,
              column: 32
            },
            end: {
              line: 54,
              column: 33
            }
          },
          loc: {
            start: {
              line: 54,
              column: 42
            },
            end: {
              line: 54,
              column: 92
            }
          },
          line: 54
        }
      },
      branchMap: {
        '0': {
          loc: {
            start: {
              line: 14,
              column: 31
            },
            end: {
              line: 14,
              column: 60
            }
          },
          type: 'cond-expr',
          locations: [{
            start: {
              line: 14,
              column: 42
            },
            end: {
              line: 14,
              column: 55
            }
          }, {
            start: {
              line: 14,
              column: 58
            },
            end: {
              line: 14,
              column: 60
            }
          }],
          line: 14
        },
        '1': {
          loc: {
            start: {
              line: 24,
              column: 18
            },
            end: {
              line: 24,
              column: 83
            }
          },
          type: 'cond-expr',
          locations: [{
            start: {
              line: 24,
              column: 34
            },
            end: {
              line: 24,
              column: 54
            }
          }, {
            start: {
              line: 24,
              column: 57
            },
            end: {
              line: 24,
              column: 83
            }
          }],
          line: 24
        },
        '2': {
          loc: {
            start: {
              line: 37,
              column: 2
            },
            end: {
              line: 39,
              column: 3
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 37,
              column: 2
            },
            end: {
              line: 39,
              column: 3
            }
          }, {
            start: {
              line: 37,
              column: 2
            },
            end: {
              line: 39,
              column: 3
            }
          }],
          line: 37
        },
        '3': {
          loc: {
            start: {
              line: 37,
              column: 6
            },
            end: {
              line: 37,
              column: 42
            }
          },
          type: 'binary-expr',
          locations: [{
            start: {
              line: 37,
              column: 6
            },
            end: {
              line: 37,
              column: 20
            }
          }, {
            start: {
              line: 37,
              column: 24
            },
            end: {
              line: 37,
              column: 42
            }
          }],
          line: 37
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
        '19': 0
      },
      f: {
        '0': 0,
        '1': 0,
        '2': 0,
        '3': 0,
        '4': 0,
        '5': 0,
        '6': 0
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

  function formatCssText(style) {
    cov_24w8k389tz.f[0]++;

    var content = (cov_24w8k389tz.s[0]++, style.getPropertyValue('content'));
    cov_24w8k389tz.s[1]++;
    return style.cssText + ' content: ' + content + ';';
  }

  function formatCssProperties(style) {
    cov_24w8k389tz.f[1]++;
    cov_24w8k389tz.s[2]++;

    return (0, _utils.toArray)(style).map(function (name) {
      cov_24w8k389tz.f[2]++;

      var value = (cov_24w8k389tz.s[3]++, style.getPropertyValue(name));
      var priority = (cov_24w8k389tz.s[4]++, style.getPropertyPriority(name));

      cov_24w8k389tz.s[5]++;
      return name + ': ' + value + (priority ? (cov_24w8k389tz.b[0][0]++, ' !important') : (cov_24w8k389tz.b[0][1]++, '')) + ';';
    }).join(' ');
  }

  function getPseudoElementStyle(className, pseudo, style) {
    cov_24w8k389tz.f[3]++;

    var selector = (cov_24w8k389tz.s[6]++, '.' + className + ':' + pseudo);
    var cssText = (cov_24w8k389tz.s[7]++, style.cssText ? (cov_24w8k389tz.b[1][0]++, formatCssText(style)) : (cov_24w8k389tz.b[1][1]++, formatCssProperties(style)));

    cov_24w8k389tz.s[8]++;
    return document.createTextNode(selector + '{' + cssText + '}');
  }

  function clonePseudoElement(nativeNode, clonedNode, pseudo) {
    cov_24w8k389tz.f[4]++;

    var style = (cov_24w8k389tz.s[9]++, window.getComputedStyle(nativeNode, pseudo));
    var content = (cov_24w8k389tz.s[10]++, style.getPropertyValue('content'));

    cov_24w8k389tz.s[11]++;
    if ((cov_24w8k389tz.b[3][0]++, content === '') || (cov_24w8k389tz.b[3][1]++, content === 'none')) {
      cov_24w8k389tz.b[2][0]++;
      cov_24w8k389tz.s[12]++;

      return;
    } else {
      cov_24w8k389tz.b[2][1]++;
    }

    var className = (cov_24w8k389tz.s[13]++, (0, _utils.uuid)());
    var styleElement = (cov_24w8k389tz.s[14]++, document.createElement('style'));

    cov_24w8k389tz.s[15]++;
    styleElement.appendChild(getPseudoElementStyle(className, pseudo, style));

    cov_24w8k389tz.s[16]++;
    clonedNode.className = clonedNode.className + ' ' + className;
    cov_24w8k389tz.s[17]++;
    clonedNode.appendChild(styleElement);
  }

  function clonePseudoElements(nativeNode, clonedNode) {
    cov_24w8k389tz.f[5]++;
    cov_24w8k389tz.s[18]++;

    [':before', ':after'].forEach(function (pseudo) {
      cov_24w8k389tz.f[6]++;
      cov_24w8k389tz.s[19]++;
      return clonePseudoElement(nativeNode, clonedNode, pseudo);
    });
  }
});