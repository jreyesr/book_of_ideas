import NewListDialog from 'src/components/NewListDialog.vue'
import NewIdeaDialog from 'src/components/NewIdeaDialog.vue'
import IdeaDetailsDialog from 'src/components/IdeaDetailsDialog.vue'
import ListReorderDialog from 'src/components/ListReorderDialog.vue'

const spawnNewListDialog = ($q, store) => {
  $q.dialog({
    component: NewListDialog,
    persistent: true
  }).onOk((data) => {
    store.dispatch("main/addNewList", {data})
  }).onDismiss(() => {/* Do something here if required */})  
}

const spawnListEditDialog = ($q, store, list) => {
  $q.dialog({
    component: NewListDialog,
    componentProps: { list },
    persistent: true
  }).onOk((data) => {
    store.dispatch("main/editList", {data})
  }).onDismiss(() => {/* Do something here if required */})  
}

const spawnNewIdeaDialog = ($q, listId, store, refreshIndex=false) => {
  $q.dialog({
    component: NewIdeaDialog,
    persistent: true
  }).onOk((data) => {
    store.dispatch("main/addNewIdea", {listId, idea: data, refreshIndex})
  }).onDismiss(() => {/* Do something here if required */})  
}

const spawnIdeaDetailsDialog = ($q, idea) => {
  $q.dialog({
    component: IdeaDetailsDialog,
    componentProps: { idea },
  }).onDismiss(() => {/* Do something here if required */})
}

const spawnListReorderDialog = ($q, listId, store) => {
  $q.dialog({
    component: ListReorderDialog,
    componentProps: { listId },
    persistent: true
  }).onOk(({ newOrder }) => {
    store.dispatch("main/changeListOrder", {listId, newOrder})
  }).onDismiss(() => {/* Do something here if required */})  
}

const spawnListDeleteDialog = ($q, listId, store) => {
  return new Promise((resolve) => {
    $q.dialog({
      title: 'Confirm deletion',
      message: 'Do you really want to delete this list?',
      ok: { color: "negative", label: "Yes" },
      cancel: { color: "grey", label: "No" },
    }).onOk(() => {
      store.dispatch("main/deleteList", {listId})
      resolve(true)
    }).onCancel(() => resolve(false))
  })
}

const spawnIdeaDeleteDialog = ($q, listId, idea, store) => {
  return new Promise((resolve) => {
    $q.dialog({
      title: 'Confirm deletion',
      message: `Do you really want to delete ${idea.name}?`,
      ok: { color: "negative", label: "Yes" },
      cancel: { color: "grey", label: "No" },
    }).onOk(() => {
      store.dispatch("main/deleteIdea", {listId, ideaId: idea.id})
      resolve(true)
    }).onCancel(() => resolve(false))
  })
}

export {
  spawnIdeaDetailsDialog,
  spawnNewIdeaDialog,
  spawnNewListDialog,
  spawnListEditDialog,
  spawnListReorderDialog,
  spawnListDeleteDialog,
  spawnIdeaDeleteDialog,
}