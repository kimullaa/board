<template>
  <v-layout row wrap>
    <v-flex xs6>
      <config-lane></config-lane>
    </v-flex>
  </v-layout>
</template>

<script>
import ConfigLane from './ConfigLane'

export default {
  name: 'Config',
  components: {
    ConfigLane
  }
}
</script>
