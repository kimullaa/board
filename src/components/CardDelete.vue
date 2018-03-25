<template>
  <v-card>
    <v-card-title>
      本当に削除しますか？
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
  name: 'CardDelete',
  props: {
    id: String,
    value: Boolean
  },
  methods: {
    deleteCard: function () {
      this.$store.commit('deleteCard', this.id)
      this.$emit('input', false)
    }
  }
}
</script>
