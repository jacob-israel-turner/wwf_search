const fs = require('fs')

const babelrc = fs.readFileSync('./package.json').toString()
var config = {}

try {
  config = JSON.parse(babelrc).babel
} catch (err) {
  console.error('==> ERROR: Error parsing babel config')
  console.error(err)
}

require('babel-core/register')(config)
require('./main.js')
