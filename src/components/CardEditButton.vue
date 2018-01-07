<template>
  <div>
    <v-btn icon @click="dialog = true">
      <v-icon>edit</v-icon>
    </v-btn>
    <v-dialog v-model="dialog" max-width="500px">
      <card-edit-form :id="id" v-model="dialog"></card-edit-form>
    </v-dialog>
  </div>
</template>

<script>
import CardEditForm from './CardEditForm.vue'

export default {
  name: 'CardEditButton',
  props: {
    id: Number
  },
  data () {
    return {
      dialog: false
    }
  },
  components: {
    CardEditForm
  }
}
</script>
