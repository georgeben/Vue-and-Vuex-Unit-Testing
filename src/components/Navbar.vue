<template>
   <nav class="navbar navbar-expand-sm navbar-light ">
        <router-link to="/" class="navbar-brand">Shop Universe</router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
                <router-link to="/login" class="nav-link">Admin Login</router-link>
            </li>
        </ul>
        
    </div>
    </nav>
</template>

<style scoped>
nav.navbar{
    background-color: rgb(99, 176, 221);
    color: white;
}
</style>

