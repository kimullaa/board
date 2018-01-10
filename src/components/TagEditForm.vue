<template>
  <v-card>
    <v-card-title>タグを編集する</v-card-title>
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
      <label>Icon</label>
      <icon-picker v-model="icon">
        <v-icon>{{icon}}</v-icon>
      </icon-picker>
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
  name: 'TagEditForm',
  props: {
    id: Number,
    value: Boolean
  },
  computed: {
    currentTags () {
      return this.$store.state.tags
    }
  },
  watch: {
    id: function () {
      console.log(this.id, this.value)
      const tag = this.$store.getters.getTag(this.id)
      this.name = tag.name
      this.color = tag.color
      this.icon = tag.icon
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
        this.$store.commit('updateTag', {
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
