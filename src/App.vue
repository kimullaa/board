<template>
  <v-app>
    <my-header></my-header>
    <v-content>
      <v-container fluid  fill-height>
        <router-view/>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import MyHeader from './components/Header.vue'

export default {
  name: 'App',
  components: {
    MyHeader
  }
}
</script>
