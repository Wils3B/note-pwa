import { mount } from '@vue/test-utils'
import { localInstance } from '../common'
import router from '../router'
import store from '../store'
import NotesListColor from '~/components/NotesListColor.vue'

const localVue = localInstance()

describe('Plus Button', () => {
  const wrapper = mount(NotesListColor, {
    localVue,
    router,
    store
  })

  test('it should be a vue instance', () => {
    expect(wrapper.isVueInstance).toBeTruthy()
  })

  test('Have a correct render', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
