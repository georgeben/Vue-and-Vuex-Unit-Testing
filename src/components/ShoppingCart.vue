<template>
    <div class="card" >
        <h4>Your Cart</h4>
        <p>This lists all the items you have chosen to buy.</p>
        <div v-for="item in cartItems" v-bind:key="item.id">
            <CartItem v-bind:item="item" />
        </div>

        <p>Total: {{cartTotal}}</p>
        <button @click="show" class="btn">Checkout</button>
    </div>
</template>


<script>
import CartItem from './CartItem';

export default {
    name: 'ShoppingCart',
    methods: {
        show(){
            console.log(this.$store.state.cart);
        }
    },
    computed: {
        cartItems(){
            return this.$store.state.cart;
        },
        cartTotal(){
            return this.$store.getters.cartTotal
        }
    },
    components: {
        CartItem,
    }
}
</script>

<style scoped>
button{
    background-color: rgb(99, 176, 221);
}
</style>


