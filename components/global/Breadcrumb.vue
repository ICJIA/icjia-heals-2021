<template>
  <div style="margin-top: 90px">
    <div width="100%" style="border-top: 0px solid #0d4fc9"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      breadcrumbs: null,
      blacklist: ['/news', '/publications'],
    }
  },
  mounted() {
    // TODO: Figure out breadcrumbs here
    const paths = this.$route.path.split('/')
    const filtered = paths.filter(function (el) {
      if (el !== '') {
        return `${el}s`
      }
    })

    const arr = ['home', ...filtered]
    this.breadcrumbs = arr.map((item) => {
      return `${item}`
    })
  },
  methods: {},
}
</script>

<style lang="scss" scoped></style>
