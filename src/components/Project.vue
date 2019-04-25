<template>
  <v-layout row wrap>
    <v-flex xs12 mb-3>
      <v-alert
        color="error"
        icon="error" :value="!$store.getters.isImported">
        プロジェクトが存在しません。新規に作成するか、インポートしてください。
      </v-alert>
      <v-alert
        color="warning"
        icon="warning" :value="$store.getters.isImported">
        『新規作成』および『インポート』すると、現在のデータは消えます。<br />
        必ずプロジェクトをエクスポートしてください。
      </v-alert>
    </v-flex>
    <v-flex xs12 mb-3>
      <project-add></project-add>
    </v-flex>
    <v-flex xs12 mb-3>
      <project-import></project-import>
    </v-flex>
    <v-flex xs12 mb-3 v-if="$store.getters.isImported">
      <project-export></project-export>
    </v-flex>
  </v-layout>
</template>

<script>
import ProjectAdd from './ProjectAdd'
import ProjectImport from './ProjectImport'
import ProjectExport from './ProjectExport'

export default {
  name: 'Project',
  components: {
    ProjectAdd,
    ProjectImport,
    ProjectExport
  }
}
</script>
