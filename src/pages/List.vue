<template>
  <q-page padding class="q-ma-md">
    <q-breadcrumbs>
      <q-breadcrumbs-el label="Home" :to="{ name: 'home' }" />
      <q-breadcrumbs-el :label="id" />
    </q-breadcrumbs>

    <h4>List #{{ id }}</h4>
  </q-page>
</template>

<script>
import { useRoute } from 'vue-router'

export default {
  setup() {
    const { params } = useRoute()

    return {
      id: params.id
    }
  },
}
</script>