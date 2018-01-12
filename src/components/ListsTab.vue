<template>
  <v-tabs replace>
    <v-tabs-bar>
      <v-tabs-slider></v-tabs-slider>
      <v-tabs-item :href="'/board'">
        全て
      </v-tabs-item>
      <template v-for="list in lists">
        <v-tabs-item :key="list.id" :href="`/board?list=${list.id}`">
        {{list.name}}
        <v-icon :color="list.color" class="ml-3">{{list.icon}}</v-icon>
        </v-tabs-item>
        </template>
    </v-tabs-bar>
  </v-tabs>
</template>

<script>

export default {
  name: 'ListsTab',
  computed: {
    lists () {
      return this.$store.state.lists
    },
    active () {
      return this.lists.findIndex(list => list.id === this.id)
    }
  },
  props: {
    id: Number
  }
}
</script>
