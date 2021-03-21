<template>
  <v-container style="margin: 0 auto">
    <v-row>
      <v-col class="text-center">
        <div>
          <v-img
            :src="getImagePath(`/${imgFile}`, imgWidth, imgHeight, imgQuality)"
            :lazy-src="getImagePath(`/${imgFile}`, imgWidth, imgHeight, 1)"
            class="mb-5"
            :class="{ hover: imgHref }"
            style="border: 1px solid #fafafa"
            :alt="imgAlt"
            @click="gotoURL"
          />

          <div
            v-if="imgCaption"
            style="font-size: 13px; border-bottom: 1px solid #eee; color: #555"
            class="text-left mb-4 pb-1"
          >
            <span v-html="imgCaption"></span>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { getImageURL } from '@/services/image'
export default {
  props: {
    imgFile: {
      type: String,
      default: 'img/logo.png',
    },
    imgHeight: {
      type: Number,
      default: 0,
    },
    imgWidth: {
      type: Number,
      default: 0,
    },
    imgMaxWidth: {
      type: String,
      default: '100%',
    },
    imgCaption: {
      type: String,
      default: null,
    },
    imgHref: {
      type: String,
      default: null,
    },
    imgQuality: {
      type: Number,
      default: 60,
    },
    imgAlt: {
      type: String,
      default: 'ILHEALS image',
    },
    imgFolder: {
      type: String,
      default: '/',
    },
  },
  methods: {
    gotoURL() {
      if (this.imgHref) {
        window.open(this.imgHref, '_blank', 'noopener')
      }
      return null
    },
    getImagePath(imgFile, imgWidth = 1000, imgHeight = 400, imgQuality = 80) {
      let imgPath
      if (this.$store.state.appEnv === 'development') {
        // For Dev
        // imgPath = `${url}`
        imgPath = `${this.$store.state.appConfig.clientURL}${imgFile}`

        const thumborImgPath = getImageURL(
          imgPath,
          imgWidth,
          imgHeight,
          imgQuality
        )
        // console.log(thumborImgPath)
        return thumborImgPath
      } else {
        imgPath = `${this.$store.state.appConfig.clientURL}${imgFile}`

        const thumborImgPath = getImageURL(
          imgPath,
          imgWidth,
          imgHeight,
          imgQuality
        )
        // console.log(thumborImgPath)
        return thumborImgPath
      }
    },
  },
}
</script>

<style lang="scss" scoped></style>
