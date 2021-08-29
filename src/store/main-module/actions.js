import { fuseGeneral } from "src/boot/fuse"
import { findListById } from "./getters"

import { v4 as uuidv4 } from 'uuid'

export function addNewList ({commit, state}, payload) {
  // Autogenerate a RFC4122 v4 UUID here, and hope it doesn't collide with anything else
  payload.data.id = uuidv4()
  payload.data.items = []
  commit("addNewList", payload)
  
  // Force the main Fuse instance to reupdate its index
  fuseGeneral.setCollection(state.lists)
}

export function editList ({commit, state}, payload) {
  commit("editList", payload)
  
  // Force the main Fuse instance to reupdate its index
  fuseGeneral.setCollection(state.lists)
}

export function deleteList ({dispatch, commit, state, getters}, payload) {
  // Delete all images from the `images` store
  for(const idea of getters.findListById(payload.listId).items) {
    dispatch("images/deleteImage", { ideaId: idea.id }, { root: true})
  }
  commit("deleteList", payload)

  fuseGeneral.setCollection(state.lists)
}

export function addNewIdea ({ dispatch, commit, state}, payload) {
  const image = payload.idea.picFile

  // Autogenerate a RFC4122 v4 UUID here, and hope it doesn't collide with anything else
  const newId = uuidv4()
  payload.idea.id = newId
  payload.idea.starred = false
  delete payload.idea.picFile // Bye! The image should not be saved on the `main` store
  commit("addNewIdea", payload)

  if (image) 
    dispatch("images/saveImage", { newId, image }, { root: true })
  
  // This refreshes the search index on the active list
  if(payload.refreshIndex)
    commit("search/changeViewedList", findListById(state)(payload.listId), { root: true })

  // This refreshes the main search index, which also searches the nested ideas
  fuseGeneral.setCollection(state.lists)
}

export function deleteIdea ({dispatch, commit, state}, payload) {
  commit("deleteIdea", payload)
  dispatch("images/deleteImage", payload.listId, { root: true })

  commit("search/changeViewedList", findListById(state)(payload.listId), { root: true })
  fuseGeneral.setCollection(state.lists)
}

export function changeMasterListOrder ({commit, state}, payload) {
  commit("changeMasterListOrder", payload)

  // Force the main Fuse instance to reupdate its index
  fuseGeneral.setCollection(state.lists)
}

export function changeListOrder ({commit, state}, payload) {
  commit("changeListOrder", payload)

  // This refreshes the search index so that further searches respect the New Order (TM)
  commit("search/changeViewedList", findListById(state)(payload.listId), { root: true })
}