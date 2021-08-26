import NewIdeaDialog from 'src/components/NewIdeaDialog.vue'
import IdeaDetailsDialog from 'src/components/IdeaDetailsDialog.vue'

const spawnNewIdeaDialog = ($q) => {
  $q.dialog({
    component: NewIdeaDialog,
    persistent: true
  }).onOk((data) => {
    console.log(data)
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