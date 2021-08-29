<template>
  <q-page padding>
      <draggable
        class="list-group row"
        tag="transition-group"
        :component-data="{
          tag: 'div',
          //type: 'transition-group',
          name: !drag ? 'flip-list' : null
        }"
        handle=".handle"
        :modelValue="items"
        @update:modelValue="orderChanged"
        v-bind="dragOptions"
        @start="drag = true"
        @end="drag = false"
        item-key="id"
      >
        <template #item="{element: item}">
          <div class="col-12 col-md-6" :key="item.id">
            <list-of-ideas-card :item="item" :showHandle="!searchActive"/>
          </div>
        </template>
        
        <template #footer>
          <div class="col-12 col-md-6 center-children-y" key="new_idea">
            <new-list-card style="flex-grow: 1;"/>
          </div>
        </template>
      </draggable>    
  </q-page>
</template>

<style lang="scss">
.center-children-y {
  display: flex;
  align-items: center;
}

.flip-list-move {
  transition: transform 0.5s;
}

.no-move {
  transition: transform 0s;
}

.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}

.list-group {
  min-height: 20px;
  display: flex;
  flex-direction: row;
  padding-left: 0;
  margin-bottom: 0;
  border-radius: .25rem;
}

.handle {
  float: left;
  padding: 0.5rem;
  cursor: move;
}
</style>

<script>
import { defineComponent, computed, ref } from 'vue'
import { useStore } from 'vuex'
import { useMeta } from 'quasar'

import ListOfIdeasCard from 'src/components/ListOfIdeasCard.vue'
import NewListCard from 'src/components/NewListCard.vue'

import draggable from "vuedraggable"

export default defineComponent({
  name: 'PageIndex',
  components: {
    ListOfIdeasCard,
    NewListCard,
    draggable,
  },
  setup () {
    const store = useStore()
    const items = computed(() => store.getters["search/filtered"])

    const searchActive = computed(() => store.getters["search/searchActive"])
    const orderChanged = (newOrder) => {
      store.dispatch("main/changeMasterListOrder", {newOrder})
    }

    useMeta({title: "Book Of Ideas"})

    const dragOptions = computed(() => {
      return {
        animation: 200,
        group: "description",
        // This seems to bug out sometimes, hiding the handles *should* be enough
        // disabled: searchActive.value, 
        ghostClass: "ghost",
      }
    })

    return {
      items,
      searchActive,
      orderChanged,

      dragOptions,
      drag: ref(false),
    }
  }
})
</script>
