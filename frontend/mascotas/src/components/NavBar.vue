<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#"> 
            <img src="https://www.zarla.com/images/zarla-paraso-peludo-1x1-2400x2400-20210825-4wvhv9v6h6jqj4phdt3v.png?crop=1:1,smart&width=250&dpr=2"   width="50" height="50" class="d-inline-block align-top" alt=""> 
        </a> 
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
                <router-link class="nav-item nav-link "  to="/">Home</router-link>   
                <router-link class="nav-item nav-link "  to="/mascotas">Mascotas</router-link>   
                <router-link class="nav-item nav-link " to="/adoptar">Registro Mascotas</router-link>
                <router-link class="nav-item nav-link " to="/adopciones">Adopciones</router-link>
                <router-link class="nav-item nav-link" to="/user">Registro Usuarios</router-link>
                </div>
        </div> 
    </nav>
</template>

<script>
    export default {
        name: 'NavBar'
    }
</script>

<style>

</style>