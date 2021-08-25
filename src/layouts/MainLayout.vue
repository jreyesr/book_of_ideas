<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <!-- <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        /> -->

        <q-toolbar-title>
          Book Of Ideas
        </q-toolbar-title>

        <transition appear enter-active-class="animated slideInRight" leave-active-class="animated slideOutRight">
          <search-field v-show="searchFieldOpen" :location="'Book of Ideas'"/>
        </transition>
        <q-btn flat round dense icon="search" class="q-mr-xs" @click="toggleSearchField"/>
      </q-toolbar>
    </q-header>

    <q-footer>
      <q-toolbar>
        <q-space />
        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-footer>

    <q-drawer
      v-model="leftDrawerOpen"
      bordered
      class="bg-grey-1"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          Essential Links
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'
import SearchField from 'src/components/SearchField.vue'

const linksList = [];

import { defineComponent, ref } from 'vue'
import { useQuasar } from 'quasar'

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink, SearchField
  },

  setup () {
    const leftDrawerOpen = ref(false)
    const searchFieldOpen = ref(false)

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
          leftDrawerOpen.value = !leftDrawerOpen.value
      },
      searchFieldOpen,
      toggleSearchField() {
        searchFieldOpen.value = !searchFieldOpen.value
      },
    }
  }
})
</script>
