<template>
  <v-dialog v-model="dialog" scrollable max-width="500px">
    <v-chip label :color="value" text-color="white" slot="activator">{{text}}</v-chip>
    <v-card class="text-xs-center">
      <v-card-title>色を選ぶ</v-card-title>
      <v-divider></v-divider>
      <v-card-text>
        <color-picker @pick="pick"></color-picker>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import ColorPicker from './ColorPicker.vue'

export default {
  name: 'ColorChip',
  props: {
    value: String,
    text: String
  },
  data () {
    return {
      color: '',
      dialog: false,
      colorRules: [
        (v) => !!v || 'Color is required'
      ]
    }
  },
  methods: {
    pick: function (color) {
      this.$emit('input', color)
      this.dialog = false
    }
  },
  components: {
    ColorPicker
  }
}
</script>

<style scoped="scoped">
</style>
