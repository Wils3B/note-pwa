import { mount } from '@vue/test-utils'
import Vuetify from 'vuetify'
import { localInstance } from '../common'
import router from '../router'
import store from '../store'
import SettingsPage from '~/pages/settings'

describe('Settings Pages', () => {
  const wrapper = mount(SettingsPage, {
    localVue: localInstance(),
    router,
    store,
    vuetify: new Vuetify(),
  })
  const selects = wrapper.findAllComponents({ name: 'VSelect' })
  const saveButton = wrapper.findComponent({ name: 'VBtn' })

  test('it should display 4 select', () => {
    expect(selects.length).toBe(4)
  })

  test('sort type setting', async () => {
    expect(selects.at(0).vm.allItems).toStrictEqual(store.state.settings.groups.sortTypes)
    expect(selects.at(0).vm.selectedItems).toStrictEqual(['date'])
    await selects.at(0).vm.$emit('input', 'color')
    await saveButton.trigger('click')
    expect(selects.at(0).vm.selectedItems).toStrictEqual(['color'])
  })

  test('default color setting', async () => {
    expect(selects.at(1).vm.allItems).toStrictEqual(store.state.colors)
    expect(selects.at(1).vm.selectedItems).toStrictEqual(['white'])
    await selects.at(1).vm.$emit('input', 'yellow')
    await saveButton.trigger('click')
    expect(selects.at(1).vm.selectedItems).toStrictEqual(['yellow'])
  })

  test('font setting', async () => {
    expect(selects.at(2).vm.allItems).toStrictEqual(store.state.settings.groups.fonts)
    expect(selects.at(2).vm.selectedItems).toStrictEqual(['Amita'])
    await selects.at(2).vm.$emit('input', 'Kalam')
    await saveButton.trigger('click')
    expect(selects.at(2).vm.selectedItems).toStrictEqual(['Kalam'])
  })

  test('autosave setting', async () => {
    expect(selects.at(3).vm.allItems).toStrictEqual(store.state.settings.groups.autosave)
    expect(selects.at(3).vm.selectedItems).toStrictEqual(['2min'])
    await selects.at(3).vm.$emit('input', '20s')
    await saveButton.trigger('click')
    expect(selects.at(3).vm.selectedItems).toStrictEqual(['20s'])
  })
})
