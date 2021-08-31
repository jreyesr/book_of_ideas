<template>
  <q-dialog ref="dialogRef" @hide="onDialogHide">
    <q-card class="q-dialog-plugin wider-card">
      <q-slide-transition>
        <q-img v-show="picLink" :src="picLink" class="short-image" fit="cover">
          <template #error>
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
        <q-input 
          ref="urlRef" 
          v-model="url" 
          label="Idea URL"
          hint="Required"
          type="url"
          :rules="[
            val => !!val || 'Field is required',
            val => isValidUrl(val) || 'Must be a valid URL'
          ]"
        />

        <q-option-group
        v-model="picSource"
          class="q-pt-md"
          dense
          inline
          :options="[
            { label: 'Online image', value: 'url' },
            { label: 'Upload image', value: 'upload' },
            { label: 'No image', value: 'none' }
          ]"
          color="primary"
        />
        <q-slide-transition>
          <q-input 
            v-show="picSource === 'url'"
            ref="picUrlRef" 
            v-model="picUrl" 
            label="Picture URL" 
            clearable 
            clear-icon="close"
            :rules="[
              val => !val || isValidUrl(val) || 'Must be a valid URL'
            ]"
          />
        </q-slide-transition>
        <q-slide-transition>
          <q-file
            v-if="picSource === 'upload'"
            ref="picFileRef"
            v-model="picFile"
            label="Picture"
            accept="image/*"
            clearable
            clear-icon="close"
          >
            <template #before>
              <q-icon name="file_upload"/>
            </template>
          </q-file>
        </q-slide-transition>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn color="grey" label="Cancel" @click="onDialogCancel"/>
        <q-btn color="primary" label="OK" @click="onSubmit"/>
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
import { ref, computed } from 'vue'
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

    const picSource = ref('none')
    const picLink = computed(() => {
      if (picSource.value === 'none') return ''
      else if (picSource.value === 'url') return picUrl.value
      else if (picSource.value === 'upload' && picFile.value) return URL.createObjectURL(picFile.value)
      else return null
    })

    const onValidSubmit = () => {
      const data = {
        name: name.value,
        description: description.value,
        url: url.value,
        picUrl: picSource.value === 'url' ? picUrl.value : '',
        picFile: picSource.value === 'upload' ? picFile.value : null
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
      picSource,
      picUrl, picUrlRef,
      picFile, picFileRef,

      isValidUrl,
      picLink
    }
  }
}
</script>

<style lang="scss" scoped>
.wider-card {
  width: 100%;
  max-width: 600px;
}

.short-image {
  max-height: 130px;
}
</style>