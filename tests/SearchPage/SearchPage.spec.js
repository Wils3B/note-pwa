import { mount } from '@vue/test-utils'
import Vuetify from 'vuetify'
import { localInstance } from '../common'
import router from '../router'
import store from '../store'
import notes from '../notes'
import SearchPage from '~/pages/search'
import NotesList from '~/components/NotesList'

store.commit('notes/setAllNotes', notes)

describe('Search Page', () => {
  const wrapper = mount(SearchPage, {
    localVue: localInstance(),
    router,
    store,
    vuetify: new Vuetify(),
  })
  const searchTextField = wrapper.findComponent({ name: 'VTextField' })
  const notesList = wrapper.findComponent(NotesList)
  const noResultWrapper = wrapper.find('.no-results')

  test('By default it should display no result', () => {
    expect(notesList.isVisible()).toBeFalsy()
    expect(noResultWrapper.isVisible()).toBeTruthy()
  })

  test('it should filter notes and display it when user is typing', async () => {
    await searchTextField.vm.$emit('input', 'Lorem')
    expect(wrapper.vm.results).toStrictEqual(notes.filter((note) => note.content.includes('Lorem')))
    expect(notesList.isVisible()).toBeTruthy()
    expect(notesList.props('notes')).toStrictEqual(wrapper.vm.results)
    expect(noResultWrapper.isVisible()).toBeFalsy()
  })

  test('it should display no result if text entered by user is empty', async () => {
    await searchTextField.vm.$emit('input', 'Lorem')
    await searchTextField.vm.$emit('input', '')
    expect(wrapper.vm.results).toStrictEqual([])
    expect(notesList.isVisible()).toBeFalsy()
    expect(notesList.props('notes')).toStrictEqual(wrapper.vm.results)
    expect(noResultWrapper.isVisible()).toBeTruthy()
  })
})
