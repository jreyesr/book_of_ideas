<template>
  <q-dialog ref="dialogRef" @hide="onDialogHide">
    <q-card class="q-dialog-plugin wider-card">
      <q-card-section>
        <div class="text-h6">Manage items</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <draggable
          v-model="listItems"
          class="list-group"
          tag="transition-group"
          :component-data="{
            tag: 'ul',
            type: 'transition-group',
            name: !drag ? 'flip-list' : null
          }"
          v-bind="dragOptions"
          item-key="id"
          @start="drag = true"
          @end="drag = false"
        >
          <template #item="{ element }">
            <li class="list-group-item">
              <q-icon name="drag_indicator" class="handle"/>
              <span class="text-content">{{ element.name }}</span>
              <q-btn flat round size="xs" class="close" @click="openIdeaDelete(element)">
                <q-icon name="close"/>
              </q-btn>
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

<script>
import { ref, toRef, computed } from 'vue'
import { useQuasar, useDialogPluginComponent } from 'quasar'
import { useStore } from 'vuex'

import { spawnIdeaDeleteDialog } from 'src/utils/dialogs'

import draggable from "vuedraggable"

export default {
  components: { draggable },
  
  props: {
    listId: {
      type: String,
      default: ""
    }
  },

  emits: [
    ...useDialogPluginComponent.emits
  ],

  setup (props) {
    const { dialogRef, onDialogHide, onDialogOK, onDialogCancel } = useDialogPluginComponent()
    const $q = useQuasar()
    const store = useStore()

    const listId = toRef(props, "listId").value
    const list = store.getters["main/findListById"](listId)
    const listItems = ref(list.items)

    const onOKClick = () => {
        onDialogOK({newOrder: listItems.value})
    }

    const openIdeaDelete = (idea) => {
      spawnIdeaDeleteDialog($q, listId, idea, store)
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

      openIdeaDelete,

      listItems,
      dragOptions,
      drag: ref(false),
    }
  }
}
</script>

<style lang="scss" scoped>
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

  span.text-content {
    cursor: text;
    line-height: 2rem;
  }
}

.handle {
  float: left;
  padding: 0.5rem
}

.close {
  float: right;
  padding: 0.5rem;
}
</style>