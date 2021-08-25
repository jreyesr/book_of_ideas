<template>
  <q-input v-model="text" dark :placeholder="searchHint" dense standout input-class="text-left" class="q-px-md">
    <template v-slot:append>
      <q-icon v-if="text !== ''" name="close" @click="text = ''" class="cursor-pointer" />
    </template>
  </q-input>
</template>

<script>
import { ref, toRefs } from 'vue'

export default {
  props: ["location"],

  setup(props) {
    const { location } = toRefs(props)

    return {
      text: ref(''),

      searchHint: `Search in ${location.value}`,
    }
  },
}
</script>