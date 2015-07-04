var fs = require('fs');

var postcss = require('postcss');

var plugins = require('./plugins');

var sourceCss = fs.readFileSync('ugly.css');
var processOpts = {
  from: 'ugly.css',
  to: 'pretty.css',
  map: true
};

postcss(plugins)
  .process(sourceCss, processOpts)
  .then(function (result) {
      fs.writeFileSync('pretty.css', result.css);
  });
