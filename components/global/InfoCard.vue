<template>
  <div>
    <v-card
      class="pa-2 grid-item mb-10 info-card py-3 px-3"
      outlined
      @click="$router.push(item.path)"
    >
      <div style="font-size: 12px; margin-left: 15px">
        {{ formatDate(item.posted) }}
      </div>
      <v-card-text v-if="item.title"
        ><h2 style="margin-top: -10px">
          {{ item.title }}
        </h2></v-card-text
      >

      <v-img
        v-if="item.splash && !textOnly"
        :src="`/${item.splash}`"
        width="100%"
        height="200"
        class="mb-5"
        style="border: 1px solid #fafafa"
        @load="resize"
      />

      <v-card-text v-if="item.description" style="margin-top: -15px">{{
        item.description
      }}</v-card-text>
      <v-card-text>
        <div class="text-right">
          <v-btn x-small to="/">
            Read more
            <v-icon right>mdi-menu-right</v-icon>
          </v-btn>
        </div>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import { format, parseISO } from 'date-fns'
// import { EventBus } from '~/event-bus'
export default {
  props: {
    item: {
      type: Object,
      default: () => {},
    },
    textOnly: {
      type: Boolean,
      default: true,
    },
  },
  mounted() {
    this.$emit('init')
  },

  methods: {
    formatDate(d) {
      const temp = new Date(d).toJSON().split('T')[0]
      const myDate = `${temp}T23:59:59.000Z`
      const formattedDate = format(parseISO(myDate), 'MMMM dd, yyyy')
      return formattedDate
    },
    resize() {
      console.log('child image loaded')
      this.$emit('imageLoaded')
    },
  },
}
</script>

<style lang="scss" scoped></style>
