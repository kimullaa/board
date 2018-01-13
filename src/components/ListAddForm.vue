<template>
  <v-card>
    <v-card-title>リストを追加する</v-card-title>
    <v-card-text>
      <v-form v-model="valid" ref="form" lazy-validation>
        <v-text-field
        label="Name"
        v-model="name"
        :rules="nameRules"
        required
        ></v-text-field>
        <color-picker v-model="color">
          <v-text-field
          name="color"
          label="Color"
          v-model="color"
          ></v-text-field>
        </color-picker>
        <icon-picker v-model="icon">
          <v-text-field
          name="icon"
          label="Icon"
          v-model="icon"
          ></v-text-field>
        </icon-picker>
      </v-form>
      <v-icon :color="color">{{icon}}</v-icon>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn @click="submit" color="primary">Save</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import ColorPicker from './ColorPicker.vue'
import IconPicker from './IconPicker.vue'

export default {
  name: 'ListAddForm',
  computed: {
    lists () {
      return this.$store.state.lists
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
        this.$store.commit('createList', {
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
    ColorPicker,
    IconPicker
  }
}
</script>
