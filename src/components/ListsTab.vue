<template>
  <v-tabs v-model="active">
    <v-tabs-bar>
      <v-tabs-slider></v-tabs-slider>
      <v-tabs-item :href="'#list-all'">
        全て
      </v-tabs-item>
      <v-tabs-item v-for="list in lists" :key="list.id" :href="'/backlog'">
        {{list.name}}
        <v-icon :color="list.color" class="ml-3">{{list.icon}}</v-icon>
      </v-tabs-item>
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
      return this.lists.findIndex(list => list.id === this.id) + 1
    }
  },
  props: {
    id: Number
  }
}
</script>
