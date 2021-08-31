<template>
  <q-card class="q-ma-md dashed-border text-grey clickable" bordered flat @click="openNewDialog">
    <q-card-section class="center-children">
      <q-icon name="add" size="md"/>
      <div class="text-h5 text-grey">Add new</div>
    </q-card-section>
  </q-card>
</template>

<script>
import { useQuasar } from 'quasar'
import { useStore } from 'vuex'

import { spawnNewListDialog } from 'src/utils/dialogs'

export default {

  setup() {
    const $q = useQuasar()
    const store = useStore()

    const openNewDialog = () => spawnNewListDialog($q, store)

    return {
      openNewDialog,
    }
  },
}
</script>

<style lang="scss" scoped>
.clickable {
  cursor: pointer;
}

.center-children {
  display: flex;
  flex-direction: column;
  align-items: center; 
  justify-content: center;
}

.dashed-border {
  border-width: 2px;
  border-style: dashed;
}
</style>