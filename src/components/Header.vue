<template>
  <v-toolbar dense dark color="grey darken-2" fixed clipped-left app flat>
    <header-menu></header-menu>
    <v-toolbar-title class="headline" @click="$router.push('/board')">Kanban Board</v-toolbar-title>
  </v-toolbar>
</template>

<script>
import HeaderMenu from './HeaderMenu'

export default {
  name: 'Header',
  components: {
    HeaderMenu
  }
}
</script>
