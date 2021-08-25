<template>
  <q-card class="q-ma-md" bordered>
    <q-card-section>
      <div class="text-h5">{{ item.name }}</div>
      <div class="text-overline" :class="elementColor()">{{ item.items.length }} items</div>
    </q-card-section>

    <!-- <q-separator inset /> -->

    <q-card-section>{{ item.description }}</q-card-section>

    <q-card-actions>
      <q-btn flat color="dark" label="Add new" />

      <q-space />

      <q-btn color="grey" round flat dense :icon="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'" @click="expanded = !expanded" />
      <q-btn color="grey" round flat dense icon="arrow_forward" :to="{name: 'list', params: {'id': item.id}}" />
    </q-card-actions>

    <q-slide-transition>
      <div v-show="expanded">
        <q-separator />
        <q-card-section class="text-subtitle2 text-weight-regular">
          {{ lorem }}
        </q-card-section>
      </div>
    </q-slide-transition>
  </q-card>
</template>

<script>
import { ref, toRefs } from 'vue'

export default {
  props: ["item"],

  setup(props) {
    const { item } = toRefs(props)
    const elementColor = () => item.value.items.length > 0 ? 'text-green-9' : 'text-orange-9'

    const goToList = () => {
      const id = item.value.id
      console.log(`Navigating to list #${id}...`)
    }
    
    return {
      elementColor,
      goToList,
      expanded: ref(false),
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
  },
}
</script>