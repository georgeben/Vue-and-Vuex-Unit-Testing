import ProductItem from '@/components/ProductItem.vue';
import { beforeEachHooks, afterEachHooks} from 'vue-unit';
import {mount} from '@vue/test-utils';
import {expect} from 'chai';

describe('CartItem.vue', () => {
    const testProduct = {
        id: 1,
        name: 'Gold Sneakers',
        description: 'Grey and blue sneakers with white sole.',
        price: 3000,
        quantity: 1,
    }
    const wrapper = mount(ProductItem, {
        propsData: {
             product: testProduct 
        }
      })

    beforeEach(beforeEachHooks);
    it('should have the correct props', () => {
        expect(wrapper.props().product).to.equal(testProduct);
    })
    afterEach(afterEachHooks)

    beforeEach(beforeEachHooks)
    it('should display product correctly', () => {

        expect(wrapper.find('.product-name').text()).to.equal(testProduct.name)
        expect(wrapper.find('.product-desc').text()).to.equal(testProduct.description);
        expect(wrapper.find('.product-price').text()).to.equal('N'+testProduct.price);        

    })
    afterEach(afterEachHooks)
})