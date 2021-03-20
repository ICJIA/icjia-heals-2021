<template>
  <v-app>
    <a href="#main">Skip to main content</a>
    <div style="min-height: 100vh !important">
      <AppNav></AppNav>

      <AppSidebar></AppSidebar>
      <nuxt id="main" class="" role="main" />
    </div>
    <AppFooter></AppFooter>
    <script type="text/javascript">
      /*<![CDATA[*/

      ;(function () {
        var sz = document.createElement('script')
        sz.type = 'text/javascript'
        sz.async = true

        sz.src = '//siteimproveanalytics.com/js/siteanalyze_6123065.js'

        var s = document.getElementsByTagName('script')[0]
        s.parentNode.insertBefore(sz, s)
      })()

      /*]]>*/
    </script>
  </v-app>
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
