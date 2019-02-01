<template>
    <form>
        <p class="error">{{error}}</p>
        <div class="form-group">
            <label for="exampleInputEmail1">Product name</label>
            <input v-model="product.name" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Product description</label>
            <input v-model="product.description" type="text" class="form-control" id="exampleInputPassword1">
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Product price</label>
            <input v-model="product.price" type="number" class="form-control" id="exampleInputPassword2">
        </div>

        <button @click="submit" >Submit</button>
    </form>
</template>

<script>
import shop from '../api/shop';
export default {
    name: 'UpdateItem',
    data(){
        return{
            error: '',
        }
    },
    created(){
        shop.findItem(this.$route.params.id)
        console.log(this.$route.params.id)
    },
    computed: {
        product(){
            return shop.findItem(this.$route.params.id)
        }
    },
    methods: {
        submit(e){
            e.preventDefault();
            console.log(this.product);
            this.$store.commit('updateProduct', this.product.id, this.product);
            this.$router.push('/dashboard')
        }
    }
}
</script>
