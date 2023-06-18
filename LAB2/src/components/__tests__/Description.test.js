import {describe, it, expect} from 'vitest';
import {mount} from '@vue/test-utils';
import desc from '../../views/DescriptionView.vue'


const factory = (values = {}) => {
  return mount(desc, {
      data() {
          return {
              ...values,
          }

      }
  })
}

describe('Login ', ()=> {
    it('renders a vue instance', () => {
        const wrapper = mount(desc)
        expect(wrapper.vm).toBeTruthy()
    })
    it('render a img', () => {
        const wrapper = factory()
        expect(wrapper.find('img').exists()).toBe(true)
    })
})
