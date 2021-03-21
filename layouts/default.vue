<template>
  <div>
    <SkipLinks></SkipLinks>
    <v-app>
      <div style="min-height: 100vh !important">
        <AppNav></AppNav>
        <AppSidebar></AppSidebar>
        <main>
          <nuxt id="main" class="" />
        </main>
      </div>
      <AppFooter></AppFooter>
    </v-app>
  </div>
</template>
<script>
export default {
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
  async mounted() {
    // Display build banner on start up
    // const banner = await require('../static/api/banner.json')
    // const display = banner.slice(1, -1)
    // display.forEach((line) => {
    //   console.log(line)
    // })
  },
}
</script>

<style>
.hover {
  cursor: pointer;
}
</style>
