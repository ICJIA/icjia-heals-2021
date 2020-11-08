const appConfig = require('@/config.json')
const ThumborUrlBuilder = require('thumbor-url-builder')

// console.log(thumborURL)

const getThumbnail = (key, path) => {
  const thumborURL = new ThumborUrlBuilder(key, appConfig.image.server)

  const url = thumborURL
    .setImagePath(path)
    .resize(appConfig.image.thumbWidth, appConfig.image.thumbHeight)
    .filter(`quality(40)`)
    .smartCrop(false)
    .buildUrl()
  console.log(url)
  return url
}

const getSplash = (key, path) => {
  const thumborURL = new ThumborUrlBuilder(key, appConfig.image.server)

  const url = thumborURL
    .setImagePath(path)
    .resize(750, 450)
    .filter(`quality(40)`)
    .smartCrop(false)
    .buildUrl()
  console.log(url)
  return url
}

export { getThumbnail, getSplash }
