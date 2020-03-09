import { mount } from '@vue/test-utils'
import { localInstance } from '../common'
import router from '../router'
import store from '../store'
import notes from '../notes'
import NotesListColor from '~/components/NotesListColor.vue'

const localVue = localInstance()

describe('Plus Button', () => {
  const wrapper = mount(NotesListColor, {
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

  describe('note grouping', () => {
    const groups = wrapper.findAll('.v-expansion-panel')

    test('it should have 6 group by color', () => {
      expect(groups.length).toBe(6)
    })

    test('each group should be in correct order and have correct number of notes', () => {
      const colors = wrapper.vm.$store.state.colors
        .map((color) => {
          let count = 0
          notes.forEach((n) => (count += n.color === color ? 1 : 0))
          return { color, count }
        })
        .sort((a, b) => a.count > b.count)
      colors.splice(colors.find((color) => color.count === 0))

      colors.forEach((color, index) => {
        expect(groups.at(index).text()).toBe(
          `${color.color} ( ${color.count} )`
        )
      })
    })

    test('it should not have any group if no note is passed', () => {
      const localWrapper = mount(NotesListColor, {
        localVue,
        router,
        store
      })
      expect(localWrapper.findAll('.v-expansion-panel').length).toBe(0)
    })
  })
})
