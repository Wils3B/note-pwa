import Vue from 'vue'
import Vuex from 'vuex'
import Vuetify from 'vuetify'
import VueRouter from 'vue-router'
import { createLocalVue } from '@vue/test-utils'

Vue.use(Vuex)
Vue.use(Vuetify)
Vue.use(VueRouter)

export function localInstance() {
  const instance = createLocalVue()
  instance.use(Vuex)
  instance.use(Vuetify)
  instance.use(VueRouter)
  return instance
}
