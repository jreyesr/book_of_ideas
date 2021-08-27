<template>
  <q-dialog ref="dialogRef" @hide="onDialogHide">
    <q-card class="q-dialog-plugin wider-card">
      <q-card-section>
        <div class="text-h6">Reorder list</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <draggable
          class="list-group"
          tag="transition-group"
          :component-data="{
            tag: 'ul',
            type: 'transition-group',
            name: !drag ? 'flip-list' : null
          }"
          v-model="listItems"
          v-bind="dragOptions"
          @start="drag = true"
          @end="drag = false"
          item-key="id"
        >
          <template #item="{ element }">
            <li class="list-group-item">
              <q-icon name="drag_indicator" class="handle"/>
              <span>{{ element.name }}</span>
            </li>
          </template>
        </draggable>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn color="grey" label="Cancel" @click="onCancelClick"/>
        <q-btn color="primary" label="OK" @click="onOKClick"/>
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<style lang="scss">
.wider-card {
  width: 100%;
  max-width: 600px;
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
  flex-direction: column;
  padding-left: 0;
  margin-bottom: 0;
  border-radius: .25rem;
}

.list-group-item {
  cursor: move;
  display: block;
  position: relative;
  padding: .5rem 0.5rem;
  background-color: #fff;
  border: 1px solid rgba(0,0,0,.125);

  span {
    cursor: text;
    line-height: 2rem;
  }
}

.handle {
  float: left;
  padding: 0.5rem
}
</style>

<script>
import { ref, toRef, computed } from 'vue'
import { useDialogPluginComponent } from 'quasar'
import { useStore } from 'vuex'

import draggable from "vuedraggable";

const message = [
  "vue.draggable",
  "draggable",
  "component",
  "for",
  "vue.js 2.0",
  "based",
  "on",
  "Sortablejs"
];

export default {
  props: {
    listId: String
  },

  emits: [
    ...useDialogPluginComponent.emits
  ],

  components: { draggable },

  setup (props) {
    const { dialogRef, onDialogHide, onDialogOK, onDialogCancel } = useDialogPluginComponent()
    const store = useStore()

    const listId = toRef(props, "listId").value
    const list = store.getters["main/findListById"](listId)
    const listItems = ref(list.items)

    const onOKClick = () => {
        onDialogOK({newOrder: listItems.value})
    }

    const dragOptions = computed(() => {
      return {
        animation: 200,
        group: "description",
        disabled: false,
        ghostClass: "ghost"
      }
    })

    return {
      dialogRef,
      onDialogHide,

      onOKClick,
      onCancelClick: onDialogCancel,

      listItems,
      dragOptions,
      drag: ref(false),
    }
  }
}
</script>