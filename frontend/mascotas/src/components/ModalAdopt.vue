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
                                        <h2 style="text-align: center;">Formulario de Adopcion</h2>
                                    </div>   

                                    <div class="row">
                                           <!---->

                                           <div class="row d-flex justify-content-center">
                                                <div class="col-xl-7 col-lg-8 col-md-9 col-11 text-center">
                                                     
                                                            <div class="form-card"> 
                                                                <div class="row justify-content-between text-start">
                                                                    <div class="form-group col-sm-12 flex-column d-flex"> 
                                                                        <label class="form-control-label px-3 tex">Nombre: </label> 
                                                                        <input type="text" v-model="petName" disabled> 
                                                                    </div>
                                                                    <div class="form-group col-sm-12 flex-column d-flex">
                                                                        <label class="form-control-label px-3">Especie:</label> 
                                                                        <input type="text" v-model="petSpecies" disabled > 
                                                                    </div>
                                                                </div>
                                                                <div class="row justify-content-between text-start">
                                                                        
                                                                        <!--
                                                                        component search select 
                                                                        
                                                                        -->
                                                                        <div class="form-group col-sm-12 flex-column d-flex"> 
                                                                            <label class="form-control-label px-3">Usuario encargado:</label>  
                                                                            <div class="input-group">
                                                                                <div id="search-autocomplete" class="form-outline col-12">
                                                                                    <input type="text" id="search" class="form-control" placeholder="buscar usuario" v-model="user" /> 
                                                                                </div> 
                                                                                <div v-if="buscar.length" class="col-12" style="position: absolute; width: 80%; margin-top: 3rem;">
                                                                                    <ul class="list-group "> 
                                                                                        <li  class="list-group-item list-group-item-action" v-for="item in buscar" :key="item"  @click="selectUser(item)">
                                                                                            {{ item.name }}
                                                                                        </li>
                                                                                    </ul>
                                                
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        
                                                                </div>
                                                                
                                                                <div class="row justify-content-end">
                                                                    <div class="form-group col-sm-3"> 
                                                                        <button  class="btn-block btn-primary" @click="saveAdoptPer(petId,petName,userId,user, petImg)">
                                                                            Guardar
                                                                        </button> 
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>  

                                           <!---->
                                    </div>
  
                                      
                              </div>
                          </div>
                      </div> 
                  </div>
              </div>
          </transition>
      </div>  
  </template>
  
  <script setup> 
    import {onMounted} from 'vue'
    import { ref, computed  } from "vue";
    
    import {usePetApistore} from '@/store/petsApi.js'
    import {useUserStore } from '@/store/userApi.js'
    import { storeToRefs } from 'pinia';


    const usePetApi = usePetApistore()
    let {saveAdoptPer}= usePetApi
    let {showForm, pet, petName, petSpecies, petId, petImg} = storeToRefs(usePetApi)
    
    const useUserApi = useUserStore()
    let {getUsers} = useUserApi
    let {users, user, userId} = storeToRefs(useUserApi)

    //component search select  
    //const selected = ref(undefined) 
    
    onMounted(() =>{
        getUsers()
        console.log("vue: ",petId)
    })

    //component search select  
    let buscar = computed(() => { 
           
            if (user.value === '' || user.value === undefined) {
                return []
            }

            let matches = 0

            if(users.value.length>0){ 
                return users.value.filter(item => { 
                        
                    if ( item.name.toLowerCase().includes(user.value.toLowerCase()) && matches < 10  ) { 
                        matches++ 
                        return item
                    } 
                        
                })
            
            }else{
                return []
            }    

        
     })
    //component search select  
    const selectUser = (item) => { 
        user.value = item.name
        userId.value = item._id
        console.log(user.value, userId.value)
        buscar=[]
    }

    const closeModal =()=>{
        showForm.value = false
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

  /** */
  body{
    color: #000;
    overflow-x: hidden;
    height: 100%; 
    background-repeat: no-repeat; 
}
.card{
    padding: 30px 40px;
    margin-top: 60px;
    margin-bottom: 60px;
    border: none !important;
    box-shadow: 0 6px 12px 0 rgba(0,0,0,0.2)
}

.blue-text{
    color: #00BCD4
}

.form-control-label{
    margin-bottom: 0
}

input, textarea, button{
    padding: 8px 15px;
    border-radius: 5px !important;
    margin: 5px 0px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    font-size: 18px !important;
    font-weight: 300
}

input:focus, textarea:focus{
    -moz-box-shadow: none !important;
    -webkit-box-shadow: none !important;
    box-shadow: none !important;
    border: 1px solid #00BCD4;
    outline-width: 0;
    font-weight: 400
}

input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
} 
  
  
  </style>