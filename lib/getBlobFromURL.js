(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'babel-runtime/core-js/promise', './utils'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('babel-runtime/core-js/promise'), require('./utils'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.promise, global.utils);
    global.getBlobFromURL = mod.exports;
  }
})(this, function (exports, _promise, _utils) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = getBlobFromURL;

  var _promise2 = _interopRequireDefault(_promise);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var cov_25h8wgyrt = function () {
    var path = '/Users/jhill/html-to-image/src/getBlobFromURL.js',
        hash = 'd81d0f6166c6c3dbe0f792f57cb1376851aa8da1',
        Function = function () {}.constructor,
        global = new Function('return this')(),
        gcv = '__coverage__',
        coverageData = {
      path: '/Users/jhill/html-to-image/src/getBlobFromURL.js',
      statementMap: {
        '0': {
          start: {
            line: 4,
            column: 16
          },
          end: {
            line: 4,
            column: 21
          }
        },
        '1': {
          start: {
            line: 15,
            column: 2
          },
          end: {
            line: 17,
            column: 3
          }
        },
        '2': {
          start: {
            line: 16,
            column: 4
          },
          end: {
            line: 16,
            column: 66
          }
        },
        '3': {
          start: {
            line: 19,
            column: 17
          },
          end: {
            line: 39,
            column: 3
          }
        },
        '4': {
          start: {
            line: 20,
            column: 22
          },
          end: {
            line: 20,
            column: 24
          }
        },
        '5': {
          start: {
            line: 21,
            column: 4
          },
          end: {
            line: 26,
            column: 5
          }
        },
        '6': {
          start: {
            line: 22,
            column: 20
          },
          end: {
            line: 22,
            column: 55
          }
        },
        '7': {
          start: {
            line: 23,
            column: 6
          },
          end: {
            line: 25,
            column: 7
          }
        },
        '8': {
          start: {
            line: 24,
            column: 8
          },
          end: {
            line: 24,
            column: 30
          }
        },
        '9': {
          start: {
            line: 28,
            column: 14
          },
          end: {
            line: 28,
            column: 48
          }
        },
        '10': {
          start: {
            line: 30,
            column: 4
          },
          end: {
            line: 32,
            column: 5
          }
        },
        '11': {
          start: {
            line: 31,
            column: 6
          },
          end: {
            line: 31,
            column: 55
          }
        },
        '12': {
          start: {
            line: 34,
            column: 4
          },
          end: {
            line: 36,
            column: 5
          }
        },
        '13': {
          start: {
            line: 35,
            column: 6
          },
          end: {
            line: 35,
            column: 24
          }
        },
        '14': {
          start: {
            line: 38,
            column: 4
          },
          end: {
            line: 38,
            column: 22
          }
        },
        '15': {
          start: {
            line: 41,
            column: 19
          },
          end: {
            line: 87,
            column: 7
          }
        },
        '16': {
          start: {
            line: 44,
            column: 24
          },
          end: {
            line: 44,
            column: 39
          }
        },
        '17': {
          start: {
            line: 45,
            column: 20
          },
          end: {
            line: 50,
            column: 8
          }
        },
        '18': {
          start: {
            line: 46,
            column: 23
          },
          end: {
            line: 46,
            column: 39
          }
        },
        '19': {
          start: {
            line: 47,
            column: 8
          },
          end: {
            line: 47,
            column: 55
          }
        },
        '20': {
          start: {
            line: 47,
            column: 33
          },
          end: {
            line: 47,
            column: 55
          }
        },
        '21': {
          start: {
            line: 48,
            column: 8
          },
          end: {
            line: 48,
            column: 31
          }
        },
        '22': {
          start: {
            line: 49,
            column: 8
          },
          end: {
            line: 49,
            column: 34
          }
        },
        '23': {
          start: {
            line: 52,
            column: 19
          },
          end: {
            line: 54,
            column: 8
          }
        },
        '24': {
          start: {
            line: 53,
            column: 8
          },
          end: {
            line: 53,
            column: 16
          }
        },
        '25': {
          start: {
            line: 58,
            column: 18
          },
          end: {
            line: 58,
            column: 38
          }
        },
        '26': {
          start: {
            line: 60,
            column: 22
          },
          end: {
            line: 62,
            column: 7
          }
        },
        '27': {
          start: {
            line: 61,
            column: 8
          },
          end: {
            line: 61,
            column: 92
          }
        },
        '28': {
          start: {
            line: 64,
            column: 19
          },
          end: {
            line: 79,
            column: 7
          }
        },
        '29': {
          start: {
            line: 65,
            column: 8
          },
          end: {
            line: 67,
            column: 9
          }
        },
        '30': {
          start: {
            line: 66,
            column: 10
          },
          end: {
            line: 66,
            column: 16
          }
        },
        '31': {
          start: {
            line: 69,
            column: 8
          },
          end: {
            line: 72,
            column: 9
          }
        },
        '32': {
          start: {
            line: 70,
            column: 10
          },
          end: {
            line: 70,
            column: 86
          }
        },
        '33': {
          start: {
            line: 71,
            column: 10
          },
          end: {
            line: 71,
            column: 16
          }
        },
        '34': {
          start: {
            line: 74,
            column: 24
          },
          end: {
            line: 74,
            column: 40
          }
        },
        '35': {
          start: {
            line: 75,
            column: 8
          },
          end: {
            line: 77,
            column: 9
          }
        },
        '36': {
          start: {
            line: 76,
            column: 10
          },
          end: {
            line: 76,
            column: 52
          }
        },
        '37': {
          start: {
            line: 78,
            column: 8
          },
          end: {
            line: 78,
            column: 43
          }
        },
        '38': {
          start: {
            line: 81,
            column: 6
          },
          end: {
            line: 81,
            column: 35
          }
        },
        '39': {
          start: {
            line: 82,
            column: 6
          },
          end: {
            line: 82,
            column: 29
          }
        },
        '40': {
          start: {
            line: 83,
            column: 6
          },
          end: {
            line: 83,
            column: 31
          }
        },
        '41': {
          start: {
            line: 84,
            column: 6
          },
          end: {
            line: 84,
            column: 27
          }
        },
        '42': {
          start: {
            line: 85,
            column: 6
          },
          end: {
            line: 85,
            column: 32
          }
        },
        '43': {
          start: {
            line: 86,
            column: 6
          },
          end: {
            line: 86,
            column: 16
          }
        },
        '44': {
          start: {
            line: 89,
            column: 2
          },
          end: {
            line: 89,
            column: 31
          }
        }
      },
      fnMap: {
        '0': {
          name: 'getBlobFromURL',
          decl: {
            start: {
              line: 12,
              column: 24
            },
            end: {
              line: 12,
              column: 38
            }
          },
          loc: {
            start: {
              line: 12,
              column: 84
            },
            end: {
              line: 90,
              column: 1
            }
          },
          line: 12
        },
        '1': {
          name: '(anonymous_1)',
          decl: {
            start: {
              line: 19,
              column: 17
            },
            end: {
              line: 19,
              column: 18
            }
          },
          loc: {
            start: {
              line: 19,
              column: 26
            },
            end: {
              line: 39,
              column: 3
            }
          },
          line: 19
        },
        '2': {
          name: '(anonymous_2)',
          decl: {
            start: {
              line: 44,
              column: 12
            },
            end: {
              line: 44,
              column: 13
            }
          },
          loc: {
            start: {
              line: 44,
              column: 24
            },
            end: {
              line: 44,
              column: 39
            }
          },
          line: 44
        },
        '3': {
          name: '(anonymous_3)',
          decl: {
            start: {
              line: 45,
              column: 12
            },
            end: {
              line: 45,
              column: 13
            }
          },
          loc: {
            start: {
              line: 45,
              column: 20
            },
            end: {
              line: 50,
              column: 8
            }
          },
          line: 45
        },
        '4': {
          name: '(anonymous_4)',
          decl: {
            start: {
              line: 45,
              column: 32
            },
            end: {
              line: 45,
              column: 33
            }
          },
          loc: {
            start: {
              line: 45,
              column: 53
            },
            end: {
              line: 50,
              column: 7
            }
          },
          line: 45
        },
        '5': {
          name: '(anonymous_5)',
          decl: {
            start: {
              line: 47,
              column: 27
            },
            end: {
              line: 47,
              column: 28
            }
          },
          loc: {
            start: {
              line: 47,
              column: 33
            },
            end: {
              line: 47,
              column: 55
            }
          },
          line: 47
        },
        '6': {
          name: '(anonymous_6)',
          decl: {
            start: {
              line: 52,
              column: 13
            },
            end: {
              line: 52,
              column: 14
            }
          },
          loc: {
            start: {
              line: 52,
              column: 19
            },
            end: {
              line: 54,
              column: 8
            }
          },
          line: 52
        },
        '7': {
          name: '(anonymous_7)',
          decl: {
            start: {
              line: 52,
              column: 31
            },
            end: {
              line: 52,
              column: 32
            }
          },
          loc: {
            start: {
              line: 52,
              column: 52
            },
            end: {
              line: 54,
              column: 7
            }
          },
          line: 52
        },
        '8': {
          name: '(anonymous_8)',
          decl: {
            start: {
              line: 57,
              column: 19
            },
            end: {
              line: 57,
              column: 20
            }
          },
          loc: {
            start: {
              line: 57,
              column: 40
            },
            end: {
              line: 87,
              column: 5
            }
          },
          line: 57
        },
        '9': {
          name: '(anonymous_9)',
          decl: {
            start: {
              line: 60,
              column: 22
            },
            end: {
              line: 60,
              column: 23
            }
          },
          loc: {
            start: {
              line: 60,
              column: 28
            },
            end: {
              line: 62,
              column: 7
            }
          },
          line: 60
        },
        '10': {
          name: '(anonymous_10)',
          decl: {
            start: {
              line: 64,
              column: 19
            },
            end: {
              line: 64,
              column: 20
            }
          },
          loc: {
            start: {
              line: 64,
              column: 25
            },
            end: {
              line: 79,
              column: 7
            }
          },
          line: 64
        },
        '11': {
          name: '(anonymous_11)',
          decl: {
            start: {
              line: 75,
              column: 28
            },
            end: {
              line: 75,
              column: 29
            }
          },
          loc: {
            start: {
              line: 75,
              column: 34
            },
            end: {
              line: 77,
              column: 9
            }
          },
          line: 75
        }
      },
      branchMap: {
        '0': {
          loc: {
            start: {
              line: 15,
              column: 2
            },
            end: {
              line: 17,
              column: 3
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 15,
              column: 2
            },
            end: {
              line: 17,
              column: 3
            }
          }, {
            start: {
              line: 15,
              column: 2
            },
            end: {
              line: 17,
              column: 3
            }
          }],
          line: 15
        },
        '1': {
          loc: {
            start: {
              line: 16,
              column: 12
            },
            end: {
              line: 16,
              column: 40
            }
          },
          type: 'cond-expr',
          locations: [{
            start: {
              line: 16,
              column: 31
            },
            end: {
              line: 16,
              column: 34
            }
          }, {
            start: {
              line: 16,
              column: 37
            },
            end: {
              line: 16,
              column: 40
            }
          }],
          line: 16
        },
        '2': {
          loc: {
            start: {
              line: 21,
              column: 4
            },
            end: {
              line: 26,
              column: 5
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 21,
              column: 4
            },
            end: {
              line: 26,
              column: 5
            }
          }, {
            start: {
              line: 21,
              column: 4
            },
            end: {
              line: 26,
              column: 5
            }
          }],
          line: 21
        },
        '3': {
          loc: {
            start: {
              line: 23,
              column: 6
            },
            end: {
              line: 25,
              column: 7
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 23,
              column: 6
            },
            end: {
              line: 25,
              column: 7
            }
          }, {
            start: {
              line: 23,
              column: 6
            },
            end: {
              line: 25,
              column: 7
            }
          }],
          line: 23
        },
        '4': {
          loc: {
            start: {
              line: 23,
              column: 10
            },
            end: {
              line: 23,
              column: 27
            }
          },
          type: 'binary-expr',
          locations: [{
            start: {
              line: 23,
              column: 10
            },
            end: {
              line: 23,
              column: 15
            }
          }, {
            start: {
              line: 23,
              column: 19
            },
            end: {
              line: 23,
              column: 27
            }
          }],
          line: 23
        },
        '5': {
          loc: {
            start: {
              line: 30,
              column: 4
            },
            end: {
              line: 32,
              column: 5
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 30,
              column: 4
            },
            end: {
              line: 32,
              column: 5
            }
          }, {
            start: {
              line: 30,
              column: 4
            },
            end: {
              line: 32,
              column: 5
            }
          }],
          line: 30
        },
        '6': {
          loc: {
            start: {
              line: 31,
              column: 12
            },
            end: {
              line: 31,
              column: 55
            }
          },
          type: 'cond-expr',
          locations: [{
            start: {
              line: 31,
              column: 38
            },
            end: {
              line: 31,
              column: 41
            }
          }, {
            start: {
              line: 31,
              column: 44
            },
            end: {
              line: 31,
              column: 55
            }
          }],
          line: 31
        },
        '7': {
          loc: {
            start: {
              line: 34,
              column: 4
            },
            end: {
              line: 36,
              column: 5
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 34,
              column: 4
            },
            end: {
              line: 36,
              column: 5
            }
          }, {
            start: {
              line: 34,
              column: 4
            },
            end: {
              line: 36,
              column: 5
            }
          }],
          line: 34
        },
        '8': {
          loc: {
            start: {
              line: 41,
              column: 19
            },
            end: {
              line: 87,
              column: 7
            }
          },
          type: 'cond-expr',
          locations: [{
            start: {
              line: 43,
              column: 6
            },
            end: {
              line: 54,
              column: 9
            }
          }, {
            start: {
              line: 57,
              column: 6
            },
            end: {
              line: 87,
              column: 7
            }
          }],
          line: 41
        },
        '9': {
          loc: {
            start: {
              line: 65,
              column: 8
            },
            end: {
              line: 67,
              column: 9
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 65,
              column: 8
            },
            end: {
              line: 67,
              column: 9
            }
          }, {
            start: {
              line: 65,
              column: 8
            },
            end: {
              line: 67,
              column: 9
            }
          }],
          line: 65
        },
        '10': {
          loc: {
            start: {
              line: 69,
              column: 8
            },
            end: {
              line: 72,
              column: 9
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 69,
              column: 8
            },
            end: {
              line: 72,
              column: 9
            }
          }, {
            start: {
              line: 69,
              column: 8
            },
            end: {
              line: 72,
              column: 9
            }
          }],
          line: 69
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
        '36': 0,
        '37': 0,
        '38': 0,
        '39': 0,
        '40': 0,
        '41': 0,
        '42': 0,
        '43': 0,
        '44': 0
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
        '3': [0, 0],
        '4': [0, 0],
        '5': [0, 0],
        '6': [0, 0],
        '7': [0, 0],
        '8': [0, 0],
        '9': [0, 0],
        '10': [0, 0]
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

  var TIMEOUT = (cov_25h8wgyrt.s[0]++, 30000);

  // KNOWN ISSUE
  // -----------
  // Can not handle redirect-url, such as when access 'http://something.com/avatar.png'
  // will redirect to 'http://something.com/65fc2ffcc8aea7ba65a1d1feda173540'


  function getBlobFromURL(url, options) {
    cov_25h8wgyrt.f[0]++;
    cov_25h8wgyrt.s[1]++;

    // cache bypass so we dont have CORS issues with cached images
    // ref: https://developer.mozilla.org/en/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest#Bypassing_the_cache
    if (options.cacheBust) {
      cov_25h8wgyrt.b[0][0]++;
      cov_25h8wgyrt.s[2]++;

      url += (/\?/.test(url) ? (cov_25h8wgyrt.b[1][0]++, '&') : (cov_25h8wgyrt.b[1][1]++, '?')) + new Date().getTime(); // eslint-disable-line
    } else {
      cov_25h8wgyrt.b[0][1]++;
    }

    cov_25h8wgyrt.s[3]++;
    var failed = function failed(err) {
      cov_25h8wgyrt.f[1]++;

      var placeholder = (cov_25h8wgyrt.s[4]++, '');
      cov_25h8wgyrt.s[5]++;
      if (options.imagePlaceholder) {
        cov_25h8wgyrt.b[2][0]++;

        var split = (cov_25h8wgyrt.s[6]++, options.imagePlaceholder.split(/,/));
        cov_25h8wgyrt.s[7]++;
        if ((cov_25h8wgyrt.b[4][0]++, split) && (cov_25h8wgyrt.b[4][1]++, split[1])) {
          cov_25h8wgyrt.b[3][0]++;
          cov_25h8wgyrt.s[8]++;

          placeholder = split[1]; // eslint-disable-line
        } else {
          cov_25h8wgyrt.b[3][1]++;
        }
      } else {
        cov_25h8wgyrt.b[2][1]++;
      }

      var msg = (cov_25h8wgyrt.s[9]++, 'Failed to fetch resource: ' + url);

      cov_25h8wgyrt.s[10]++;
      if (err) {
        cov_25h8wgyrt.b[5][0]++;
        cov_25h8wgyrt.s[11]++;

        msg = typeof err === 'string' ? (cov_25h8wgyrt.b[6][0]++, err) : (cov_25h8wgyrt.b[6][1]++, err.message);
      } else {
        cov_25h8wgyrt.b[5][1]++;
      }

      cov_25h8wgyrt.s[12]++;
      if (msg) {
        cov_25h8wgyrt.b[7][0]++;
        cov_25h8wgyrt.s[13]++;

        console.error(msg); // eslint-disable-line
      } else {
        cov_25h8wgyrt.b[7][1]++;
      }

      cov_25h8wgyrt.s[14]++;
      return placeholder;
    };

    var deferred = (cov_25h8wgyrt.s[15]++, window.fetch
    // fetch
    ? (cov_25h8wgyrt.b[8][0]++, window.fetch(url).then(function (response) {
      cov_25h8wgyrt.f[2]++;
      cov_25h8wgyrt.s[16]++;
      return response.blob();
    }).then(function (blob) {
      cov_25h8wgyrt.f[3]++;
      cov_25h8wgyrt.s[17]++;
      return new _promise2.default(function (resolve, reject) {
        cov_25h8wgyrt.f[4]++;

        var reader = (cov_25h8wgyrt.s[18]++, new FileReader());
        cov_25h8wgyrt.s[19]++;
        reader.onloadend = function () {
          cov_25h8wgyrt.f[5]++;
          cov_25h8wgyrt.s[20]++;
          return resolve(reader.result);
        };
        cov_25h8wgyrt.s[21]++;
        reader.onerror = reject;
        cov_25h8wgyrt.s[22]++;
        reader.readAsDataURL(blob);
      });
    }).then(_utils.getDataURLContent).catch(function () {
      cov_25h8wgyrt.f[6]++;
      cov_25h8wgyrt.s[23]++;
      return new _promise2.default(function (resolve, reject) {
        cov_25h8wgyrt.f[7]++;
        cov_25h8wgyrt.s[24]++;

        reject();
      });
    })) : (cov_25h8wgyrt.b[8][1]++, new _promise2.default(function (resolve, reject) {
      cov_25h8wgyrt.f[8]++;

      var req = (cov_25h8wgyrt.s[25]++, new XMLHttpRequest());

      cov_25h8wgyrt.s[26]++;
      var timeout = function timeout() {
        cov_25h8wgyrt.f[9]++;
        cov_25h8wgyrt.s[27]++;

        reject(new Error('Timeout of ' + TIMEOUT + 'ms occured while fetching resource: ' + url));
      };

      cov_25h8wgyrt.s[28]++;
      var done = function done() {
        cov_25h8wgyrt.f[10]++;
        cov_25h8wgyrt.s[29]++;

        if (req.readyState !== 4) {
          cov_25h8wgyrt.b[9][0]++;
          cov_25h8wgyrt.s[30]++;

          return;
        } else {
          cov_25h8wgyrt.b[9][1]++;
        }

        cov_25h8wgyrt.s[31]++;
        if (req.status !== 200) {
          cov_25h8wgyrt.b[10][0]++;
          cov_25h8wgyrt.s[32]++;

          reject(new Error('Failed to fetch resource: ' + url + ', status: ' + req.status));
          cov_25h8wgyrt.s[33]++;
          return;
        } else {
          cov_25h8wgyrt.b[10][1]++;
        }

        var encoder = (cov_25h8wgyrt.s[34]++, new FileReader());
        cov_25h8wgyrt.s[35]++;
        encoder.onloadend = function () {
          cov_25h8wgyrt.f[11]++;
          cov_25h8wgyrt.s[36]++;

          resolve((0, _utils.getDataURLContent)(encoder.result));
        };
        cov_25h8wgyrt.s[37]++;
        encoder.readAsDataURL(req.response);
      };

      cov_25h8wgyrt.s[38]++;
      req.onreadystatechange = done;
      cov_25h8wgyrt.s[39]++;
      req.ontimeout = timeout;
      cov_25h8wgyrt.s[40]++;
      req.responseType = 'blob';
      cov_25h8wgyrt.s[41]++;
      req.timeout = TIMEOUT;
      cov_25h8wgyrt.s[42]++;
      req.open('GET', url, true);
      cov_25h8wgyrt.s[43]++;
      req.send();
    })));

    cov_25h8wgyrt.s[44]++;
    return deferred.catch(failed);
  }
});