import Vue from 'vue';
import Vuex from 'vuex';
import shop from '../api/shop';

Vue.use(Vuex);

export const mutations = {
    addProducts: (state, products) => {
        state.products = products;
    },
    addToCart: (state, product) => {
        if(state.cart.includes(product)){
            console.log("Already exists")
            return;
        }
        state.cart.push(product);
    },
    removeFromCart(state, id){
        state.cart.forEach((item, index) => {
            if(item.id == id){
                state.cart.splice(index, 1);
            }
        })
    },
    increaseQuantity(state, id){
        console.log("Increase quantity mutation")
        state.cart.forEach((item) => {
            if(item.id == id){
                item.quantity++
                console.log(item)
            }
        })
    },
    decreaseQuantity(state, id){
        console.log("Increase quantity mutation")
        state.cart.forEach((item) => {
            if(item.id == id){
                item.quantity--
                console.log(item)
            }
        })
    },
    removeProduct(state, id){
        shop.removeProduct(id)
    },
    updateProduct(state, id, product){
        console.log("Mutation trying to update ", id)
        shop.updateProduct(id, product);
    }
}
const store = new Vuex.Store({
    state: {
        products: [],
        cart: [],
    },
    mutations,
    actions: {
        getAllProducts: (context) => {
            let products = shop.getAllProducts();
            context.commit('addProducts', products);
        }
    },
    getters: {
        cartTotal(state){
            let total = 0;
            state.cart.forEach(item => {

                total+= (item.price * item.quantity)
            });

            return total;
        }
    },
});

export default store;