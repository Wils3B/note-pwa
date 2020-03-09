import { mount } from '@vue/test-utils'
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
    propsData: {
      notes
    }
  })

  test('it should be a vue instance', () => {
    expect(wrapper.isVueInstance).toBeTruthy()
  })

  test('Have a correct render', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
