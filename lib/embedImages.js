(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'babel-runtime/core-js/promise', './utils', './getBlobFromURL', './embedResources'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('babel-runtime/core-js/promise'), require('./utils'), require('./getBlobFromURL'), require('./embedResources'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.promise, global.utils, global.getBlobFromURL, global.embedResources);
    global.embedImages = mod.exports;
  }
})(this, function (exports, _promise, _utils, _getBlobFromURL, _embedResources) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = embedImages;

  var _promise2 = _interopRequireDefault(_promise);

  var _getBlobFromURL2 = _interopRequireDefault(_getBlobFromURL);

  var _embedResources2 = _interopRequireDefault(_embedResources);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var cov_g4vlqsgoh = function () {
    var path = '/Users/jhill/html-to-image/src/embedImages.js',
        hash = 'e078561c93f2efcacea6ad3061ff36ff1bef35dc',
        Function = function () {}.constructor,
        global = new Function('return this')(),
        gcv = '__coverage__',
        coverageData = {
      path: '/Users/jhill/html-to-image/src/embedImages.js',
      statementMap: {
        '0': {
          start: {
            line: 10,
            column: 21
          },
          end: {
            line: 10,
            column: 68
          }
        },
        '1': {
          start: {
            line: 11,
            column: 2
          },
          end: {
            line: 13,
            column: 3
          }
        },
        '2': {
          start: {
            line: 12,
            column: 4
          },
          end: {
            line: 12,
            column: 38
          }
        },
        '3': {
          start: {
            line: 15,
            column: 2
          },
          end: {
            line: 25,
            column: 6
          }
        },
        '4': {
          start: {
            line: 16,
            column: 23
          },
          end: {
            line: 16,
            column: 63
          }
        },
        '5': {
          start: {
            line: 18,
            column: 6
          },
          end: {
            line: 22,
            column: 7
          }
        },
        '6': {
          start: {
            line: 24,
            column: 6
          },
          end: {
            line: 24,
            column: 23
          }
        },
        '7': {
          start: {
            line: 32,
            column: 2
          },
          end: {
            line: 34,
            column: 3
          }
        },
        '8': {
          start: {
            line: 33,
            column: 4
          },
          end: {
            line: 33,
            column: 38
          }
        },
        '9': {
          start: {
            line: 36,
            column: 2
          },
          end: {
            line: 44,
            column: 45
          }
        },
        '10': {
          start: {
            line: 37,
            column: 17
          },
          end: {
            line: 37,
            column: 45
          }
        },
        '11': {
          start: {
            line: 38,
            column: 18
          },
          end: {
            line: 38,
            column: 62
          }
        },
        '12': {
          start: {
            line: 39,
            column: 21
          },
          end: {
            line: 43,
            column: 7
          }
        },
        '13': {
          start: {
            line: 40,
            column: 6
          },
          end: {
            line: 40,
            column: 33
          }
        },
        '14': {
          start: {
            line: 41,
            column: 6
          },
          end: {
            line: 41,
            column: 33
          }
        },
        '15': {
          start: {
            line: 42,
            column: 6
          },
          end: {
            line: 42,
            column: 30
          }
        },
        '16': {
          start: {
            line: 44,
            column: 16
          },
          end: {
            line: 44,
            column: 26
          }
        },
        '17': {
          start: {
            line: 44,
            column: 34
          },
          end: {
            line: 44,
            column: 44
          }
        },
        '18': {
          start: {
            line: 51,
            column: 19
          },
          end: {
            line: 51,
            column: 49
          }
        },
        '19': {
          start: {
            line: 52,
            column: 20
          },
          end: {
            line: 52,
            column: 70
          }
        },
        '20': {
          start: {
            line: 52,
            column: 42
          },
          end: {
            line: 52,
            column: 69
          }
        },
        '21': {
          start: {
            line: 54,
            column: 2
          },
          end: {
            line: 54,
            column: 54
          }
        },
        '22': {
          start: {
            line: 54,
            column: 43
          },
          end: {
            line: 54,
            column: 53
          }
        },
        '23': {
          start: {
            line: 61,
            column: 2
          },
          end: {
            line: 63,
            column: 3
          }
        },
        '24': {
          start: {
            line: 62,
            column: 4
          },
          end: {
            line: 62,
            column: 38
          }
        },
        '25': {
          start: {
            line: 65,
            column: 2
          },
          end: {
            line: 68,
            column: 47
          }
        },
        '26': {
          start: {
            line: 66,
            column: 18
          },
          end: {
            line: 66,
            column: 48
          }
        },
        '27': {
          start: {
            line: 67,
            column: 18
          },
          end: {
            line: 67,
            column: 47
          }
        },
        '28': {
          start: {
            line: 68,
            column: 18
          },
          end: {
            line: 68,
            column: 46
          }
        }
      },
      fnMap: {
        '0': {
          name: 'embedBackground',
          decl: {
            start: {
              line: 6,
              column: 9
            },
            end: {
              line: 6,
              column: 24
            }
          },
          loc: {
            start: {
              line: 9,
              column: 24
            },
            end: {
              line: 26,
              column: 1
            }
          },
          line: 9
        },
        '1': {
          name: '(anonymous_1)',
          decl: {
            start: {
              line: 16,
              column: 10
            },
            end: {
              line: 16,
              column: 11
            }
          },
          loc: {
            start: {
              line: 16,
              column: 23
            },
            end: {
              line: 16,
              column: 63
            }
          },
          line: 16
        },
        '2': {
          name: '(anonymous_2)',
          decl: {
            start: {
              line: 17,
              column: 10
            },
            end: {
              line: 17,
              column: 11
            }
          },
          loc: {
            start: {
              line: 17,
              column: 25
            },
            end: {
              line: 25,
              column: 5
            }
          },
          line: 17
        },
        '3': {
          name: 'embedImageNode',
          decl: {
            start: {
              line: 28,
              column: 9
            },
            end: {
              line: 28,
              column: 23
            }
          },
          loc: {
            start: {
              line: 31,
              column: 24
            },
            end: {
              line: 45,
              column: 1
            }
          },
          line: 31
        },
        '4': {
          name: '(anonymous_4)',
          decl: {
            start: {
              line: 37,
              column: 10
            },
            end: {
              line: 37,
              column: 11
            }
          },
          loc: {
            start: {
              line: 37,
              column: 17
            },
            end: {
              line: 37,
              column: 45
            }
          },
          line: 37
        },
        '5': {
          name: '(anonymous_5)',
          decl: {
            start: {
              line: 38,
              column: 10
            },
            end: {
              line: 38,
              column: 11
            }
          },
          loc: {
            start: {
              line: 38,
              column: 18
            },
            end: {
              line: 38,
              column: 62
            }
          },
          line: 38
        },
        '6': {
          name: '(anonymous_6)',
          decl: {
            start: {
              line: 39,
              column: 10
            },
            end: {
              line: 39,
              column: 11
            }
          },
          loc: {
            start: {
              line: 39,
              column: 21
            },
            end: {
              line: 43,
              column: 7
            }
          },
          line: 39
        },
        '7': {
          name: '(anonymous_7)',
          decl: {
            start: {
              line: 39,
              column: 34
            },
            end: {
              line: 39,
              column: 35
            }
          },
          loc: {
            start: {
              line: 39,
              column: 55
            },
            end: {
              line: 43,
              column: 5
            }
          },
          line: 39
        },
        '8': {
          name: '(anonymous_8)',
          decl: {
            start: {
              line: 44,
              column: 10
            },
            end: {
              line: 44,
              column: 11
            }
          },
          loc: {
            start: {
              line: 44,
              column: 16
            },
            end: {
              line: 44,
              column: 26
            }
          },
          line: 44
        },
        '9': {
          name: '(anonymous_9)',
          decl: {
            start: {
              line: 44,
              column: 28
            },
            end: {
              line: 44,
              column: 29
            }
          },
          loc: {
            start: {
              line: 44,
              column: 34
            },
            end: {
              line: 44,
              column: 44
            }
          },
          line: 44
        },
        '10': {
          name: 'embedChildren',
          decl: {
            start: {
              line: 47,
              column: 9
            },
            end: {
              line: 47,
              column: 22
            }
          },
          loc: {
            start: {
              line: 50,
              column: 24
            },
            end: {
              line: 55,
              column: 1
            }
          },
          line: 50
        },
        '11': {
          name: '(anonymous_11)',
          decl: {
            start: {
              line: 52,
              column: 33
            },
            end: {
              line: 52,
              column: 34
            }
          },
          loc: {
            start: {
              line: 52,
              column: 42
            },
            end: {
              line: 52,
              column: 69
            }
          },
          line: 52
        },
        '12': {
          name: '(anonymous_12)',
          decl: {
            start: {
              line: 54,
              column: 37
            },
            end: {
              line: 54,
              column: 38
            }
          },
          loc: {
            start: {
              line: 54,
              column: 43
            },
            end: {
              line: 54,
              column: 53
            }
          },
          line: 54
        },
        '13': {
          name: 'embedImages',
          decl: {
            start: {
              line: 57,
              column: 24
            },
            end: {
              line: 57,
              column: 35
            }
          },
          loc: {
            start: {
              line: 60,
              column: 24
            },
            end: {
              line: 69,
              column: 1
            }
          },
          line: 60
        },
        '14': {
          name: '(anonymous_14)',
          decl: {
            start: {
              line: 66,
              column: 10
            },
            end: {
              line: 66,
              column: 11
            }
          },
          loc: {
            start: {
              line: 66,
              column: 18
            },
            end: {
              line: 66,
              column: 48
            }
          },
          line: 66
        },
        '15': {
          name: '(anonymous_15)',
          decl: {
            start: {
              line: 67,
              column: 10
            },
            end: {
              line: 67,
              column: 11
            }
          },
          loc: {
            start: {
              line: 67,
              column: 18
            },
            end: {
              line: 67,
              column: 47
            }
          },
          line: 67
        },
        '16': {
          name: '(anonymous_16)',
          decl: {
            start: {
              line: 68,
              column: 10
            },
            end: {
              line: 68,
              column: 11
            }
          },
          loc: {
            start: {
              line: 68,
              column: 18
            },
            end: {
              line: 68,
              column: 46
            }
          },
          line: 68
        }
      },
      branchMap: {
        '0': {
          loc: {
            start: {
              line: 11,
              column: 2
            },
            end: {
              line: 13,
              column: 3
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 11,
              column: 2
            },
            end: {
              line: 13,
              column: 3
            }
          }, {
            start: {
              line: 11,
              column: 2
            },
            end: {
              line: 13,
              column: 3
            }
          }],
          line: 11
        },
        '1': {
          loc: {
            start: {
              line: 32,
              column: 2
            },
            end: {
              line: 34,
              column: 3
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 32,
              column: 2
            },
            end: {
              line: 34,
              column: 3
            }
          }, {
            start: {
              line: 32,
              column: 2
            },
            end: {
              line: 34,
              column: 3
            }
          }],
          line: 32
        },
        '2': {
          loc: {
            start: {
              line: 32,
              column: 6
            },
            end: {
              line: 32,
              column: 76
            }
          },
          type: 'binary-expr',
          locations: [{
            start: {
              line: 32,
              column: 6
            },
            end: {
              line: 32,
              column: 47
            }
          }, {
            start: {
              line: 32,
              column: 51
            },
            end: {
              line: 32,
              column: 76
            }
          }],
          line: 32
        },
        '3': {
          loc: {
            start: {
              line: 61,
              column: 2
            },
            end: {
              line: 63,
              column: 3
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 61,
              column: 2
            },
            end: {
              line: 63,
              column: 3
            }
          }, {
            start: {
              line: 61,
              column: 2
            },
            end: {
              line: 63,
              column: 3
            }
          }],
          line: 61
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
        '28': 0
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

  function embedBackground(clonedNode, options) {
    cov_g4vlqsgoh.f[0]++;

    var background = (cov_g4vlqsgoh.s[0]++, clonedNode.style.getPropertyValue('background'));
    cov_g4vlqsgoh.s[1]++;
    if (!background) {
      cov_g4vlqsgoh.b[0][0]++;
      cov_g4vlqsgoh.s[2]++;

      return _promise2.default.resolve(clonedNode);
    } else {
      cov_g4vlqsgoh.b[0][1]++;
    }

    cov_g4vlqsgoh.s[3]++;
    return _promise2.default.resolve(background).then(function (cssString) {
      cov_g4vlqsgoh.f[1]++;
      cov_g4vlqsgoh.s[4]++;
      return (0, _embedResources2.default)(cssString, null, options);
    }).then(function (cssString) {
      cov_g4vlqsgoh.f[2]++;
      cov_g4vlqsgoh.s[5]++;

      clonedNode.style.setProperty('background', cssString, clonedNode.style.getPropertyPriority('background'));

      cov_g4vlqsgoh.s[6]++;
      return clonedNode;
    });
  }

  function embedImageNode(clonedNode, options) {
    cov_g4vlqsgoh.f[3]++;
    cov_g4vlqsgoh.s[7]++;

    if ((cov_g4vlqsgoh.b[2][0]++, !(clonedNode instanceof HTMLImageElement)) || (cov_g4vlqsgoh.b[2][1]++, (0, _utils.isDataUrl)(clonedNode.src))) {
      cov_g4vlqsgoh.b[1][0]++;
      cov_g4vlqsgoh.s[8]++;

      return _promise2.default.resolve(clonedNode);
    } else {
      cov_g4vlqsgoh.b[1][1]++;
    }

    cov_g4vlqsgoh.s[9]++;
    return _promise2.default.resolve(clonedNode.src).then(function (url) {
      cov_g4vlqsgoh.f[4]++;
      cov_g4vlqsgoh.s[10]++;
      return (0, _getBlobFromURL2.default)(url, options);
    }).then(function (data) {
      cov_g4vlqsgoh.f[5]++;
      cov_g4vlqsgoh.s[11]++;
      return (0, _utils.toDataURL)(data, (0, _utils.getMimeType)(clonedNode.src));
    }).then(function (dataURL) {
      cov_g4vlqsgoh.f[6]++;
      cov_g4vlqsgoh.s[12]++;
      return new _promise2.default(function (resolve, reject) {
        cov_g4vlqsgoh.f[7]++;
        cov_g4vlqsgoh.s[13]++;

        clonedNode.onload = resolve;
        cov_g4vlqsgoh.s[14]++;
        clonedNode.onerror = reject;
        cov_g4vlqsgoh.s[15]++;
        clonedNode.src = dataURL;
      });
    }).then(function () {
      cov_g4vlqsgoh.f[8]++;
      cov_g4vlqsgoh.s[16]++;
      return clonedNode;
    }, function () {
      cov_g4vlqsgoh.f[9]++;
      cov_g4vlqsgoh.s[17]++;
      return clonedNode;
    });
  }

  function embedChildren(clonedNode, options) {
    cov_g4vlqsgoh.f[10]++;

    var children = (cov_g4vlqsgoh.s[18]++, (0, _utils.toArray)(clonedNode.childNodes));
    var deferreds = (cov_g4vlqsgoh.s[19]++, children.map(function (child) {
      cov_g4vlqsgoh.f[11]++;
      cov_g4vlqsgoh.s[20]++;
      return embedImages(child, options);
    })); // eslint-disable-line

    cov_g4vlqsgoh.s[21]++;
    return _promise2.default.all(deferreds).then(function () {
      cov_g4vlqsgoh.f[12]++;
      cov_g4vlqsgoh.s[22]++;
      return clonedNode;
    });
  }

  function embedImages(clonedNode, options) {
    cov_g4vlqsgoh.f[13]++;
    cov_g4vlqsgoh.s[23]++;

    if (!(clonedNode instanceof Element)) {
      cov_g4vlqsgoh.b[3][0]++;
      cov_g4vlqsgoh.s[24]++;

      return _promise2.default.resolve(clonedNode);
    } else {
      cov_g4vlqsgoh.b[3][1]++;
    }

    cov_g4vlqsgoh.s[25]++;
    return _promise2.default.resolve(clonedNode).then(function (node) {
      cov_g4vlqsgoh.f[14]++;
      cov_g4vlqsgoh.s[26]++;
      return embedBackground(node, options);
    }).then(function (node) {
      cov_g4vlqsgoh.f[15]++;
      cov_g4vlqsgoh.s[27]++;
      return embedImageNode(node, options);
    }).then(function (node) {
      cov_g4vlqsgoh.f[16]++;
      cov_g4vlqsgoh.s[28]++;
      return embedChildren(node, options);
    });
  }
});