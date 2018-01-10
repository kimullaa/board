<template>
  <v-dialog v-model="dialog" scrollable max-width="500px">
    <slot slot="activator">
    </slot>
    <v-card class="text-xs-center">
      <v-card-title>色を選ぶ</v-card-title>
      <v-divider></v-divider>
      <v-card-text>
    <ul v-for="color in colors">
      <span @click="pick(`${color} lighten-${index}`)" :class="`${color} lighten-${index}`" v-for="index in depth"></span>
      <span @click="pick(`${color} darken-${index}`)" :class="`${color} darken-${index}`" v-for="index in 4"></span>
    </ul>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>

export default {
  name: 'ColorPicker',
  props: {
    value: String
  },
  computed: {
    reverse () {
      return this.depth.reverse()
    }
  },
  data () {
    return {
      color: '',
      dialog: false,
      colorRules: [
        (v) => !!v || 'Color is required'
      ],
      colors: [
        'red',
        'pink',
        'purple',
        'deep-purple',
        'indigo',
        'blue',
        'light-blue',
        'cyan',
        'teal',
        'green',
        'light-green',
        'lime',
        'yellow',
        'amber',
        'orange',
        'deep-orange',
        'brown',
        'blue-grey',
        'grey'
      ],
      depth: [4, 3, 2, 1]
    }
  },
  methods: {
    pick: function (color) {
      this.$emit('input', color)
      this.dialog = false
    }
  }
}
</script>

<style scoped="scoped">
span {
  padding: 10px;
  width: 30px;
  height: 30px;
  display: inline-block;
}
</style>
