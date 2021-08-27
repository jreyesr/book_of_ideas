import NewIdeaDialog from 'src/components/NewIdeaDialog.vue'
import IdeaDetailsDialog from 'src/components/IdeaDetailsDialog.vue'
import ListEditDialog from 'src/components/ListEditDialog.vue'

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
    store.commit("main/changeListOrder", {listId, newOrder})
  }).onDismiss(() => {/* Do something here if required */})  
}

export {
  spawnIdeaDetailsDialog,
  spawnNewIdeaDialog,
  spawnListEditDialog,
}