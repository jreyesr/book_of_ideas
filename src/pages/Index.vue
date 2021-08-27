<template>
  <q-page padding>
    <div class="row">
      <div class="col-12 col-md-6" v-for="item in items" :key="item.name">
        <list-of-ideas-card :item="item" />
      </div>
      <div class="col-12 col-md-6 center-children-y">
        <new-list-card style="flex-grow: 1;"/>
      </div>
    </div>
  </q-page>
</template>

<style lang="scss">
.center-children-y {
  display: flex;
  align-items: center;
}
</style>

<script>
import { defineComponent, computed } from 'vue'
import { useStore } from 'vuex'
import { useMeta } from 'quasar'
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

    useMeta({title: "Book Of Ideas"})

    return {
      items,
    }
  }
})
</script>
