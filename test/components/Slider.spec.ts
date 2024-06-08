import { describe, it, expect, test } from 'vitest'
import Slider, { type SliderProps } from '../../src/runtime/components/Slider.vue'
import ComponentRender from '../component-render'
import theme from '#build/ui/slider'
import { flushPromises, mount } from '@vue/test-utils'
import { renderForm } from '../utils/form'

describe('Slider', () => {
  const sizes = Object.keys(theme.variants.size) as any
  const colors = Object.keys(theme.variants.color) as any

  it.each([
    // Props
    ['with defaultValue', { props: { defaultValue: 10 } }],
    ['with multiple thumbs', { props: { defaultValue: [0, 10] } }],
    ['with name', { props: { name: 'custom-name' } }],
    ['with disabled', { props: { disabled: true } }],
    ['with inverted', { props: { inverted: true } }],
    ['with orientation vertical', { props: { orientation: 'vertical' as const } }],
    ['with min max step', { props: { min: 4, max: 12, step: 2 } }],
    ['with min steps between thumbs', { props: { defaultValue: [0, 30], minStepsBetweenThumbs: 30 } }],
    ...sizes.map((size: string) => [`with size ${size}`, { props: { size } }]),
    ...colors.map((color: string) => [`with color ${color}`, { props: { color } }]),
    ['with class', { props: { class: 'w-48' } }],
    ['with ui', { props: { ui: { track: 'bg-gray-100 dark:bg-gray-800' } } }]
  ])('renders %s correctly', async (nameOrHtml: string, options: { props?: SliderProps }) => {
    const html = await ComponentRender(nameOrHtml, options, Slider)
    expect(html).toMatchSnapshot()
  })

  describe('emits', () => {
    test('update:modelValue event', async () => {
      const wrapper = mount(Slider)

      const input = wrapper.findComponent({ name: 'SliderRoot' })
      await input.setValue(1)
      await flushPromises()

      expect(wrapper.emitted()).toMatchObject({ 'update:modelValue': [[1]] })
    })

    test('change event', async () => {
      const wrapper = mount(Slider)

      const input = wrapper.findComponent({ name: 'SliderRoot' })
      await input.setValue(1)
      await flushPromises()

      expect(wrapper.emitted()).toMatchObject({ change: [[{ type: 'change' }]] })
    })
  })

  describe('form integration', async () => {
    async function createForm(validateOn?: string[]) {
      const wrapper = await renderForm({
        props: {
          validateOn,
          validateOnInputDelay: 0,
          async validate(state: any) {
            if (state.value < 20)
              return [{ name: 'value', message: 'Error message' }]
            return []
          }
        },
        slotTemplate: `
        <UFormField name="value">
          <USlider v-model="state.value" />
        </UFormField>
        `
      })
      const input = wrapper.findComponent({ name: 'SliderRoot' })
      return {
        wrapper,
        input
      }
    }

    test('validate on change works', async () => {
      const { input, wrapper } = await createForm(['change'])
      await input.setValue(10)
      await flushPromises()
      expect(wrapper.text()).toContain('Error message')

      await input.setValue(40)
      await flushPromises()
      expect(wrapper.text()).not.toContain('Error message')
    })

    test('validate on input works', async () => {
      const { input, wrapper } = await createForm(['input'])
      await input.setValue(10)
      await flushPromises()
      expect(wrapper.text()).toContain('Error message')

      await input.setValue(40)
      await flushPromises()
      expect(wrapper.text()).not.toContain('Error message')
    })
  })
})
