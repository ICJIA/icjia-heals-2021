const appConfig = require('@/config.json')
const ThumborUrlBuilder = require('thumbor-url-builder')

const getThumbnail = (key, path) => {
  const thumborURL = new ThumborUrlBuilder(key, appConfig.image.server)

  const url = thumborURL
    .setImagePath(path)
    .resize(appConfig.image.thumbWidth, appConfig.image.thumbHeight)
    .filter(`quality(40)`)
    .smartCrop(false)
    .buildUrl()
  // console.log(url)
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
  // console.log(url)
  return url
}

const getImageURL = (
  path,
  imgWidth = 750,
  imgHeight = 500,
  imgQuality = 40
) => {
  const thumborURL = new ThumborUrlBuilder(
    process.env.NUXT_ENV_THUMBOR_KEY,
    appConfig.image.server
  )

  const url = thumborURL
    .setImagePath(path)
    .resize(imgWidth, imgHeight)
    .filter(`quality(${imgQuality})`)
    .smartCrop(true)
    .buildUrl()

  return url
}

export { getThumbnail, getSplash, getImageURL }
