<template>
  <div>
    <client-only>
      <v-container v-if="!isLoading" fluid>
        <v-row>
          <v-col cols="12" class="markdown-body">
            <div v-for="(publication, index) in publications" :key="index">
              {{ publication }} <br /><br />
            </div>
          </v-col>
        </v-row>
      </v-container>
      <v-container v-else>
        <Loader></Loader>
      </v-container>
    </client-only>
  </div>
</template>

<script>
export default {
  data() {
    return {
      publications: () => [],
      isLoading: true,
    }
  },
  async created() {
    this.publications = await this.$content('publications')
      .sortBy('posted', 'desc')
      .fetch()
    this.publications = this.publications.map((pub) => ({
      ...pub,
      show: false,
    }))
    this.isLoading = false
  },
}
</script>

<style>
a.v-btn {
  text-decoration: none !important;
}
</style>
