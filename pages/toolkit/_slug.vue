<template>
  <div style="margin-top: 100px" class="px-12">
    <h2>{{ doc.title }} Coming Soon</h2>
    <br />
    <!-- {{ doc }} -->
  </div>
</template>

<script>
import { format, parseISO } from 'date-fns'
import { getImageURL } from '@/services/image'
import { handleClicks } from '@/mixins/handleClicks'
import { fixNuxtContentHeadings } from '@/a11y'
export default {
  mixins: [handleClicks],
  async asyncData({ $content, params }) {
    const doc = await $content(`toolkit/${params.slug}`).fetch()
    return { doc }
  },
  data() {},
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
  async mounted() {
    await this.$nextTick()
    fixNuxtContentHeadings('h2, h3')
  },
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
}
</script>

<style scoped></style>
