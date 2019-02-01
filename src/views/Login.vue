<template>
    <form @submit="signInUser">
        <h5>Admin Login</h5>
        <p v-if="error" class="error">{{error}}</p>
        <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input v-model="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input v-model="password" type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
        </div>
        <button type="submit" class="btn">Sign in</button>
    </form>
</template>

<script>
import shop from '../api/shop';
export default {
    name: 'Login',
    data(){
        return{
            error: '',
            email:'',
            password: '',
        }
    },
    methods: {
        signInUser(e){
            e.preventDefault();
            if(this.email.trim().length == 0){
                this.error = 'Please enter your email';
                return;
            }
            console.log(shop);
            let user = shop.getUserByEmail(this.email);
            console.log(user);
            if(user){
                if(user.password === this.password){
                    console.log("Successfully logged in");
                    localStorage.setItem('user', JSON.stringify(user))
                    this.$router.push('/dashboard')
                }else{
                    console.log("Wrong password");
                    this.error = "You entered a wrong password";
                }
            }else{
                console.log("User does not exist")
                console.log("Wrog details")
            }
        }
    },

}
</script>