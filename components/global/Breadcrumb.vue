<template>
  <div style="margin-top: 90px">
    <div width="100%" style="border-top: 2px solid #ccc"></div>
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
