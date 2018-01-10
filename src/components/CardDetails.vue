<template>
  <v-bottom-sheet v-model="sheet">
    <v-btn slot="activator" color="purple" dark>Click me</v-btn>
    <v-card tile>
      <v-text-field
      Label="Memo"
      v-model="card.details"
      disabled
      textarea
      ></v-text-field>
    </v-card>
  </v-bottom-sheet>
</template>

<script>
export default {
  name: 'CardDetails',
  props: {
    id: Number
  },
  watch: {
    // FIXME: idだけをwatchしてるといっかいとじたあとに開けない
    sheet: function () {
      this.card = this.$store.getters.getCard(this.id)
      if (this.id) {
        this.sheet = true
      }
    }
  },
  data () {
    return {
      sheet: false,
      card: {
        details: ''
      }
    }
  }
}
</script>

<style scoped="scoped">

</style>
