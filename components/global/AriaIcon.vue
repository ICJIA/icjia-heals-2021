<template>
  <span
    class="mdi mdi-menu hover"
    aria-label="Toggle Menu"
    aria-hidden="true"
    style="color: black; font-size: 30px"
    @click="toggleDrawer"
  ></span>
</template>

<script>
export default {
  props: {
    iconClass: {
      type: String,
      default: '',
    },
    ariaLabel: {
      type: String,
      default: 'undefined',
    },
    ariaHidden: {
      type: Boolean,
      default: true,
    },
  },
}
</script>

<style lang="scss" scoped></style>
