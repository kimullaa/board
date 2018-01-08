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
        :items="types"
        item-text="name"
        item-value="id"
        label="Type"
        :rules="typeRules"
        v-model="type"
        required
        ></v-select>
      </v-form>
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
    types () {
      return this.$store.state.types
    },
    defaultType () {
      return this.$store.getters.getDefaultType
    }
  },
  data () {
    return {
      valid: false,
      title: '',
      type: '',
      details: '',
      titleRules: [
        (v) => !!v || 'Title is required'
      ],
      typeRules: [
        (v) => v != null || 'Type is required'
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
          type: this.type
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
