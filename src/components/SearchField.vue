<template>
  <q-input v-model="text" dark :placeholder="searchHint" dense standout input-class="text-left" class="q-px-md" debounce="500">
    <template #append>
      <q-icon v-if="text !== ''" name="close" class="cursor-pointer" @click="text = ''" />
    </template>
  </q-input>
</template>

<script>
import { ref, toRefs, watch, computed } from 'vue'
import { useStore, mapGetters } from 'vuex'

export default {
  emits: ["searchTermChange"],

  setup(props, context) {
    const store = useStore()

    const text = ref('')
    const storeText = computed(() => store.state.search.searchTerm)
    // Set up two-way watches between the local state (`text`) and the Vuex store (`searchTerm`)
    watch(text, (newValue) => {
      context.emit('searchTermChange', newValue)
    })
    watch(storeText, (newValue) => {
      text.value = newValue
    })

    const location = computed(() => "Search " + (store.state.search.currentList?.name ?? "your lists"))

    return {
      text,

      searchHint: location
    }
  },
}
</script>