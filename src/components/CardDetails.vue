<template>
  <v-footer app fixed>
    <v-card tile @click.stop="" style="width:100%">
      <v-form class="ml-2 mr-2">
      <v-text-field
      label="Memo"
      v-model="card.details"
      readonly
      textarea
      rows=4
      ></v-text-field>
    </v-form>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: 'CardDetails',
  props: {
    id: Number
  },
  computed: {
    card () {
      return this.$store.getters.getCard(this.id)
    }
  },
  data () {
    return {
      sheet: false
    }
  }
}
</script>

<style scoped="scoped">
</style>
