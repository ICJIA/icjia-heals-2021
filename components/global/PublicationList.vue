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
    <v-container v-if="publications" class="view-container">
      <v-row
        v-if="icon === 'block'"
        class="masonry"
        :class="{ hidden: icon === 'list' }"
      >
        <v-col
          v-for="(item, index) in publications"
          :key="index"
          class="child"
          cols="12"
          md="6"
        >
          <v-card
            class="pa-2 grid-item info-card"
            outlined
            color="#fafafa"
            @click="$router.push(item.path)"
          >
            <div style="font-size: 12px; margin-left: 15px">
              {{ formatDate(item.posted) }}
            </div>
            <v-card-text v-if="item.title"
              ><h2 style="border-bottom: 0px solid #eaecef; margin-top: -5px">
                {{ item.title }}
              </h2></v-card-text
            >

            <v-img
              v-if="item.splash"
              :src="`/${item.splash}`"
              width="100%"
              height="200"
              style="border: 1px solid #fafafa"
              @load="resize"
              @error="error(item)"
            />
            <v-card-text v-if="item.description">{{
              item.description
            }}</v-card-text>
            <v-card-text>
              <div class="text-right">
                <v-btn x-small :to="item.path">
                  Read more
                  <v-icon right>mdi-menu-right</v-icon>
                </v-btn>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <v-row
        v-if="icon === 'list'"
        fluid
        style="margin-top: -20px"
        class="masonry"
      >
        <v-col cols="12" sm="12" class="child">
          <div v-for="(item, index) in publications" :key="`list-${index}`">
            <v-card
              class="pa-2 grid-item mb-10 info-card"
              outlined
              color="#fafafa"
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

              <v-card-text v-if="item.description" style="margin-top: -25px">{{
                item.description
              }}</v-card-text>
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
      publications: null,
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
    this.publications = await this.$content('publications')
      .sortBy('posted', 'desc')
      .fetch()
    console.log(this.publications)
  },
  mounted() {},
  methods: {
    resize() {
      const elem = document.querySelector('.masonry')
      const masonry = new window.Masonry(elem, {
        // options
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
