<template>
  <q-dialog ref="dialogRef" @hide="onDialogHide">
    <q-card class="q-dialog-plugin">
      <q-card-section>
        <div class="text-h6">New idea</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <q-input label="Name" ref="nameRef" v-model="name" autofocus :rules="[val => !!val || 'Field is required']"/>
        <q-input label="Description" ref="descriptionRef" type="textarea" v-model="description" :rules="[val => !!val || 'Field is required']"/>
        <q-input label="Idea URL" ref="urlRef" v-model="url" :rules="[val => !!val || 'Field is required']"/>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn color="grey" label="Cancel" @click="onDialogCancel"/>
        <q-btn color="primary" label="OK" @click="onSubmit"/>
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
import { ref } from 'vue'
import { useDialogPluginComponent } from 'quasar'

export default {
  emits: [
    ...useDialogPluginComponent.emits
  ],

  setup () {
    const { dialogRef, onDialogHide, onDialogOK, onDialogCancel } = useDialogPluginComponent()
    // dialogRef      - Vue ref to be applied to QDialog
    // onDialogHide   - Function to be used as handler for @hide on QDialog
    // onDialogOK     - Function to call to settle dialog with "ok" outcome
    //                    example: onDialogOK() - no payload
    //                    example: onDialogOK({ /*.../* }) - with payload
    // onDialogCancel - Function to call to settle dialog with "cancel" outcome

    const name = ref('')
    const nameRef = ref(null)
    const description = ref('')
    const descriptionRef = ref(null)
    const url = ref('')
    const urlRef = ref(null)

    const onValidSubmit = () => {
      const data = {
        name: name.value,
        description: description.value,
        url: url.value
      }
      onDialogOK(data)
    }

    const onSubmit = () => {
      nameRef.value.validate()
      descriptionRef.value.validate()
      urlRef.value.validate()

      if (nameRef.value.hasError || descriptionRef.value.hasError || urlRef.value.hasError) {
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
      
      name,
      nameRef,
      description,
      descriptionRef,
      url,
      urlRef,
    }
  }
}
</script>