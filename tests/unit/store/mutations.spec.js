import {mutations} from '@/store/store';
import {beforeEachHooks, afterEachHooks} from 'vue-unit';
import {expect} from 'chai';
import {$} from 'chai-jquery'

describe('Mutations', () => {
    let testProduct = {
        id: 1,
        name: 'Gold Sneakers',
        description: 'Grey and blue sneakers with white sole.',
        price: 3000,
        quantity: 1,
    }
    it('adds to cart', () => { 
        const state = {
            products: [],
            cart: [],
        }
        expect(state.cart.length).to.equal(0)
        mutations.addToCart(state, testProduct);
        expect(state.cart.length).to.equal(1);
    })

    it('removes from cart', () => {
        const state = {
            products: [],
            cart: [testProduct],
        }
        expect(state.cart.length).to.equal(1)
        mutations.removeFromCart(state, testProduct.id);
        expect(state.cart.length).to.equal(0);
    })

    it('increases the quantity of an item in the cart', () => {
        const state = {
            products: [],
            cart: [testProduct],
        }
        mutations.increaseQuantity(state, testProduct.id);
        expect(state.cart[0].quantity).to.equal(2);
    })

    it('decreases the quantity of an item in the cart', () => {
        const state = {
            products: [],
            cart: [testProduct],
        }
        expect(state.cart[0].quantity).to.equal(2);
        
        mutations.decreaseQuantity(state, testProduct.id);
        expect(state.cart[0].quantity).to.equal(1);
    })
})