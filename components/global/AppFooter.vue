<template>
  <v-footer padless class="noprint">
    <v-card
      v-if="!isLoading"
      flat
      tile
      class="text-center"
      style="width: 100%; background: #0d4474"
    >
      <v-card-text>
        <div v-if="items">
          <v-btn
            v-for="(item, index) in items"
            :key="`nav-${index}`"
            :to="item.path === '/index' ? '/' : `${item.path}/`"
            text
            class="footer-link"
            style="font-weight: 900"
            :aria-label="item.title"
          >
            <span v-if="item.menuTitle">
              {{ item.menuTitle }}
            </span>
            <span v-else>{{ item.title }}</span>
          </v-btn>

          <v-btn
            to="/search/"
            text
            class="footer-link"
            style="font-weight: 900"
            aria-label="search"
            >Search</v-btn
          >
        </div></v-card-text
      >
    </v-card>
    <v-card
      flat
      tile
      class="text-center"
      style="width: 100%; background: #082b6b"
    >
      <v-card-text
        class="text-center mt-2"
        style="color: #fff; font-size: 10px"
      >
        This website was produced by the Illinois Criminal Justice Information
        Authority under cooperative agreement number #2017-VF-GX-K002, awarded
        by the Office for Victims of Crime, Office of Justice Programs, U.S.
        Department of Justice. The opinions, findings, and conclusions or
        recommendations expressed in this website are those of the contributors
        and do not necessarily represent the official positions or policies of
        the U.S. Department of Justice.
      </v-card-text>
      <v-card-text class="mb-2" style="margin-top: -10px">
        <div style="font-size: 12px; color: #fff">
          &copy;&nbsp;{{ new Date().getFullYear() }}
          <strong>
            <a
              href="http://icjia.state.il.us"
              class="footer-link"
              target="_blank"
              rel="noreferrer"
              >Illinois Criminal Justice Information Authority</a
            >
          </strong>
        </div>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    icons: ['fab fa-facebook', 'fab fa-twitter'],
    loading: true,
    nav: [],
    items: null,
    isLoading: true,
  }),
  async created() {
    this.items = await this.$content()
      .where({ showInFooter: true })
      .only(['title', 'menuTitle', 'slug', 'path', 'menuRank'])
      .sortBy('menuRank', 'asc')
      .fetch()
    // console.log(this.items)
    this.isLoading = false
  },
}
</script>

<style>
.footer-link {
  color: #fff !important;
  text-decoration: none;
}

.footer-link:hover {
  color: #aaa !important;
  text-decoration: underline;
}
</style>
