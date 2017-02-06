System.register(['react', 'react-dom', 'chai-enzyme'], function (_export, _context) {
  "use strict";

  var React, ReactDOM, chaiEnzyme;
  return {
    setters: [function (_react) {
      React = _react.default;
    }, function (_reactDom) {
      ReactDOM = _reactDom.default;
    }, function (_chaiEnzyme) {
      chaiEnzyme = _chaiEnzyme.default;
    }],
    execute: function () {
      console.log(chaiEnzyme);
      debugger;

    }
  };
});
