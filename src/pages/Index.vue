<template>
  <q-page padding>
    <div class="row">
      <div class="col-12 col-md-6" v-for="item in items" :key="item.name">
        <list-of-ideas-card :item="item" />
      </div>
      <div class="col-12 col-md-6">
        <new-list-card/>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, computed } from 'vue'
import { useStore } from 'vuex'
import ListOfIdeasCard from 'src/components/ListOfIdeasCard.vue'
import NewListCard from 'src/components/NewListCard.vue'

export default defineComponent({
  name: 'PageIndex',
  components: {
    ListOfIdeasCard,
    NewListCard,
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
