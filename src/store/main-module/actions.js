import { fuseGeneral } from "src/boot/fuse"
import { findListById } from "./getters"

export function addNewList ({commit, state}, payload) {
  commit("addNewList", payload)
  
  // Force the main Fuse instance to reupdate its index
  fuseGeneral.setCollection(state.lists)
}

export function deleteList ({commit, state}, payload) {
  commit("deleteList", payload)

  fuseGeneral.setCollection(state.lists)
}

export function addNewIdea ({commit, state}, payload) {
  commit("addNewIdea", payload)

  // This refreshes the search index on the active list
  if(payload.refreshIndex)
    commit("search/changeViewedList", findListById(state)(payload.listId), { root: true })

  // This refreshes the main search index, which also searches the nested ideas
  fuseGeneral.setCollection(state.lists)
}

export function changeListOrder ({commit, state}, payload) {
  commit("changeListOrder", payload)

  // This refreshes the search index so that further searches respect the New Order (TM)
  commit("search/changeViewedList", findListById(state)(payload.listId), { root: true })
}