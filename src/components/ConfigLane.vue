<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card>
          <v-card-title>
            <v-btn icon @click.native="show = !show">
              <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
            </v-btn>
            レーン名/色の編集
          </v-card-title>
          <v-card-text v-show="show">
              <v-form v-model="valid" ref="form" lazy-validation>
                <template v-for="(status,index) in statuses">
                  <v-layout row wrap>
                    <v-flex xs6>
                      <v-text-field
                      :label="`第${index + 1}レーン`"
                      v-model="status.name"
                      :rules="laneRules"
                      required
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs5 offset-xs1>
                      <color-picker v-model="status.color">
                        <v-chip label :color="status.color" text-color="white">{{status.name}}</v-chip>
                      </color-picker>
                    </v-flex>
                  </v-layout>
                </template>
              </v-form>
            </v-card-text>
          <v-card-actions v-show="show">
            <v-spacer></v-spacer>
            <v-btn @click="submit">save</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import ColorPicker from './ColorPicker.vue'

export default {
  name: 'ConfigLane',
  data () {
    return {
      valid: false,
      show: false,
      laneRules: [
        (v) => !!v || 'Lane Name is required'
      ],
      statuses: [
        {
          name: '',
          color: ''
        }
      ],
      x: ''
    }
  },
  watch: {
    show: function () {
      this.statuses = JSON.parse(JSON.stringify(this.$store.state.statuses))
    }
  },
  methods: {
    submit: function () {
      this.$store.commit('updateLane', this.statuses)
      this.show = false
    }
  },
  components: {
    ColorPicker
  }
}
</script>
