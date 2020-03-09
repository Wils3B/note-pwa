import Vuex from 'vuex'
import { state } from '~/store/index'
import {
  state as notesState,
  mutations as notesMut,
  actions as notesAct,
  getters as notesGet
} from '~/store/notes'
import {
  state as settingsState,
  mutations as settingsMut
} from '~/store/settings'

export default new Vuex.Store({
  state,
  modules: {
    settings: {
      namespaced: true,
      state: settingsState,
      mutations: settingsMut
    },
    notes: {
      namespaced: true,
      state: notesState,
      mutations: notesMut,
      actions: notesAct,
      getters: notesGet
    }
  }
})
