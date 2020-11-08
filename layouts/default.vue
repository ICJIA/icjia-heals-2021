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
  mounted() {
    console.log('current env: ', this.$store.state.appEnv)
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
