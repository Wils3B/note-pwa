import { mount } from '@vue/test-utils'
import { localInstance } from '../common'
import router from '../router'
import store from '../store'
import NotesListColor from '~/components/NotesListColor.vue'

const localVue = localInstance()

const notes = [
  {
    createdAt: '2020-03-03T20:24:52.854Z',
    modifiedAt: '2020-03-03T20:24:52.854Z',
    content: 'note 1583267092854',
    voices: [],
    color: 'white',
    id: 1583267092854
  },
  {
    createdAt: '2020-03-03T20:25:33.077Z',
    modifiedAt: '2020-03-03T20:25:33.077Z',
    content: 'note 1583267133077',
    voices: [],
    color: 'purple',
    id: 1583267133077
  },
  {
    createdAt: '2020-03-03T20:25:41.644Z',
    modifiedAt: '2020-03-03T20:25:41.644Z',
    content: 'note 1583267075908',
    voices: [],
    color: 'red',
    id: 1583267075908
  },
  {
    createdAt: '2020-03-03T20:27:18.614Z',
    modifiedAt: '2020-03-03T20:27:18.614Z',
    content: 'note 1583266765730',
    voices: [],
    color: 'green',
    id: 1583266765730
  },
  {
    createdAt: '2020-03-03T20:38:16.948Z',
    modifiedAt: '2020-03-03T20:38:16.948Z',
    content: 'note 1583267808194',
    voices: [],
    color: 'yellow',
    id: 1583267808194
  },
  {
    createdAt: '2020-03-04T08:42:40.827Z',
    modifiedAt: '2020-03-04T08:42:40.827Z',
    content: 'note 1583311360827',
    voices: [],
    color: 'white',
    id: 1583311360827
  },
  {
    createdAt: '2020-03-04T08:49:54.631Z',
    modifiedAt: '2020-03-04T08:49:54.631Z',
    content: 'note 1583311794631',
    voices: [],
    color: 'yellow',
    id: 1583311794631
  },
  {
    createdAt: '2020-03-04T09:17:13.510Z',
    modifiedAt: '2020-03-04T09:17:13.510Z',
    content: 'note 1583313433510',
    voices: [],
    color: 'yellow',
    id: 1583313433510
  },
  {
    createdAt: '2020-03-06T06:00:32.437Z',
    modifiedAt: '2020-03-06T06:00:32.437Z',
    content: 'note 1583474432437',
    voices: [],
    color: 'green',
    id: 1583474432437
  },
  {
    createdAt: '2020-03-06T07:06:49.029Z',
    modifiedAt: '2020-03-06T07:06:49.029Z',
    content: 'note 1583478409029',
    voices: [],
    color: 'blue',
    id: 1583478409029
  },
  {
    createdAt: '2020-03-06T07:10:44.306Z',
    modifiedAt: '2020-03-06T07:10:44.306Z',
    content: 'note 1583478644306',
    voices: [],
    color: 'yellow',
    id: 1583478644306
  },
  {
    createdAt: '2020-03-08T07:39:42.241Z',
    modifiedAt: '2020-03-08T07:39:42.241Z',
    content: 'note 1583311559736',
    voices: [],
    color: 'blue',
    id: 1583311559736
  }
]

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
