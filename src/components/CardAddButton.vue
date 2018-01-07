<template>
  <div>
    <v-btn small dark fab bottom right color="pink" @click="dialog = true">
      <v-icon>add</v-icon>
    </v-btn>
    <v-dialog v-model="dialog" max-width="500px">
      <card-add-form :statusId="statusId" v-model="dialog"></card-add-form>
    </v-dialog>
  </div>
</template>

<script>
import CardAddForm from './CardAddForm.vue'

export default {
  name: 'CardAddButton',
  props: {
    statusId: Number
  },
  components: {
    CardAddForm
  },
  data () {
    return {
      dialog: false
    }
  }
}
</script>
