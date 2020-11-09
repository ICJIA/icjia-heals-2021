<template>
  <v-app>
    <div style="min-height: 100vh !important">
      <AppNav></AppNav>

      <AppSidebar></AppSidebar>
      <nuxt class="" />
    </div>
    <AppFooter></AppFooter>
  </v-app>
</template>
<script>
export default {
  async mounted() {
    // Display build banner on start up
    const banner = await require('../static/api/banner.json')
    const display = banner.slice(1, -1)
    display.forEach((line) => {
      console.log(line)
    })
  },
  head() {
    return {
      link: [
        {
          rel: 'canonical',
          href: 'https://ilheals.com' + this.$route.path,
        },
      ],
    }
  },
}
</script>

<style>
.hover {
  cursor: pointer;
}
</style>
