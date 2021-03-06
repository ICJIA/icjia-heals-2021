const fs = require('fs')
const moment = require('moment')
// eslint-disable-next-line no-unused-vars
const tz = require('moment-timezone')
const utils = require('./lib/utils')
const pkg = require('./package.json')
const tstamp = moment()
const chicagoTime = tstamp
  .tz('America/Chicago')
  .format('dddd, MMMM Do YYYY, h:mm:ssa z')

const banner = `<!--
****************************************************************************************************************************************
build:          ${chicagoTime}
name:           ${pkg.name}
description:    ${pkg.description}
homepage:       ${pkg.homepage}
source:         ${pkg.repository.url}
version:        ${pkg.version}
developer:      ${pkg.author.name} (${pkg.author.email})
license:        ${pkg.license}
*****************************************************************************************************************************************
-->`

const indexFiles = []
utils.walkSync('./dist', function (filePath, stat) {
  if (filePath.includes('index.html')) {
    indexFiles.push(filePath)
  }
})

indexFiles.forEach((f) => {
  console.log('build banner inserted: ', f)
  fs.appendFile(f, `${banner}`, function (err) {
    if (err) throw err
  })
})
const consoleBanner = banner.split('\n')
utils.saveJson(consoleBanner, './static/api/banner.json')
console.log(`Banner created: ./static/api/banner.json"`)
