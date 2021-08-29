<template>
  <q-dialog ref="dialogRef" @hide="onDialogHide">
    <q-card class="q-dialog-plugin wider-card">
      <q-slide-transition>
        <q-img v-show="picUrl" :src="picUrl" class="short-image" fit="cover">
          <template v-slot:error>
            <div class="absolute-full flex flex-center bg-negative text-white">
              Cannot load image
            </div>
          </template>
        </q-img>
      </q-slide-transition>

      <q-card-section>
        <div class="text-h6">New idea</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <q-input 
          label="Name" 
          ref="nameRef" 
          v-model="name" 
          autofocus 
          hint="Required" 
          :rules="[val => !!val || 'Field is required']"
        />
        <q-input 
          label="Description" 
          ref="descriptionRef" 
          type="textarea" 
          rows="4"
          hint="Required"
          v-model="description" 
          :rules="[val => !!val || 'Field is required']"
        />
        <q-input 
          label="Idea URL" 
          ref="urlRef" 
          hint="Required"
          v-model="url"
          type="url"
          :rules="[
            val => !!val || 'Field is required',
            val => isValidUrl(val) || 'Must be a valid URL'
          ]"
        />
        <q-input 
          label="Picture URL" 
          ref="picUrlRef" 
          v-model="picUrl" 
          clearable 
          clear-icon="close"
        />
        <q-file
          label="Picture"
          ref="picFileRef"
          v-model="picFile"
          clearable
          clear-icon="close"
        />
      </q-card-section>

      <q-card-actions align="right">
        <q-btn color="grey" label="Cancel" @click="onDialogCancel"/>
        <q-btn color="primary" label="OK" @click="onSubmit"/>
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<style lang="scss">
.wider-card {
  width: 100%;
  max-width: 600px;
}

.short-image {
  max-height: 130px;
}
</style>

<script>
import { ref } from 'vue'
import { useDialogPluginComponent } from 'quasar'
import { isValidUrl } from 'src/utils/strings'

export default {
  emits: [
    ...useDialogPluginComponent.emits
  ],

  setup (props) {
    const { dialogRef, onDialogHide, onDialogOK, onDialogCancel } = useDialogPluginComponent()
    
    const name = ref(''), nameRef = ref(null)
    const description = ref(''), descriptionRef = ref(null)
    const url = ref(''), urlRef = ref(null)
    const picUrl = ref(''), picUrlRef = ref(null)
    const picFile = ref(null), picFileRef = ref(null)

    const onValidSubmit = () => {
      const data = {
        name: name.value,
        description: description.value,
        url: url.value,
        picUrl: picUrl.value,
        picFile: picFile.value
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
      
      name, nameRef,
      description, descriptionRef,
      url, urlRef,
      picUrl, picUrlRef,
      picFile, picFileRef,

      isValidUrl,
    }
  }
}
</script>