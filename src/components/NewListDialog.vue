<template>
  <q-dialog ref="dialogRef" @hide="onDialogHide">
    <q-card class="q-dialog-plugin wider-card">
      <q-card-section>
        <div class="text-h6">New list</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <q-input 
          ref="nameRef" 
          v-model="name" 
          label="Name" 
          autofocus 
          hint="Required" 
          :rules="[val => !!val || 'Field is required']"
        />
        <q-input 
          ref="descriptionRef" 
          v-model="description" 
          label="Description" 
          type="textarea"
          rows="4"
          hint="Required" 
          :rules="[val => !!val || 'Field is required']"
        />
      </q-card-section>

      <q-card-actions align="right">
        <q-btn color="grey" label="Cancel" @click="onDialogCancel"/>
        <q-btn color="primary" label="OK" @click="onSubmit"/>
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
import { ref, toRef } from 'vue'
import { useDialogPluginComponent } from 'quasar'

export default {

  props: {
    list: {
      type: Object,
      optional: true,
      default: () => ({})
    }
  },
  emits: [
    ...useDialogPluginComponent.emits
  ],

  setup (props) {
    const { dialogRef, onDialogHide, onDialogOK, onDialogCancel } = useDialogPluginComponent()

    const list = toRef(props, "list").value // will be undefined if no `list` prop was passed
    
    // x?.prop ?? '' works whether or not x is defined, and sets a default value of ''
    const name = ref(list?.name ?? ''), nameRef = ref(null)
    const description = ref(list?.description ?? ''), descriptionRef = ref(null)

    const onValidSubmit = () => {
      const data = {
        name: name.value,
        description: description.value,
        // id and items will be overwritten in the mutation anyways
        id: list?.id,
        items: list?.items,
      }
      onDialogOK(data)
    }

    const onSubmit = () => {
      nameRef.value.validate()
      descriptionRef.value.validate()

      if (nameRef.value.hasError || descriptionRef.value.hasError) {
        // form has error
      } else {
        onValidSubmit()
      }
    }

    return {
      dialogRef,
      onDialogHide,
      onDialogCancel,

      onSubmit,
      
      name, nameRef,
      description, descriptionRef,
      /* url, urlRef,
      picUrl, picUrlRef, */
    }
  }
}
</script>

<style lang="scss" scoped>
.wider-card {
  width: 100%;
  max-width: 600px;
}
</style>