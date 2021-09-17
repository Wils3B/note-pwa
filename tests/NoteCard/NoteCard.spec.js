import { mount } from '@vue/test-utils'
import Vuetify from 'vuetify'
import { localInstance } from '../common'
import router from '../router'
import store from '../store'
import notes from '../notes'
import NoteCard from '~/components/NoteCard.vue'

const localVue = localInstance()

describe('Note Card', () => {
  const wrapper = mount(NoteCard, {
    localVue,
    router,
    store,
    vuetify: new Vuetify(),
    propsData: {
      note: notes[0],
    },
  })

  test('it should be a vue instance', () => {
    expect(wrapper.isVueInstance).toBeTruthy()
  })

  test('Have a correct render', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  test('it should have good display', () => {
    expect(wrapper.find('.v-image').exists()).toBe(true)
    expect(wrapper.find('.main-text').text()).toBe('Note 1583267092854')
    expect(wrapper.find('.footer-text').text()).toBe('2020-03-03')
  })

  test('it should be a link to note details', () => {
    expect(wrapper.attributes('href')).toBe(`#/note-detail/${notes[0].id}`)
  })

  test('it should have good display', () => {
    expect(wrapper.find('.v-image').exists()).toBe(true)
    expect(wrapper.find('.main-text').text()).toBe('Note 1583267092854')
    expect(wrapper.find('.footer-text').text()).toBe('2020-03-03')
  })
})
