(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'babel-runtime/core-js/promise'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('babel-runtime/core-js/promise'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.promise);
    global.utils = mod.exports;
  }
})(this, function (exports, _promise) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.uuid = undefined;
  exports.parseExtension = parseExtension;
  exports.getMimeType = getMimeType;
  exports.delay = delay;
  exports.createImage = createImage;
  exports.isDataUrl = isDataUrl;
  exports.toDataURL = toDataURL;
  exports.getDataURLContent = getDataURLContent;
  exports.canvasToBlob = canvasToBlob;
  exports.toArray = toArray;
  exports.getNodeWidth = getNodeWidth;
  exports.getNodeHeight = getNodeHeight;
  exports.getPixelRatio = getPixelRatio;
  exports.svgToDataURL = svgToDataURL;
  exports.getBlobFromImageURL = getBlobFromImageURL;

  var _promise2 = _interopRequireDefault(_promise);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var cov_23nxmwopg = function () {
    var path = '/Users/jhill/html-to-image/src/utils.js',
        hash = 'cc985ad008443ec395ee8a6c5f9f2c08f35ad45c',
        Function = function () {}.constructor,
        global = new Function('return this')(),
        gcv = '__coverage__',
        coverageData = {
      path: '/Users/jhill/html-to-image/src/utils.js',
      statementMap: {
        '0': {
          start: {
            line: 3,
            column: 13
          },
          end: {
            line: 3,
            column: 36
          }
        },
        '1': {
          start: {
            line: 4,
            column: 13
          },
          end: {
            line: 4,
            column: 25
          }
        },
        '2': {
          start: {
            line: 5,
            column: 14
          },
          end: {
            line: 16,
            column: 1
          }
        },
        '3': {
          start: {
            line: 19,
            column: 21
          },
          end: {
            line: 32,
            column: 3
          }
        },
        '4': {
          start: {
            line: 22,
            column: 16
          },
          end: {
            line: 22,
            column: 17
          }
        },
        '5': {
          start: {
            line: 25,
            column: 26
          },
          end: {
            line: 26,
            column: 70
          }
        },
        '6': {
          start: {
            line: 26,
            column: 4
          },
          end: {
            line: 26,
            column: 70
          }
        },
        '7': {
          start: {
            line: 28,
            column: 2
          },
          end: {
            line: 31,
            column: 3
          }
        },
        '8': {
          start: {
            line: 29,
            column: 4
          },
          end: {
            line: 29,
            column: 16
          }
        },
        '9': {
          start: {
            line: 30,
            column: 4
          },
          end: {
            line: 30,
            column: 44
          }
        },
        '10': {
          start: {
            line: 35,
            column: 16
          },
          end: {
            line: 35,
            column: 41
          }
        },
        '11': {
          start: {
            line: 36,
            column: 2
          },
          end: {
            line: 36,
            column: 28
          }
        },
        '12': {
          start: {
            line: 36,
            column: 13
          },
          end: {
            line: 36,
            column: 28
          }
        },
        '13': {
          start: {
            line: 37,
            column: 2
          },
          end: {
            line: 37,
            column: 11
          }
        },
        '14': {
          start: {
            line: 41,
            column: 14
          },
          end: {
            line: 41,
            column: 47
          }
        },
        '15': {
          start: {
            line: 42,
            column: 2
          },
          end: {
            line: 42,
            column: 25
          }
        },
        '16': {
          start: {
            line: 46,
            column: 2
          },
          end: {
            line: 50,
            column: 5
          }
        },
        '17': {
          start: {
            line: 46,
            column: 16
          },
          end: {
            line: 50,
            column: 5
          }
        },
        '18': {
          start: {
            line: 47,
            column: 4
          },
          end: {
            line: 49,
            column: 10
          }
        },
        '19': {
          start: {
            line: 48,
            column: 6
          },
          end: {
            line: 48,
            column: 18
          }
        },
        '20': {
          start: {
            line: 54,
            column: 2
          },
          end: {
            line: 62,
            column: 5
          }
        },
        '21': {
          start: {
            line: 55,
            column: 18
          },
          end: {
            line: 55,
            column: 29
          }
        },
        '22': {
          start: {
            line: 56,
            column: 4
          },
          end: {
            line: 58,
            column: 5
          }
        },
        '23': {
          start: {
            line: 57,
            column: 6
          },
          end: {
            line: 57,
            column: 20
          }
        },
        '24': {
          start: {
            line: 59,
            column: 4
          },
          end: {
            line: 59,
            column: 26
          }
        },
        '25': {
          start: {
            line: 60,
            column: 4
          },
          end: {
            line: 60,
            column: 35
          }
        },
        '26': {
          start: {
            line: 61,
            column: 4
          },
          end: {
            line: 61,
            column: 19
          }
        },
        '27': {
          start: {
            line: 66,
            column: 2
          },
          end: {
            line: 66,
            column: 38
          }
        },
        '28': {
          start: {
            line: 70,
            column: 2
          },
          end: {
            line: 70,
            column: 45
          }
        },
        '29': {
          start: {
            line: 74,
            column: 2
          },
          end: {
            line: 74,
            column: 30
          }
        },
        '30': {
          start: {
            line: 78,
            column: 2
          },
          end: {
            line: 90,
            column: 5
          }
        },
        '31': {
          start: {
            line: 79,
            column: 25
          },
          end: {
            line: 79,
            column: 70
          }
        },
        '32': {
          start: {
            line: 80,
            column: 16
          },
          end: {
            line: 80,
            column: 35
          }
        },
        '33': {
          start: {
            line: 81,
            column: 24
          },
          end: {
            line: 81,
            column: 43
          }
        },
        '34': {
          start: {
            line: 83,
            column: 4
          },
          end: {
            line: 85,
            column: 5
          }
        },
        '35': {
          start: {
            line: 84,
            column: 6
          },
          end: {
            line: 84,
            column: 49
          }
        },
        '36': {
          start: {
            line: 87,
            column: 4
          },
          end: {
            line: 89,
            column: 7
          }
        },
        '37': {
          start: {
            line: 94,
            column: 2
          },
          end: {
            line: 98,
            column: 3
          }
        },
        '38': {
          start: {
            line: 95,
            column: 4
          },
          end: {
            line: 97,
            column: 7
          }
        },
        '39': {
          start: {
            line: 96,
            column: 6
          },
          end: {
            line: 96,
            column: 28
          }
        },
        '40': {
          start: {
            line: 100,
            column: 2
          },
          end: {
            line: 100,
            column: 23
          }
        },
        '41': {
          start: {
            line: 104,
            column: 14
          },
          end: {
            line: 104,
            column: 16
          }
        },
        '42': {
          start: {
            line: 106,
            column: 2
          },
          end: {
            line: 108,
            column: 3
          }
        },
        '43': {
          start: {
            line: 107,
            column: 4
          },
          end: {
            line: 107,
            column: 26
          }
        },
        '44': {
          start: {
            line: 110,
            column: 2
          },
          end: {
            line: 110,
            column: 12
          }
        },
        '45': {
          start: {
            line: 114,
            column: 16
          },
          end: {
            line: 114,
            column: 77
          }
        },
        '46': {
          start: {
            line: 115,
            column: 2
          },
          end: {
            line: 115,
            column: 44
          }
        },
        '47': {
          start: {
            line: 119,
            column: 21
          },
          end: {
            line: 119,
            column: 50
          }
        },
        '48': {
          start: {
            line: 120,
            column: 22
          },
          end: {
            line: 120,
            column: 52
          }
        },
        '49': {
          start: {
            line: 121,
            column: 2
          },
          end: {
            line: 121,
            column: 52
          }
        },
        '50': {
          start: {
            line: 125,
            column: 20
          },
          end: {
            line: 125,
            column: 48
          }
        },
        '51': {
          start: {
            line: 126,
            column: 23
          },
          end: {
            line: 126,
            column: 54
          }
        },
        '52': {
          start: {
            line: 127,
            column: 2
          },
          end: {
            line: 127,
            column: 53
          }
        },
        '53': {
          start: {
            line: 131,
            column: 23
          },
          end: {
            line: 136,
            column: 39
          }
        },
        '54': {
          start: {
            line: 138,
            column: 2
          },
          end: {
            line: 138,
            column: 54
          }
        },
        '55': {
          start: {
            line: 142,
            column: 2
          },
          end: {
            line: 145,
            column: 61
          }
        },
        '56': {
          start: {
            line: 143,
            column: 16
          },
          end: {
            line: 143,
            column: 58
          }
        },
        '57': {
          start: {
            line: 145,
            column: 18
          },
          end: {
            line: 145,
            column: 60
          }
        },
        '58': {
          start: {
            line: 149,
            column: 2
          },
          end: {
            line: 167,
            column: 4
          }
        },
        '59': {
          start: {
            line: 150,
            column: 30
          },
          end: {
            line: 150,
            column: 35
          }
        },
        '60': {
          start: {
            line: 152,
            column: 19
          },
          end: {
            line: 152,
            column: 51
          }
        },
        '61': {
          start: {
            line: 153,
            column: 20
          },
          end: {
            line: 153,
            column: 43
          }
        },
        '62': {
          start: {
            line: 154,
            column: 18
          },
          end: {
            line: 154,
            column: 40
          }
        },
        '63': {
          start: {
            line: 156,
            column: 4
          },
          end: {
            line: 156,
            column: 32
          }
        },
        '64': {
          start: {
            line: 157,
            column: 4
          },
          end: {
            line: 157,
            column: 34
          }
        },
        '65': {
          start: {
            line: 158,
            column: 4
          },
          end: {
            line: 158,
            column: 30
          }
        },
        '66': {
          start: {
            line: 159,
            column: 4
          },
          end: {
            line: 159,
            column: 32
          }
        },
        '67': {
          start: {
            line: 161,
            column: 4
          },
          end: {
            line: 161,
            column: 31
          }
        },
        '68': {
          start: {
            line: 162,
            column: 4
          },
          end: {
            line: 162,
            column: 34
          }
        },
        '69': {
          start: {
            line: 164,
            column: 20
          },
          end: {
            line: 164,
            column: 54
          }
        },
        '70': {
          start: {
            line: 166,
            column: 4
          },
          end: {
            line: 166,
            column: 37
          }
        }
      },
      fnMap: {
        '0': {
          name: 'uuid',
          decl: {
            start: {
              line: 19,
              column: 30
            },
            end: {
              line: 19,
              column: 34
            }
          },
          loc: {
            start: {
              line: 19,
              column: 37
            },
            end: {
              line: 32,
              column: 1
            }
          },
          line: 19
        },
        '1': {
          name: '(anonymous_1)',
          decl: {
            start: {
              line: 25,
              column: 26
            },
            end: {
              line: 25,
              column: 27
            }
          },
          loc: {
            start: {
              line: 26,
              column: 4
            },
            end: {
              line: 26,
              column: 70
            }
          },
          line: 26
        },
        '2': {
          name: '(anonymous_2)',
          decl: {
            start: {
              line: 28,
              column: 9
            },
            end: {
              line: 28,
              column: 10
            }
          },
          loc: {
            start: {
              line: 28,
              column: 15
            },
            end: {
              line: 31,
              column: 3
            }
          },
          line: 28
        },
        '3': {
          name: 'parseExtension',
          decl: {
            start: {
              line: 34,
              column: 16
            },
            end: {
              line: 34,
              column: 30
            }
          },
          loc: {
            start: {
              line: 34,
              column: 52
            },
            end: {
              line: 38,
              column: 1
            }
          },
          line: 34
        },
        '4': {
          name: 'getMimeType',
          decl: {
            start: {
              line: 40,
              column: 16
            },
            end: {
              line: 40,
              column: 27
            }
          },
          loc: {
            start: {
              line: 40,
              column: 49
            },
            end: {
              line: 43,
              column: 1
            }
          },
          line: 40
        },
        '5': {
          name: 'delay',
          decl: {
            start: {
              line: 45,
              column: 16
            },
            end: {
              line: 45,
              column: 21
            }
          },
          loc: {
            start: {
              line: 45,
              column: 43
            },
            end: {
              line: 51,
              column: 1
            }
          },
          line: 45
        },
        '6': {
          name: '(anonymous_6)',
          decl: {
            start: {
              line: 46,
              column: 9
            },
            end: {
              line: 46,
              column: 10
            }
          },
          loc: {
            start: {
              line: 46,
              column: 16
            },
            end: {
              line: 50,
              column: 5
            }
          },
          line: 46
        },
        '7': {
          name: '(anonymous_7)',
          decl: {
            start: {
              line: 46,
              column: 29
            },
            end: {
              line: 46,
              column: 30
            }
          },
          loc: {
            start: {
              line: 46,
              column: 42
            },
            end: {
              line: 50,
              column: 3
            }
          },
          line: 46
        },
        '8': {
          name: '(anonymous_8)',
          decl: {
            start: {
              line: 47,
              column: 15
            },
            end: {
              line: 47,
              column: 16
            }
          },
          loc: {
            start: {
              line: 47,
              column: 21
            },
            end: {
              line: 49,
              column: 5
            }
          },
          line: 47
        },
        '9': {
          name: 'createImage',
          decl: {
            start: {
              line: 53,
              column: 16
            },
            end: {
              line: 53,
              column: 27
            }
          },
          loc: {
            start: {
              line: 53,
              column: 57
            },
            end: {
              line: 63,
              column: 1
            }
          },
          line: 53
        },
        '10': {
          name: '(anonymous_10)',
          decl: {
            start: {
              line: 54,
              column: 22
            },
            end: {
              line: 54,
              column: 23
            }
          },
          loc: {
            start: {
              line: 54,
              column: 43
            },
            end: {
              line: 62,
              column: 3
            }
          },
          line: 54
        },
        '11': {
          name: '(anonymous_11)',
          decl: {
            start: {
              line: 56,
              column: 19
            },
            end: {
              line: 56,
              column: 20
            }
          },
          loc: {
            start: {
              line: 56,
              column: 25
            },
            end: {
              line: 58,
              column: 5
            }
          },
          line: 56
        },
        '12': {
          name: 'isDataUrl',
          decl: {
            start: {
              line: 65,
              column: 16
            },
            end: {
              line: 65,
              column: 25
            }
          },
          loc: {
            start: {
              line: 65,
              column: 48
            },
            end: {
              line: 67,
              column: 1
            }
          },
          line: 65
        },
        '13': {
          name: 'toDataURL',
          decl: {
            start: {
              line: 69,
              column: 16
            },
            end: {
              line: 69,
              column: 25
            }
          },
          loc: {
            start: {
              line: 69,
              column: 69
            },
            end: {
              line: 71,
              column: 1
            }
          },
          line: 69
        },
        '14': {
          name: 'getDataURLContent',
          decl: {
            start: {
              line: 73,
              column: 16
            },
            end: {
              line: 73,
              column: 33
            }
          },
          loc: {
            start: {
              line: 73,
              column: 59
            },
            end: {
              line: 75,
              column: 1
            }
          },
          line: 73
        },
        '15': {
          name: 'toBlob',
          decl: {
            start: {
              line: 77,
              column: 9
            },
            end: {
              line: 77,
              column: 15
            }
          },
          loc: {
            start: {
              line: 77,
              column: 58
            },
            end: {
              line: 91,
              column: 1
            }
          },
          line: 77
        },
        '16': {
          name: '(anonymous_16)',
          decl: {
            start: {
              line: 78,
              column: 22
            },
            end: {
              line: 78,
              column: 23
            }
          },
          loc: {
            start: {
              line: 78,
              column: 35
            },
            end: {
              line: 90,
              column: 3
            }
          },
          line: 78
        },
        '17': {
          name: 'canvasToBlob',
          decl: {
            start: {
              line: 93,
              column: 16
            },
            end: {
              line: 93,
              column: 28
            }
          },
          loc: {
            start: {
              line: 93,
              column: 71
            },
            end: {
              line: 101,
              column: 1
            }
          },
          line: 93
        },
        '18': {
          name: '(anonymous_18)',
          decl: {
            start: {
              line: 95,
              column: 24
            },
            end: {
              line: 95,
              column: 25
            }
          },
          loc: {
            start: {
              line: 95,
              column: 37
            },
            end: {
              line: 97,
              column: 5
            }
          },
          line: 95
        },
        '19': {
          name: 'toArray',
          decl: {
            start: {
              line: 103,
              column: 16
            },
            end: {
              line: 103,
              column: 23
            }
          },
          loc: {
            start: {
              line: 103,
              column: 53
            },
            end: {
              line: 111,
              column: 1
            }
          },
          line: 103
        },
        '20': {
          name: 'px',
          decl: {
            start: {
              line: 113,
              column: 9
            },
            end: {
              line: 113,
              column: 11
            }
          },
          loc: {
            start: {
              line: 113,
              column: 62
            },
            end: {
              line: 116,
              column: 1
            }
          },
          line: 113
        },
        '21': {
          name: 'getNodeWidth',
          decl: {
            start: {
              line: 118,
              column: 16
            },
            end: {
              line: 118,
              column: 28
            }
          },
          loc: {
            start: {
              line: 118,
              column: 56
            },
            end: {
              line: 122,
              column: 1
            }
          },
          line: 118
        },
        '22': {
          name: 'getNodeHeight',
          decl: {
            start: {
              line: 124,
              column: 16
            },
            end: {
              line: 124,
              column: 29
            }
          },
          loc: {
            start: {
              line: 124,
              column: 57
            },
            end: {
              line: 128,
              column: 1
            }
          },
          line: 124
        },
        '23': {
          name: 'getPixelRatio',
          decl: {
            start: {
              line: 130,
              column: 16
            },
            end: {
              line: 130,
              column: 29
            }
          },
          loc: {
            start: {
              line: 130,
              column: 55
            },
            end: {
              line: 139,
              column: 1
            }
          },
          line: 130
        },
        '24': {
          name: 'svgToDataURL',
          decl: {
            start: {
              line: 141,
              column: 16
            },
            end: {
              line: 141,
              column: 28
            }
          },
          loc: {
            start: {
              line: 141,
              column: 63
            },
            end: {
              line: 146,
              column: 1
            }
          },
          line: 141
        },
        '25': {
          name: '(anonymous_25)',
          decl: {
            start: {
              line: 143,
              column: 10
            },
            end: {
              line: 143,
              column: 11
            }
          },
          loc: {
            start: {
              line: 143,
              column: 16
            },
            end: {
              line: 143,
              column: 58
            }
          },
          line: 143
        },
        '26': {
          name: '(anonymous_26)',
          decl: {
            start: {
              line: 145,
              column: 10
            },
            end: {
              line: 145,
              column: 11
            }
          },
          loc: {
            start: {
              line: 145,
              column: 18
            },
            end: {
              line: 145,
              column: 60
            }
          },
          line: 145
        },
        '27': {
          name: 'getBlobFromImageURL',
          decl: {
            start: {
              line: 148,
              column: 16
            },
            end: {
              line: 148,
              column: 35
            }
          },
          loc: {
            start: {
              line: 148,
              column: 66
            },
            end: {
              line: 168,
              column: 1
            }
          },
          line: 148
        },
        '28': {
          name: '(anonymous_28)',
          decl: {
            start: {
              line: 149,
              column: 31
            },
            end: {
              line: 149,
              column: 32
            }
          },
          loc: {
            start: {
              line: 149,
              column: 42
            },
            end: {
              line: 167,
              column: 3
            }
          },
          line: 149
        }
      },
      branchMap: {
        '0': {
          loc: {
            start: {
              line: 36,
              column: 2
            },
            end: {
              line: 36,
              column: 28
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 36,
              column: 2
            },
            end: {
              line: 36,
              column: 28
            }
          }, {
            start: {
              line: 36,
              column: 2
            },
            end: {
              line: 36,
              column: 28
            }
          }],
          line: 36
        },
        '1': {
          loc: {
            start: {
              line: 42,
              column: 9
            },
            end: {
              line: 42,
              column: 25
            }
          },
          type: 'binary-expr',
          locations: [{
            start: {
              line: 42,
              column: 9
            },
            end: {
              line: 42,
              column: 19
            }
          }, {
            start: {
              line: 42,
              column: 23
            },
            end: {
              line: 42,
              column: 25
            }
          }],
          line: 42
        },
        '2': {
          loc: {
            start: {
              line: 94,
              column: 2
            },
            end: {
              line: 98,
              column: 3
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 94,
              column: 2
            },
            end: {
              line: 98,
              column: 3
            }
          }, {
            start: {
              line: 94,
              column: 2
            },
            end: {
              line: 98,
              column: 3
            }
          }],
          line: 94
        },
        '3': {
          loc: {
            start: {
              line: 131,
              column: 23
            },
            end: {
              line: 136,
              column: 39
            }
          },
          type: 'binary-expr',
          locations: [{
            start: {
              line: 131,
              column: 23
            },
            end: {
              line: 131,
              column: 53
            }
          }, {
            start: {
              line: 132,
              column: 4
            },
            end: {
              line: 132,
              column: 40
            }
          }, {
            start: {
              line: 133,
              column: 4
            },
            end: {
              line: 133,
              column: 37
            }
          }, {
            start: {
              line: 134,
              column: 4
            },
            end: {
              line: 134,
              column: 36
            }
          }, {
            start: {
              line: 135,
              column: 4
            },
            end: {
              line: 135,
              column: 35
            }
          }, {
            start: {
              line: 136,
              column: 4
            },
            end: {
              line: 136,
              column: 34
            }
          }, {
            start: {
              line: 136,
              column: 38
            },
            end: {
              line: 136,
              column: 39
            }
          }],
          line: 131
        },
        '4': {
          loc: {
            start: {
              line: 138,
              column: 10
            },
            end: {
              line: 138,
              column: 38
            }
          },
          type: 'binary-expr',
          locations: [{
            start: {
              line: 138,
              column: 10
            },
            end: {
              line: 138,
              column: 33
            }
          }, {
            start: {
              line: 138,
              column: 37
            },
            end: {
              line: 138,
              column: 38
            }
          }],
          line: 138
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
        '44': 0,
        '45': 0,
        '46': 0,
        '47': 0,
        '48': 0,
        '49': 0,
        '50': 0,
        '51': 0,
        '52': 0,
        '53': 0,
        '54': 0,
        '55': 0,
        '56': 0,
        '57': 0,
        '58': 0,
        '59': 0,
        '60': 0,
        '61': 0,
        '62': 0,
        '63': 0,
        '64': 0,
        '65': 0,
        '66': 0,
        '67': 0,
        '68': 0,
        '69': 0,
        '70': 0
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
        '28': 0
      },
      b: {
        '0': [0, 0],
        '1': [0, 0],
        '2': [0, 0],
        '3': [0, 0, 0, 0, 0, 0, 0],
        '4': [0, 0]
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

  /* eslint-disable no-bitwise */

  var WOFF = (cov_23nxmwopg.s[0]++, 'application/font-woff');
  var JPEG = (cov_23nxmwopg.s[1]++, 'image/jpeg');
  var mimes = (cov_23nxmwopg.s[2]++, {
    woff: WOFF,
    woff2: WOFF,
    ttf: 'application/font-truetype',
    eot: 'application/vnd.ms-fontobject',
    png: 'image/png',
    jpg: JPEG,
    jpeg: JPEG,
    gif: 'image/gif',
    tiff: 'image/tiff',
    svg: 'image/svg+xml'
  });

  var uuid = exports.uuid = (cov_23nxmwopg.s[3]++, function uuid() {
    cov_23nxmwopg.f[0]++;

    // generate uuid for className of pseudo elements.
    // We should not use GUIDs, otherwise pseudo elements sometimes cannot be captured.
    var counter = (cov_23nxmwopg.s[4]++, 0);

    // ref: http://stackoverflow.com/a/6248722/2519373
    cov_23nxmwopg.s[5]++;
    var randomFourChars = function randomFourChars() {
      cov_23nxmwopg.f[1]++;
      cov_23nxmwopg.s[6]++;
      return ('0000' + (Math.random() * Math.pow(36, 4) << 0).toString(36)).slice(-4);
    };

    cov_23nxmwopg.s[7]++;
    return function () {
      cov_23nxmwopg.f[2]++;
      cov_23nxmwopg.s[8]++;

      counter += 1;
      cov_23nxmwopg.s[9]++;
      return 'u' + randomFourChars() + counter;
    };
  }());

  function parseExtension(url) {
    cov_23nxmwopg.f[3]++;

    var match = (cov_23nxmwopg.s[10]++, /\.([^./]*?)$/g.exec(url));
    cov_23nxmwopg.s[11]++;
    if (match) {
        cov_23nxmwopg.b[0][0]++;
        cov_23nxmwopg.s[12]++;
        return match[1];
      } else {
      cov_23nxmwopg.b[0][1]++;
    }cov_23nxmwopg.s[13]++;
    return '';
  }

  function getMimeType(url) {
    cov_23nxmwopg.f[4]++;

    var ext = (cov_23nxmwopg.s[14]++, parseExtension(url).toLowerCase());
    cov_23nxmwopg.s[15]++;
    return (cov_23nxmwopg.b[1][0]++, mimes[ext]) || (cov_23nxmwopg.b[1][1]++, '');
  }

  function delay(ms) {
    cov_23nxmwopg.f[5]++;
    cov_23nxmwopg.s[16]++;

    return function (arg) {
      cov_23nxmwopg.f[6]++;
      cov_23nxmwopg.s[17]++;
      return new _promise2.default(function (resolve) {
        cov_23nxmwopg.f[7]++;
        cov_23nxmwopg.s[18]++;

        setTimeout(function () {
          cov_23nxmwopg.f[8]++;
          cov_23nxmwopg.s[19]++;

          resolve(arg);
        }, ms);
      });
    };
  }

  function createImage(url) {
    cov_23nxmwopg.f[9]++;
    cov_23nxmwopg.s[20]++;

    return new _promise2.default(function (resolve, reject) {
      cov_23nxmwopg.f[10]++;

      var image = (cov_23nxmwopg.s[21]++, new Image());
      cov_23nxmwopg.s[22]++;
      image.onload = function () {
        cov_23nxmwopg.f[11]++;
        cov_23nxmwopg.s[23]++;

        resolve(image);
      };
      cov_23nxmwopg.s[24]++;
      image.onerror = reject;
      cov_23nxmwopg.s[25]++;
      image.crossOrigin = 'anonymous';
      cov_23nxmwopg.s[26]++;
      image.src = url;
    });
  }

  function isDataUrl(url) {
    cov_23nxmwopg.f[12]++;
    cov_23nxmwopg.s[27]++;

    return url.search(/^(data:)/) !== -1;
  }

  function toDataURL(content, mimeType) {
    cov_23nxmwopg.f[13]++;
    cov_23nxmwopg.s[28]++;

    return 'data:' + mimeType + ';base64,' + content;
  }

  function getDataURLContent(dataURL) {
    cov_23nxmwopg.f[14]++;
    cov_23nxmwopg.s[29]++;

    return dataURL.split(/,/)[1];
  }

  function toBlob(canvas) {
    cov_23nxmwopg.f[15]++;
    cov_23nxmwopg.s[30]++;

    return new _promise2.default(function (resolve) {
      cov_23nxmwopg.f[16]++;

      var binaryString = (cov_23nxmwopg.s[31]++, window.atob(canvas.toDataURL().split(',')[1]));
      var len = (cov_23nxmwopg.s[32]++, binaryString.length);
      var binaryArray = (cov_23nxmwopg.s[33]++, new Uint8Array(len));

      cov_23nxmwopg.s[34]++;
      for (var i = 0; i < len; i += 1) {
        cov_23nxmwopg.s[35]++;

        binaryArray[i] = binaryString.charCodeAt(i);
      }

      cov_23nxmwopg.s[36]++;
      resolve(new Blob([binaryArray], {
        type: 'image/png'
      }));
    });
  }

  function canvasToBlob(canvas) {
    cov_23nxmwopg.f[17]++;
    cov_23nxmwopg.s[37]++;

    if (canvas.toBlob) {
      cov_23nxmwopg.b[2][0]++;
      cov_23nxmwopg.s[38]++;

      return new _promise2.default(function (resolve) {
        cov_23nxmwopg.f[18]++;
        cov_23nxmwopg.s[39]++;

        canvas.toBlob(resolve);
      });
    } else {
      cov_23nxmwopg.b[2][1]++;
    }

    cov_23nxmwopg.s[40]++;
    return toBlob(canvas);
  }

  function toArray(arrayLike) {
    cov_23nxmwopg.f[19]++;

    var arr = (cov_23nxmwopg.s[41]++, []);

    cov_23nxmwopg.s[42]++;
    for (var i = 0, l = arrayLike.length; i < l; i += 1) {
      cov_23nxmwopg.s[43]++;

      arr.push(arrayLike[i]);
    }

    cov_23nxmwopg.s[44]++;
    return arr;
  }

  function px(node, styleProperty) {
    cov_23nxmwopg.f[20]++;

    var value = (cov_23nxmwopg.s[45]++, window.getComputedStyle(node).getPropertyValue(styleProperty));
    cov_23nxmwopg.s[46]++;
    return parseFloat(value.replace('px', ''));
  }

  function getNodeWidth(node) {
    cov_23nxmwopg.f[21]++;

    var leftBorder = (cov_23nxmwopg.s[47]++, px(node, 'border-left-width'));
    var rightBorder = (cov_23nxmwopg.s[48]++, px(node, 'border-right-width'));
    cov_23nxmwopg.s[49]++;
    return node.scrollWidth + leftBorder + rightBorder;
  }

  function getNodeHeight(node) {
    cov_23nxmwopg.f[22]++;

    var topBorder = (cov_23nxmwopg.s[50]++, px(node, 'border-top-width'));
    var bottomBorder = (cov_23nxmwopg.s[51]++, px(node, 'border-bottom-width'));
    cov_23nxmwopg.s[52]++;
    return node.scrollHeight + topBorder + bottomBorder;
  }

  function getPixelRatio(context) {
    cov_23nxmwopg.f[23]++;

    var backingStore = (cov_23nxmwopg.s[53]++, (cov_23nxmwopg.b[3][0]++, context.backingStorePixelRatio) || (cov_23nxmwopg.b[3][1]++, context.webkitBackingStorePixelRatio) || (cov_23nxmwopg.b[3][2]++, context.mozBackingStorePixelRatio) || (cov_23nxmwopg.b[3][3]++, context.msBackingStorePixelRatio) || (cov_23nxmwopg.b[3][4]++, context.oBackingStorePixelRatio) || (cov_23nxmwopg.b[3][5]++, context.backingStorePixelRatio) || (cov_23nxmwopg.b[3][6]++, 1));

    cov_23nxmwopg.s[54]++;
    return ((cov_23nxmwopg.b[4][0]++, window.devicePixelRatio) || (cov_23nxmwopg.b[4][1]++, 1)) / backingStore;
  }

  function svgToDataURL(svg) {
    cov_23nxmwopg.f[24]++;
    cov_23nxmwopg.s[55]++;

    return _promise2.default.resolve().then(function () {
      cov_23nxmwopg.f[25]++;
      cov_23nxmwopg.s[56]++;
      return new XMLSerializer().serializeToString(svg);
    }).then(encodeURIComponent).then(function (html) {
      cov_23nxmwopg.f[26]++;
      cov_23nxmwopg.s[57]++;
      return 'data:image/svg+xml;charset=utf-8,' + html;
    });
  }

  function getBlobFromImageURL(url) {
    cov_23nxmwopg.f[27]++;
    cov_23nxmwopg.s[58]++;

    return createImage(url).then(function (image) {
      cov_23nxmwopg.f[28]++;

      var _ref = (cov_23nxmwopg.s[59]++, image),
          width = _ref.width,
          height = _ref.height;

      var canvas = (cov_23nxmwopg.s[60]++, document.createElement('canvas'));
      var context = (cov_23nxmwopg.s[61]++, canvas.getContext('2d'));
      var ratio = (cov_23nxmwopg.s[62]++, getPixelRatio(context));

      cov_23nxmwopg.s[63]++;
      canvas.width = width * ratio;
      cov_23nxmwopg.s[64]++;
      canvas.height = height * ratio;
      cov_23nxmwopg.s[65]++;
      canvas.style.width = width;
      cov_23nxmwopg.s[66]++;
      canvas.style.height = height;

      cov_23nxmwopg.s[67]++;
      context.scale(ratio, ratio);
      cov_23nxmwopg.s[68]++;
      context.drawImage(image, 0, 0);

      var dataURL = (cov_23nxmwopg.s[69]++, canvas.toDataURL(getMimeType(url)));

      cov_23nxmwopg.s[70]++;
      return getDataURLContent(dataURL);
    });
  }
});