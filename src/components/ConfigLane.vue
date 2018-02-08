<template>
  <v-card>
    <v-card-title>
      レーン 名前/色 の編集
    </v-card-title>
    <v-card-text>
      <v-form v-model="valid" ref="form" lazy-validation @submit.prevent="submit">
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
        <v-btn type="submit" color="primary">save</v-btn>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
import ColorPicker from './ColorPicker.vue'

export default {
  name: 'ConfigLane',
  data () {
    return {
      valid: false,
      laneRules: [
        (v) => !!v || 'Lane Name is required'
      ],
      statuses: [
        {
          name: '',
          color: ''
        }
      ]
    }
  },
  methods: {
    submit: function () {
      if (this.$refs.form.validate()) {
        this.$store.commit('updateLane', this.statuses)
        this.$router.push('/board')
      }
    }
  },
  components: {
    ColorPicker
  },
  created () {
    this.statuses = JSON.parse(JSON.stringify(this.$store.state.statuses))
  }
}
</script>
