import { mount } from '@vue/test-utils'
import Vuetify from 'vuetify'
import { localInstance } from '../common'
import router from '../router'
import store from '../store'
import notes from '../notes'
import HomePage from '../../pages/index'
import NotesList from '~/components/NotesList'
import NotesListColor from '~/components/NotesListColor'

store.commit('notes/setAllNotes', notes)

describe('Home Page', () => {
  const localVue = localInstance()
  const wrapper = mount(HomePage, {
    localVue,
    store,
    vuetify: new Vuetify(),
    router,
  })

  test('it should display notes from store', () => {
    const notesList = wrapper.findComponent(NotesList)
    expect(notesList.exists()).toBeTruthy()
    expect(notesList.props('notes')).toStrictEqual(notes)
    expect(wrapper.findComponent(NotesListColor).exists()).toBeFalsy()
  })

  test('it should display notes in color style if display settings is set to color', async () => {
    store.commit('settings/changeSortType', 'color')
    await wrapper.vm.$nextTick()
    const notesListColor = wrapper.findComponent(NotesListColor)
    expect(notesListColor.exists()).toBeTruthy()
    expect(notesListColor.props('notes')).toStrictEqual(notes)
    expect(wrapper.findComponent(NotesList).exists()).toBeFalsy()
  })

  describe('ToolBar', function () {
    const toolbar = wrapper.findComponent({ name: 'VAppBar' })
    const menus = toolbar.findAllComponents({ name: 'VMenu' })

    test('it should have two menus', () => {
      expect(menus.length).toBe(2)
    })

    test('The first menu first item should change sort type', async () => {
      store.commit('settings/changeSortType', 'color')
      await menus.at(0).findComponent({ name: 'VBtn' }).trigger('click')
      await wrapper.vm.$nextTick()
      const menuItems = menus.at(0).findAllComponents({ name: 'VListItem' })
      expect(menuItems.length).toBe(2)
      await menuItems.at(0).trigger('click')
      expect(store.state.settings.selecteds.sortType).toBe('date')
    })

    test('The first menu second item should change sort type', async () => {
      store.commit('settings/changeSortType', 'date')
      await menus.at(0).findComponent({ name: 'VBtn' }).trigger('click')
      await wrapper.vm.$nextTick()
      const menuItems = menus.at(0).findAllComponents({ name: 'VListItem' })
      expect(menuItems.length).toBe(2)
      await menuItems.at(1).trigger('click')
      expect(store.state.settings.selecteds.sortType).toBe('color')
    })
  })
})
