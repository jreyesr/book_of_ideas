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
        :model-value="items"
        v-bind="dragOptions"
        item-key="id"
        @update:modelValue="orderChanged"
        @start="drag = true"
        @end="drag = false"
      >
        <template #item="{element: item}">
          <div :key="item.id" class="col-12 col-md-6">
            <list-of-ideas-card :item="item" :show-handle="!searchActive"/>
          </div>
        </template>
        
        <template #footer>
          <div v-if="!searchActive" key="new_idea" class="col-12 col-md-6 center-children-y" data-shepherd-id="add-new">
            <new-list-card style="flex-grow: 1;"/>
          </div>
        </template>
      </draggable>    
  </q-page>
</template>

<script>
import { defineComponent, computed, ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { useMeta } from 'quasar'

import ListOfIdeasCard from 'src/components/ListOfIdeasCard.vue'
import NewListCard from 'src/components/NewListCard.vue'

import draggable from 'vuedraggable'
import Shepherd from 'shepherd.js'
import createTour from 'src/utils/tour'


export default defineComponent({
  name: 'PageIndex',
  components: {
    ListOfIdeasCard,
    NewListCard,
    draggable,
  },
  setup () {
    const store = useStore()
    const router = useRouter()
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

    const markTourComplete = () => store.commit("tour/markComplete")

    onMounted(() => {
      Shepherd.on("cancel", markTourComplete)
      Shepherd.on("complete", markTourComplete)

      const anyLists = store.state.main.lists.length > 0
      const tour = createTour({
        goToFirstList: async () => {
          if (anyLists) {
            await router.replace({name: "list", params: {id: store.state.main.lists[0].id}})
          }
        },
        anyLists
      })
      tour.start()
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

<style lang="scss" scoped>
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
</style>