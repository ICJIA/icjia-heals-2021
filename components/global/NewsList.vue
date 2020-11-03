<template>
  <div>
    <v-row class="masonry">
      <v-col class="child" cols="12" md="4">
        <v-card class="pa-2 grid-item" outlined> test </v-card>
      </v-col>
      <v-col class="child" cols="12" md="4">
        <v-card class="pa-2 grid-item" outlined height="100%">
          <v-img
            src="/domain.png"
            lazy-src="/domain.png"
            width="100%"
            min-height="200"
          />
          testasdasdasdasdasdasdasd alsd alsd kalsdklsdkalskdlas dlas
          kdlaskdlksad laksd lask dlaks dlaks dlaks dlaks dlkas dlkaslk alskd
        </v-card>
      </v-col>
      <v-col class="child" cols="12" md="4" height="100%">
        <v-card class="pa-2 grid-item" outlined> test dasdasd</v-card>
      </v-col>
      <v-col class="child" cols="12" md="4" height="100%">
        <v-card class="pa-2 grid-item" outlined>
          test asdasdasdasdasdasdas</v-card
        >
      </v-col>
      <v-col class="child" cols="12" md="4" height="100%">
        <v-card class="pa-2 grid-item" outlined>
          <v-img
            src="/heart-resized.jpg"
            lazy-src="/heart-resized.jpg"
            width="100%"
            min-height="200"
          />
          testasdasdjas dja sdkjaskdj askdj aksdj kasjd kajsd akjsjas kj
          akjsdjasd
        </v-card>
      </v-col>
      <v-col class="child" cols="12" md="4" height="100%">
        <v-card class="pa-2 grid-item" outlined>
          <v-img
            src="/iris-implementation.png"
            lazy-src="/iris-implementation.png"
            width="100%"
            min-height="200"
          />
          test
        </v-card>
      </v-col>
      <v-col class="child" cols="12" md="4">
        <v-card class="pa-2 grid-item" outlined height="100%">
          <v-img
            src="/heart-resized.jpg"
            lazy-src="/heart-resized.jpg"
            width="100%"
            min-height="200"
          />
          testasdasdasdasdasdasdasd alsd alsd kalsdklsdkalskdlas dlas
          kdlaskdlksad laksd lask dlaks dlaks dlaks dlaks dlkas dlkaslk alskd
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      masonry: null,
    }
  },
  mounted() {
    const elem = document.querySelector('.masonry')
    // eslint-disable-next-line no-unused-vars
    this.masonry = new window.Masonry(elem, {
      // options
      itemSelector: '.child',
    })
    this.masonry.layout()
  },
  methods: {
    resize() {
      const elem = document.querySelector('.masonry')
      // eslint-disable-next-line no-unused-vars
      this.masonry = new window.Masonry(elem, {
        // options
        itemSelector: '.child',
      })
      this.masonry.layout()
    },
  },
}
</script>

<style lang="scss" scoped></style>
