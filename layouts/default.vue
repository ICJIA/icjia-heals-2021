<template>
  <v-app>
    <div style="min-height: 100vh !important">
      <AppNav></AppNav>
      <Breadcrumb :key="$route.path"></Breadcrumb>
      <AppSidebar></AppSidebar>
      <nuxt class="" />
    </div>
    <AppFooter></AppFooter>
  </v-app>
</template>
<script>
export default {
  created() {},
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
