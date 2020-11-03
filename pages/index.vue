<template>
  <div style="margin-top: 90px">
    <client-only>
      <Splash></Splash>
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
            ><h1 style="margin-bottom: 35px">
              <span class="brand-state-large">ILLINOIS</span>
              <span class="brand-name-large">HEALS</span>
            </h1>
            <nuxt-content :document="doc" />
          </v-col>
        </v-row>
      </v-container>
      <v-container v-else>
        <Loader></Loader>
      </v-container>
      <div
        style="background: #eee; min-height: 300px; border-top: 1px solid #ccc"
      >
        News here
      </div>
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

<style>
.brand-state-large {
  font-weight: 400;
  padding-right: 0px;
  text-transform: uppercase;
  font-size: 48px;
  color: #333;

  /* color: #fff; */
}
.brand-name-large {
  font-weight: 900;
  font-size: 48px;
  color: rgb(13, 79, 201);
  /* color: #fff; */
}
</style>
