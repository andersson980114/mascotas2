<template> 
    <div class="row d-flex justify-content-center vh-100">
        <div class="col-xl-7 col-lg-8 col-md-9 col-11 text-center">
            <table class="table table-sm">
                <thead class="table-light">
                    <tr>
                        <th>Foto</th>
                        <th>Nombre</th>
                        <th>Usuario</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item of adopts" :key="item">
                        <td><img :src="item.image"
                                class="imgp"></td>
                        <td>{{ item.petName }}</td>
                        <td>{{item.userName}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    
</template>

<script setup> 
    import {onMounted} from 'vue' 
    import {usePetApistore} from '@/store/petsApi.js'  
    import { storeToRefs } from 'pinia';
    //
    const usePetApi = usePetApistore()
    let {getAdopts }= usePetApi 
    let {adopts} = storeToRefs(usePetApi)

    //
    let pets = []

    onMounted(() =>{
        getAdopts() 
    })
</script>


<style>
.imgp {
    width: 70px;
    height: 70px;
    border-radius: 100%;
}

.table {
    text-align: center;
}
</style>