<template>
  <v-card>
    <v-card-title @click="show =!show">
      新規作成
    </v-card-title>
    <v-card-text v-show="show">
      <v-form
      v-model="valid" ref="form" lazy-validation
      @submit.prevent="createProject"
      >
        <v-text-field
        label="プロジェクト名"
        v-model="project.name"
        :rules="nameRules"
        required
        ></v-text-field>
        <v-btn type="submit" color="primary">save</v-btn>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
import template from '../assets/template.json'

export default {
  name: 'ProjectAdd',
  props: {
    initial: Boolean
  },
  data () {
    return {
      valid: false,
      project: {
        name: null
      },
      nameRules: [
        (v) => /^[a-zA-Z0-9_-]+$/.test(v) || '半角英数字で入力してください'
      ],
      show: false
    }
  },
  methods: {
    createProject: function () {
      var templateProject = JSON.parse(JSON.stringify(template))
      templateProject.project.name = this.project.name
      this.$store.commit('importAll', templateProject)
      this.show = !this.show
      this.$router.push('/project')
    }
  }
}
</script>
