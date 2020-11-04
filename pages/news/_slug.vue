<template>
  <client-only>
    <div style="margin-top: 90px">
      <Breadcrumb v-if="doc" :key="$route.path" :title="doc.title"></Breadcrumb>
      <v-container v-if="doc" style="margin-top: 90px">
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
            <div class="mb-8">
              <span
                style="
                  font-size: 14px;
                  color: #555;
                  margin-top: -15px;
                  font-weight: bold;
                "
                >{{ formatDate(doc.posted) }}</span
              >
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
    </div>
  </client-only>
</template>

<script>
import { format, parseISO } from 'date-fns'
import { handleClicks } from '@/mixins/handleClicks'
export default {
  mixins: [handleClicks],
  async asyncData({ $content, params }) {
    const doc = await $content(`news/${params.slug}`).fetch()
    return { doc }
  },
  data() {},
  methods: {
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
    formatDate(d) {
      const temp = new Date(d).toJSON().split('T')[0]
      const myDate = `${temp}T23:59:59.000Z`
      const formattedDate = format(parseISO(myDate), 'MMMM dd, yyyy')
      return formattedDate
    },
    dynamicFlex() {
      if (this.$vuetify.breakpoint.xs || this.$vuetify.breakpoint.sm) {
        return '12'
      } else {
        return this.doc.showToc ? '9' : '12'
      }
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
