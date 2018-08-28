(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', './cloneNode', './embedWebFonts', './embedImages', './createSvgDataURL', './applyStyleWithOptions', './utils'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('./cloneNode'), require('./embedWebFonts'), require('./embedImages'), require('./createSvgDataURL'), require('./applyStyleWithOptions'), require('./utils'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.cloneNode, global.embedWebFonts, global.embedImages, global.createSvgDataURL, global.applyStyleWithOptions, global.utils);
    global.index = mod.exports;
  }
})(this, function (exports, _cloneNode, _embedWebFonts, _embedImages, _createSvgDataURL, _applyStyleWithOptions, _utils) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.toSvgDataURL = toSvgDataURL;
  exports.toCanvas = toCanvas;
  exports.toPixelData = toPixelData;
  exports.toPng = toPng;
  exports.toJpeg = toJpeg;
  exports.toBlob = toBlob;

  var _cloneNode2 = _interopRequireDefault(_cloneNode);

  var _embedWebFonts2 = _interopRequireDefault(_embedWebFonts);

  var _embedImages2 = _interopRequireDefault(_embedImages);

  var _createSvgDataURL2 = _interopRequireDefault(_createSvgDataURL);

  var _applyStyleWithOptions2 = _interopRequireDefault(_applyStyleWithOptions);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var cov_2rk1c336x5 = function () {
    var path = '/Users/jhill/html-to-image/src/index.js',
        hash = '801a5a425bc0a4f2d869ca93d127ed49497eacfa',
        Function = function () {}.constructor,
        global = new Function('return this')(),
        gcv = '__coverage__',
        coverageData = {
      path: '/Users/jhill/html-to-image/src/index.js',
      statementMap: {
        '0': {
          start: {
            line: 29,
            column: 16
          },
          end: {
            line: 29,
            column: 54
          }
        },
        '1': {
          start: {
            line: 30,
            column: 17
          },
          end: {
            line: 30,
            column: 57
          }
        },
        '2': {
          start: {
            line: 32,
            column: 2
          },
          end: {
            line: 36,
            column: 68
          }
        },
        '3': {
          start: {
            line: 33,
            column: 24
          },
          end: {
            line: 33,
            column: 58
          }
        },
        '4': {
          start: {
            line: 34,
            column: 24
          },
          end: {
            line: 34,
            column: 56
          }
        },
        '5': {
          start: {
            line: 35,
            column: 24
          },
          end: {
            line: 35,
            column: 66
          }
        },
        '6': {
          start: {
            line: 36,
            column: 24
          },
          end: {
            line: 36,
            column: 67
          }
        },
        '7': {
          start: {
            line: 43,
            column: 2
          },
          end: {
            line: 68,
            column: 6
          }
        },
        '8': {
          start: {
            line: 47,
            column: 21
          },
          end: {
            line: 47,
            column: 53
          }
        },
        '9': {
          start: {
            line: 48,
            column: 22
          },
          end: {
            line: 48,
            column: 45
          }
        },
        '10': {
          start: {
            line: 50,
            column: 20
          },
          end: {
            line: 50,
            column: 58
          }
        },
        '11': {
          start: {
            line: 51,
            column: 21
          },
          end: {
            line: 51,
            column: 61
          }
        },
        '12': {
          start: {
            line: 52,
            column: 20
          },
          end: {
            line: 52,
            column: 42
          }
        },
        '13': {
          start: {
            line: 54,
            column: 6
          },
          end: {
            line: 54,
            column: 34
          }
        },
        '14': {
          start: {
            line: 55,
            column: 6
          },
          end: {
            line: 55,
            column: 36
          }
        },
        '15': {
          start: {
            line: 56,
            column: 6
          },
          end: {
            line: 56,
            column: 32
          }
        },
        '16': {
          start: {
            line: 57,
            column: 6
          },
          end: {
            line: 57,
            column: 34
          }
        },
        '17': {
          start: {
            line: 58,
            column: 6
          },
          end: {
            line: 58,
            column: 33
          }
        },
        '18': {
          start: {
            line: 60,
            column: 6
          },
          end: {
            line: 63,
            column: 7
          }
        },
        '19': {
          start: {
            line: 61,
            column: 8
          },
          end: {
            line: 61,
            column: 51
          }
        },
        '20': {
          start: {
            line: 62,
            column: 8
          },
          end: {
            line: 62,
            column: 59
          }
        },
        '21': {
          start: {
            line: 65,
            column: 6
          },
          end: {
            line: 65,
            column: 36
          }
        },
        '22': {
          start: {
            line: 67,
            column: 6
          },
          end: {
            line: 67,
            column: 19
          }
        },
        '23': {
          start: {
            line: 75,
            column: 16
          },
          end: {
            line: 75,
            column: 54
          }
        },
        '24': {
          start: {
            line: 76,
            column: 17
          },
          end: {
            line: 76,
            column: 57
          }
        },
        '25': {
          start: {
            line: 78,
            column: 2
          },
          end: {
            line: 81,
            column: 6
          }
        },
        '26': {
          start: {
            line: 80,
            column: 6
          },
          end: {
            line: 80,
            column: 68
          }
        },
        '27': {
          start: {
            line: 88,
            column: 2
          },
          end: {
            line: 90,
            column: 4
          }
        },
        '28': {
          start: {
            line: 89,
            column: 4
          },
          end: {
            line: 89,
            column: 22
          }
        },
        '29': {
          start: {
            line: 97,
            column: 2
          },
          end: {
            line: 99,
            column: 4
          }
        },
        '30': {
          start: {
            line: 98,
            column: 4
          },
          end: {
            line: 98,
            column: 56
          }
        },
        '31': {
          start: {
            line: 106,
            column: 2
          },
          end: {
            line: 106,
            column: 54
          }
        }
      },
      fnMap: {
        '0': {
          name: 'toSvgDataURL',
          decl: {
            start: {
              line: 25,
              column: 16
            },
            end: {
              line: 25,
              column: 28
            }
          },
          loc: {
            start: {
              line: 28,
              column: 19
            },
            end: {
              line: 37,
              column: 1
            }
          },
          line: 28
        },
        '1': {
          name: '(anonymous_1)',
          decl: {
            start: {
              line: 33,
              column: 10
            },
            end: {
              line: 33,
              column: 11
            }
          },
          loc: {
            start: {
              line: 33,
              column: 24
            },
            end: {
              line: 33,
              column: 58
            }
          },
          line: 33
        },
        '2': {
          name: '(anonymous_2)',
          decl: {
            start: {
              line: 34,
              column: 10
            },
            end: {
              line: 34,
              column: 11
            }
          },
          loc: {
            start: {
              line: 34,
              column: 24
            },
            end: {
              line: 34,
              column: 56
            }
          },
          line: 34
        },
        '3': {
          name: '(anonymous_3)',
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
              column: 24
            },
            end: {
              line: 35,
              column: 66
            }
          },
          line: 35
        },
        '4': {
          name: '(anonymous_4)',
          decl: {
            start: {
              line: 36,
              column: 10
            },
            end: {
              line: 36,
              column: 11
            }
          },
          loc: {
            start: {
              line: 36,
              column: 24
            },
            end: {
              line: 36,
              column: 67
            }
          },
          line: 36
        },
        '5': {
          name: 'toCanvas',
          decl: {
            start: {
              line: 39,
              column: 16
            },
            end: {
              line: 39,
              column: 24
            }
          },
          loc: {
            start: {
              line: 42,
              column: 30
            },
            end: {
              line: 69,
              column: 1
            }
          },
          line: 42
        },
        '6': {
          name: '(anonymous_6)',
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
              column: 21
            },
            end: {
              line: 68,
              column: 5
            }
          },
          line: 46
        },
        '7': {
          name: 'toPixelData',
          decl: {
            start: {
              line: 71,
              column: 16
            },
            end: {
              line: 71,
              column: 27
            }
          },
          loc: {
            start: {
              line: 74,
              column: 18
            },
            end: {
              line: 82,
              column: 1
            }
          },
          line: 74
        },
        '8': {
          name: '(anonymous_8)',
          decl: {
            start: {
              line: 79,
              column: 10
            },
            end: {
              line: 79,
              column: 11
            }
          },
          loc: {
            start: {
              line: 80,
              column: 6
            },
            end: {
              line: 80,
              column: 68
            }
          },
          line: 80
        },
        '9': {
          name: 'toPng',
          decl: {
            start: {
              line: 84,
              column: 16
            },
            end: {
              line: 84,
              column: 21
            }
          },
          loc: {
            start: {
              line: 87,
              column: 19
            },
            end: {
              line: 91,
              column: 1
            }
          },
          line: 87
        },
        '10': {
          name: '(anonymous_10)',
          decl: {
            start: {
              line: 88,
              column: 41
            },
            end: {
              line: 88,
              column: 42
            }
          },
          loc: {
            start: {
              line: 89,
              column: 4
            },
            end: {
              line: 89,
              column: 22
            }
          },
          line: 89
        },
        '11': {
          name: 'toJpeg',
          decl: {
            start: {
              line: 93,
              column: 16
            },
            end: {
              line: 93,
              column: 22
            }
          },
          loc: {
            start: {
              line: 96,
              column: 19
            },
            end: {
              line: 100,
              column: 1
            }
          },
          line: 96
        },
        '12': {
          name: '(anonymous_12)',
          decl: {
            start: {
              line: 97,
              column: 41
            },
            end: {
              line: 97,
              column: 42
            }
          },
          loc: {
            start: {
              line: 98,
              column: 4
            },
            end: {
              line: 98,
              column: 56
            }
          },
          line: 98
        },
        '13': {
          name: 'toBlob',
          decl: {
            start: {
              line: 102,
              column: 16
            },
            end: {
              line: 102,
              column: 22
            }
          },
          loc: {
            start: {
              line: 105,
              column: 17
            },
            end: {
              line: 107,
              column: 1
            }
          },
          line: 105
        }
      },
      branchMap: {
        '0': {
          loc: {
            start: {
              line: 27,
              column: 2
            },
            end: {
              line: 27,
              column: 23
            }
          },
          type: 'default-arg',
          locations: [{
            start: {
              line: 27,
              column: 21
            },
            end: {
              line: 27,
              column: 23
            }
          }],
          line: 27
        },
        '1': {
          loc: {
            start: {
              line: 29,
              column: 16
            },
            end: {
              line: 29,
              column: 54
            }
          },
          type: 'binary-expr',
          locations: [{
            start: {
              line: 29,
              column: 16
            },
            end: {
              line: 29,
              column: 29
            }
          }, {
            start: {
              line: 29,
              column: 33
            },
            end: {
              line: 29,
              column: 54
            }
          }],
          line: 29
        },
        '2': {
          loc: {
            start: {
              line: 30,
              column: 17
            },
            end: {
              line: 30,
              column: 57
            }
          },
          type: 'binary-expr',
          locations: [{
            start: {
              line: 30,
              column: 17
            },
            end: {
              line: 30,
              column: 31
            }
          }, {
            start: {
              line: 30,
              column: 35
            },
            end: {
              line: 30,
              column: 57
            }
          }],
          line: 30
        },
        '3': {
          loc: {
            start: {
              line: 41,
              column: 2
            },
            end: {
              line: 41,
              column: 23
            }
          },
          type: 'default-arg',
          locations: [{
            start: {
              line: 41,
              column: 21
            },
            end: {
              line: 41,
              column: 23
            }
          }],
          line: 41
        },
        '4': {
          loc: {
            start: {
              line: 50,
              column: 20
            },
            end: {
              line: 50,
              column: 58
            }
          },
          type: 'binary-expr',
          locations: [{
            start: {
              line: 50,
              column: 20
            },
            end: {
              line: 50,
              column: 33
            }
          }, {
            start: {
              line: 50,
              column: 37
            },
            end: {
              line: 50,
              column: 58
            }
          }],
          line: 50
        },
        '5': {
          loc: {
            start: {
              line: 51,
              column: 21
            },
            end: {
              line: 51,
              column: 61
            }
          },
          type: 'binary-expr',
          locations: [{
            start: {
              line: 51,
              column: 21
            },
            end: {
              line: 51,
              column: 35
            }
          }, {
            start: {
              line: 51,
              column: 39
            },
            end: {
              line: 51,
              column: 61
            }
          }],
          line: 51
        },
        '6': {
          loc: {
            start: {
              line: 60,
              column: 6
            },
            end: {
              line: 63,
              column: 7
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 60,
              column: 6
            },
            end: {
              line: 63,
              column: 7
            }
          }, {
            start: {
              line: 60,
              column: 6
            },
            end: {
              line: 63,
              column: 7
            }
          }],
          line: 60
        },
        '7': {
          loc: {
            start: {
              line: 73,
              column: 2
            },
            end: {
              line: 73,
              column: 23
            }
          },
          type: 'default-arg',
          locations: [{
            start: {
              line: 73,
              column: 21
            },
            end: {
              line: 73,
              column: 23
            }
          }],
          line: 73
        },
        '8': {
          loc: {
            start: {
              line: 75,
              column: 16
            },
            end: {
              line: 75,
              column: 54
            }
          },
          type: 'binary-expr',
          locations: [{
            start: {
              line: 75,
              column: 16
            },
            end: {
              line: 75,
              column: 29
            }
          }, {
            start: {
              line: 75,
              column: 33
            },
            end: {
              line: 75,
              column: 54
            }
          }],
          line: 75
        },
        '9': {
          loc: {
            start: {
              line: 76,
              column: 17
            },
            end: {
              line: 76,
              column: 57
            }
          },
          type: 'binary-expr',
          locations: [{
            start: {
              line: 76,
              column: 17
            },
            end: {
              line: 76,
              column: 31
            }
          }, {
            start: {
              line: 76,
              column: 35
            },
            end: {
              line: 76,
              column: 57
            }
          }],
          line: 76
        },
        '10': {
          loc: {
            start: {
              line: 86,
              column: 2
            },
            end: {
              line: 86,
              column: 23
            }
          },
          type: 'default-arg',
          locations: [{
            start: {
              line: 86,
              column: 21
            },
            end: {
              line: 86,
              column: 23
            }
          }],
          line: 86
        },
        '11': {
          loc: {
            start: {
              line: 95,
              column: 2
            },
            end: {
              line: 95,
              column: 23
            }
          },
          type: 'default-arg',
          locations: [{
            start: {
              line: 95,
              column: 21
            },
            end: {
              line: 95,
              column: 23
            }
          }],
          line: 95
        },
        '12': {
          loc: {
            start: {
              line: 98,
              column: 35
            },
            end: {
              line: 98,
              column: 55
            }
          },
          type: 'binary-expr',
          locations: [{
            start: {
              line: 98,
              column: 35
            },
            end: {
              line: 98,
              column: 50
            }
          }, {
            start: {
              line: 98,
              column: 54
            },
            end: {
              line: 98,
              column: 55
            }
          }],
          line: 98
        },
        '13': {
          loc: {
            start: {
              line: 104,
              column: 2
            },
            end: {
              line: 104,
              column: 23
            }
          },
          type: 'default-arg',
          locations: [{
            start: {
              line: 104,
              column: 21
            },
            end: {
              line: 104,
              column: 23
            }
          }],
          line: 104
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
        '31': 0
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
        '13': 0
      },
      b: {
        '0': [0],
        '1': [0, 0],
        '2': [0, 0],
        '3': [0],
        '4': [0, 0],
        '5': [0, 0],
        '6': [0, 0],
        '7': [0],
        '8': [0, 0],
        '9': [0, 0],
        '10': [0],
        '11': [0],
        '12': [0, 0],
        '13': [0]
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

  function toSvgDataURL(domNode) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (cov_2rk1c336x5.b[0][0]++, {});
    cov_2rk1c336x5.f[0]++;

    var width = (cov_2rk1c336x5.s[0]++, (cov_2rk1c336x5.b[1][0]++, options.width) || (cov_2rk1c336x5.b[1][1]++, (0, _utils.getNodeWidth)(domNode)));
    var height = (cov_2rk1c336x5.s[1]++, (cov_2rk1c336x5.b[2][0]++, options.height) || (cov_2rk1c336x5.b[2][1]++, (0, _utils.getNodeHeight)(domNode)));

    cov_2rk1c336x5.s[2]++;
    return (0, _cloneNode2.default)(domNode, options.filter, true).then(function (clonedNode) {
      cov_2rk1c336x5.f[1]++;
      cov_2rk1c336x5.s[3]++;
      return (0, _embedWebFonts2.default)(clonedNode, options);
    }).then(function (clonedNode) {
      cov_2rk1c336x5.f[2]++;
      cov_2rk1c336x5.s[4]++;
      return (0, _embedImages2.default)(clonedNode, options);
    }).then(function (clonedNode) {
      cov_2rk1c336x5.f[3]++;
      cov_2rk1c336x5.s[5]++;
      return (0, _applyStyleWithOptions2.default)(clonedNode, options);
    }).then(function (clonedNode) {
      cov_2rk1c336x5.f[4]++;
      cov_2rk1c336x5.s[6]++;
      return (0, _createSvgDataURL2.default)(clonedNode, width, height);
    });
  }

  function toCanvas(domNode) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (cov_2rk1c336x5.b[3][0]++, {});
    cov_2rk1c336x5.f[5]++;
    cov_2rk1c336x5.s[7]++;

    return toSvgDataURL(domNode, options).then(_utils.createImage).then((0, _utils.delay)(100)).then(function (image) {
      cov_2rk1c336x5.f[6]++;

      var canvas = (cov_2rk1c336x5.s[8]++, document.createElement('canvas'));
      var context = (cov_2rk1c336x5.s[9]++, canvas.getContext('2d'));

      var width = (cov_2rk1c336x5.s[10]++, (cov_2rk1c336x5.b[4][0]++, options.width) || (cov_2rk1c336x5.b[4][1]++, (0, _utils.getNodeWidth)(domNode)));
      var height = (cov_2rk1c336x5.s[11]++, (cov_2rk1c336x5.b[5][0]++, options.height) || (cov_2rk1c336x5.b[5][1]++, (0, _utils.getNodeHeight)(domNode)));
      var ratio = (cov_2rk1c336x5.s[12]++, (0, _utils.getPixelRatio)(context));

      cov_2rk1c336x5.s[13]++;
      canvas.width = width * ratio;
      cov_2rk1c336x5.s[14]++;
      canvas.height = height * ratio;
      cov_2rk1c336x5.s[15]++;
      canvas.style.width = width;
      cov_2rk1c336x5.s[16]++;
      canvas.style.height = height;
      cov_2rk1c336x5.s[17]++;
      context.scale(ratio, ratio);

      cov_2rk1c336x5.s[18]++;
      if (options.backgroundColor) {
        cov_2rk1c336x5.b[6][0]++;
        cov_2rk1c336x5.s[19]++;

        context.fillStyle = options.backgroundColor;
        cov_2rk1c336x5.s[20]++;
        context.fillRect(0, 0, canvas.width, canvas.height);
      } else {
        cov_2rk1c336x5.b[6][1]++;
      }

      cov_2rk1c336x5.s[21]++;
      context.drawImage(image, 0, 0);

      cov_2rk1c336x5.s[22]++;
      return canvas;
    });
  }

  function toPixelData(domNode) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (cov_2rk1c336x5.b[7][0]++, {});
    cov_2rk1c336x5.f[7]++;

    var width = (cov_2rk1c336x5.s[23]++, (cov_2rk1c336x5.b[8][0]++, options.width) || (cov_2rk1c336x5.b[8][1]++, (0, _utils.getNodeWidth)(domNode)));
    var height = (cov_2rk1c336x5.s[24]++, (cov_2rk1c336x5.b[9][0]++, options.height) || (cov_2rk1c336x5.b[9][1]++, (0, _utils.getNodeHeight)(domNode)));

    cov_2rk1c336x5.s[25]++;
    return toCanvas(domNode, options).then(function (canvas) {
      cov_2rk1c336x5.f[8]++;
      cov_2rk1c336x5.s[26]++;
      return canvas.getContext('2d').getImageData(0, 0, width, height).data;
    });
  }

  function toPng(domNode) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (cov_2rk1c336x5.b[10][0]++, {});
    cov_2rk1c336x5.f[9]++;
    cov_2rk1c336x5.s[27]++;

    return toCanvas(domNode, options).then(function (canvas) {
      cov_2rk1c336x5.f[10]++;
      cov_2rk1c336x5.s[28]++;
      return canvas.toDataURL();
    });
  }

  function toJpeg(domNode) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (cov_2rk1c336x5.b[11][0]++, {});
    cov_2rk1c336x5.f[11]++;
    cov_2rk1c336x5.s[29]++;

    return toCanvas(domNode, options).then(function (canvas) {
      cov_2rk1c336x5.f[12]++;
      cov_2rk1c336x5.s[30]++;
      return canvas.toDataURL('image/jpeg', (cov_2rk1c336x5.b[12][0]++, options.quality) || (cov_2rk1c336x5.b[12][1]++, 1));
    });
  }

  function toBlob(domNode) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (cov_2rk1c336x5.b[13][0]++, {});
    cov_2rk1c336x5.f[13]++;
    cov_2rk1c336x5.s[31]++;

    return toCanvas(domNode, options).then(_utils.canvasToBlob);
  }

  exports.default = {
    toSvgDataURL: toSvgDataURL,
    toCanvas: toCanvas,
    toPixelData: toPixelData,
    toPng: toPng,
    toJpeg: toJpeg,
    toBlob: toBlob
  };
});