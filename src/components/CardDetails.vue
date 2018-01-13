<template>
  <v-card tile style="width:100%">
    <v-form class="pl-2 pr-2">
      <v-text-field
      @click.stop
      label="Memo"
      v-model="card.details"
      readonly
      textarea
      rows=4
      ></v-text-field>
    </v-form>
  </v-card>
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
