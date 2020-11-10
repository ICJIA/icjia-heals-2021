<template>
  <div>
    <v-img
      :src="getImagePath(`/img/heart-resized.jpg`, 1500, 1000)"
      :lazy-src="getImagePath(`/img/heart-resized.jpg`, 500, 333, 5)"
      height="500"
      alt="ILHEALS home page splash image"
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
                :src="getImagePath(`/img/logo.png`, 0, 0, 100)"
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
    getImagePath(url, imgWidth = 450, imgHeight = 200, imageQuality = 30) {
      let imgPath
      if (this.$store.state.appEnv === 'development') {
        // imgPath = `${url}`
        imgPath = `${this.$store.state.appConfig.clientURL}${url}`

        const thumborImgPath = getImageURL(
          imgPath,
          imgWidth,
          imgHeight,
          imageQuality
        )
        // console.log(thumborImgPath)
        return thumborImgPath
      } else {
        imgPath = `${this.$store.state.appConfig.clientURL}${url}`

        const thumborImgPath = getImageURL(
          imgPath,
          imgWidth,
          imgHeight,
          imageQuality
        )
        // console.log(thumborImgPath)
        return thumborImgPath
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
