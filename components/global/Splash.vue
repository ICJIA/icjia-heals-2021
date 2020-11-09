<template>
  <div>
    <v-img
      :src="getImagePath(`/img/heart-resized.jpg`)"
      :lazy-src="getImagePath(`/img/heart-resized.jpg`)"
      height="500"
    >
      <v-container fluid>
        <v-row>
          <v-col cols="12" md="4" class="mt-0"> &nbsp;</v-col
          ><v-col cols="12" md="8" class="mt-0">
            <h4 class="text-center">
              <span class="hero-highlight">H</span>elping
              <span class="hero-highlight">E</span>veryone
              <span class="hero-highlight">A</span>ccess
              <span class="hero-highlight">L</span>inked
              <span class="hero-highlight">S</span>ystems
            </h4>
            <div class="text-center py-5">
              <span class="brand-state hero">Illinois</span>
              <span class="brand-name hero">HEALS</span>
            </div>
            <div class="text-center py-5">
              <img
                src="../../assets/img/logo.png"
                height="100"
                alt="ILHEALS Logo"
              />
            </div>

            <h3
              v-if="!$vuetify.breakpoint.sm && !$vuetify.breakpoint.xs"
              class="py-2 hero-sub text-center"
            >
              A multi-year initiative to address child and youth victimization
            </h3>
          </v-col></v-row
        ></v-container
      >
      <template v-slot:placeholder>
        <v-row class="fill-height ma-0" align="center" justify="center">
          <v-progress-circular
            indeterminate
            color="gray lighten-5"
          ></v-progress-circular>
        </v-row>
      </template>
    </v-img>
  </div>
</template>

<script>
import { getImageURL } from '@/services/image'
export default {
  name: 'Splash',
  data() {
    return {}
  },
  methods: {
    getImagePath(url, imgWidth = 750, imgHeight = 350, imageQuality = 40) {
      let imagePath

      if (this.$store.state.appEnv === 'development') {
        imagePath = `${url}`
        console.log('development: ', imagePath)
        return imagePath
      } else {
        imagePath = `${this.$store.state.appConfig.clientURL}${url}`
        console.log('production ', imagePath)
        return getImageURL(url, imgWidth, imgHeight, imageQuality)
      }
    },
  },
}
</script>

<style>
.hero-section-text {
  color: #fff;
  text-align: center;
  margin-top: -125px;
}

.brand-name.hero,
.brand-state.hero {
  font-size: 75px;
  line-height: 77px;
}

.hero-highlight {
}

h4 {
  color: #222;
  font-weight: 900;
}

.hero-sub {
  color: #fff;
  /* background: #fff;
        padding: 3px 5px 3px 5px; */
  font-weight: 800;
}
</style>
