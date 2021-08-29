<template>
  <q-page padding>
    <q-breadcrumbs>
      <q-breadcrumbs-el label="Home" :to="{ name: 'home' }" />
      <q-breadcrumbs-el :label="list?.name" />
    </q-breadcrumbs>

    <h4>
      {{ list?.name }} 
      <q-btn v-if="!isListEmpty" flat size="sm" color="primary" class="text-primary q-px-sm" @click="openListReorder">
        <q-icon name="format_list_bulleted" class="q-mr-xs"/>
        <div>Items</div>
      </q-btn>
      <q-btn flat size="sm" color="primary" class="q-px-sm" @click="openListEdit">
        <q-icon name="edit" class="q-mr-xs"/>
        <div>Edit</div>
      </q-btn>
      <q-btn flat size="sm" color="negative" class="q-px-sm" @click="openListDelete">
        <q-icon name="delete" class="q-mr-xs"/>
        <div>Delete</div>
      </q-btn>
    </h4>

    <p class="text-body1">{{ list?.description }}</p>

    <q-list bordered separator>
      <q-item v-if="isListEmpty" clickable v-ripple @click="addNew">
        <q-item-section>You have no ideas in this list. Add a new one now!</q-item-section>
      </q-item>

      <q-item v-else 
        clickable 
        v-ripple 
        @click="openDetails(item)" 
        v-for="(item, i) in filteredIdeas" 
        :key="item.id"
        :class="item.starred ? 'bg-amber-1' : ''"
      >
        <q-item-section thumbnail v-if="picUrl(item)">
          <img :src="picUrl(item)">
        </q-item-section>
        <q-item-section thumbnail v-else>
          <!-- Placeholder image, just to align the titles -->
          <img class="invisible"> 
        </q-item-section>
        <q-item-section>
          <q-item-label>{{ item.name }}</q-item-label>
          <q-item-label caption lines="1" v-for="line in linesToArray(item.description)" :key="line">{{ line }}</q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-btn round flat color="amber" @click.stop="toggleStar(i)">
            <q-icon :name="item.starred ? 'star' : 'star_outline'"/>
          </q-btn>
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<style lang="scss">
.invisible {
  visibility: hidden;
}
</style>

<script>
import { computed, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { useQuasar, useMeta } from 'quasar'
import { linesToArray } from 'src/utils/strings'

import { 
  spawnNewIdeaDialog, 
  spawnIdeaDetailsDialog, 
  spawnListReorderDialog,
  spawnListDeleteDialog,
  spawnListEditDialog
} from 'src/utils/dialogs'

export default {
  setup() {
    const { params } = useRoute()
    const router = useRouter()
    const store = useStore()
    const $q = useQuasar()

    const list = computed(() => store.getters['main/findListById'](params.id))
    const isListEmpty = computed(() => list.value?.items.length == 0)
    const hasMultipleElements = computed(() => list.value?.items.length > 1)

    const filteredIdeas = computed(() => store.getters["search/filteredIdeas"])
    const picUrl = (idea) => idea ? store.getters["images/getImageSrc"](idea.id) : ""

    const openDetails = (idea) => spawnIdeaDetailsDialog($q, idea)
    const addNew = () => spawnNewIdeaDialog($q, params.id, store, true)
    const openListReorder = () => spawnListReorderDialog($q, params.id, store)
    const openListEdit = () => spawnListEditDialog($q, store, list)
    const openListDelete = () => {
      spawnListDeleteDialog($q, params.id, store).then((didDelete) => {
        if(didDelete)
          router.replace({name: "home"})
      })
    }

    const toggleStar = (itemIndex) => {
      const item = list.value.items[itemIndex]
      const action = item.starred ? "Unstarring" : "Starring"
      $q.notify({
        message: `${action} ${item.name}`,
        icon: "star_outline",
        group: "starring-group", // This forces all star/unstar messages to overwrite each other
        timeout: 750,
        // badgeClass: "hidden", // Uncomment this to make the notification counter disappear
      })
      
      store.commit("main/toggleStar", {listId: list.value.id, itemIndex})
    }

    useMeta(() => {
      return { title: list.value?.name ?? "<Deleted>" }
    })

    return {
      list,
      filteredIdeas,
      picUrl,
      isListEmpty,
      hasMultipleElements,
      linesToArray,

      openDetails,
      addNew,
      openListReorder,
      openListEdit,
      openListDelete,
      toggleStar,

      store
    }
  },
}
</script>