<template>
  <div class="mt-12 text-center">
    <v-btn rounded color="primary" dark :href="href"
      >Submit online&nbsp;
      <v-icon>open_in_new</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  props: {
    href: {
      type: String,
      default: '/',
    },
  },
}
</script>

<style lang="scss" scoped></style>
