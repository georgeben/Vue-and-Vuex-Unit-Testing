import CartItem from '@/components/CartItem';
import { beforeEachHooks, afterEachHooks} from 'vue-unit';
import {mount} from '@vue/test-utils';
import {expect} from 'chai';

describe('CartItem.vue', () => {
    const testItem = {
        id: 1,
        name: 'Gold Sneakers',
        description: 'Grey and blue sneakers with white sole.',
        price: 3000,
        quantity: 1,
    }
    const wrapper = mount(CartItem, {
        propsData: {
             item: testItem 
        }
      })

    beforeEach(beforeEachHooks);
    it('should have the correct props', () => {
        
        expect(wrapper.props().item).to.equal(testItem);
    })
    afterEach(afterEachHooks)

    beforeEach(beforeEachHooks)
    it('should display item in cart correctly', () => {

        expect(wrapper.find('.item-name').text()).to.equal(testItem.name)
        expect(wrapper.find('.item-desc').text()).to.equal(testItem.description);
        expect(wrapper.find('.item-price').text()).to.equal('N'+testItem.price);  
        expect(wrapper.find('.item-qty ').text()).to.equal(testItem.quantity.toString());     

    })
    afterEach(afterEachHooks)

    beforeEach(beforeEachHooks);
    it('should increase quantity when the add button is pressed', () => {
        expect(wrapper.props().item.quantity).to.equal(1);
        const addButton = wrapper.find('.increase-btn');
        addButton.trigger('click');
        console.log("New quantity", wrapper.props().item.quantity)
        // expect(wrapper.find('.item-qty').text()).to.equal('2');
    })
    afterEach(afterEachHooks)
})