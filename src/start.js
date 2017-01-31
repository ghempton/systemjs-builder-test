System.register(['react', 'react-dom', 'react-sizeme'], function (_export, _context) {
  "use strict";

  var React, ReactDOM, sizeMe;
  return {
    setters: [function (_react) {
      React = _react.default;
    }, function (_reactDom) {
      ReactDOM = _reactDom.default;
    }, function (_reactSizeMe) {
      sizeMe = _reactSizeMe.default;
    }],
    execute: function () {
      console.log(sizeMe);
      debugger;

    }
  };
});
