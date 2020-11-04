<template>
  <div class="mb-10">
    <v-container fluid>
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
            <v-card-text v-if="item.title"
              ><h2>{{ item.title }}</h2></v-card-text
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
            <v-card-text v-if="item.body">{{ item.body }}</v-card-text>
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
            <v-card class="pa-2 grid-item mb-3" outlined>
              <v-card-text v-if="item.title"
                ><h2>{{ item.title }}</h2></v-card-text
              >

              <v-card-text v-if="item.body">{{ item.body }}</v-card-text>
            </v-card>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      masonry: null,
      icon: 'block',
      items: [
        {
          title: 'sdjsadla sdlsadlsad',
          splash: null,
          body: 'testasdasdasdasdasdasdasd alsd alsd kalsdklsdkalskdlas',
        },
        {
          title: 'sdjsadla sdlsadlsad',
          splash: 'iris-implementation.png',
          body: 'testasdasdasdasdasdasdasd alsd alsd kalsdklsdkalskdlas',
        },
        {
          title: 'sdjsadla sdlsadlsad',
          splash: 'iris-implementation.png',
          body: 'testasdasdasdasdasdasdasd alsd alsd kalsdklsdkalskdlas',
        },
        {
          title: 'sdjsadla sdlsadlsad',
          splash: null,
          body: 'testasdasdasdasdasdasdasd alsd alsd kalsdklsdkalskdlas',
        },
        {
          title: 'sdjsadla sdlsadlsad',
          splash: null,
          body:
            ' testasdasdasdasdasdasdasd alsd alsd kalsdklsdkalskdlas sldjsa ldk asldasldkasldk',
        },
        {
          title: 'sdjsadla sdlsadlsad',
          splash: 'iris-implementation.png',
          body: 'testasdasdasdasdasdasdasd alsd alsd kalsdklsdkalskdlas',
        },
        {
          title: 'sdjsadla sdlsadlsad',
          splash: 'heart-resized.jpg',
          body: 'testasdasdasdasdasdasdasd alsd alsd kalsdklsdkalskdlas',
        },
        {
          title: 'sdjsadla sdlsadlsad',
          splash: null,
          body:
            ' testasdasdasdasdasdasdasd alsd alsd kalsdklsdkalskdlas sldjsa ldk asldasldkasldk',
        },
        {
          title: 'sdjsadla sdlsadlsad',
          splash: 'iris-implementation.png',
          body: 'testasdasdasdasdasdasdasd alsd alsd kalsdklsdkalskdlas',
        },
        {
          title: 'sdjsadla sdlsadlsad',
          splash: 'iris-implementation.png',
          body: 'testasdasdasdasdasdasdasd alsd alsd kalsdklsdkalskdlas',
        },
        {
          title: 'sdjsadla sdlsadlsad',
          splash: 'heart-resized.jpg',
          body:
            'testasdasdasdasdasdasdasd alsd alsd kalsdklsdkalskdlas sldjsa ldk asldasldkasldk sadj asdkj sakdjaskdjsakdjaskjdkjsd',
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
