<template>
  <v-card>
    <v-card-title>リストを編集する</v-card-title>
    <v-card-text>
      <v-form v-model="valid" ref="form" lazy-validation @submit.prevent="submit">
        <v-flex d-flex>
          <v-text-field
          label="Name"
          v-model="name"
          :rules="nameRules"
          required
          ></v-text-field>
        </v-flex>
        <v-flex d-flex>
          <icon-picker v-model="icon">
            <v-text-field
            name="icon"
            label="Icon"
            v-model="icon"
            :rules="iconRules"
            required
            ></v-text-field>
          </icon-picker>
        </v-flex>
        <v-flex d-flex>
          <color-picker v-model="color">
            <v-text-field
            name="color"
            label="Color"
            v-model="color"
            :rules="colorRules"
            required
            ></v-text-field>
          </color-picker>
        </v-flex>
        <v-flex class="mb-3">
          <label>Icon Preview</label>
          <v-icon large class="ml-3" :color="color">{{icon}}</v-icon>
        </v-flex>
        <v-btn type="submit" color="primary">Save</v-btn>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
import ColorPicker from './ColorPicker.vue'
import IconPicker from './IconPicker.vue'

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
    value: function () {
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
      ],
      colorRules: [
        (v) => !!v || 'Color is required'
      ],
      iconRules: [
        (v) => !!v || 'Icon is required'
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
    ColorPicker,
    IconPicker
  }
}
</script>
