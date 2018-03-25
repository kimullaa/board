<template>
  <div>
    <v-btn small dark fab bottom right color="pink" @click.stop="dialog = true">
      <v-icon>add</v-icon>
    </v-btn>
    <v-dialog v-model="dialog" max-width="500px">
      <card-add-form :statusId="statusId" :defaultList="listId" v-model="dialog" :board="board"></card-add-form>
    </v-dialog>
  </div>
</template>

<script>
import CardAddForm from './CardAddForm.vue'

export default {
  name: 'CardAddButton',
  props: {
    statusId: Number,
    board: Boolean,
    listId: String
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
