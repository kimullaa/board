<template>
  <v-card>
    <v-card-title>
      DONEのタスクをすべて削除します
    </v-card-title>
    <v-card-text>
      削除後は元に戻せません
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="error" @click="deleteCard">Delete</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>

export default {
  name: 'CardDeleteAll',
  props: {
    statusId: Number,
    value: Boolean
  },
  methods: {
    deleteCard: function () {
      this.$store.commit('deleteCardByStatus', this.statusId)
      this.$emit('input', false)
    }
  }
}
</script>
