/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
const path = require('path')
const fs = require('fs')
const matter = require('gray-matter')
const toc = require('markdown-toc')
const globMd = require('glob-fs')({ gitignore: true })
const utils = require('./lib/utils')

const content = []

const markdown = globMd.readdirSync('./content/**/*.md')

markdown.forEach((file) => {
  const f = fs.readFileSync(file, { encoding: 'utf8', flag: 'r' })
  const m = matter(f)
  const route = file.replace('.md', '').replace('content', '') + '/'
  const obj = {}
  route === '/index/' ? (obj.route = '/') : (obj.route = route)
  obj.headings = toc(m.content).json.map((t) => {
    return t.content
  })
  obj.title = m.data.title
  obj.description = m.data.description
  obj.type = 'content'
  obj.file = false
  obj.searchMeta = m.data.searchMeta || ''
  content.push(obj)
})

const files = []
utils.walkSync('./static', function (filePath, stat) {
  const obj = {
    route: filePath.replace('static', ''),
    headings: [],
    file: true,
    title: path.basename(filePath),
    description: filePath.replace('static', ''),
    type: 'file',
    searchMeta: '',
  }
  // ... push to array if filename not in blacklist ...
  const searchBlacklist = /^.*\.(jpg|png|jpeg|ico|json|txt|DS_Store|html|js)$/i.test(
    obj.title
  )
  if (!searchBlacklist && !utils.blacklist.includes(obj.title)) files.push(obj)
})

const searchIndex = [...content, ...files]

utils.saveJson(searchIndex, './static/api/search.json')
console.log(`Site meta created: ./static/api/search.json"`)
