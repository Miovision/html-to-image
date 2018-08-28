(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'babel-runtime/core-js/promise', './utils', './clonePseudoElements'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('babel-runtime/core-js/promise'), require('./utils'), require('./clonePseudoElements'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.promise, global.utils, global.clonePseudoElements);
    global.cloneNode = mod.exports;
  }
})(this, function (exports, _promise, _utils, _clonePseudoElements) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = cloneNode;

  var _promise2 = _interopRequireDefault(_promise);

  var _clonePseudoElements2 = _interopRequireDefault(_clonePseudoElements);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var cov_zl3zuvj5o = function () {
    var path = '/Users/jhill/html-to-image/src/cloneNode.js',
        hash = '1e3c950ee2e3813787f423f2d77b7e4e9abf4fa5',
        Function = function () {}.constructor,
        global = new Function('return this')(),
        gcv = '__coverage__',
        coverageData = {
      path: '/Users/jhill/html-to-image/src/cloneNode.js',
      statementMap: {
        '0': {
          start: {
            line: 6,
            column: 2
          },
          end: {
            line: 12,
            column: 3
          }
        },
        '1': {
          start: {
            line: 7,
            column: 4
          },
          end: {
            line: 7,
            column: 46
          }
        },
        '2': {
          start: {
            line: 8,
            column: 9
          },
          end: {
            line: 12,
            column: 3
          }
        },
        '3': {
          start: {
            line: 9,
            column: 4
          },
          end: {
            line: 11,
            column: 24
          }
        },
        '4': {
          start: {
            line: 14,
            column: 2
          },
          end: {
            line: 14,
            column: 53
          }
        },
        '5': {
          start: {
            line: 22,
            column: 19
          },
          end: {
            line: 22,
            column: 49
          }
        },
        '6': {
          start: {
            line: 23,
            column: 2
          },
          end: {
            line: 25,
            column: 3
          }
        },
        '7': {
          start: {
            line: 24,
            column: 4
          },
          end: {
            line: 24,
            column: 38
          }
        },
        '8': {
          start: {
            line: 28,
            column: 2
          },
          end: {
            line: 35,
            column: 27
          }
        },
        '9': {
          start: {
            line: 28,
            column: 42
          },
          end: {
            line: 34,
            column: 6
          }
        },
        '10': {
          start: {
            line: 29,
            column: 16
          },
          end: {
            line: 29,
            column: 40
          }
        },
        '11': {
          start: {
            line: 31,
            column: 6
          },
          end: {
            line: 33,
            column: 7
          }
        },
        '12': {
          start: {
            line: 32,
            column: 8
          },
          end: {
            line: 32,
            column: 43
          }
        },
        '13': {
          start: {
            line: 35,
            column: 16
          },
          end: {
            line: 35,
            column: 26
          }
        },
        '14': {
          start: {
            line: 42,
            column: 17
          },
          end: {
            line: 42,
            column: 52
          }
        },
        '15': {
          start: {
            line: 43,
            column: 17
          },
          end: {
            line: 43,
            column: 33
          }
        },
        '16': {
          start: {
            line: 45,
            column: 2
          },
          end: {
            line: 56,
            column: 3
          }
        },
        '17': {
          start: {
            line: 46,
            column: 4
          },
          end: {
            line: 46,
            column: 35
          }
        },
        '18': {
          start: {
            line: 47,
            column: 4
          },
          end: {
            line: 47,
            column: 29
          }
        },
        '19': {
          start: {
            line: 49,
            column: 4
          },
          end: {
            line: 55,
            column: 6
          }
        },
        '20': {
          start: {
            line: 50,
            column: 6
          },
          end: {
            line: 54,
            column: 7
          }
        },
        '21': {
          start: {
            line: 63,
            column: 2
          },
          end: {
            line: 65,
            column: 3
          }
        },
        '22': {
          start: {
            line: 64,
            column: 4
          },
          end: {
            line: 64,
            column: 43
          }
        },
        '23': {
          start: {
            line: 67,
            column: 2
          },
          end: {
            line: 69,
            column: 3
          }
        },
        '24': {
          start: {
            line: 68,
            column: 4
          },
          end: {
            line: 68,
            column: 54
          }
        },
        '25': {
          start: {
            line: 76,
            column: 2
          },
          end: {
            line: 78,
            column: 3
          }
        },
        '26': {
          start: {
            line: 77,
            column: 4
          },
          end: {
            line: 77,
            column: 21
          }
        },
        '27': {
          start: {
            line: 80,
            column: 2
          },
          end: {
            line: 84,
            column: 27
          }
        },
        '28': {
          start: {
            line: 81,
            column: 16
          },
          end: {
            line: 81,
            column: 53
          }
        },
        '29': {
          start: {
            line: 82,
            column: 16
          },
          end: {
            line: 82,
            column: 59
          }
        },
        '30': {
          start: {
            line: 83,
            column: 16
          },
          end: {
            line: 83,
            column: 55
          }
        },
        '31': {
          start: {
            line: 84,
            column: 16
          },
          end: {
            line: 84,
            column: 26
          }
        },
        '32': {
          start: {
            line: 92,
            column: 2
          },
          end: {
            line: 94,
            column: 3
          }
        },
        '33': {
          start: {
            line: 93,
            column: 4
          },
          end: {
            line: 93,
            column: 28
          }
        },
        '34': {
          start: {
            line: 96,
            column: 2
          },
          end: {
            line: 99,
            column: 54
          }
        },
        '35': {
          start: {
            line: 98,
            column: 24
          },
          end: {
            line: 98,
            column: 66
          }
        },
        '36': {
          start: {
            line: 99,
            column: 24
          },
          end: {
            line: 99,
            column: 53
          }
        }
      },
      fnMap: {
        '0': {
          name: 'cloneSingleNode',
          decl: {
            start: {
              line: 5,
              column: 9
            },
            end: {
              line: 5,
              column: 24
            }
          },
          loc: {
            start: {
              line: 5,
              column: 72
            },
            end: {
              line: 15,
              column: 1
            }
          },
          line: 5
        },
        '1': {
          name: 'cloneChildren',
          decl: {
            start: {
              line: 17,
              column: 9
            },
            end: {
              line: 17,
              column: 22
            }
          },
          loc: {
            start: {
              line: 21,
              column: 24
            },
            end: {
              line: 36,
              column: 1
            }
          },
          line: 21
        },
        '2': {
          name: '(anonymous_2)',
          decl: {
            start: {
              line: 28,
              column: 25
            },
            end: {
              line: 28,
              column: 26
            }
          },
          loc: {
            start: {
              line: 28,
              column: 42
            },
            end: {
              line: 34,
              column: 6
            }
          },
          line: 28
        },
        '3': {
          name: '(anonymous_3)',
          decl: {
            start: {
              line: 29,
              column: 10
            },
            end: {
              line: 29,
              column: 11
            }
          },
          loc: {
            start: {
              line: 29,
              column: 16
            },
            end: {
              line: 29,
              column: 40
            }
          },
          line: 29
        },
        '4': {
          name: '(anonymous_4)',
          decl: {
            start: {
              line: 30,
              column: 10
            },
            end: {
              line: 30,
              column: 11
            }
          },
          loc: {
            start: {
              line: 30,
              column: 27
            },
            end: {
              line: 34,
              column: 5
            }
          },
          line: 30
        },
        '5': {
          name: '(anonymous_5)',
          decl: {
            start: {
              line: 35,
              column: 10
            },
            end: {
              line: 35,
              column: 11
            }
          },
          loc: {
            start: {
              line: 35,
              column: 16
            },
            end: {
              line: 35,
              column: 26
            }
          },
          line: 35
        },
        '6': {
          name: 'cloneCssStyle',
          decl: {
            start: {
              line: 38,
              column: 9
            },
            end: {
              line: 38,
              column: 22
            }
          },
          loc: {
            start: {
              line: 41,
              column: 2
            },
            end: {
              line: 57,
              column: 1
            }
          },
          line: 41
        },
        '7': {
          name: '(anonymous_7)',
          decl: {
            start: {
              line: 49,
              column: 28
            },
            end: {
              line: 49,
              column: 29
            }
          },
          loc: {
            start: {
              line: 49,
              column: 38
            },
            end: {
              line: 55,
              column: 5
            }
          },
          line: 49
        },
        '8': {
          name: 'cloneInputValue',
          decl: {
            start: {
              line: 59,
              column: 9
            },
            end: {
              line: 59,
              column: 24
            }
          },
          loc: {
            start: {
              line: 62,
              column: 2
            },
            end: {
              line: 70,
              column: 1
            }
          },
          line: 62
        },
        '9': {
          name: 'decorate',
          decl: {
            start: {
              line: 72,
              column: 9
            },
            end: {
              line: 72,
              column: 17
            }
          },
          loc: {
            start: {
              line: 75,
              column: 24
            },
            end: {
              line: 85,
              column: 1
            }
          },
          line: 75
        },
        '10': {
          name: '(anonymous_10)',
          decl: {
            start: {
              line: 81,
              column: 10
            },
            end: {
              line: 81,
              column: 11
            }
          },
          loc: {
            start: {
              line: 81,
              column: 16
            },
            end: {
              line: 81,
              column: 53
            }
          },
          line: 81
        },
        '11': {
          name: '(anonymous_11)',
          decl: {
            start: {
              line: 82,
              column: 10
            },
            end: {
              line: 82,
              column: 11
            }
          },
          loc: {
            start: {
              line: 82,
              column: 16
            },
            end: {
              line: 82,
              column: 59
            }
          },
          line: 82
        },
        '12': {
          name: '(anonymous_12)',
          decl: {
            start: {
              line: 83,
              column: 10
            },
            end: {
              line: 83,
              column: 11
            }
          },
          loc: {
            start: {
              line: 83,
              column: 16
            },
            end: {
              line: 83,
              column: 55
            }
          },
          line: 83
        },
        '13': {
          name: '(anonymous_13)',
          decl: {
            start: {
              line: 84,
              column: 10
            },
            end: {
              line: 84,
              column: 11
            }
          },
          loc: {
            start: {
              line: 84,
              column: 16
            },
            end: {
              line: 84,
              column: 26
            }
          },
          line: 84
        },
        '14': {
          name: 'cloneNode',
          decl: {
            start: {
              line: 87,
              column: 24
            },
            end: {
              line: 87,
              column: 33
            }
          },
          loc: {
            start: {
              line: 91,
              column: 24
            },
            end: {
              line: 100,
              column: 1
            }
          },
          line: 91
        },
        '15': {
          name: '(anonymous_15)',
          decl: {
            start: {
              line: 98,
              column: 10
            },
            end: {
              line: 98,
              column: 11
            }
          },
          loc: {
            start: {
              line: 98,
              column: 24
            },
            end: {
              line: 98,
              column: 66
            }
          },
          line: 98
        },
        '16': {
          name: '(anonymous_16)',
          decl: {
            start: {
              line: 99,
              column: 10
            },
            end: {
              line: 99,
              column: 11
            }
          },
          loc: {
            start: {
              line: 99,
              column: 24
            },
            end: {
              line: 99,
              column: 53
            }
          },
          line: 99
        }
      },
      branchMap: {
        '0': {
          loc: {
            start: {
              line: 6,
              column: 2
            },
            end: {
              line: 12,
              column: 3
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 6,
              column: 2
            },
            end: {
              line: 12,
              column: 3
            }
          }, {
            start: {
              line: 6,
              column: 2
            },
            end: {
              line: 12,
              column: 3
            }
          }],
          line: 6
        },
        '1': {
          loc: {
            start: {
              line: 8,
              column: 9
            },
            end: {
              line: 12,
              column: 3
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 8,
              column: 9
            },
            end: {
              line: 12,
              column: 3
            }
          }, {
            start: {
              line: 8,
              column: 9
            },
            end: {
              line: 12,
              column: 3
            }
          }],
          line: 8
        },
        '2': {
          loc: {
            start: {
              line: 8,
              column: 13
            },
            end: {
              line: 8,
              column: 77
            }
          },
          type: 'binary-expr',
          locations: [{
            start: {
              line: 8,
              column: 13
            },
            end: {
              line: 8,
              column: 31
            }
          }, {
            start: {
              line: 8,
              column: 35
            },
            end: {
              line: 8,
              column: 77
            }
          }],
          line: 8
        },
        '3': {
          loc: {
            start: {
              line: 23,
              column: 2
            },
            end: {
              line: 25,
              column: 3
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 23,
              column: 2
            },
            end: {
              line: 25,
              column: 3
            }
          }, {
            start: {
              line: 23,
              column: 2
            },
            end: {
              line: 25,
              column: 3
            }
          }],
          line: 23
        },
        '4': {
          loc: {
            start: {
              line: 31,
              column: 6
            },
            end: {
              line: 33,
              column: 7
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 31,
              column: 6
            },
            end: {
              line: 33,
              column: 7
            }
          }, {
            start: {
              line: 31,
              column: 6
            },
            end: {
              line: 33,
              column: 7
            }
          }],
          line: 31
        },
        '5': {
          loc: {
            start: {
              line: 45,
              column: 2
            },
            end: {
              line: 56,
              column: 3
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 45,
              column: 2
            },
            end: {
              line: 56,
              column: 3
            }
          }, {
            start: {
              line: 45,
              column: 2
            },
            end: {
              line: 56,
              column: 3
            }
          }],
          line: 45
        },
        '6': {
          loc: {
            start: {
              line: 63,
              column: 2
            },
            end: {
              line: 65,
              column: 3
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 63,
              column: 2
            },
            end: {
              line: 65,
              column: 3
            }
          }, {
            start: {
              line: 63,
              column: 2
            },
            end: {
              line: 65,
              column: 3
            }
          }],
          line: 63
        },
        '7': {
          loc: {
            start: {
              line: 67,
              column: 2
            },
            end: {
              line: 69,
              column: 3
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 67,
              column: 2
            },
            end: {
              line: 69,
              column: 3
            }
          }, {
            start: {
              line: 67,
              column: 2
            },
            end: {
              line: 69,
              column: 3
            }
          }],
          line: 67
        },
        '8': {
          loc: {
            start: {
              line: 76,
              column: 2
            },
            end: {
              line: 78,
              column: 3
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 76,
              column: 2
            },
            end: {
              line: 78,
              column: 3
            }
          }, {
            start: {
              line: 76,
              column: 2
            },
            end: {
              line: 78,
              column: 3
            }
          }],
          line: 76
        },
        '9': {
          loc: {
            start: {
              line: 92,
              column: 2
            },
            end: {
              line: 94,
              column: 3
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 92,
              column: 2
            },
            end: {
              line: 94,
              column: 3
            }
          }, {
            start: {
              line: 92,
              column: 2
            },
            end: {
              line: 94,
              column: 3
            }
          }],
          line: 92
        },
        '10': {
          loc: {
            start: {
              line: 92,
              column: 6
            },
            end: {
              line: 92,
              column: 43
            }
          },
          type: 'binary-expr',
          locations: [{
            start: {
              line: 92,
              column: 6
            },
            end: {
              line: 92,
              column: 13
            }
          }, {
            start: {
              line: 92,
              column: 17
            },
            end: {
              line: 92,
              column: 23
            }
          }, {
            start: {
              line: 92,
              column: 27
            },
            end: {
              line: 92,
              column: 43
            }
          }],
          line: 92
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
        '24': 0,
        '25': 0,
        '26': 0,
        '27': 0,
        '28': 0,
        '29': 0,
        '30': 0,
        '31': 0,
        '32': 0,
        '33': 0,
        '34': 0,
        '35': 0,
        '36': 0
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
        '11': 0,
        '12': 0,
        '13': 0,
        '14': 0,
        '15': 0,
        '16': 0
      },
      b: {
        '0': [0, 0],
        '1': [0, 0],
        '2': [0, 0],
        '3': [0, 0],
        '4': [0, 0],
        '5': [0, 0],
        '6': [0, 0],
        '7': [0, 0],
        '8': [0, 0],
        '9': [0, 0],
        '10': [0, 0, 0]
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

  function cloneSingleNode(nativeNode) {
    cov_zl3zuvj5o.f[0]++;
    cov_zl3zuvj5o.s[0]++;

    if (nativeNode instanceof HTMLCanvasElement) {
      cov_zl3zuvj5o.b[0][0]++;
      cov_zl3zuvj5o.s[1]++;

      return (0, _utils.createImage)(nativeNode.toDataURL());
    } else {
        cov_zl3zuvj5o.b[0][1]++;
        cov_zl3zuvj5o.s[2]++;
        if ((cov_zl3zuvj5o.b[2][0]++, nativeNode.tagName) && (cov_zl3zuvj5o.b[2][1]++, nativeNode.tagName.toLowerCase() === 'svg')) {
          cov_zl3zuvj5o.b[1][0]++;
          cov_zl3zuvj5o.s[3]++;

          return _promise2.default.resolve(nativeNode).then(_utils.svgToDataURL).then(_utils.createImage);
        } else {
          cov_zl3zuvj5o.b[1][1]++;
        }
      }cov_zl3zuvj5o.s[4]++;
    return _promise2.default.resolve(nativeNode.cloneNode(false));
  }

  function cloneChildren(nativeNode, clonedNode, filter) {
    cov_zl3zuvj5o.f[1]++;

    var children = (cov_zl3zuvj5o.s[5]++, (0, _utils.toArray)(nativeNode.childNodes));
    cov_zl3zuvj5o.s[6]++;
    if (children.length === 0) {
      cov_zl3zuvj5o.b[3][0]++;
      cov_zl3zuvj5o.s[7]++;

      return _promise2.default.resolve(clonedNode);
    } else {
      cov_zl3zuvj5o.b[3][1]++;
    }

    // clone children in order
    cov_zl3zuvj5o.s[8]++;
    return children.reduce(function (done, child) {
      cov_zl3zuvj5o.f[2]++;
      cov_zl3zuvj5o.s[9]++;
      return done.then(function () {
        cov_zl3zuvj5o.f[3]++;
        cov_zl3zuvj5o.s[10]++;
        return cloneNode(child, filter);
      }) // eslint-disable-line
      .then(function (clonedChild) {
        cov_zl3zuvj5o.f[4]++;
        cov_zl3zuvj5o.s[11]++;

        if (clonedChild) {
          cov_zl3zuvj5o.b[4][0]++;
          cov_zl3zuvj5o.s[12]++;

          clonedNode.appendChild(clonedChild);
        } else {
          cov_zl3zuvj5o.b[4][1]++;
        }
      });
    }, _promise2.default.resolve()).then(function () {
      cov_zl3zuvj5o.f[5]++;
      cov_zl3zuvj5o.s[13]++;
      return clonedNode;
    });
  }

  function cloneCssStyle(nativeNode, clonedNode) {
    cov_zl3zuvj5o.f[6]++;

    var source = (cov_zl3zuvj5o.s[14]++, window.getComputedStyle(nativeNode));
    var target = (cov_zl3zuvj5o.s[15]++, clonedNode.style);

    cov_zl3zuvj5o.s[16]++;
    if (source.cssText) {
      cov_zl3zuvj5o.b[5][0]++;
      cov_zl3zuvj5o.s[17]++;

      target.cssText = source.cssText;
      cov_zl3zuvj5o.s[18]++;
      target.font = source.font;
    } else {
      cov_zl3zuvj5o.b[5][1]++;
      cov_zl3zuvj5o.s[19]++;

      (0, _utils.toArray)(source).forEach(function (name) {
        cov_zl3zuvj5o.f[7]++;
        cov_zl3zuvj5o.s[20]++;

        target.setProperty(name, source.getPropertyValue(name), source.getPropertyPriority(name));
      });
    }
  }

  function cloneInputValue(nativeNode, clonedNode) {
    cov_zl3zuvj5o.f[8]++;
    cov_zl3zuvj5o.s[21]++;

    if (nativeNode instanceof HTMLTextAreaElement) {
      cov_zl3zuvj5o.b[6][0]++;
      cov_zl3zuvj5o.s[22]++;

      clonedNode.innerHTML = nativeNode.value;
    } else {
      cov_zl3zuvj5o.b[6][1]++;
    }

    cov_zl3zuvj5o.s[23]++;
    if (nativeNode instanceof HTMLInputElement) {
      cov_zl3zuvj5o.b[7][0]++;
      cov_zl3zuvj5o.s[24]++;

      clonedNode.setAttribute('value', nativeNode.value);
    } else {
      cov_zl3zuvj5o.b[7][1]++;
    }
  }

  function decorate(nativeNode, clonedNode) {
    cov_zl3zuvj5o.f[9]++;
    cov_zl3zuvj5o.s[25]++;

    if (!(clonedNode instanceof Element)) {
      cov_zl3zuvj5o.b[8][0]++;
      cov_zl3zuvj5o.s[26]++;

      return clonedNode;
    } else {
      cov_zl3zuvj5o.b[8][1]++;
    }

    cov_zl3zuvj5o.s[27]++;
    return _promise2.default.resolve().then(function () {
      cov_zl3zuvj5o.f[10]++;
      cov_zl3zuvj5o.s[28]++;
      return cloneCssStyle(nativeNode, clonedNode);
    }).then(function () {
      cov_zl3zuvj5o.f[11]++;
      cov_zl3zuvj5o.s[29]++;
      return (0, _clonePseudoElements2.default)(nativeNode, clonedNode);
    }).then(function () {
      cov_zl3zuvj5o.f[12]++;
      cov_zl3zuvj5o.s[30]++;
      return cloneInputValue(nativeNode, clonedNode);
    }).then(function () {
      cov_zl3zuvj5o.f[13]++;
      cov_zl3zuvj5o.s[31]++;
      return clonedNode;
    });
  }

  function cloneNode(domNode, filter, isRoot) {
    cov_zl3zuvj5o.f[14]++;
    cov_zl3zuvj5o.s[32]++;

    if ((cov_zl3zuvj5o.b[10][0]++, !isRoot) && (cov_zl3zuvj5o.b[10][1]++, filter) && (cov_zl3zuvj5o.b[10][2]++, !filter(domNode))) {
      cov_zl3zuvj5o.b[9][0]++;
      cov_zl3zuvj5o.s[33]++;

      return _promise2.default.resolve();
    } else {
      cov_zl3zuvj5o.b[9][1]++;
    }

    cov_zl3zuvj5o.s[34]++;
    return _promise2.default.resolve(domNode).then(cloneSingleNode).then(function (clonedNode) {
      cov_zl3zuvj5o.f[15]++;
      cov_zl3zuvj5o.s[35]++;
      return cloneChildren(domNode, clonedNode, filter);
    }).then(function (clonedNode) {
      cov_zl3zuvj5o.f[16]++;
      cov_zl3zuvj5o.s[36]++;
      return decorate(domNode, clonedNode);
    });
  }
});