<template>
  <div>
    <!-- <SkipLinks></SkipLinks> -->
    <v-app>
      <div style="min-height: 100vh !important">
        <AppNav></AppNav>
        <AppSidebar></AppSidebar>
        <v-banner
          single-line
          :sticky="false"
          color="blue"
          style="
            padding-top: 10px;
            padding-bottom: 10px;
            margin-top: 93px;
            color: white;
            font-size: 20px;
          "
          class="text-center"
        >
          The Illinois HEALS Project ended on Sept. 30, 2023, but the site
          remains open as a resource.

          <!-- <template #actions>
            <v-btn text color="deep-purple accent-4"> Get Online </v-btn>
          </template> -->
        </v-banner>

        <main>
          <nuxt id="main" class="" style="margin-top: 15px" />
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
