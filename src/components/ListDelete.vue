<template>
  <v-card>
    <v-card-title>
      本当に削除しますか？
    </v-card-title>
    <v-card-text>
      <p>
        削除後は元に戻せません
      </p>
      <p>
      削除されたリストが設定されているカードは 設定なし になります
      </p>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="error" @click="deleteList">Delete</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>

export default {
  name: 'ListDelete',
  props: {
    id: String,
    value: Boolean
  },
  methods: {
    deleteList: function () {
      this.$store.commit('deleteList', this.id)
      this.$emit('input', false)
    }
  }
}
</script>
