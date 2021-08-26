import NewIdeaDialog from 'src/components/NewIdeaDialog.vue'
import IdeaDetailsDialog from 'src/components/IdeaDetailsDialog.vue'

const spawnNewIdeaDialog = ($q, listId) => {
  $q.dialog({
    component: NewIdeaDialog,
    componentProps: {listId},
    persistent: true
  }).onOk(({data, listId}) => {
    console.log(listId, data) // TODO: commit a mutation adding `data` to list `listId`
  }).onDismiss(() => {/* Do something here if required */})  
}

const spawnIdeaDetailsDialog = ($q, idea) => {
  $q.dialog({
    component: IdeaDetailsDialog,
    componentProps: { idea },
  }).onDismiss(() => {/* Do something here if required */})
}

export {
  spawnIdeaDetailsDialog,
  spawnNewIdeaDialog,
}