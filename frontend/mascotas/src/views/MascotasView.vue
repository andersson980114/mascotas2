<template>
     <div class="row border p-2">
        <div class="row py-2  ">
            <Mascota :pet="pet"/> 
        </div>
    </div>
</template>

<script>
    import Mascota from "@/components/Mascota.vue";
    
    export default {
        name: 'MascotasView',
        data(){
            return{
                imagen: "",
                pet: {id:1, foto:"https://images.dog.ceo/breeds/coonhound/n02089078_3532.jpg", nombre:"asd", raza:"assa", edad:"1", genero:"asd"},
            }
        },
        components:{
            Mascota
        },
    }
</script>

<style>

</style>