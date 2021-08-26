import { boot } from 'quasar/wrappers'
import Fuse from 'fuse.js'

const generalOptions = {
  // isCaseSensitive: false,
  // includeScore: true,
  shouldSort: false,
  // includeMatches: false,
  // findAllMatches: false,
  // minMatchCharLength: 1,
  // location: 0,
  threshold: 0.4,
  // distance: 100,
  // useExtendedSearch: false,
  // ignoreLocation: false,
  // ignoreFieldNorm: false,
  keys: [
    "name",
    "description",
    "items.name",
    "items.description",
    "items.url",
  ]
};

const listOptions = {
  // isCaseSensitive: false,
  // includeScore: false,
  shouldSort: false,
  // includeMatches: false,
  // findAllMatches: false,
  // minMatchCharLength: 1,
  // location: 0,
  // threshold: 0.6,
  // distance: 100,
  // useExtendedSearch: false,
  // ignoreLocation: false,
  // ignoreFieldNorm: false,
  keys: [
    "name",
    "description",
    "url",
  ]
};

// Create two instances of Fuse.js that can be imported on other components
const fuseGeneral = new Fuse([], generalOptions)
const fuseList = new Fuse([], listOptions)

export default boot(({store}) => {
  fuseGeneral.setCollection(store.state.main.lists)
  fuseList.setCollection(store.state.search.currentList ?? [])
})

export { fuseGeneral, fuseList }