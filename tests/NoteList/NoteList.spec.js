import { mount } from '@vue/test-utils'
import Vuetify from 'vuetify'
import { localInstance } from '../common'
import router from '../router'
import store from '../store'
import notes from '../notes'
import NotesList from '~/components/NotesList.vue'

const localVue = localInstance()

describe('Note List', () => {
  const wrapper = mount(NotesList, {
    localVue,
    router,
    store,
    vuetify: new Vuetify(),
    propsData: {
      notes,
    },
  })

  test('it should be a vue instance', () => {
    expect(wrapper.isVueInstance).toBeTruthy()
  })

  test('Have a correct render', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  test('it should have 12 note cards', () => {
    expect(wrapper.findAll('.note-list>.note-wrapper').length).toBe(12)
  })

  test('it should not have any card if any note is passed as prop', () => {
    const localWrapper = mount(NotesList, {
      localVue,
      router,
      store,
    })

    expect(localWrapper.findAll('.note-list>.note-wrapper').length).toBe(0)
  })
})
