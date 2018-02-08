<template>
  <v-toolbar
  dense
  dark
  color="indigo darken-1"
  clipped-left
  fixed
  app>
  <v-toolbar-side-icon @click.stop="$emit('input', !value)"></v-toolbar-side-icon>
  <v-toolbar-title class="headline" @click="$router.push('/board')">{{project.name}}</v-toolbar-title>
</v-toolbar>
</template>

<script>

export default {
  name: 'Header',
  computed: {
    project () {
      return this.$store.state.project
    }
  },
  props: {
    value: Boolean
  },
  components: {
  }
}
</script>
