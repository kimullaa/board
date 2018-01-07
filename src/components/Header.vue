<template>
  <v-toolbar dense light fixed app>
    <header-menu></header-menu>
    <v-toolbar-title @click="$router.push('/')">Task Board</v-toolbar-title>
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
