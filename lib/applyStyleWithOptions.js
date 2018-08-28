(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "babel-runtime/core-js/object/assign"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("babel-runtime/core-js/object/assign"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.assign);
    global.applyStyleWithOptions = mod.exports;
  }
})(this, function (exports, _assign) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = applyStyleWithOptions;

  var _assign2 = _interopRequireDefault(_assign);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var cov_23elkza2z4 = function () {
    var path = "/Users/jhill/html-to-image/src/applyStyleWithOptions.js",
        hash = "990c4118ed05ee57b87b6c69584763374f06f7af",
        Function = function () {}.constructor,
        global = new Function('return this')(),
        gcv = "__coverage__",
        coverageData = {
      path: "/Users/jhill/html-to-image/src/applyStyleWithOptions.js",
      statementMap: {
        "0": {
          start: {
            line: 5,
            column: 20
          },
          end: {
            line: 5,
            column: 30
          }
        },
        "1": {
          start: {
            line: 7,
            column: 2
          },
          end: {
            line: 9,
            column: 3
          }
        },
        "2": {
          start: {
            line: 8,
            column: 4
          },
          end: {
            line: 8,
            column: 51
          }
        },
        "3": {
          start: {
            line: 11,
            column: 2
          },
          end: {
            line: 13,
            column: 3
          }
        },
        "4": {
          start: {
            line: 12,
            column: 4
          },
          end: {
            line: 12,
            column: 38
          }
        },
        "5": {
          start: {
            line: 15,
            column: 2
          },
          end: {
            line: 17,
            column: 3
          }
        },
        "6": {
          start: {
            line: 16,
            column: 4
          },
          end: {
            line: 16,
            column: 40
          }
        },
        "7": {
          start: {
            line: 19,
            column: 2
          },
          end: {
            line: 21,
            column: 3
          }
        },
        "8": {
          start: {
            line: 20,
            column: 4
          },
          end: {
            line: 20,
            column: 39
          }
        },
        "9": {
          start: {
            line: 23,
            column: 2
          },
          end: {
            line: 23,
            column: 19
          }
        }
      },
      fnMap: {
        "0": {
          name: "applyStyleWithOptions",
          decl: {
            start: {
              line: 1,
              column: 24
            },
            end: {
              line: 1,
              column: 45
            }
          },
          loc: {
            start: {
              line: 4,
              column: 15
            },
            end: {
              line: 24,
              column: 1
            }
          },
          line: 4
        }
      },
      branchMap: {
        "0": {
          loc: {
            start: {
              line: 7,
              column: 2
            },
            end: {
              line: 9,
              column: 3
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 7,
              column: 2
            },
            end: {
              line: 9,
              column: 3
            }
          }, {
            start: {
              line: 7,
              column: 2
            },
            end: {
              line: 9,
              column: 3
            }
          }],
          line: 7
        },
        "1": {
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
          type: "if",
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
        "2": {
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
          type: "if",
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
        "3": {
          loc: {
            start: {
              line: 19,
              column: 2
            },
            end: {
              line: 21,
              column: 3
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 19,
              column: 2
            },
            end: {
              line: 21,
              column: 3
            }
          }, {
            start: {
              line: 19,
              column: 2
            },
            end: {
              line: 21,
              column: 3
            }
          }],
          line: 19
        }
      },
      s: {
        "0": 0,
        "1": 0,
        "2": 0,
        "3": 0,
        "4": 0,
        "5": 0,
        "6": 0,
        "7": 0,
        "8": 0,
        "9": 0
      },
      f: {
        "0": 0
      },
      b: {
        "0": [0, 0],
        "1": [0, 0],
        "2": [0, 0],
        "3": [0, 0]
      },
      _coverageSchema: "332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"
    },
        coverage = global[gcv] || (global[gcv] = {});

    if (coverage[path] && coverage[path].hash === hash) {
      return coverage[path];
    }

    coverageData.hash = hash;
    return coverage[path] = coverageData;
  }();

  function applyStyleWithOptions(clonedNode, options) {
    cov_23elkza2z4.f[0]++;

    var _ref = (cov_23elkza2z4.s[0]++, clonedNode),
        style = _ref.style;

    cov_23elkza2z4.s[1]++;


    if (options.backgroundColor) {
      cov_23elkza2z4.b[0][0]++;
      cov_23elkza2z4.s[2]++;

      style.backgroundColor = options.backgroundColor;
    } else {
      cov_23elkza2z4.b[0][1]++;
    }

    cov_23elkza2z4.s[3]++;
    if (options.width) {
      cov_23elkza2z4.b[1][0]++;
      cov_23elkza2z4.s[4]++;

      style.width = options.width + "px";
    } else {
      cov_23elkza2z4.b[1][1]++;
    }

    cov_23elkza2z4.s[5]++;
    if (options.height) {
      cov_23elkza2z4.b[2][0]++;
      cov_23elkza2z4.s[6]++;

      style.height = options.height + "px";
    } else {
      cov_23elkza2z4.b[2][1]++;
    }

    cov_23elkza2z4.s[7]++;
    if (options.style) {
      cov_23elkza2z4.b[3][0]++;
      cov_23elkza2z4.s[8]++;

      (0, _assign2.default)(style, options.style);
    } else {
      cov_23elkza2z4.b[3][1]++;
    }

    cov_23elkza2z4.s[9]++;
    return clonedNode;
  }
});