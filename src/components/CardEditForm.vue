<template>
  <v-card>
    <v-card-title>タスクを編集する</v-card-title>
    <v-card-text>
      <v-form v-model="valid" ref="form" lazy-validation @submit.prevent="submit">
        <v-text-field
        label="Title"
        v-model="title"
        :rules="titleRules"
        required
        ></v-text-field>
        <v-select
        :items="lists"
        item-text="name"
        item-value="id"
        label="List"
        v-model="list"
        ></v-select>
        <v-text-field
        label="Details"
        v-model="details"
        textarea
        ></v-text-field>
        <v-btn type="submit" color="primary">Save</v-btn>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>

export default {
  name: 'CardEditForm',
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
    value: function () {
      const card = this.$store.getters.getCard(this.id)
      this.title = card.title
      this.details = card.details
      this.list = card.list
    }
  },
  data () {
    return {
      valid: false,
      title: '',
      list: null,
      details: '',
      titleRules: [
        (v) => !!v || 'Title is required'
      ]
    }
  },
  methods: {
    submit: function () {
      if (this.$refs.form.validate()) {
        this.$store.commit('updateCard', {
          id: this.id,
          title: this.title,
          details: this.details,
          list: this.list
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
