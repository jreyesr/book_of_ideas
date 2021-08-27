import { findListById } from "./getters"

export function addNewIdea ({commit, state}, payload) {
  commit("addNewIdea", payload)

  // This refreshes the search index on the active list
  if(payload.refreshIndex)
    commit("search/changeViewedList", findListById(state)(payload.listId), { root: true })
}

export function changeListOrder ({commit, state}, payload) {
  commit("changeListOrder", payload)

  // This refreshes the search index so that further searches respect the New Order (TM)
  commit("search/changeViewedList", findListById(state)(payload.listId), { root: true })
}