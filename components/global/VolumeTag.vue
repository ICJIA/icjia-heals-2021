<template>
  <span>{{ volume }}</span>
</template>

<script>
export default {
  props: {
    volume: {
      type: String,
      default: '',
    },
  },
  methods: {},
}
</script>

<style lang="scss" scoped></style>
