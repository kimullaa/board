<template>
  <v-card>
    <v-card-title>タスクを追加する</v-card-title>
    <v-card-text>
      <v-form v-model="valid" ref="form" lazy-validation>
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
        chips
        v-model="list"
        >
      </v-select>
        <v-text-field
        label="Details"
        v-model="details"
        textarea
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
  name: 'CardAddForm',
  props: {
    value: Boolean,
    statusId: Number,
    board: Boolean
  },
  computed: {
    lists () {
      return this.$store.state.lists
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
        this.$store.commit('createCard', {
          title: this.title,
          details: this.details,
          status: this.statusId,
          board: this.board,
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
