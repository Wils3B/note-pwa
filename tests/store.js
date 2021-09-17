import { Store } from 'vuex'
import { state } from '~/store/index'
import {
  state as notesState,
  mutations as notesMutations,
  actions as notesActions,
  getters as notesGetters,
} from '~/store/notes'
import { state as settingsState, mutations as settingsMutations } from '~/store/settings'

export default new Store({
  state,
  modules: {
    settings: {
      namespaced: true,
      state: settingsState,
      mutations: settingsMutations,
    },
    notes: {
      namespaced: true,
      state: notesState,
      mutations: notesMutations,
      actions: notesActions,
      getters: notesGetters,
    },
  },
})
