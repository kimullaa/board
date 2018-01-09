<template>
  <v-card>
    <v-card-title>タグを編集する</v-card-title>
    <v-card-text>
      <v-chip disabled>
        {{name}}
        <v-icon :color="color" class="ml-3">{{icon}}</v-icon>
      </v-chip>
      <v-form v-model="valid" ref="form" lazy-validation>
        <v-text-field
        label="Name"
        v-model="name"
        :rules="nameRules"
        required
        ></v-text-field>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn @click="submit" color="primary">Save</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>

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
    value: function () {
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
  }
}
</script>
