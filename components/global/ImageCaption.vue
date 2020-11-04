<template>
  <div>
    <div style="font-size: 12px; margin-top: -15px" class="mb-8">
      {{ caption }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    caption: {
      type: String,
      default: 'Default caption',
    },
  },
}
</script>

<style lang="scss" scoped></style>
