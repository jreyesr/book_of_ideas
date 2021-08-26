<template>
  <q-dialog ref="dialogRef" @hide="onDialogHide">
    <q-card class="q-dialog-plugin wider-card">
      <q-slide-transition>
        <q-img v-if="idea.picUrl != ''" :src="idea.picUrl" height="250px" fit="cover">
          <template v-slot:error>
            <div class="absolute-full flex flex-center bg-negative text-white">
              Cannot load image
            </div>
          </template>
        </q-img>
      </q-slide-transition>
      <q-card-section>
        <div class="text-h6">{{ idea.name }}</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <p v-for="line in linesToArray(idea.description)" :key="line">{{ line }}</p>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn color="primary" label="Go there!" icon="launch" @click="openURL(idea.url)"/>
        <!-- <q-btn color="primary" label="OK" @click="onOKClick" /> -->
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
  max-height: 200px;
}
</style>

<script>
import { useDialogPluginComponent, openURL } from 'quasar'
import { linesToArray } from 'src/utils/strings'


export default {
  props: {
    idea: Object
  },

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

    return {
      dialogRef,
      onDialogHide,

      onOKClick: onDialogOK,
      openURL,
      linesToArray
    }
  }
}
</script>