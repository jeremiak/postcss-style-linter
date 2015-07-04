var postcss = require('postcss');

var ensureNoIndentSelectors = postcss.plugin('no-selector-indentation', function (opts) {
    opts = opts || {};

    return function(css) {
      css.eachRule(function(rule) {
        rule.selectors = rule.selectors.map(function(a, i) {
          if ( i != 0 ) return '\n' + a;
          return a;
        });
      });
    };
});

var ensureSpaceInRuleName = postcss.plugin('space-in-rule', function (opts) {
    opts = opts || {};

    return function(css) {
      css.eachRule(function(rule) {
        rule.between = ' ';
      });
    };
});

var ensureNewLineBeforeRuleClosing = postcss.plugin('newline-after-last-declaration', function (opts) {
    opts = opts || {};

    return function(css) {
      css.eachRule(function(rule) {
        rule.after = '\n';
      });
    };
});

var ensureNewLinesAfterRule = postcss.plugin('newlines-after-rule', function (opts) {
    opts = opts || {};

    return function(css) {
      css.eachRule(function(rule) {
        rule.before = '\n\n';
      });

      css.first.before = '';
    };
});

var ensureEachPropertyOwnLine = postcss.plugin('property-on-own-line', function (opts) {
    opts = opts || {};

    return function(css) {
      css.eachDecl(function(decl) {
        decl.before = '\n  ';
      });
    };
});

var ensureSpaceInProperty = postcss.plugin('space-in-property', function (opts) {
    opts = opts || {};

    return function(css) {
      css.eachDecl(function(decl) {
        decl.between = ': ';
      });
    };
});

module.exports = [ensureNoIndentSelectors,
  ensureSpaceInRuleName,
  ensureEachPropertyOwnLine,
  ensureSpaceInProperty,
  ensureNewLineBeforeRuleClosing,
  ensureNewLinesAfterRule
];
