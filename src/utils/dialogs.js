import NewListDialog from 'src/components/NewListDialog.vue'
import NewIdeaDialog from 'src/components/NewIdeaDialog.vue'
import IdeaDetailsDialog from 'src/components/IdeaDetailsDialog.vue'
import ListEditDialog from 'src/components/ListEditDialog.vue'

const spawnNewListDialog = ($q, store) => {
  $q.dialog({
    component: NewListDialog,
    persistent: true
  }).onOk((data) => {
    store.commit("main/addNewList", {data})
  }).onDismiss(() => {/* Do something here if required */})  
}

const spawnNewIdeaDialog = ($q, listId, store) => {
  $q.dialog({
    component: NewIdeaDialog,
    componentProps: { listId },
    persistent: true
  }).onOk((data) => {
    store.commit("main/addNewIdea", {listId, idea: data})
  }).onDismiss(() => {/* Do something here if required */})  
}

const spawnIdeaDetailsDialog = ($q, idea) => {
  $q.dialog({
    component: IdeaDetailsDialog,
    componentProps: { idea },
  }).onDismiss(() => {/* Do something here if required */})
}

const spawnListEditDialog = ($q, listId, store) => {
  $q.dialog({
    component: ListEditDialog,
    componentProps: { listId },
    persistent: true
  }).onOk(({ newOrder }) => {
    store.dispatch("main/changeListOrder", {listId, newOrder})
  }).onDismiss(() => {/* Do something here if required */})  
}

export {
  spawnIdeaDetailsDialog,
  spawnNewIdeaDialog,
  spawnNewListDialog,
  spawnListEditDialog,
}