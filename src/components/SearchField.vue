<template>
  <q-input v-model="text" dark :placeholder="searchHint" dense standout input-class="text-left" class="q-px-md" debounce="500">
    <template v-slot:append>
      <q-icon v-if="text !== ''" name="close" @click="text = ''" class="cursor-pointer" />
    </template>
  </q-input>
</template>

<script>
import { ref, toRefs, watch, computed } from 'vue'
import { useStore } from 'vuex'

export default {
  props: ["location"],
  emits: ["searchTermChange"],

  setup(props, context) {
    //const { location } = toRefs(props)
    const store = useStore()

    const text = ref('')
    watch(text, (newValue) => {
      context.emit('searchTermChange', newValue)
    })

    const location = computed(() => "Search " + (store.state.search.currentList?.name ?? "your lists"))

    return {
      text,

      searchHint: location
    }
  },
}
</script>