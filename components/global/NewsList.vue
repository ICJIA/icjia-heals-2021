<template>
  <div class="mb-10" style="margin-top: -15px">
    <v-container>
      <v-row>
        <v-col cols="12">
          <div class="text-right">
            <v-btn-toggle v-model="icon" borderless>
              <v-btn value="list" small @click="resize">
                <span class="hidden-sm-and-down">List</span>

                <v-icon right small>mdi-format-list-bulleted</v-icon>
              </v-btn>

              <v-btn value="block" small @click="resize">
                <span class="hidden-sm-and-down">Block</span>

                <v-icon right small> mdi-view-module </v-icon>
              </v-btn>
            </v-btn-toggle>
          </div>
        </v-col>
      </v-row>
    </v-container>
    <v-container v-if="news" class="view-container">
      <v-row
        v-if="icon === 'block'"
        class="masonry"
        :class="{ hidden: icon === 'list' }"
      >
        <v-col
          v-for="(item, index) in news"
          :key="index"
          class="child"
          cols="12"
          md="6"
        >
          <info-card
            :item="item"
            :text-only="false"
            @init="resize"
            @imageloaded="resize"
          ></info-card>
        </v-col>
      </v-row>

      <v-row v-if="icon === 'list'" style="margin-top: -20px" class="masonry">
        <v-col cols="12" sm="12" class="child">
          <div v-for="(item, index) in news" :key="`list-${index}`">
            <info-card
              :item="item"
              :text-only="false"
              @init="resize"
              @imageloaded="resize"
            ></info-card>
          </div>
        </v-col>
      </v-row>
    </v-container>
    <v-container v-else>
      <Loader></Loader>
    </v-container>
  </div>
</template>

<script>
import { format, parseISO } from 'date-fns'
export default {
  data() {
    return {
      news: null,
      masonry: null,
      icon: 'block',
    }
  },
  watch: {
    icon(newValue, oldValue) {
      this.$nextTick(() => {
        this.resize()
      })
    },
  },
  async created() {
    this.news = await this.$content('news').sortBy('posted', 'desc').fetch()
    console.log(this.news)
  },
  mounted() {},
  methods: {
    resize() {
      const elem = document.querySelector('.masonry')
      const masonry = new window.Masonry(elem, {
        itemSelector: '.child',
      })
      masonry.layout()
      console.log('layout resized')
    },
    formatDate(d) {
      const temp = new Date(d).toJSON().split('T')[0]
      const myDate = `${temp}T23:59:59.000Z`
      const formattedDate = format(parseISO(myDate), 'MMM dd, yyyy')
      return formattedDate
    },
    error(item) {
      console.log('image error: ', item)
    },
  },
}
</script>

<style>
.hidden {
  display: none;
}

.no-border {
  border-bottom: none;
}
</style>
