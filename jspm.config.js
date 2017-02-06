SystemJS.config({
  paths: {
    "npm:": "jspm_packages/npm/",
    "github:": "jspm_packages/github/",
    "app/": "src/"
  },
  browserConfig: {
    "baseURL": "/"
  },
  packages: {
    "app": {
      "format": "register"
    }
  }
});

SystemJS.config({
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json",
    "github:*/*.json"
  ],
  map: {
    "assert": "npm:jspm-nodelibs-assert@0.2.0",
    "buffer": "npm:jspm-nodelibs-buffer@0.2.1",
    "chai": "npm:chai@3.5.0",
    "chai-enzyme": "npm:chai-enzyme@0.6.1",
    "cheerio": "npm:cheerio@0.22.0",
    "child_process": "npm:jspm-nodelibs-child_process@0.2.0",
    "constants": "npm:jspm-nodelibs-constants@0.2.0",
    "crypto": "npm:jspm-nodelibs-crypto@0.2.0",
    "domain": "npm:jspm-nodelibs-domain@0.2.0",
    "enzyme": "npm:enzyme@2.7.1",
    "events": "npm:jspm-nodelibs-events@0.2.0",
    "fs": "npm:jspm-nodelibs-fs@0.2.0",
    "http": "npm:jspm-nodelibs-http@0.2.0",
    "https": "npm:jspm-nodelibs-https@0.2.1",
    "json": "github:systemjs/plugin-json@0.2.3",
    "os": "npm:jspm-nodelibs-os@0.2.0",
    "path": "npm:jspm-nodelibs-path@0.2.1",
    "process": "npm:jspm-nodelibs-process@0.2.0",
    "react": "npm:react@15.4.2",
    "react-addons-test-utils": "npm:react-addons-test-utils@15.4.2",
    "react-dom": "npm:react-dom@15.4.2",
    "stream": "npm:jspm-nodelibs-stream@0.2.0",
    "string_decoder": "npm:jspm-nodelibs-string_decoder@0.2.0",
    "url": "npm:jspm-nodelibs-url@0.2.0",
    "util": "npm:jspm-nodelibs-util@0.2.1",
    "vm": "npm:jspm-nodelibs-vm@0.2.0",
    "zlib": "npm:jspm-nodelibs-zlib@0.2.2"
  },
  packages: {
    "npm:react@15.4.2": {
      "map": {
        "fbjs": "npm:fbjs@0.8.9",
        "loose-envify": "npm:loose-envify@1.3.1",
        "object-assign": "npm:object-assign@4.1.1"
      }
    },
    "npm:react-dom@15.4.2": {
      "map": {
        "fbjs": "npm:fbjs@0.8.9",
        "loose-envify": "npm:loose-envify@1.3.1",
        "object-assign": "npm:object-assign@4.1.1"
      }
    },
    "npm:loose-envify@1.3.1": {
      "map": {
        "js-tokens": "npm:js-tokens@3.0.1"
      }
    },
    "npm:promise@7.1.1": {
      "map": {
        "asap": "npm:asap@2.0.5"
      }
    },
    "npm:isomorphic-fetch@2.2.1": {
      "map": {
        "whatwg-fetch": "npm:whatwg-fetch@2.0.2",
        "node-fetch": "npm:node-fetch@1.6.3"
      }
    },
    "npm:jspm-nodelibs-stream@0.2.0": {
      "map": {
        "stream-browserify": "npm:stream-browserify@2.0.1"
      }
    },
    "npm:node-fetch@1.6.3": {
      "map": {
        "encoding": "npm:encoding@0.1.12",
        "is-stream": "npm:is-stream@1.1.0"
      }
    },
    "npm:stream-browserify@2.0.1": {
      "map": {
        "readable-stream": "npm:readable-stream@2.2.2",
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:readable-stream@2.2.2": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "core-util-is": "npm:core-util-is@1.0.2",
        "buffer-shims": "npm:buffer-shims@1.0.0",
        "isarray": "npm:isarray@1.0.0",
        "process-nextick-args": "npm:process-nextick-args@1.0.7",
        "string_decoder": "npm:string_decoder@0.10.31",
        "util-deprecate": "npm:util-deprecate@1.0.2"
      }
    },
    "npm:jspm-nodelibs-domain@0.2.0": {
      "map": {
        "domain-browserify": "npm:domain-browser@1.1.7"
      }
    },
    "npm:encoding@0.1.12": {
      "map": {
        "iconv-lite": "npm:iconv-lite@0.4.15"
      }
    },
    "npm:jspm-nodelibs-buffer@0.2.1": {
      "map": {
        "buffer": "npm:buffer@4.9.1"
      }
    },
    "npm:jspm-nodelibs-url@0.2.0": {
      "map": {
        "url-browserify": "npm:url@0.11.0"
      }
    },
    "npm:jspm-nodelibs-zlib@0.2.2": {
      "map": {
        "browserify-zlib": "npm:browserify-zlib@0.1.4"
      }
    },
    "npm:jspm-nodelibs-http@0.2.0": {
      "map": {
        "http-browserify": "npm:stream-http@2.6.3"
      }
    },
    "npm:buffer@4.9.1": {
      "map": {
        "isarray": "npm:isarray@1.0.0",
        "ieee754": "npm:ieee754@1.1.8",
        "base64-js": "npm:base64-js@1.2.0"
      }
    },
    "npm:stream-http@2.6.3": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "readable-stream": "npm:readable-stream@2.2.2",
        "to-arraybuffer": "npm:to-arraybuffer@1.0.1",
        "xtend": "npm:xtend@4.0.1",
        "builtin-status-codes": "npm:builtin-status-codes@3.0.0"
      }
    },
    "npm:browserify-zlib@0.1.4": {
      "map": {
        "readable-stream": "npm:readable-stream@2.2.2",
        "pako": "npm:pako@0.2.9"
      }
    },
    "npm:url@0.11.0": {
      "map": {
        "querystring": "npm:querystring@0.2.0",
        "punycode": "npm:punycode@1.3.2"
      }
    },
    "npm:jspm-nodelibs-string_decoder@0.2.0": {
      "map": {
        "string_decoder-browserify": "npm:string_decoder@0.10.31"
      }
    },
    "npm:jspm-nodelibs-os@0.2.0": {
      "map": {
        "os-browserify": "npm:os-browserify@0.2.1"
      }
    },
    "npm:jspm-nodelibs-crypto@0.2.0": {
      "map": {
        "crypto-browserify": "npm:crypto-browserify@3.11.0"
      }
    },
    "npm:crypto-browserify@3.11.0": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "create-hash": "npm:create-hash@1.1.2",
        "browserify-sign": "npm:browserify-sign@4.0.0",
        "browserify-cipher": "npm:browserify-cipher@1.0.0",
        "create-ecdh": "npm:create-ecdh@4.0.0",
        "create-hmac": "npm:create-hmac@1.1.4",
        "public-encrypt": "npm:public-encrypt@4.0.0",
        "randombytes": "npm:randombytes@2.0.3",
        "diffie-hellman": "npm:diffie-hellman@5.0.2",
        "pbkdf2": "npm:pbkdf2@3.0.9"
      }
    },
    "npm:create-hash@1.1.2": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "ripemd160": "npm:ripemd160@1.0.1",
        "sha.js": "npm:sha.js@2.4.8",
        "cipher-base": "npm:cipher-base@1.0.3"
      }
    },
    "npm:create-hmac@1.1.4": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "create-hash": "npm:create-hash@1.1.2"
      }
    },
    "npm:browserify-sign@4.0.0": {
      "map": {
        "create-hmac": "npm:create-hmac@1.1.4",
        "inherits": "npm:inherits@2.0.3",
        "create-hash": "npm:create-hash@1.1.2",
        "bn.js": "npm:bn.js@4.11.6",
        "elliptic": "npm:elliptic@6.3.2",
        "browserify-rsa": "npm:browserify-rsa@4.0.1",
        "parse-asn1": "npm:parse-asn1@5.0.0"
      }
    },
    "npm:pbkdf2@3.0.9": {
      "map": {
        "create-hmac": "npm:create-hmac@1.1.4"
      }
    },
    "npm:public-encrypt@4.0.0": {
      "map": {
        "randombytes": "npm:randombytes@2.0.3",
        "create-hash": "npm:create-hash@1.1.2",
        "bn.js": "npm:bn.js@4.11.6",
        "browserify-rsa": "npm:browserify-rsa@4.0.1",
        "parse-asn1": "npm:parse-asn1@5.0.0"
      }
    },
    "npm:diffie-hellman@5.0.2": {
      "map": {
        "randombytes": "npm:randombytes@2.0.3",
        "bn.js": "npm:bn.js@4.11.6",
        "miller-rabin": "npm:miller-rabin@4.0.0"
      }
    },
    "npm:browserify-cipher@1.0.0": {
      "map": {
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
        "browserify-des": "npm:browserify-des@1.0.0",
        "browserify-aes": "npm:browserify-aes@1.0.6"
      }
    },
    "npm:create-ecdh@4.0.0": {
      "map": {
        "bn.js": "npm:bn.js@4.11.6",
        "elliptic": "npm:elliptic@6.3.2"
      }
    },
    "npm:evp_bytestokey@1.0.0": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2"
      }
    },
    "npm:cipher-base@1.0.3": {
      "map": {
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:elliptic@6.3.2": {
      "map": {
        "bn.js": "npm:bn.js@4.11.6",
        "inherits": "npm:inherits@2.0.3",
        "brorand": "npm:brorand@1.0.6",
        "hash.js": "npm:hash.js@1.0.3"
      }
    },
    "npm:browserify-rsa@4.0.1": {
      "map": {
        "bn.js": "npm:bn.js@4.11.6",
        "randombytes": "npm:randombytes@2.0.3"
      }
    },
    "npm:sha.js@2.4.8": {
      "map": {
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:browserify-des@1.0.0": {
      "map": {
        "cipher-base": "npm:cipher-base@1.0.3",
        "inherits": "npm:inherits@2.0.3",
        "des.js": "npm:des.js@1.0.0"
      }
    },
    "npm:browserify-aes@1.0.6": {
      "map": {
        "cipher-base": "npm:cipher-base@1.0.3",
        "create-hash": "npm:create-hash@1.1.2",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
        "inherits": "npm:inherits@2.0.3",
        "buffer-xor": "npm:buffer-xor@1.0.3"
      }
    },
    "npm:parse-asn1@5.0.0": {
      "map": {
        "browserify-aes": "npm:browserify-aes@1.0.6",
        "create-hash": "npm:create-hash@1.1.2",
        "pbkdf2": "npm:pbkdf2@3.0.9",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
        "asn1.js": "npm:asn1.js@4.9.1"
      }
    },
    "npm:miller-rabin@4.0.0": {
      "map": {
        "bn.js": "npm:bn.js@4.11.6",
        "brorand": "npm:brorand@1.0.6"
      }
    },
    "npm:des.js@1.0.0": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
      }
    },
    "npm:hash.js@1.0.3": {
      "map": {
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:asn1.js@4.9.1": {
      "map": {
        "bn.js": "npm:bn.js@4.11.6",
        "inherits": "npm:inherits@2.0.3",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
      }
    },
    "npm:chai-enzyme@0.6.1": {
      "map": {
        "react-element-to-jsx-string": "npm:react-element-to-jsx-string@5.0.7",
        "html": "npm:html@1.0.0"
      }
    },
    "npm:enzyme@2.7.1": {
      "map": {
        "cheerio": "npm:cheerio@0.22.0",
        "lodash": "npm:lodash@4.17.4",
        "object.assign": "npm:object.assign@4.0.4",
        "function.prototype.name": "npm:function.prototype.name@1.0.0",
        "uuid": "npm:uuid@2.0.3",
        "object.entries": "npm:object.entries@1.0.4",
        "object.values": "npm:object.values@1.0.4",
        "object-is": "npm:object-is@1.0.1",
        "is-subset": "npm:is-subset@0.1.1"
      }
    },
    "npm:cheerio@0.22.0": {
      "map": {
        "entities": "npm:entities@1.1.1",
        "htmlparser2": "npm:htmlparser2@3.9.2",
        "lodash.pick": "npm:lodash.pick@4.4.0",
        "lodash.some": "npm:lodash.some@4.6.0",
        "lodash.reduce": "npm:lodash.reduce@4.6.0",
        "lodash.assignin": "npm:lodash.assignin@4.2.0",
        "lodash.reject": "npm:lodash.reject@4.6.0",
        "lodash.merge": "npm:lodash.merge@4.6.0",
        "lodash.defaults": "npm:lodash.defaults@4.2.0",
        "lodash.map": "npm:lodash.map@4.6.0",
        "lodash.flatten": "npm:lodash.flatten@4.4.0",
        "lodash.foreach": "npm:lodash.foreach@4.5.0",
        "lodash.filter": "npm:lodash.filter@4.6.0",
        "css-select": "npm:css-select@1.2.0",
        "lodash.bind": "npm:lodash.bind@4.2.1",
        "dom-serializer": "npm:dom-serializer@0.1.0"
      }
    },
    "npm:react-element-to-jsx-string@5.0.7": {
      "map": {
        "sortobject": "npm:sortobject@1.1.1",
        "is-plain-object": "npm:is-plain-object@2.0.1",
        "collapse-white-space": "npm:collapse-white-space@1.0.2",
        "stringify-object": "npm:stringify-object@2.4.0",
        "lodash": "npm:lodash@4.17.4",
        "traverse": "npm:traverse@0.6.6"
      }
    },
    "npm:chai@3.5.0": {
      "map": {
        "assertion-error": "npm:assertion-error@1.0.2",
        "deep-eql": "npm:deep-eql@0.1.3",
        "type-detect": "npm:type-detect@1.0.0"
      }
    },
    "npm:html@1.0.0": {
      "map": {
        "concat-stream": "npm:concat-stream@1.6.0"
      }
    },
    "npm:react-addons-test-utils@15.4.2": {
      "map": {
        "fbjs": "npm:fbjs@0.8.9",
        "object-assign": "npm:object-assign@4.1.1"
      }
    },
    "npm:htmlparser2@3.9.2": {
      "map": {
        "entities": "npm:entities@1.1.1",
        "inherits": "npm:inherits@2.0.3",
        "readable-stream": "npm:readable-stream@2.2.2",
        "node-readable-stream": "npm:readable-stream@2.2.2",
        "domhandler": "npm:domhandler@2.3.0",
        "domutils": "npm:domutils@1.5.1",
        "domelementtype": "npm:domelementtype@1.3.0"
      }
    },
    "npm:deep-eql@0.1.3": {
      "map": {
        "type-detect": "npm:type-detect@0.1.1"
      }
    },
    "npm:fbjs@0.8.9": {
      "map": {
        "loose-envify": "npm:loose-envify@1.3.1",
        "object-assign": "npm:object-assign@4.1.1",
        "ua-parser-js": "npm:ua-parser-js@0.7.12",
        "promise": "npm:promise@7.1.1",
        "isomorphic-fetch": "npm:isomorphic-fetch@2.2.1",
        "setimmediate": "npm:setimmediate@1.0.5",
        "core-js": "npm:core-js@1.2.7"
      }
    },
    "npm:concat-stream@1.6.0": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "readable-stream": "npm:readable-stream@2.2.2",
        "typedarray": "npm:typedarray@0.0.6"
      }
    },
    "npm:is-plain-object@2.0.1": {
      "map": {
        "isobject": "npm:isobject@1.0.2"
      }
    },
    "npm:sortobject@1.1.1": {
      "map": {
        "editions": "npm:editions@1.3.3"
      }
    },
    "npm:dom-serializer@0.1.0": {
      "map": {
        "domelementtype": "npm:domelementtype@1.1.3",
        "entities": "npm:entities@1.1.1"
      }
    },
    "npm:stringify-object@2.4.0": {
      "map": {
        "is-plain-obj": "npm:is-plain-obj@1.1.0",
        "is-regexp": "npm:is-regexp@1.0.0"
      }
    },
    "npm:css-select@1.2.0": {
      "map": {
        "domutils": "npm:domutils@1.5.1",
        "css-what": "npm:css-what@2.1.0",
        "nth-check": "npm:nth-check@1.0.1",
        "boolbase": "npm:boolbase@1.0.0"
      }
    },
    "npm:object.assign@4.0.4": {
      "map": {
        "function-bind": "npm:function-bind@1.1.0",
        "object-keys": "npm:object-keys@1.0.11",
        "define-properties": "npm:define-properties@1.1.2"
      }
    },
    "npm:function.prototype.name@1.0.0": {
      "map": {
        "function-bind": "npm:function-bind@1.1.0",
        "define-properties": "npm:define-properties@1.1.2",
        "is-callable": "npm:is-callable@1.1.3"
      }
    },
    "npm:object.entries@1.0.4": {
      "map": {
        "function-bind": "npm:function-bind@1.1.0",
        "es-abstract": "npm:es-abstract@1.7.0",
        "define-properties": "npm:define-properties@1.1.2",
        "has": "npm:has@1.0.1"
      }
    },
    "npm:object.values@1.0.4": {
      "map": {
        "function-bind": "npm:function-bind@1.1.0",
        "es-abstract": "npm:es-abstract@1.7.0",
        "define-properties": "npm:define-properties@1.1.2",
        "has": "npm:has@1.0.1"
      }
    },
    "npm:domhandler@2.3.0": {
      "map": {
        "domelementtype": "npm:domelementtype@1.3.0"
      }
    },
    "npm:domutils@1.5.1": {
      "map": {
        "dom-serializer": "npm:dom-serializer@0.1.0",
        "domelementtype": "npm:domelementtype@1.3.0"
      }
    },
    "npm:es-abstract@1.7.0": {
      "map": {
        "function-bind": "npm:function-bind@1.1.0",
        "is-callable": "npm:is-callable@1.1.3",
        "es-to-primitive": "npm:es-to-primitive@1.1.1",
        "is-regex": "npm:is-regex@1.0.3"
      }
    },
    "npm:define-properties@1.1.2": {
      "map": {
        "object-keys": "npm:object-keys@1.0.11",
        "foreach": "npm:foreach@2.0.5"
      }
    },
    "npm:has@1.0.1": {
      "map": {
        "function-bind": "npm:function-bind@1.1.0"
      }
    },
    "npm:nth-check@1.0.1": {
      "map": {
        "boolbase": "npm:boolbase@1.0.0"
      }
    },
    "npm:es-to-primitive@1.1.1": {
      "map": {
        "is-callable": "npm:is-callable@1.1.3",
        "is-date-object": "npm:is-date-object@1.0.1",
        "is-symbol": "npm:is-symbol@1.0.1"
      }
    }
  }
});
