import babelPluginIstanbul from 'babel-plugin-istanbul';
const ins = require("./server-routes.test")

function instrument(sourceCode, sourceMap, ins) {
  return babel.transform(sourceCode, {
    ins,
    plugins: [
      [babelPluginIstanbul, {
        inputSourceMap: sourceMap
      }]
    ]
  })
}