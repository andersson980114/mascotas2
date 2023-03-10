<template>
  <div  class="card col-12 p-0 mx-1 my-2"  >
        <img class="card-img-top" :src="pet.image"  style="height: 25vh;" >
        <div class="card-body">
            <h4 class="card-title fw-bold text-center" >{{pet.name}}</h4>
            <hr class="my-0"> 
            <div class="row"> 
                <label  class="col-4 fw-bold px-1 mx-0 text-center" >Raza:</label>
                <p class="col px-0 mx-0 text-start">{{pet.race}}</p>
            </div>
            <div class="row"> 
                <p  class="col-4 fw-bold px-1 mx-0 text-center" >Edad:</p>
                <p class="col  px-0 mx-0 text-start">{{pet.age}} años</p>
            </div>
            <div class="row"> 
                <p  class="col-4 fw-bold px-1 mx-0 text-center" >Género:</p>
                <p class="col px-0 mx-0 text-start">{{pet.gender}}</p>
            </div>
            
            <hr class="my-1"> 
            <div class="text-center">
                <button   class="btn btn-primary" @click="adoptar(pet._id)">adoptar</button>
            </div>
        </div>
    </div>
</template>

<script> 


    export default {
        name: 'Mascota',
        props:['pet']
        ,
        data(){
            return{
                imagen: ""
            }
        },
        methods:{
            getImgUrl(pet) { 
                return require(pet)
            },
            adoptar(id){
                console.log("adoptado ", id)
            }
        }
    }
</script>

<style>

</style>