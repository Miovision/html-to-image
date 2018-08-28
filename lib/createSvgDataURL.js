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
    global.createSvgDataURL = mod.exports;
  }
})(this, function (exports, _utils) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = createSvgDataURL;

  var cov_1fhnz0itzv = function () {
    var path = '/Users/jhill/html-to-image/src/createSvgDataURL.js',
        hash = 'b990f08a9b1551402b6e801e76df19a36393c05e',
        Function = function () {}.constructor,
        global = new Function('return this')(),
        gcv = '__coverage__',
        coverageData = {
      path: '/Users/jhill/html-to-image/src/createSvgDataURL.js',
      statementMap: {
        '0': {
          start: {
            line: 8,
            column: 16
          },
          end: {
            line: 8,
            column: 44
          }
        },
        '1': {
          start: {
            line: 9,
            column: 14
          },
          end: {
            line: 9,
            column: 52
          }
        },
        '2': {
          start: {
            line: 10,
            column: 24
          },
          end: {
            line: 10,
            column: 72
          }
        },
        '3': {
          start: {
            line: 12,
            column: 2
          },
          end: {
            line: 12,
            column: 42
          }
        },
        '4': {
          start: {
            line: 13,
            column: 2
          },
          end: {
            line: 13,
            column: 44
          }
        },
        '5': {
          start: {
            line: 15,
            column: 2
          },
          end: {
            line: 15,
            column: 53
          }
        },
        '6': {
          start: {
            line: 16,
            column: 2
          },
          end: {
            line: 16,
            column: 54
          }
        },
        '7': {
          start: {
            line: 17,
            column: 2
          },
          end: {
            line: 17,
            column: 44
          }
        },
        '8': {
          start: {
            line: 18,
            column: 2
          },
          end: {
            line: 18,
            column: 44
          }
        },
        '9': {
          start: {
            line: 19,
            column: 2
          },
          end: {
            line: 19,
            column: 73
          }
        },
        '10': {
          start: {
            line: 21,
            column: 2
          },
          end: {
            line: 21,
            column: 32
          }
        },
        '11': {
          start: {
            line: 22,
            column: 2
          },
          end: {
            line: 22,
            column: 39
          }
        },
        '12': {
          start: {
            line: 24,
            column: 2
          },
          end: {
            line: 24,
            column: 26
          }
        }
      },
      fnMap: {
        '0': {
          name: 'createSvgDataURL',
          decl: {
            start: {
              line: 3,
              column: 24
            },
            end: {
              line: 3,
              column: 40
            }
          },
          loc: {
            start: {
              line: 7,
              column: 19
            },
            end: {
              line: 25,
              column: 1
            }
          },
          line: 7
        }
      },
      branchMap: {},
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
        '12': 0
      },
      f: {
        '0': 0
      },
      b: {},
      _coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
    },
        coverage = global[gcv] || (global[gcv] = {});

    if (coverage[path] && coverage[path].hash === hash) {
      return coverage[path];
    }

    coverageData.hash = hash;
    return coverage[path] = coverageData;
  }();

  function createSvgDataURL(clonedNode, width, height) {
    cov_1fhnz0itzv.f[0]++;

    var xmlns = (cov_1fhnz0itzv.s[0]++, 'http://www.w3.org/2000/svg');
    var svg = (cov_1fhnz0itzv.s[1]++, document.createElementNS(xmlns, 'svg'));
    var foreignObject = (cov_1fhnz0itzv.s[2]++, document.createElementNS(xmlns, 'foreignObject'));

    cov_1fhnz0itzv.s[3]++;
    svg.setAttributeNS(null, 'width', width);
    cov_1fhnz0itzv.s[4]++;
    svg.setAttributeNS(null, 'height', height);

    cov_1fhnz0itzv.s[5]++;
    foreignObject.setAttributeNS(null, 'width', '100%');
    cov_1fhnz0itzv.s[6]++;
    foreignObject.setAttributeNS(null, 'height', '100%');
    cov_1fhnz0itzv.s[7]++;
    foreignObject.setAttributeNS(null, 'x', 0);
    cov_1fhnz0itzv.s[8]++;
    foreignObject.setAttributeNS(null, 'y', 0);
    cov_1fhnz0itzv.s[9]++;
    foreignObject.setAttributeNS(null, 'externalResourcesRequired', 'true');

    cov_1fhnz0itzv.s[10]++;
    svg.appendChild(foreignObject);
    cov_1fhnz0itzv.s[11]++;
    foreignObject.appendChild(clonedNode);

    cov_1fhnz0itzv.s[12]++;
    return (0, _utils.svgToDataURL)(svg);
  }
});