<template>
  <v-card tile class="bottom" @click.stop="">
    <v-text-field
    label="Memo"
    v-model="card.details"
    disabled
    textarea
    ></v-text-field>
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
.bottom {
  position: absolute;
  bottom: 0px;
  left: 0px;
  width: 100%;
}

</style>
