import {mount} from '@vue/test-utils';
import Login from '@/views/Login.vue';
import {expect} from 'chai';

describe('Login', () => {
    const wrapper = mount(Login);

    it('should not display an error message when a username is entered', () => {
        expect(wrapper.find('.error').exists()).to.be.false
        wrapper.setData({email: 'msdcconnect@gmail.com'})
        const button = wrapper.find('button');
        button.trigger('click');
        expect(wrapper.find('.error').exists()).to.be.false
    })
})