<template>
  <q-card class="q-ma-md" bordered>
    <q-card-section>
      <div class="text-h5">{{ item.name }}</div>
      <div class="text-overline" :class="elementColor()">
        {{ item.items.length }} items<span v-if="starredCount > 0">, {{ starredCount }} starred</span>
      </div>
    </q-card-section>

    <q-card-section>{{ item.description }}</q-card-section>

    <q-separator inset />

    <q-card-actions>
      <q-btn flat color="dark" label="Add new" @click="openNewDialog"/>

      <q-space />

      <!-- <q-btn color="grey" round flat dense :icon="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'" @click="expanded = !expanded" /> -->
      <q-btn color="grey" round flat dense icon="arrow_forward" :to="{name: 'list', params: {'id': item.id}}"/>
    </q-card-actions>

    <q-slide-transition>
      <div v-show="expanded">
        <q-separator />
        <q-card-section class="text-subtitle2 text-weight-regular">
          <!-- {{ lorem }} -->
        </q-card-section>
      </div>
    </q-slide-transition>
  </q-card>
</template>

<script>
import { ref, toRef, computed } from 'vue'
import { useQuasar } from 'quasar'
import { useStore } from 'vuex'

import { spawnNewIdeaDialog } from 'src/utils/dialogs'

export default {
  props: ["item"],

  setup(props) {
    const $q = useQuasar()
    const store = useStore()

    const item = toRef(props, "item")
    const elementColor = () => item.value.items.length > 0 ? 'text-green-9' : 'text-orange-9'
    const starredCount = computed(() => item.value.items.filter(i => i.starred === true).length)

    const openNewDialog = () => spawnNewIdeaDialog($q, item.value.id, store)

    return {
      elementColor,
      starredCount,

      expanded: ref(false),
      openNewDialog
    }
  },
}
</script>