import localForage from 'localforage'
import { store } from 'quasar/wrappers'
import { createStore } from 'vuex'
import VuexPersistence from 'vuex-persist'

import main from './main-module'
import search from './search-module'
import images from './images-module'
import tour from './tour-module'

const persistence = new VuexPersistence({
  storage: localForage,
  asyncStorage: true,
  // The JSON.parse(JSON.stringify(x)) dance converts the weird Vue Proxy objects into plain JSON objects
  saveState: (key, state, storage) => storage.setItem(key, JSON.parse(JSON.stringify(state))),
  //restoreState: (key, storage) => storage.getItem(key), // Not required, the default is OK
  modules: ["main", "tour"]
})
const imagesPersistence = new VuexPersistence({
  storage: localForage,
  key: "vuex-images",
  asyncStorage: true,
  saveState: (key, state, storage) => {
    storage.setItem(key, state)
  },
  reducer: (state) => ({images: {...state.images.images}}),
})

export default store(function (/* { ssrContext } */) {
  const Store = createStore({
    modules: {
      main,
      search,
      images,
      tour
    },
    plugins: [persistence.plugin, imagesPersistence.plugin],

    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
    strict: process.env.DEBUGGING
  })

  return Store
})
