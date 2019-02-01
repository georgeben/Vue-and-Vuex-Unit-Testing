<template>
  <div class="home">
    <section class="products" >
      <div v-for="product in products" v-bind:key="product.id">
        <ProductItem class="product-item" v-bind:product="product" />
      </div>
    </section>

    <section class="cart">
      <ShoppingCart />
    </section>
    
  </div>
</template>

<script>
import ProductItem from '../components/ProductItem.vue';
import ShoppingCart from '../components/ShoppingCart.vue';
import shop from '../api/shop';

export default {
  name: 'home',
  methods: {
    
  },
  components: {
    ProductItem,
    ShoppingCart,
  },
  created(){
    // console.log(shop)
    this.$store.dispatch('getAllProducts');
  },
  computed: {
    products(){
      return this.$store.state.products
    }
  }
}
</script>

<style>
.home{
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
}

.products{
  width: 70%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
}

.cart{
  width: 30%;
}

.card{
  background-color: #fff;
  box-shadow: 1px 1px 2px #777;
  padding: 5px;
}

.product-item{
    width: 100%;
}

.product-item img{
    width: 200px;
    display: block;
    margin: auto;
}

.title{
    display: flex;
    justify-content: space-between;
}
</style>

