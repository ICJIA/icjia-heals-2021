<template>
  <div style="margin-top: 70px">
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
        style="
          background: #fafafa;
          min-height: 300px;
          border-top: 1px solid #ccc;
        "
      >
        <v-container>
          <v-row>
            <v-col v-if="news" cols="12" md="7" class="markdown-body">
              <div class="flex-title" style="border-bottom: 1px solid #ccc">
                <span class="home-title">News and Updates</span>
                <span class="archive-link hidden-sm-and-down"
                  ><v-btn
                    x-small
                    outlined
                    to="/news-and-updates"
                    aria-label="Go to the News Archive"
                    >Archive&nbsp;<v-icon right>mdi-menu-right</v-icon></v-btn
                  ></span
                >
              </div>

              <div class="mt-8">
                <div v-for="(item, index) in news" :key="`list-${index}`">
                  <info-card
                    :item="item"
                    :text-only="true"
                    read-more-text="Read news"
                  ></info-card>
                </div>
              </div>
            </v-col>

            <v-col v-if="publications" cols="12" md="5" class="markdown-body">
              <div class="flex-title" style="border-bottom: 1px solid #ccc">
                <span class="home-title">Publications</span>
                <span class="archive-link hidden-sm-and-down"
                  ><v-btn
                    x-small
                    outlined
                    to="/recent-publications"
                    aria-label="Go to the Publications Archive"
                    >Archive&nbsp;<v-icon right>mdi-menu-right</v-icon></v-btn
                  ></span
                >
              </div>

              <div class="mt-8">
                <div
                  v-for="(item, index) in publications"
                  :key="`list-${index}`"
                >
                  <info-card
                    :item="item"
                    :text-only="true"
                    read-more-text="Read publication"
                  ></info-card>
                </div>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </client-only>
  </div>
</template>

<script>
import { handleClicks } from '@/mixins/handleClicks'
export default {
  mixins: [handleClicks],
  async asyncData({ $content, params }) {
    const doc = await $content('index').fetch()
    let news = await $content('news')
      .only(['title', 'description', 'posted', 'slug', 'markdown', 'path'])
      .limit(2)
      .sortBy('posted', 'desc')
      .fetch()
    news = news.map((item) => ({
      ...item,
      show: false,
    }))
    const publications = await $content('publications')
      .only(['title', 'description', 'posted', 'slug', 'path'])
      .limit(2)
      .sortBy('posted', 'desc')
      .fetch()

    return { doc, news, publications }
  },
  data() {
    return {
      isLoading: true,
    }
  },

  head() {
    return {
      title: 'Home',
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

.flex-title {
  display: flex;
  justify-content: space-between;
}

.flex-title .home-title {
  font-size: 28px;
  font-weight: bold;
}

.flex-title .archive-link {
  margin-right: 10px;
  margin-top: 8px;
}
</style>
