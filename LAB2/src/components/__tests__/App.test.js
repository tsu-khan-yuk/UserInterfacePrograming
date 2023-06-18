import {describe, it, expect} from 'vitest';
import { shallowMount } from '@vue/test-utils';
import MyComponent from '@/views/ApplicationView.vue';


describe('MyComponent', () => {
    it('Check if the initial number string is empty.', () => {
        const wrapper = shallowMount(MyComponent);
        expect(wrapper.vm.numberString).toBe('');
        expect(wrapper.vm.inputNumbers).toEqual([]);
    });

    it('Check if the empty number string is displayed.', async () => {
        const wrapper = shallowMount(MyComponent);
        const liElements = wrapper.findAll('li');
        expect(liElements.length).toBe(0);
    });

    it('Check if the number string is cleared after clicking the "Clear" button.', async () => {
        const wrapper = shallowMount(MyComponent);
        wrapper.find('input').setValue('1,2,3');
        await wrapper.vm.$nextTick();
        expect(wrapper.vm.numberString).toBe('1,2,3');
        const clearButton = wrapper.find('a-button[type="primary"]');
        clearButton.trigger('click');
        expect(wrapper.vm.numberString).toBe('');
    });

    it('Check if the number string is correctly split into an array of numbers.', () => {
        const wrapper = shallowMount(MyComponent);
        wrapper.vm.numberString = '1,2,3';
        expect(wrapper.vm.inputNumbers).toEqual([1, 2, 3]);
    });

    it('Check if the empty string is correctly split into an empty array.', () => {
        const wrapper = shallowMount(MyComponent);
        wrapper.vm.numberString = '';
        expect(wrapper.vm.inputNumbers).toEqual([]);
    });

    it('Check if the array of numbers is sorted correctly.', () => {
        const wrapper = shallowMount(MyComponent);
        wrapper.vm.numberString = '3,1,2';
        expect(wrapper.vm.sortedNumbers).toEqual([1, 2, 3]);
    });

    it('Check if an empty array is returned when sorting an empty array of numbers.', () => {
        const wrapper = shallowMount(MyComponent);
        wrapper.vm.numberString = '';
        expect(wrapper.vm.sortedNumbers).toEqual([]);
    });

    it('Check if the number string is cleared when calling the "clearNumbers" method.', () => {
        const wrapper = shallowMount(MyComponent);
        wrapper.vm.numberString = '1,2,3';
        expect(wrapper.vm.numberString).toBe('1,2,3');
        wrapper.vm.clearNumbers();
        expect(wrapper.vm.numberString).toBe('');
    });
});
