# postcss as a styleguide linter

Just playing around with [`postcss`](https://npm.im/postcss) as a styleguide linter per [frontend/#19](https://github.com/18F/frontend/issues/19).

## installation

0. `git clone git@github.com:jeremiak/postcss-style-linter.git && cd postcss-style-linter`
0. `npm install`
0. `npm start`

This should run through all of the very lightweight plugins in `./plugins.js` and run them against `ugly.css` to generate `pretty.css`

The only dependency is `postcss` and the plugin architecture of the tool would provide a really extensible framework for the CSS build toolchain.

Plus, it has sourcemaps!