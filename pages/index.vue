<template>
  <div style="margin-top: 90px">
    <client-only>
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
// import { EventBus } from '@/event-bus'
import { handleClicks } from '@/mixins/handleClicks'
export default {
  mixins: [handleClicks],
  async asyncData({ $content, params }) {
    const now = new Date().toJSON().split('T')[0]
    const doc = await $content('index').fetch()
    const news = await $content('news')
      .only(['title', 'description', 'scheduled', 'slug', 'markdown', 'path'])
      .where({ scheduled: { $gt: now } })
      .sortBy('scheduled', 'desc')
      .fetch()
    const newsFinal = news.map((item) => ({
      ...item,
      show: false,
    }))
    return { doc, newsFinal }
  },
  data() {
    return {
      isLoading: true,
    }
  },
  created() {},
  mounted() {},
  methods: {
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
      title: 'Home',
    }
  },
}
</script>

<style></style>
