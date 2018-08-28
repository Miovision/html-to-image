(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'babel-runtime/core-js/promise', './getBlobFromURL', './utils'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('babel-runtime/core-js/promise'), require('./getBlobFromURL'), require('./utils'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.promise, global.getBlobFromURL, global.utils);
    global.embedResources = mod.exports;
  }
})(this, function (exports, _promise, _getBlobFromURL, _utils) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.shouldEmbed = shouldEmbed;
  exports.default = embedResources;

  var _promise2 = _interopRequireDefault(_promise);

  var _getBlobFromURL2 = _interopRequireDefault(_getBlobFromURL);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var cov_2lyxfhh02r = function () {
    var path = '/Users/jhill/html-to-image/src/embedResources.js',
        hash = 'c73966fd3fbbf962ef279de04af81c5f926f0860',
        Function = function () {}.constructor,
        global = new Function('return this')(),
        gcv = '__coverage__',
        coverageData = {
      path: '/Users/jhill/html-to-image/src/embedResources.js',
      statementMap: {
        '0': {
          start: {
            line: 9,
            column: 18
          },
          end: {
            line: 9,
            column: 46
          }
        },
        '1': {
          start: {
            line: 12,
            column: 2
          },
          end: {
            line: 18,
            column: 3
          }
        },
        '2': {
          start: {
            line: 13,
            column: 4
          },
          end: {
            line: 13,
            column: 14
          }
        },
        '3': {
          start: {
            line: 14,
            column: 9
          },
          end: {
            line: 18,
            column: 3
          }
        },
        '4': {
          start: {
            line: 15,
            column: 4
          },
          end: {
            line: 15,
            column: 41
          }
        },
        '5': {
          start: {
            line: 16,
            column: 9
          },
          end: {
            line: 18,
            column: 3
          }
        },
        '6': {
          start: {
            line: 17,
            column: 4
          },
          end: {
            line: 17,
            column: 14
          }
        },
        '7': {
          start: {
            line: 20,
            column: 14
          },
          end: {
            line: 20,
            column: 58
          }
        },
        '8': {
          start: {
            line: 21,
            column: 15
          },
          end: {
            line: 21,
            column: 40
          }
        },
        '9': {
          start: {
            line: 22,
            column: 12
          },
          end: {
            line: 22,
            column: 34
          }
        },
        '10': {
          start: {
            line: 24,
            column: 2
          },
          end: {
            line: 24,
            column: 28
          }
        },
        '11': {
          start: {
            line: 25,
            column: 2
          },
          end: {
            line: 25,
            column: 25
          }
        },
        '12': {
          start: {
            line: 27,
            column: 2
          },
          end: {
            line: 27,
            column: 21
          }
        },
        '13': {
          start: {
            line: 28,
            column: 2
          },
          end: {
            line: 28,
            column: 14
          }
        },
        '14': {
          start: {
            line: 30,
            column: 2
          },
          end: {
            line: 30,
            column: 15
          }
        },
        '15': {
          start: {
            line: 34,
            column: 2
          },
          end: {
            line: 34,
            column: 56
          }
        },
        '16': {
          start: {
            line: 38,
            column: 2
          },
          end: {
            line: 38,
            column: 67
          }
        },
        '17': {
          start: {
            line: 42,
            column: 17
          },
          end: {
            line: 42,
            column: 19
          }
        },
        '18': {
          start: {
            line: 44,
            column: 2
          },
          end: {
            line: 47,
            column: 4
          }
        },
        '19': {
          start: {
            line: 45,
            column: 4
          },
          end: {
            line: 45,
            column: 20
          }
        },
        '20': {
          start: {
            line: 46,
            column: 4
          },
          end: {
            line: 46,
            column: 14
          }
        },
        '21': {
          start: {
            line: 49,
            column: 2
          },
          end: {
            line: 49,
            column: 46
          }
        },
        '22': {
          start: {
            line: 49,
            column: 30
          },
          end: {
            line: 49,
            column: 45
          }
        },
        '23': {
          start: {
            line: 58,
            column: 22
          },
          end: {
            line: 58,
            column: 78
          }
        },
        '24': {
          start: {
            line: 60,
            column: 2
          },
          end: {
            line: 64,
            column: 48
          }
        },
        '25': {
          start: {
            line: 61,
            column: 17
          },
          end: {
            line: 61,
            column: 45
          }
        },
        '26': {
          start: {
            line: 62,
            column: 18
          },
          end: {
            line: 62,
            column: 59
          }
        },
        '27': {
          start: {
            line: 63,
            column: 21
          },
          end: {
            line: 63,
            column: 81
          }
        },
        '28': {
          start: {
            line: 64,
            column: 21
          },
          end: {
            line: 64,
            column: 28
          }
        },
        '29': {
          start: {
            line: 64,
            column: 36
          },
          end: {
            line: 64,
            column: 47
          }
        },
        '30': {
          start: {
            line: 68,
            column: 2
          },
          end: {
            line: 68,
            column: 40
          }
        },
        '31': {
          start: {
            line: 76,
            column: 2
          },
          end: {
            line: 78,
            column: 3
          }
        },
        '32': {
          start: {
            line: 77,
            column: 4
          },
          end: {
            line: 77,
            column: 37
          }
        },
        '33': {
          start: {
            line: 80,
            column: 2
          },
          end: {
            line: 85,
            column: 6
          }
        },
        '34': {
          start: {
            line: 82,
            column: 18
          },
          end: {
            line: 85,
            column: 5
          }
        },
        '35': {
          start: {
            line: 83,
            column: 21
          },
          end: {
            line: 83,
            column: 72
          }
        },
        '36': {
          start: {
            line: 83,
            column: 38
          },
          end: {
            line: 83,
            column: 71
          }
        }
      },
      fnMap: {
        '0': {
          name: 'resolveUrl',
          decl: {
            start: {
              line: 11,
              column: 9
            },
            end: {
              line: 11,
              column: 19
            }
          },
          loc: {
            start: {
              line: 11,
              column: 58
            },
            end: {
              line: 31,
              column: 1
            }
          },
          line: 11
        },
        '1': {
          name: 'escape',
          decl: {
            start: {
              line: 33,
              column: 9
            },
            end: {
              line: 33,
              column: 15
            }
          },
          loc: {
            start: {
              line: 33,
              column: 37
            },
            end: {
              line: 35,
              column: 1
            }
          },
          line: 33
        },
        '2': {
          name: 'urlToRegex',
          decl: {
            start: {
              line: 37,
              column: 9
            },
            end: {
              line: 37,
              column: 19
            }
          },
          loc: {
            start: {
              line: 37,
              column: 41
            },
            end: {
              line: 39,
              column: 1
            }
          },
          line: 37
        },
        '3': {
          name: 'parseURLs',
          decl: {
            start: {
              line: 41,
              column: 9
            },
            end: {
              line: 41,
              column: 18
            }
          },
          loc: {
            start: {
              line: 41,
              column: 47
            },
            end: {
              line: 50,
              column: 1
            }
          },
          line: 41
        },
        '4': {
          name: '(anonymous_4)',
          decl: {
            start: {
              line: 44,
              column: 25
            },
            end: {
              line: 44,
              column: 26
            }
          },
          loc: {
            start: {
              line: 44,
              column: 50
            },
            end: {
              line: 47,
              column: 3
            }
          },
          line: 44
        },
        '5': {
          name: '(anonymous_5)',
          decl: {
            start: {
              line: 49,
              column: 23
            },
            end: {
              line: 49,
              column: 24
            }
          },
          loc: {
            start: {
              line: 49,
              column: 30
            },
            end: {
              line: 49,
              column: 45
            }
          },
          line: 49
        },
        '6': {
          name: 'embed',
          decl: {
            start: {
              line: 52,
              column: 9
            },
            end: {
              line: 52,
              column: 14
            }
          },
          loc: {
            start: {
              line: 57,
              column: 19
            },
            end: {
              line: 65,
              column: 1
            }
          },
          line: 57
        },
        '7': {
          name: '(anonymous_7)',
          decl: {
            start: {
              line: 61,
              column: 10
            },
            end: {
              line: 61,
              column: 11
            }
          },
          loc: {
            start: {
              line: 61,
              column: 17
            },
            end: {
              line: 61,
              column: 45
            }
          },
          line: 61
        },
        '8': {
          name: '(anonymous_8)',
          decl: {
            start: {
              line: 62,
              column: 10
            },
            end: {
              line: 62,
              column: 11
            }
          },
          loc: {
            start: {
              line: 62,
              column: 18
            },
            end: {
              line: 62,
              column: 59
            }
          },
          line: 62
        },
        '9': {
          name: '(anonymous_9)',
          decl: {
            start: {
              line: 63,
              column: 10
            },
            end: {
              line: 63,
              column: 11
            }
          },
          loc: {
            start: {
              line: 63,
              column: 21
            },
            end: {
              line: 63,
              column: 81
            }
          },
          line: 63
        },
        '10': {
          name: '(anonymous_10)',
          decl: {
            start: {
              line: 64,
              column: 10
            },
            end: {
              line: 64,
              column: 11
            }
          },
          loc: {
            start: {
              line: 64,
              column: 21
            },
            end: {
              line: 64,
              column: 28
            }
          },
          line: 64
        },
        '11': {
          name: '(anonymous_11)',
          decl: {
            start: {
              line: 64,
              column: 30
            },
            end: {
              line: 64,
              column: 31
            }
          },
          loc: {
            start: {
              line: 64,
              column: 36
            },
            end: {
              line: 64,
              column: 47
            }
          },
          line: 64
        },
        '12': {
          name: 'shouldEmbed',
          decl: {
            start: {
              line: 67,
              column: 16
            },
            end: {
              line: 67,
              column: 27
            }
          },
          loc: {
            start: {
              line: 67,
              column: 53
            },
            end: {
              line: 69,
              column: 1
            }
          },
          line: 67
        },
        '13': {
          name: 'embedResources',
          decl: {
            start: {
              line: 71,
              column: 24
            },
            end: {
              line: 71,
              column: 38
            }
          },
          loc: {
            start: {
              line: 75,
              column: 19
            },
            end: {
              line: 86,
              column: 1
            }
          },
          line: 75
        },
        '14': {
          name: '(anonymous_14)',
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
              column: 18
            },
            end: {
              line: 85,
              column: 5
            }
          },
          line: 82
        },
        '15': {
          name: '(anonymous_15)',
          decl: {
            start: {
              line: 83,
              column: 6
            },
            end: {
              line: 83,
              column: 7
            }
          },
          loc: {
            start: {
              line: 83,
              column: 21
            },
            end: {
              line: 83,
              column: 72
            }
          },
          line: 83
        },
        '16': {
          name: '(anonymous_16)',
          decl: {
            start: {
              line: 83,
              column: 31
            },
            end: {
              line: 83,
              column: 32
            }
          },
          loc: {
            start: {
              line: 83,
              column: 38
            },
            end: {
              line: 83,
              column: 71
            }
          },
          line: 83
        }
      },
      branchMap: {
        '0': {
          loc: {
            start: {
              line: 12,
              column: 2
            },
            end: {
              line: 18,
              column: 3
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 12,
              column: 2
            },
            end: {
              line: 18,
              column: 3
            }
          }, {
            start: {
              line: 12,
              column: 2
            },
            end: {
              line: 18,
              column: 3
            }
          }],
          line: 12
        },
        '1': {
          loc: {
            start: {
              line: 14,
              column: 9
            },
            end: {
              line: 18,
              column: 3
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 14,
              column: 9
            },
            end: {
              line: 18,
              column: 3
            }
          }, {
            start: {
              line: 14,
              column: 9
            },
            end: {
              line: 18,
              column: 3
            }
          }],
          line: 14
        },
        '2': {
          loc: {
            start: {
              line: 16,
              column: 9
            },
            end: {
              line: 18,
              column: 3
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 16,
              column: 9
            },
            end: {
              line: 18,
              column: 3
            }
          }, {
            start: {
              line: 16,
              column: 9
            },
            end: {
              line: 18,
              column: 3
            }
          }],
          line: 16
        },
        '3': {
          loc: {
            start: {
              line: 58,
              column: 22
            },
            end: {
              line: 58,
              column: 78
            }
          },
          type: 'cond-expr',
          locations: [{
            start: {
              line: 58,
              column: 32
            },
            end: {
              line: 58,
              column: 64
            }
          }, {
            start: {
              line: 58,
              column: 67
            },
            end: {
              line: 58,
              column: 78
            }
          }],
          line: 58
        },
        '4': {
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

  var URL_REGEX = (cov_2lyxfhh02r.s[0]++, /url\((['"]?)([^'"]+?)\1\)/g);

  function resolveUrl(url, baseUrl) {
    cov_2lyxfhh02r.f[0]++;
    cov_2lyxfhh02r.s[1]++;

    if (url.match(/^[a-z]+:\/\//i)) {
      cov_2lyxfhh02r.b[0][0]++;
      cov_2lyxfhh02r.s[2]++;
      // url is absolute already
      return url;
    } else {
        cov_2lyxfhh02r.b[0][1]++;
        cov_2lyxfhh02r.s[3]++;
        if (url.match(/^\/\//)) {
          cov_2lyxfhh02r.b[1][0]++;
          cov_2lyxfhh02r.s[4]++;

          return window.location.protocol + url; // url is absolute already, without protocol
        } else {
            cov_2lyxfhh02r.b[1][1]++;
            cov_2lyxfhh02r.s[5]++;
            if (url.match(/^[a-z]+:/i)) {
              cov_2lyxfhh02r.b[2][0]++;
              cov_2lyxfhh02r.s[6]++;
              // dataURI, mailto:, tel:, etc.
              return url;
            } else {
              cov_2lyxfhh02r.b[2][1]++;
            }
          }
      }var doc = (cov_2lyxfhh02r.s[7]++, document.implementation.createHTMLDocument());
    var base = (cov_2lyxfhh02r.s[8]++, doc.createElement('base'));
    var a = (cov_2lyxfhh02r.s[9]++, doc.createElement('a'));

    cov_2lyxfhh02r.s[10]++;
    doc.head.appendChild(base);
    cov_2lyxfhh02r.s[11]++;
    doc.body.appendChild(a);

    cov_2lyxfhh02r.s[12]++;
    base.href = baseUrl;
    cov_2lyxfhh02r.s[13]++;
    a.href = url;

    cov_2lyxfhh02r.s[14]++;
    return a.href;
  }

  function escape(url) {
    cov_2lyxfhh02r.f[1]++;
    cov_2lyxfhh02r.s[15]++;

    return url.replace(/([.*+?^${}()|\[\]\/\\])/g, '\\$1'); // eslint-disable-line
  }

  function urlToRegex(url) {
    cov_2lyxfhh02r.f[2]++;
    cov_2lyxfhh02r.s[16]++;

    return new RegExp('(url\\([\'"]?)(' + escape(url) + ')([\'"]?\\))', 'g');
  }

  function parseURLs(str) {
    cov_2lyxfhh02r.f[3]++;

    var result = (cov_2lyxfhh02r.s[17]++, []);

    cov_2lyxfhh02r.s[18]++;
    str.replace(URL_REGEX, function (raw, quotation, url) {
      cov_2lyxfhh02r.f[4]++;
      cov_2lyxfhh02r.s[19]++;

      result.push(url);
      cov_2lyxfhh02r.s[20]++;
      return raw;
    });

    cov_2lyxfhh02r.s[21]++;
    return result.filter(function (url) {
      cov_2lyxfhh02r.f[5]++;
      cov_2lyxfhh02r.s[22]++;
      return !(0, _utils.isDataUrl)(url);
    });
  }

  function embed(cssString, resourceURL, baseURL, options) {
    cov_2lyxfhh02r.f[6]++;

    var resolvedURL = (cov_2lyxfhh02r.s[23]++, baseURL ? (cov_2lyxfhh02r.b[3][0]++, resolveUrl(resourceURL, baseURL)) : (cov_2lyxfhh02r.b[3][1]++, resourceURL));

    cov_2lyxfhh02r.s[24]++;
    return _promise2.default.resolve(resolvedURL).then(function (url) {
      cov_2lyxfhh02r.f[7]++;
      cov_2lyxfhh02r.s[25]++;
      return (0, _getBlobFromURL2.default)(url, options);
    }).then(function (data) {
      cov_2lyxfhh02r.f[8]++;
      cov_2lyxfhh02r.s[26]++;
      return (0, _utils.toDataURL)(data, (0, _utils.getMimeType)(resourceURL));
    }).then(function (dataURL) {
      cov_2lyxfhh02r.f[9]++;
      cov_2lyxfhh02r.s[27]++;
      return cssString.replace(urlToRegex(resourceURL), '$1' + dataURL + '$3');
    }).then(function (content) {
      cov_2lyxfhh02r.f[10]++;
      cov_2lyxfhh02r.s[28]++;
      return content;
    }, function () {
      cov_2lyxfhh02r.f[11]++;
      cov_2lyxfhh02r.s[29]++;
      return resolvedURL;
    });
  }

  function shouldEmbed(string) {
    cov_2lyxfhh02r.f[12]++;
    cov_2lyxfhh02r.s[30]++;

    return string.search(URL_REGEX) !== -1;
  }

  function embedResources(cssString, baseUrl, options) {
    cov_2lyxfhh02r.f[13]++;
    cov_2lyxfhh02r.s[31]++;

    if (!shouldEmbed(cssString)) {
      cov_2lyxfhh02r.b[4][0]++;
      cov_2lyxfhh02r.s[32]++;

      return _promise2.default.resolve(cssString);
    } else {
      cov_2lyxfhh02r.b[4][1]++;
    }

    cov_2lyxfhh02r.s[33]++;
    return _promise2.default.resolve(cssString).then(parseURLs).then(function (urls) {
      cov_2lyxfhh02r.f[14]++;
      cov_2lyxfhh02r.s[34]++;
      return urls.reduce(function (done, url) {
        cov_2lyxfhh02r.f[15]++;
        cov_2lyxfhh02r.s[35]++;
        return done.then(function (ret) {
          cov_2lyxfhh02r.f[16]++;
          cov_2lyxfhh02r.s[36]++;
          return embed(ret, url, baseUrl, options);
        });
      }, _promise2.default.resolve(cssString));
    });
  }
});