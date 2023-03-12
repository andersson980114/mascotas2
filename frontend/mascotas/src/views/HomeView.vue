<template>
    <div class="contenedor ">
        <Carousel />   
        <div class="row border  px-0 mx-auto">
            <h1 class="card-title text-center pt-5" >Nuevas Mascotas</h1> 
            <div class="row py-2 px-0 mx-auto"> 
                <div class="col-3"  v-for="pet in pets" :key="pet"> 
                    <Mascota v-if="!pet.isAdopted" :pet="pet" :home="true"/>  

                </div>
            </div>
        </div>
    </div>
  
</template>

<script setup>
    import Carousel from '@/components/Carousel.vue'; 
    import Mascota from "@/components/Mascota.vue";
    import {onMounted } from 'vue'
    import {usePetApistore} from '@/store/petsApi.js' 
    import { storeToRefs } from 'pinia';

    const usePetApi = usePetApistore()
    let {getPets, }= usePetApi 
    let {pets} = storeToRefs(usePetApi)

    let newPets = []
 
    onMounted(() =>{
        getPets() 
        console.log(pets.value)
        
    })
    
</script>

<style>

</style>