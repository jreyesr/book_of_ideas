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
import ListOfIdeasCard from 'src/components/ListOfIdeasCard.vue'

const ITEMS = [
  {
    id: "1",
    name: "List A",
    items: [{}, {}, {}],
    description: "A list of robotic-related thingies"
  },
  {
    id: "3",
    name: "List B",
    items: [],
    description: "A list of not-robotic-related thingies"
  },
  {
    id: "7",
    name: "List C",
    items: [{}, {}, {}],
    description: "A list of robotic-related thingies"
  },
  {
    id: "12",
    name: "List D",
    items: [],
    description: "A list of not-robotic-related thingies"
  },
]

export default defineComponent({
  name: 'PageIndex',
  components: {
    ListOfIdeasCard
  },
  setup () {
    return {
      items: ITEMS,
    }
  }
})
</script>
