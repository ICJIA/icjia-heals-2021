<template>
  <div class="mb-10" style="margin-top: -15px">
    <v-container>
      <v-row>
        <v-col cols="12">
          <div class="text-right">
            <Toggle @toggle="toggle"></Toggle>
          </div>
        </v-col>
      </v-row>
    </v-container>
    <v-container v-if="news" class="view-container">
      <v-row v-if="view === 'block'" class="masonry">
        <v-col
          v-for="(item, index) in news"
          :key="index"
          class="child"
          cols="12"
          :md="$store.state.appConfig.masonryBlockCols"
        >
          <info-card
            :item="item"
            :text-only="false"
            read-more-text="Read News"
            @init="resize"
            @imageLoaded="resize"
          ></info-card>
        </v-col>
      </v-row>

      <v-row v-if="view === 'list'" style="margin-top: -20px" class="masonry">
        <v-col cols="12" sm="12" class="child">
          <div v-for="(item, index) in news" :key="`list-${index}`">
            <info-card
              :item="item"
              :text-only="true"
              read-more-text="Read News"
              @init="resize"
              @imageLoaded="resize"
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
export default {
  data() {
    return {
      news: null,
      masonry: null,
      view: 'block',
    }
  },

  async created() {
    this.news = await this.$content('news').sortBy('posted', 'desc').fetch()
    // console.log(this.news)
  },
  mounted() {},
  methods: {
    toggle(e) {
      this.view = e
      // console.log('view: ', this.view)
      this.resize()
    },
    resize() {
      const elem = document.querySelector('.masonry')
      const masonry = new window.Masonry(elem, {
        itemSelector: '.child',
      })
      masonry.layout()
      // console.log('layout resized')
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
