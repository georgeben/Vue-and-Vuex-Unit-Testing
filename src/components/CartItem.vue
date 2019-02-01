<template>
    <div class="cart-item">
        <div class="img">
            <img src="../assets/shoe.jpg" alt="Failed to load image">
        </div>
        <div class="detail">
            <h5 class="item-name">{{item.name}}</h5>
            <p class="item-desc">{{item.description}}</p>
            <div class="quantity">
                <label for="quantity">Quantity</label>
                <button class="increase-btn" @click="increaseQuantity">+</button>
                <p class="item-qty">{{item.quantity}}</p>
                <button @click="decreaseQuantity">-</button>
            </div>
            <p class="item-price">N{{item.price}}</p>
            <button @click="removeProductFromCart" class="btn remove-btn">Remove from cart</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CartItem',
    props: ['item'],
    methods: {
        removeProductFromCart(){
            console.log("About to remove", this.item.id)
            this.$store.commit('removeFromCart', this.item.id)
        },
        increaseQuantity(){
            console.log("About to increase by 1");
            this.$store.commit('increaseQuantity', this.item.id)
        },
        decreaseQuantity(){
            if(this.item.quantity > 1){
                console.log("About to decrease by 1");
                this.$store.commit('decreaseQuantity', this.item.id)
            }else{
                console.log("Cannot reduce qty any more")
            }
            
        }
    }
}
</script>

<style scoped>
.cart-item{
    display: flex;
}

.img{
    width: 30%;
}

.img img{
    width: 100%;
}

.detail{
    width: 70%;
}

.quantity{
    display: flex;  
    align-items: center;
}

.quantity input{
    width: 20%;
    margin: 0 5px;
}

.quantity label{
    margin-right: 20px;
}

.remove-btn{
    background-color: rgb(230, 78, 78);
    color: white;
    margin-top: 10px;
}
</style>

