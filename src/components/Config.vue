<template>
  <v-layout row wrap>
    <v-flex xs12 mb-3>
      <config-project></config-project>
    </v-flex>
    <v-flex xs12 mb-3>
      <config-lane></config-lane>
    </v-flex>
  </v-layout>
</template>

<script>
import ConfigLane from './ConfigLane'
import ConfigProject from './ConfigProject'

export default {
  name: 'Config',
  components: {
    ConfigLane,
    ConfigProject
  }
}
</script>
