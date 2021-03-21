<template>
  <div>
    <v-card
      class="pa-2 grid-item mb-10 info-card py-3 px-3"
      outlined
      @click="$router.push(item.path)"
    >
      <div style="font-size: 12px; margin-left: 15px">
        <v-chip
          v-if="isItNew(item)"
          label
          x-small
          color="#2296F3"
          class="icjia-card mr-2"
          style="margin-top: -2px"
        >
          <span style="color: #fff !important; font-weight: 900">
            NEW!
          </span> </v-chip
        >{{ formatDate(item.posted) }}
      </div>
      <v-card-text v-if="item.title"
        ><h2 style="margin-top: -10px">
          {{ item.title }}
        </h2></v-card-text
      >

      <v-img
        v-if="item.splash && !textOnly"
        :src="getImagePath(`${item.splash}`, 450, 200, 80)"
        :lazy-src="getImagePath(`${item.splash}`, 225, 100, 5)"
        width="100%"
        :height="splashHeight"
        class="mb-5"
        style="border: 1px solid #fafafa"
        alt="ILHEALS image"
        @load="resize"
        ><template #placeholder>
          <v-row class="fill-height ma-0" align="center" justify="center">
            <v-progress-circular
              indeterminate
              color="blue darken-3"
              aria-label="progress"
            ></v-progress-circular>
          </v-row>
        </template>
      </v-img>

      <v-card-text v-if="item.description" style="margin-top: -15px">{{
        item.description
      }}</v-card-text>
      <v-card-text>
        <div class="text-right">
          <v-btn
            x-small
            :to="item.path"
            :aria-label="`Read More about ${item.title} `"
          >
            {{ readMoreText }}
            <!-- <v-icon right>mdi-menu-right</v-icon> -->
          </v-btn>
        </div>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import { format, parseISO } from 'date-fns'
import { getImageURL } from '@/services/image'
import moment from 'moment'
export default {
  props: {
    item: {
      type: Object,
      default: () => {},
    },
    textOnly: {
      type: Boolean,
      default: true,
    },
    readMoreText: {
      type: String,
      default: 'Read article',
    },
    splashHeight: {
      type: Number,
      default: 200,
    },
  },
  mounted() {
    this.$emit('init')
  },

  methods: {
    isItNew(item) {
      const now = moment(new Date())
      const end = moment(item.posted) // another date
      const duration = moment.duration(now.diff(end))
      const days = duration.asDays()
      if (days <= 14) {
        return true
      } else {
        return false
      }
    },
    getImagePath(url, imgWidth = 450, imgHeight = 200, imageQuality = 30) {
      let imgPath
      if (this.$store.state.appEnv === 'development') {
        // For Dev
        // imgPath = `${url}`
        imgPath = `${this.$store.state.appConfig.clientURL}${url}`

        const thumborImgPath = getImageURL(
          imgPath,
          imgWidth,
          imgHeight,
          imageQuality
        )
        // console.log(thumborImgPath)
        return thumborImgPath
      } else {
        imgPath = `${this.$store.state.appConfig.clientURL}${url}`

        const thumborImgPath = getImageURL(
          imgPath,
          imgWidth,
          imgHeight,
          imageQuality
        )
        // console.log(thumborImgPath)
        return thumborImgPath
      }
    },
    formatDate(d) {
      const temp = new Date(d).toJSON().split('T')[0]
      const myDate = `${temp}T23:59:59.000Z`
      const formattedDate = format(parseISO(myDate), 'MMMM dd, yyyy')
      return formattedDate
    },
    resize() {
      // console.log('child image loaded')
      this.$emit('imageLoaded')
    },
  },
}
</script>

<style lang="scss" scoped></style>
