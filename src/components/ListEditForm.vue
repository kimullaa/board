<template>
  <v-card>
    <v-card-title>リストを編集する</v-card-title>
    <v-card-text>
      <v-form v-model="valid" ref="form" lazy-validation>
        <v-text-field
        label="Name"
        v-model="name"
        :rules="nameRules"
        required
        ></v-text-field>
      </v-form>
      <label>Color</label>
      <color-picker v-model="color">
        <v-icon :color="color">{{icon}}</v-icon>
      </color-picker>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn @click="submit" color="primary">Save</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import ColorPicker from './ColorPicker.vue'

export default {
  name: 'ListEditForm',
  props: {
    id: Number,
    value: Boolean
  },
  computed: {
    lists () {
      return this.$store.state.lists
    }
  },
  watch: {
    id: function () {
      const list = this.$store.getters.getList(this.id)
      this.name = list.name
      this.color = list.color
      this.icon = list.icon
    }
  },
  data () {
    return {
      valid: false,
      name: '',
      color: '',
      icon: '',
      nameRules: [
        (v) => !!v || 'Name is required'
      ]
    }
  },
  methods: {
    submit: function () {
      if (this.$refs.form.validate()) {
        this.$store.commit('updateList', {
          id: this.id,
          name: this.name,
          color: this.color,
          icon: this.icon
        })
        this.clear()
        this.$emit('input', false)
      }
    },
    clear: function () {
      this.$refs.form.reset()
    }
  },
  components: {
    ColorPicker
  }
}
</script>
