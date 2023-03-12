<template>
  <div >
        <transition name="modal ">
            <div class="modal-mask ">
                <div class="modal-wrapper  "> 
                    <div class="modal-dialog" role="document">
                        <div class="modal-content  "  >
                            <!-- body -->
                            <div class="modal-body rounded-4 " > 
                                <div class="d-grid gap-2 d-md-flex justify-content-md-end"> 
                                    <button type="button" class="btn-danger  text-end py-0 px-2 rounded-circle" 
                                    @click="closeModal()">X</button>
                                </div>

                                <div  class="col text-dark">
                                    <h2 style="text-align: center;">Elegir Foto</h2>
                                </div>   
                                    <div class="row">
                                        <div class="col-4 px-1  " v-for="(item, index) in fotos" :key="index"  >
                                            <div class="row mx-0 ">
                                                <div   style="width: 100%;; margin: 0; padding: 10px;" > 
                                                    <div class="row mx-0 px-0 my-4" style="width: 150px; height: 150px;">
                                                        <img :src="item.foto"  style="width: 90%; height: 100%; object-fit: fill;"  width="100px">
                                                        <button class="btn btn-primary text-center" @click="subir(item)">subir</button>
                                                    </div>
                                                </div>
                                                        
                                            </div>
                                        </div>  
    
                                    </div>

                                    
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        </transition>
    </div>  
</template>

<script>
    import {useAppstore} from '@/store/index.js'

    let {selectFoto,showModal} = useAppstore() 
    export default {
        name: 'ModalFotos',
        data(){
            return{ 
            }
        },
        props:{
            tipo: String,
            fotos: Array
        },  
        methods:{
            closeModal(){ 
                console.log("close")
                showModal() 
            },
            subir(item){
                selectFoto(item.foto)
                this.closeModal()
            }
        }, 
    }
</script>

<style scoped>

.modal-container{  
    margin: 2px;
    padding: 2px; 
}

.modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .3);
    display: table;
    transition: opacity .3s ease;
     
}
  
.modal-wrapper {
    display: table-cell;
    vertical-align: middle;
 
} 

</style>