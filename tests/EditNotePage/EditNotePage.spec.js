import { mount } from '@vue/test-utils'
import Vuetify from 'vuetify'
import { localInstance } from '../common'
import router from '../router'
import store from '../store'
import notes from '../notes'
import EditNotePage from '~/pages/edit-note/_id'

store.commit('notes/setAllNotes', notes)

describe('Edit Note Page', () => {
  const mountFunction = () => {
    return mount(EditNotePage, {
      localVue: localInstance(),
      router,
      store,
      vuetify: new Vuetify(),
    })
  }

  test('It should start a new note if no note id is give', async () => {
    router.push('/edit-note/')
    const wrapper = mountFunction()
    await wrapper.vm.$nextTick()
    expect(wrapper.vm.note).toBeNull()
  })

  test('It should edit a note if their id is give', async () => {
    router.push(`/edit-note/${notes[0].id}`)
    const wrapper = mountFunction()
    await wrapper.vm.$nextTick()
    expect(wrapper.vm.note).toStrictEqual(notes[0])
  })
})
