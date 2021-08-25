<template>
  <q-page padding>
    <q-breadcrumbs>
      <q-breadcrumbs-el label="Home" :to="{ name: 'home' }" />
      <q-breadcrumbs-el :label="list.name" />
    </q-breadcrumbs>

    <h4>{{ list.name }}</h4>

    <p class="text-body1">{{ list.description }}</p>

  </q-page>
</template>

<script>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'

export default {
  setup() {
    const { params } = useRoute()
    const store = useStore()

    return {
      list: computed(() => store.getters['main/findListById'](params.id)),
    }
  },
}
</script>