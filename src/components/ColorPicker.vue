<template>
  <div>
    <ul v-for="color in colors">
      <span @click="pick(`${color} lighten-${index}`)" :class="`${color} lighten-${index}`" v-for="index in depth"></span>
      <span @click="pick(`${color} darken-${index}`)" :class="`${color} darken-${index}`" v-for="index in 4"></span>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ColorPicker',
  computed: {
    reverse () {
      return this.depth.reverse()
    }
  },
  data () {
    return {
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
    pick: function (classVal) {
      this.$emit('pick', classVal)
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
