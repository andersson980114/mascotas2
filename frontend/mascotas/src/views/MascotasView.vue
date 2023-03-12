<template>
     <div class="row border  px-0 mx-auto">
        <div class="row py-2 px-0 mx-auto"> 
            <div class="col-3"  v-for="pet in pets" :key="pet"> 
                <Mascota  :pet="pet" :home="false"/>  
                <div v-if="showForm">
                    <ModalAdopt :pet="pet"/>
                </div>

            </div>
        </div>
    </div>
</template>

<script setup>
    import {onMounted} from 'vue'
    import Mascota from "@/components/Mascota.vue";
    import ModalAdopt from '../components/ModalAdopt.vue';
    import {useAppstore} from '@/store/index.js'
    import {usePetApistore} from '@/store/petsApi.js' 
    import { storeToRefs } from 'pinia';

    const usePetApi = usePetApistore()
    let {getPets, adoptPet }= usePetApi 
    let {pets,showForm} = storeToRefs(usePetApi)

    const useApp = useAppstore()
    let {showModal} = useApp
    let {modal} = storeToRefs(useApp)
 
    onMounted(() =>{
        getPets()
        //console.log("vue: ",pets)
    })
    
    const openModal = () =>{
        showModal()
    }
</script>

<style>

</style>