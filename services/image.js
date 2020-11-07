const appConfig = require('@/config.json')
const ThumborUrlBuilder = require('thumbor-url-builder')

// console.log(thumborURL)

const getThumbnail = (key, path) => {
  const thumborURL = new ThumborUrlBuilder(key, appConfig.image.server)

  const url = thumborURL
    .setImagePath(path)
    .resize(appConfig.image.thumbWidth, appConfig.image.thumbHeight)
    .smartCrop(false)
    .buildUrl()
  return url.replace(/\s/g, '')
}

const getSplash = (key, path) => {
  const thumborURL = new ThumborUrlBuilder(key, appConfig.image.server)

  const url = thumborURL
    .setImagePath(path)
    .resize(800, 400)
    .smartCrop(false)
    .buildUrl()
  console.log(url)
  return url.replace(/\s/g, '')
}

export { getThumbnail, getSplash }
