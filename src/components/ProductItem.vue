<template>
    <div class="product-item card">
        <img src="../assets/shoe.jpg" alt="Failed to load image">
        <div class="title">
            <h4 class="product-name" >{{product.name}}</h4>
            <h5 class="product-price">N{{product.price}}</h5>
        </div>
        <p class="product-desc">{{product.description}}</p>
        <div v-if="modify" >
            <!-- <button class=" btn edit" data-toggle="modal" data-target="#editModal">Edit</button> -->
            <button><router-link :to="`/update/${product.id}`" class="edit-link" >Edit</router-link></button>
            <button @click="deleteProduct" >Delete</button>

        </div>
        <button v-else @click="addProductToCart" class="btn">Add To Cart</button>

        <!-- EditModal -->
        <!-- <div class="modal fade" id="editModal{{product.id}}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Edit Product</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form>
                        <p class="error">{{error}}</p>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Product name</label>
                            <input :value="product.name" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Product description</label>
                            <input v-model="description" type="text" class="form-control" id="exampleInputPassword1">
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Product price</label>
                            <input v-model="price" type="number" class="form-control" id="exampleInputPassword2">
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button @click="finishEditing" type="button" class="btn delete" data-dismiss="modal">Save</button>
                </div>
                </div>
            </div>
        </div> -->
    </div>
</template>

<script>
import shop from '../api/shop.js'
export default {
    name: 'ProductItem',
    props: ['product', 'modify'],
    data(){
        return{
            error: '',
            name: this.product.name,
            description: this.product.description,
            price: this.product.price,
        }
    },
    methods: {
        addProductToCart(){
            this.$store.commit('addToCart', this.product);
        },
        deleteProduct(){
            console.log("About to delete ", this.product.id);
            this.$store.commit('removeProduct', this.product.id)
        },
        finishEditing(){
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
            console.log("Hhahah", this.product)
            this.$store.commit('updateProduct', this.product.id, this.product);
            console.log("All good, Ready to add")
        }
    }
}
</script>
<style scoped>

/* .product-item{
    width: 25%;
}

.product-item img{
    width: 200px;
    display: block;
    margin: auto;
}

.title{
    display: flex;
    justify-content: space-between;
} */

button{
    background-color: rgb(99, 176, 221);
}
</style>


