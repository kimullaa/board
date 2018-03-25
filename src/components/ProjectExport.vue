<template>
  <v-card>
    <v-card-title @click="exportData">
      エクスポート
    </v-card-title>
  </v-card>
</template>

<script>
export default {
  name: 'ProjectImport',
  data () {
    return {
      show: false
    }
  },
  computed: {
    project () {
      return this.$store.state.project
    }
  },
  methods: {
    exportData: function () {
      var all = this.$store.getters.dumpAll
      var blob = new Blob([JSON.stringify(all)], {type: 'application/json'})
      var a = document.createElement('a')
      a.href = URL.createObjectURL(blob)
      a.target = '_blank'
      a.download = this.project.name + '.json'
      a.click()
    }
  }
}
</script>
