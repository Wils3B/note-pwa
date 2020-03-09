import { mount } from '@vue/test-utils'
import { localInstance } from '../common'
import router from '../router'
import PlusBtn from '~/components/PlusBtn.vue'

const localVue = localInstance()

describe('Plus Button', () => {
  const wrapper = mount(PlusBtn, {
    localVue,
    router
  })

  test('it should be a vue instance named PlusButton', () => {
    expect(wrapper.isVueInstance).toBeTruthy()
  })

  test('Have a correct render', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  test('it should have correct icon', () => {
    expect(wrapper.find('i.v-icon').text()).toBe('add')
  })

  test('it should be a link to edit new note', () => {
    expect(wrapper.attributes('href')).toBe('#/edit-note/new')
  })
})
