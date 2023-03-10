<template>
     <div class="row border  px-0 mx-auto">
        <div class="row py-2 px-0 mx-auto"> 
            <div class="col-3"  v-for="pet in pets" :key="pet"> 
                <Mascota  :pet="pet"/>  

            </div>
        </div>
    </div>
</template>

<script setup>
    import {onMounted} from 'vue'
    import Mascota from "@/components/Mascota.vue";
    import {usePetApistore} from '@/store/petsApi.js' 
    import { storeToRefs } from 'pinia';

    const usePetApi = usePetApistore()
    let {getPets, }= usePetApi 
    let {pets} = storeToRefs(usePetApi)
 
    onMounted(() =>{
        getPets()
        console.log("vue: ",pets)
    })
        
</script>

<style>

</style>