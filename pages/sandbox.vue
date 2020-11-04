<template>
  <div class="mb-10">
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
    <v-container fluid class="view-container">
      <v-row
        v-if="icon === 'block'"
        class="masonry"
        :class="{ hidden: icon === 'list' }"
      >
        <v-col
          v-for="(item, index) in items"
          :key="index"
          class="child"
          cols="12"
          md="4"
        >
          <v-card class="pa-2 grid-item" outlined>
            <div style="font-size: 12px; margin-left: 15px">
              {{ item.posted }}
            </div>
            <v-card-text v-if="item.title"
              ><h2 style="margin: 0; padding: 0; margin-top: -10px">
                {{ item.title }}
              </h2></v-card-text
            >

            <v-img
              v-if="item.splash"
              cover
              :src="`/${item.splash}`"
              width="100%"
              height="200"
              @load="resize"
              @error="error(item)"
            />
            <v-card-text v-if="item.description">{{
              item.description
            }}</v-card-text>
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
          <div v-for="(item, index) in items" :key="`list-${index}`">
            <v-card class="pa-2 grid-item mb-3">
              <div style="font-size: 12px; margin-left: 15px">
                {{ item.posted }}
              </div>
              <v-card-text v-if="item.title"
                ><h2>{{ item.title }}</h2></v-card-text
              >

              <v-card-text v-if="item.description">{{
                item.description
              }}</v-card-text>
            </v-card>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import _ from 'lodash'
export default {
  data() {
    return {
      masonry: null,
      icon: 'block',
      items: [
        {
          title: 'sdjsadla sdlsadlsad',
          splash: null,
          description: 'testasdasdasdasdasdasdasd alsd alsd kalsdklsdkalskdlas',
          posted: '2020-10-01',
        },
        {
          title: 'sdjsadla sdlsadlsad',
          splash: 'iris-implementation.png',
          description: 'testasdasdasdasdasdasdasd alsd alsd kalsdklsdkalskdlas',
          posted: '2020-11-01',
        },
        {
          title: 'sdjsadla sdlsadlsad',
          splash: 'iris-implementation.png',
          description: 'testasdasdasdasdasdasdasd alsd alsd kalsdklsdkalskdlas',
          posted: '2020-10-12',
        },
        {
          title: 'sdjsadla sdlsadlsad',
          splash: null,
          description: 'testasdasdasdasdasdasdasd alsd alsd kalsdklsdkalskdlas',
          posted: '2020-11-03',
        },
        {
          title: 'sdjsadla sdlsadlsad',
          splash: null,
          description:
            ' testasdasdasdasdasdasdasd alsd alsd kalsdklsdkalskdlas sldjsa ldk asldasldkasldk',
          posted: '2019-12-06',
        },
        {
          title: 'sdjsadla sdlsadlsad',
          splash: 'iris-implementation.png',
          description: 'testasdasdasdasdasdasdasd alsd alsd kalsdklsdkalskdlas',
          posted: '2019-10-01',
        },
        {
          title: 'sdjsadla sdlsadlsad',
          splash: 'heart-resized.jpg',
          description: 'testasdasdasdasdasdasdasd alsd alsd kalsdklsdkalskdlas',
          posted: '2020-02-15',
        },
        {
          title: 'sdjsadla sdlsadlsad',
          splash: null,
          description:
            ' testasdasdasdasdasdasdasd alsd alsd kalsdklsdkalskdlas sldjsa ldk asldasldkasldk',
          posted: '2020-10-02',
        },
        {
          title: 'sdjsadla sdlsadlsad',
          splash: 'iris-implementation.png',
          description: 'testasdasdasdasdasdasdasd alsd alsd kalsdklsdkalskdlas',
          posted: '2020-09-15',
        },
        {
          title: 'sdjsadla sdlsadlsad',
          splash: 'iris-implementation.png',
          description: 'testasdasdasdasdasdasdasd alsd alsd kalsdklsdkalskdlas',
          posted: '2020-05-23',
        },
        {
          title: 'sdjsadla sdlsadlsad',
          splash: 'heart-resized.jpg',
          description:
            'testasdasdasdasdasdasdasd alsd alsd kalsdklsdkalskdlas sldjsa ldk asldasldkasldk sadj asdkj sakdjaskdjsakdjaskjdkjsd',
          posted: '2020-06-01',
        },
      ],
    }
  },
  watch: {
    icon(newValue, oldValue) {
      this.$nextTick(() => {
        this.resize()
      })
    },
  },
  mounted() {
    // const elem = document.querySelector('.masonry')
    // // eslint-disable-next-line no-unused-vars
    // const masonry = new window.Masonry(elem, {
    //   // options
    //   itemSelector: '.child',
    // })
    // masonry.layout()
    this.items = _.orderBy(this.items, ['posted'], ['desc'])
  },
  methods: {
    resize() {
      const elem = document.querySelector('.masonry')
      // eslint-disable-next-line no-unused-vars

      const masonry = new window.Masonry(elem, {
        // options
        itemSelector: '.child',
      })
      masonry.layout()

      console.log('resize layout')
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
</style>
