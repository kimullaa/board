<template>
  <v-card>
    <v-container fluid grid-list-md>
      <v-layout row wrap>
        <v-card-title>リストを編集する</v-card-title>
        <v-card-text>
          <v-form v-model="valid" ref="form" lazy-validation @submit.prevent="submit">
            <v-layout row wrap>
              <v-flex xs12>
                <v-text-field
                label="Name"
                v-model="name"
                :rules="nameRules"
                required
                ></v-text-field>
              </v-flex>
            </v-layout>

            <v-layout row wrap>
              <v-flex xs7>
                <v-layout row wrap>
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
                </v-layout>
              </v-flex>

              <v-flex xs5 style="border-style:dotted">
                <div class="text-xs-center" style="height:100%">
                  <v-icon style="height:100%" large :color="color">{{icon}}</v-icon>
                </div>
              </v-flex>
            </v-layout>

            <v-btn type="submit" color="primary">Save</v-btn>
          </v-form>
        </v-card-text>
      </v-layout>
    </v-container>
  </v-card>
</template>

<script>
import ColorPicker from './ColorPicker.vue'
import IconPicker from './IconPicker.vue'

export default {
  name: 'ListEditForm',
  props: {
    id: String,
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
