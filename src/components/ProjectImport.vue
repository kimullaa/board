<template>
  <v-card>
    <v-card-title @click="show = !show">
      インポート
    </v-card-title>
    <v-card-text v-show="show">
      <input type="file" @change="importData" />
    </v-card-text>
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
  methods: {
    importData: function (evt) {
      const self = this
      var reader = new FileReader()
      reader.addEventListener('load', () => {
        let json
        try {
          json = JSON.parse(reader.result)
        } catch (e) {
          self.$toasted.error('不正なフォーマットです')
        }
        if (this.$store.getters.isValidFormat(json)) {
          self.$store.commit('importAll', json)
        } else {
          self.$toasted.error('不正なフォーマットです')
        }
        self.show = !self.show
      })
      reader.readAsText(evt.target.files[0])
    }
  }
}
</script>
