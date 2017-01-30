let Builder = require('systemjs-builder');

let builder = new Builder('.', './jspm.config.js');

builder.bundle('app/start', 'dist/bundle.js').then(function() {
  console.log("build complete");
}, function(e) {
  console.log("build errored");
  console.log(e);
});
