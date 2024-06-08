import { reactive } from 'vue'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import type { FormProps } from '../../src/runtime/components/Form.vue'
import {
  UForm,
  UInput,
  UFormField,
  URadioGroup,
  UTextarea,
  UCheckbox,
  USelect,
  USelectMenu,
  UInputMenu,
  USwitch,
  USlider
} from '#components'

export async function renderForm(options: {
  props: Partial<FormProps<any>>
  slotVars?: object
  slotTemplate: string
}) {
  const state = reactive({})

  return await mountSuspended(UForm, {
    props: {
      id: 42,
      state,
      ...options.props
    },
    slots: {
      default: {
        setup() {
          return { state, ...options.slotVars }
        },
        components: {
          UFormField,
          UForm,
          UInput,
          URadioGroup,
          UTextarea,
          UCheckbox,
          USelect,
          USelectMenu,
          UInputMenu,
          USwitch,
          USlider
        },
        template: options.slotTemplate
      }
    }
  })
}
