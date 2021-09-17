import { mount } from '@vue/test-utils'
import Vuetify from 'vuetify'
import { localInstance } from '../common'
import router from '../router'
import store from '../store'
import notes from '../notes'
import NoteDetailsPage from '~/pages/note-detail/_id'

store.commit('notes/setAllNotes', notes)

describe('Note Details Page', () => {
  const mountFunction = (options = {}) => {
    return mount(NoteDetailsPage, {
      localVue: localInstance(),
      router,
      store,
      vuetify: new Vuetify(),
      ...options,
    })
  }

  test('it should redirect to the home page if no note id is given', async () => {
    router.push('/note-detail/')
    const wrapper = mountFunction()
    await wrapper.vm.$nextTick()
    expect(router.currentRoute.name).toBe('index')
  })

  test('it should stay on', async () => {
    router.push(`/note-detail/${notes[0].id}`)
    const wrapper = mountFunction()
    await wrapper.vm.$nextTick()
    expect(router.currentRoute.name).toBe('note-detail-id')
  })
})
