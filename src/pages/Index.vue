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
import { defineComponent, ref } from 'vue'
import { useStore } from 'vuex'
import ListOfIdeasCard from 'src/components/ListOfIdeasCard.vue'

export default defineComponent({
  name: 'PageIndex',
  components: {
    ListOfIdeasCard
  },
  setup () {
    const store = useStore()

    return {
      items: store.state.main.lists,
    }
  }
})
</script>
