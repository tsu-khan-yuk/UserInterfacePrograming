import {describe, it, expect} from 'vitest';
import {mount} from '@vue/test-utils';
import reg from '../../views/RegisterView.vue'


const factory = (values = {}) => {
    return mount(reg, {
        data() {
            return {
                ...values,
            }
  
        }
    })
}


describe('Register  ', () => {

    it('renders a vue instance', () => {
      const wrapper = mount(reg)
      expect(wrapper.vm).toBeTruthy()
    })

    it('render a a-forms', () => {
        const wrapper = factory()
        expect(wrapper.find('a-form').exists()).toBe(true)
    })

    it('render a a-form-items', () => {
        const wrapper = factory()
        expect(wrapper.find('a-form-item').exists()).toBe(true)
    })

    it('render a a-selects', () => {
        const wrapper = factory()
        expect(wrapper.find('a-select').exists()).toBe(true)
    })

    it('render a a-select-options', () => {
        const wrapper = factory()
        expect(wrapper.find('a-select-option').exists()).toBe(true)
    })

})

