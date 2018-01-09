<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card>
          <v-card-title class="headline">タグ一覧</v-card-title>
          <v-card-text>
            <v-chip :key="tag.id" v-for="tag in tags"  @click="dialog = true">
              {{tag.name}}
              <v-icon :color="tag.color" class="ml-3">{{tag.icon}}</v-icon>
              <v-dialog v-model="dialog" max-width="500px">
                <tag-edit-form :id="tag.id" v-model="dialog"></tag-edit-form>
              </v-dialog>
            </v-chip>
          </v-card-text>
        </v-card>
    </v-flex>
  </v-layout>
</v-container>
</template>

<script>
import TagEditForm from './tagEditForm'

export default {
  name: 'Tags',
  computed: {
    tags () {
      return this.$store.state.tags
    }
  },
  data () {
    return {
      dialog: false
    }
  },
  components: {
    TagEditForm
  }
}
</script>
