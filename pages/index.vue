<template>
  <div>
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
              <h2>News and Updates</h2>
              <div class="mt-8">
                <div v-for="(item, index) in news" :key="`list-${index}`">
                  <v-card
                    class="pa-2 grid-item mb-10 info-card"
                    outlined
                    @click="$router.push(item.path)"
                  >
                    <div style="font-size: 12px; margin-left: 15px">
                      {{ formatDate(item.posted) }}
                    </div>
                    <v-card-text v-if="item.title"
                      ><h2 style="margin-top: -10px">
                        {{ item.title }}
                      </h2></v-card-text
                    >

                    <v-card-text
                      v-if="item.description"
                      style="margin-top: -25px"
                      >{{ item.description }}</v-card-text
                    >
                    <v-card-text>
                      <div class="text-right">
                        <v-btn x-small to="/">
                          Read more
                          <v-icon right>mdi-menu-right</v-icon>
                        </v-btn>
                      </div>
                    </v-card-text>
                  </v-card>
                </div>
              </div>
            </v-col>
            <v-col cols="12" md="5" class="markdown-body"
              ><h2>Latest Publications</h2>
              <div class="mt-8">
                <div
                  v-for="(item, index) in publications"
                  :key="`list-${index}`"
                >
                  <v-card
                    class="pa-2 grid-item mb-10 info-card"
                    outlined
                    @click="$router.push(item.path)"
                  >
                    <div style="font-size: 12px; margin-left: 15px">
                      {{ formatDate(item.posted) }}
                    </div>
                    <v-card-text v-if="item.title"
                      ><h2 style="margin-top: -10px">
                        {{ item.title }}
                      </h2></v-card-text
                    >

                    <v-card-text
                      v-if="item.description"
                      style="margin-top: -25px"
                      >{{ item.description }}</v-card-text
                    >
                    <v-card-text>
                      <div class="text-right">
                        <v-btn x-small to="/">
                          Read more
                          <v-icon right>mdi-menu-right</v-icon>
                        </v-btn>
                      </div>
                    </v-card-text>
                  </v-card>
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
import { format, parseISO } from 'date-fns'
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
      .sortBy('posted', 'desc')
      .fetch()

    return { doc, news, publications }
  },
  data() {
    return {
      isLoading: true,
    }
  },
  created() {},
  mounted() {},
  methods: {
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
