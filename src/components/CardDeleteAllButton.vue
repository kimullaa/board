<template>
  <div>
    <v-btn dark fixed fab bottom right color="grey darken-2" @click.stop="dialog = true">
      <v-icon>delete</v-icon>
    </v-btn>
    <v-dialog v-model="dialog" max-width="500px">
      <card-delete-all :statusId="lastLane" v-model="dialog"></card-delete-all>
    </v-dialog>
  </div>
</template>

<script>
import CardDeleteAll from './CardDeleteAll.vue'

export default {
  name: 'CardDeleteAllButton',
  computed: {
    lastLane () {
      return this.$store.getters.getLastLane
    }
  },
  data () {
    return {
      dialog: false
    }
  },
  components: {
    CardDeleteAll
  }
}
</script>
