import { findListById } from "./getters"

export function changeListOrder ({commit, state}, payload) {
  commit("changeListOrder", payload)

  // This refreshes the search index so that further searches respect the New Order (TM)
  commit("search/changeViewedList", findListById(state)(payload.listId), { root: true })
}