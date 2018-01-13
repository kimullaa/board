<template>
  <v-app>
    <my-header v-model="drawer"></my-header>
    <my-side-bar v-model="drawer" :active="Number($route.query.list)"></my-side-bar>
    <v-content>
      <v-container fluid>
        <router-view/>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import MyHeader from './components/Header.vue'
import MySideBar from './components/SideBar.vue'

export default {
  name: 'App',
  components: {
    MyHeader,
    MySideBar
  },
  data () {
    return {
      drawer: true
    }
  }
}
</script>
