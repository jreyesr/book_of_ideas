<template>
  <q-page padding>
    <div class="row">
      <div class="col-12 col-md-6" v-for="item in items" :key="item.name">
        <list-of-ideas-card :item="item" />
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, computed } from 'vue'
import { useStore } from 'vuex'
import ListOfIdeasCard from 'src/components/ListOfIdeasCard.vue'

export default defineComponent({
  name: 'PageIndex',
  components: {
    ListOfIdeasCard
  },
  setup () {
    const store = useStore()
    const items = computed(() => store.getters["search/filtered"])

    return {
      items,
    }
  }
})
</script>
