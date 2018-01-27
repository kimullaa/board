<template>
  <v-bottom-sheet inset v-model="sheet">
    <v-btn
    dark
    slot="activator"
    fixed
    fab
    bottom
    right
    >
    <v-icon>search</v-icon>
  </v-btn>
  <v-card>
    <v-card-text class="text-xs-center">
      <v-form v-model="valid" ref="form" lazy-validation @submit="submit">
        <v-layout row wrap>
          <v-flex xs-9>
            <v-text-field
            light
            solo
            prepend-icon="search"
            placeholder="Search"
            v-model="query"
            ></v-text-field>
          </v-flex>
          <v-flex  offset-xs1 xs-1>
            <v-select
            :items="lists"
            item-text="name"
            item-value="id"
            label="List"
            v-model="list"
            ></v-select>
          </v-flex>
          <v-flex xs-1>
            <v-btn type="submit" color="primary">検索</v-btn>
          </v-flex>
        </v-layout>
      </v-form>
    </v-card-text>
  </v-card>
</v-bottom-sheet>
</template>

<script>

export default {
  name: 'BacklogItemSearchButton',
  computed: {
    lastLane () {
      return this.$store.getters.getLastLane
    },
    lists () {
      return this.$store.state.lists
    }
  },
  watch: {
    sheet: function () {
      if (this.sheet === false) {
        this.clear()
      }
    }
  },
  data () {
    return {
      valid: false,
      sheet: false,
      query: null,
      list: null
    }
  },
  methods: {
    submit: function () {
      if (this.$refs.form.validate()) {
        this.$router.push({query: {query: this.query, list: this.list}})
        this.sheet = false
      }
    },
    clear: function () {
      this.$refs.form.reset()
    }
  }
}
</script>
