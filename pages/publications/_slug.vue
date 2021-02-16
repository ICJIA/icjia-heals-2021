<template>
  <div style="margin-top: 90px">
    <client-only>
      <Breadcrumb v-if="doc" :key="$route.path" :title="doc.title"></Breadcrumb>
      <v-container v-if="doc">
        <v-row>
          <v-col
            cols="12"
            sm="12"
            :md="dynamicFlex()"
            order-md="1"
            order="2"
            order-sm="2"
            class="markdown-body dynamic-content"
            @click="handleClicks"
          >
            <h1>{{ doc.title }}</h1>

            <div class="mb-10">
              <span
                style="
                  font-size: 14px;
                  color: #555;
                  margin-top: -10px;
                  font-weight: bold;
                "
              >
                <span v-if="doc.volume"
                  >{{ doc.volume.toUpperCase() }} &nbsp;|&nbsp;</span
                >{{ formatDate(doc.posted) }}</span
              >
            </div>
            <div v-if="doc.showSplash">
              <v-img
                v-if="doc.splash"
                :src="`${doc.splash}`"
                :lazy-src="getImagePath(`${doc.splash}`, 500, 333, 2)"
                width="100%"
                height="450"
                class="mb-5"
                style="border: 1px solid #fafafa"
                ><template v-slot:placeholder>
                  <v-row
                    class="fill-height ma-0"
                    align="center"
                    justify="center"
                  >
                    <v-progress-circular
                      indeterminate
                      color="blue darken-3"
                    ></v-progress-circular>
                  </v-row>
                </template>
              </v-img>
            </div>
            <nuxt-content :document="doc" />
          </v-col>
          <v-col
            v-if="doc.showToc"
            cols="12"
            sm="12"
            md="3"
            order-md="2"
            order="1"
            order-sm="1"
          >
            <toc :toc="doc.toc"></toc>
          </v-col>
        </v-row>
      </v-container>
      <v-container v-else>
        <Loader></Loader>
      </v-container>
    </client-only>
  </div>
</template>

<script>
import { getImageURL } from '@/services/image'
import { format, parseISO } from 'date-fns'
import { handleClicks } from '@/mixins/handleClicks'
export default {
  mixins: [handleClicks],
  async asyncData({ $content, params }) {
    const doc = await $content(`publications/${params.slug}`).fetch()
    return { doc }
  },
  data() {},
  mounted() {},
  methods: {
    fixImageError() {
      console.log('image error')
    },
    getImagePath(url, imgWidth = 450, imgHeight = 200, imageQuality = 30) {
      let imgPath
      if (this.$store.state.appEnv === 'development') {
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
    getMeta() {
      const metaObj = {}
      if (!this.isLoading) {
        metaObj.title = this.doc.title
        metaObj.description =
          this.doc.description ||
          'Helping Everyone Access Linked Systems (Illinois HEALS) is a multi-year initiative to address child and youth victimization.'
      }
      return metaObj
    },
    dynamicFlex() {
      if (this.$vuetify.breakpoint.xs || this.$vuetify.breakpoint.sm) {
        return '12'
      } else {
        return this.doc.showToc ? '9' : '12'
      }
    },
    formatDate(d) {
      const temp = new Date(d).toJSON().split('T')[0]
      const myDate = `${temp}T23:59:59.000Z`
      const formattedDate = format(parseISO(myDate), 'MMMM dd, yyyy')
      return formattedDate
    },
  },
  head() {
    return {
      title: this.doc.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.doc.description || 'Illinois HEALS',
        },
      ],
    }
  },
}
</script>
