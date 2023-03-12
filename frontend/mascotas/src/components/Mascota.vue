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
            
            <div v-if="!home">
                <hr class="my-1"> 
                <div class="text-center">
                    <button   class="btn btn-primary" @click="adoptPet(pet._id, pet.image, pet.name, pet.description, pet.race, pet.species, pet.color, pet.gender, pet.age)">
                        adoptar</button>
                </div>
,
            </div>
        </div>
    </div>
</template>

<script setup>  
    import {usePetApistore} from '@/store/petsApi.js' 
    import { storeToRefs } from 'pinia';

    const usePetApi = usePetApistore()
    let {adoptPet }= usePetApi 
    let {showForm} = storeToRefs(usePetApi)

    const name = 'Mascota'
    const props = defineProps(['pet', 'home'])
         

         
</script>

<style>

</style>