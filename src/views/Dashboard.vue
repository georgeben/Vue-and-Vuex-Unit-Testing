<template>
    <div>
        <h1>Welcome {{user.name}}</h1>
        <button @click="logOut">Log out</button>
        <button data-toggle="modal" data-target="#exampleModal">Add product</button>
        <button @click="show">Show</button>

        <div class="products" >
            <div v-for="product in products" v-bind:key="product.id">
                <ProductItem class="product-item" v-bind:product="product" v-bind:modify="true" />
            </div>
        </div>

        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Add product</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form>
                        <p class="error">{{error}}</p>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Product name</label>
                            <input v-model="product_name" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Product description</label>
                            <input v-model="product_description" type="text" class="form-control" id="exampleInputPassword1">
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Product price</label>
                            <input v-model="product_price" type="number" class="form-control" id="exampleInputPassword2">
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button @click="addProduct" type="button" class="btn delete">Add product</button>
                </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import shop from '../api/shop';
import ProductItem from '../components/ProductItem.vue';
export default {
    name: 'Dashboard',
    data(){
        return{
            error: '',
            product_name: '',
            product_description: '',
            product_price: '',
        }
    },
    methods: {
        logOut(){
            localStorage.removeItem('user');
            this.$router.push('/')
        },
        addProduct(){
            console.log(this.product_price)
            if(this.product_name == ''){
                this.error = 'Please add product name';
                return;
            }
            if(this.product_description == ''){
                this.error = 'Please add product description';
                return;
            }
            if(this.product_price == ""){
                this.error = "Please enter a valid price"
                console.log("No price");
                return;
            }
            if(this.product_price < 10){
                this.error = 'Price of product cannot be less than 10 naira';
                return;
            }

            console.log("All good, Ready to add")
            shop.addNewProduct({
                name: this.product_name,
                description: this.product_description,
                price: this.product_price,
                quantity: 1
            });
            this.clearInputs();
            $('#exampleModal').modal('hide')
        },
        show(){
            console.log(this.products)
        },
        clearInputs(){
            this.product_name = '';
            this.product_description = '';
            this.product_price = '';
        },
    },
    computed: {
        user(){
            return JSON.parse(localStorage.getItem('user'))
        },
        products(){
            return this.$store.state.products
        }
    },
    created(){
        this.$store.dispatch('getAllProducts');
    },
    components: {
        ProductItem,
    }
}
</script>

<style scoped>

</style>

