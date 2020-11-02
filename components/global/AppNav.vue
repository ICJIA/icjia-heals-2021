<template>
  <v-app-bar color="white" fixed height="90" class="noprint" app>
    <v-app-bar-nav-icon
      v-if="($vuetify.breakpoint.xs || $vuetify.breakpoint.sm) && items"
      aria-label="Toggle Menu"
      style="color: black"
      large
      @click="toggleDrawer"
    />
    <div style="width: 15px" />
    <v-img
      :src="require('@/assets/logo.png')"
      :lazy-src="require('@/assets/logo-min.png')"
      alt="Illinois HEALS"
      max-width="60"
      style="margin-left: -5px; margin-right: 8px"
      class="hover"
      @click="gotoHome"
    />&nbsp;&nbsp;&nbsp;&nbsp;

    <v-toolbar-title class="heavy hover" @click="gotoHome">
      <span
        v-if="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm"
        class="brand-state"
        style="margin-left: -0px"
        >IL</span
      >
      <span v-else class="brand-state" style="margin-left: -0px">ILLINOIS</span>
      <span class="brand-name">HEALS</span>
    </v-toolbar-title>

    <v-spacer />
    <div v-if="items">
      <v-btn
        v-for="(item, index) in items"
        :key="`nav-${index}`"
        small
        :to="item.path === '/index' ? '/' : `${item.path}/`"
        text
        class="hidden-sm-and-down"
        style="font-weight: 900"
        :aria-label="item.title"
      >
        <span v-if="item.menuTitle" style="font-size: 13px">
          {{ item.menuTitle }}
        </span>
        <span v-else style="font-size: 13px">{{ item.title }}</span>
      </v-btn>
    </div>
    <div v-else>
      <Loader
        :size="20"
        :hide-text="true"
        height="0"
        :width="2"
        class="mr-12"
      ></Loader>
    </div>
    <v-btn icon to="/search/" aria-label="Search">
      <v-icon aria-label="Search">mdi-magnify</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
/* eslint-disable vue/no-use-v-if-with-v-for */

import { EventBus } from '@/event-bus'
export default {
  data() {
    return {
      loading: true,
      links: null,
      items: null,
    }
  },
  async created() {
    this.items = await this.$content()
      .where({ showInNav: true })
      .only(['title', 'menuTitle', 'slug', 'path', 'menuRank'])
      .sortBy('menuRank', 'asc')
      .fetch()
    // console.log(this.items)
  },
  mounted() {
    // eslint-disable-next-line no-undef
    // console.log('STATIC_PATH=', STATIC_PATH)
  },
  methods: {
    toggleDrawer() {
      EventBus.$emit('toggleDrawer')
    },
    logoWidth() {
      // console.log(this.$vuetify.breakpoint);
      if (this.$vuetify.breakpoint.xs) {
        return 50
      } else {
        return 90
      }
    },
    gotoHome() {
      // EventBus.$emit('closeDrawer')
      if (this.$route.path === '/') {
        this.$vuetify.goTo(0)
      } else {
        this.$router.push('/')
      }
    },
  },
}
</script>

<style>
.agency {
  font-weight: 900;
  font-size: 24px;
}

.brand-state {
  font-weight: 400;
  padding-right: 0px;
  text-transform: uppercase;
  font-size: 32px;
  color: #333;

  /* color: #fff; */
}
.brand-name {
  font-weight: 900;
  font-size: 32px;
  color: rgb(13, 79, 201);
  /* color: #fff; */
}
</style>
