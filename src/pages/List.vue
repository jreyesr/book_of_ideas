<template>
  <q-page padding>
    <q-breadcrumbs>
      <q-breadcrumbs-el label="Home" :to="{ name: 'home' }" />
      <q-breadcrumbs-el :label="list.name" />
    </q-breadcrumbs>

    <h4>{{ list.name }}</h4>

    <p class="text-body1">{{ list.description }}</p>

    <q-list bordered separator>
      <q-item v-if="isListEmpty" clickable v-ripple @click="addNew">
        <q-item-section>You have no ideas in this list. Add a new one now!</q-item-section>
      </q-item>

      <q-item v-else clickable v-ripple @click="openDetails(item)" v-for="item in list.items" :key="item.id">
        <q-item-section>
          <q-item-label>{{ item.name }}</q-item-label>
          <q-item-label caption lines="1" v-for="line in linesToArray(item.description)" :key="line">{{ line }}</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import { useQuasar } from 'quasar'
import { linesToArray } from 'src/utils/strings'

import IdeaDetailsDialog from 'src/components/IdeaDetailsDialog.vue'

export default {
  setup() {
    const { params } = useRoute()
    const store = useStore()
    const $q = useQuasar()

    const list = computed(() => store.getters['main/findListById'](params.id))
    const isListEmpty = computed(() => list.value.items.length == 0)

    const openDetails = (idea) => {
      $q.dialog({
        component: IdeaDetailsDialog,
        componentProps: { idea },
      }).onDismiss(() => {/* Do something here if required */})
    }
    const addNew = () => {
      $q.notify('Adding element...')     
    }

    return {
      list,
      isListEmpty,
      linesToArray,

      openDetails,
      addNew,
    }
  },
}
</script>