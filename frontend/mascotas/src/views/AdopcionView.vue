<template>
  <div class="row d-flex justify-content-center">
      <div class="col-xl-7 col-lg-8 col-md-9 col-11 text-center">
          
          <div class="card">
                <h5 class="text-center mb-4">Datos de la Mascota</h5>
                <div class="form-card">
                    <div class="row justify-content-between text-left">
                        
                    </div>
                    <div class="row justify-content-between text-left">
                        <div class="form-group col-sm-6 flex-column d-flex"> 
                            <label class="form-control-label px-3">Nombre: </label> 
                            <input type="text" v-model="nombre" > 
                        </div>
                        <div class="form-group col-sm-6 flex-column d-flex">
                            <label class="form-control-label px-3">Especie:</label> 
                            <select class="form-control form-control-lg " v-model="especie"> 
                                <option value="perro">Perro</option>
                                <option value="gato">Gato</option>
                            </select>
                        </div>
                    </div>
                    <div class="row justify-content-between text-left">
                            <div class="form-group col-sm-6 flex-column d-flex"> 
                                <label class="form-control-label px-3">Cargar Foto: </label> 
                                <button v-if="foto==undefined" class="btn-block btn-primary" @click="openModal()">
                                    cargar
                                </button> 
                                <button  v-else class="btn-block btn-info" @click="openModal()">
                                    cambiar
                                </button> 
                            </div>
                            <!--
                               component search select 
                            -->
                            <div class="form-group col-sm-6 flex-column d-flex"> 
                                <label class="form-control-label px-3">Raza:</label>  
                                <div class="input-group">
                                    <div id="search-autocomplete" class="form-outline col-9">
                                        <input type="text" id="search" class="form-control" placeholder="buscar raza" v-model="raza" /> 
                                    </div>
                                    <button type="button" class="btn btn-success" @click="saveRace()">
                                        <i class="fa-solid fa-plus"></i>
                                    </button>
                                    <div v-if="buscar.length" class="col-2" style="position: absolute; width: 80%; margin-top: 3rem;">
                                        <ul class="list-group "> 
                                            <li  class="list-group-item list-group-item-action" v-for="item in buscar" :key="item"  @click="selectRaza(item.race)">
                                                {{ item.race }}
                                            </li>
                                        </ul>
    
                                    </div>
                                </div>
                            </div>
                             
                    </div>
                    <div class="row justify-content-between text-left">
                        <div class="form-group col-sm-6 flex-column d-flex"> 
                            <label class="form-control-label px-3">Color:</label>
                            <input type="text" v-model="color"  > 
                        </div>
                        <div class="form-group col-sm-6 flex-column d-flex"> 
                            <label class="form-control-label px-3">Edad: </label>
                                <input type="number" v-model="edad" > 
                        </div>
                        <div class="form-group col-sm-6 flex-column d-flex"> 
                            <label class="form-control-label px-3">G??nero: </label>
                            <select class="form-control form-control-lg " v-model="genero"> 
                                <option value="macho">Macho</option>
                                <option value="hembra">Hembra</option>
                            </select>
                        </div>
                    </div>
                    <div class="row justify-content-between text-left">
                        <div class="form-group col-12 flex-column d-flex"> 
                            <label class="form-control-label px-3">Descripci??n:</label> 
                            <input type="text" v-model="descripcion"> 
                        </div>
                    </div>
                    <div v-if="error" class="form-outline mb-2 text-danger">
                        <label class="form-label "> 
                            <i class="fa-solid fa-circle-exclamation"></i>{{mensaje}}
                        </label>
                        <hr class="my-0">  
                    </div> 
                    <div class="row justify-content-end">
                        <div class="form-group col-sm-3"> 
                            <button  class="btn-block btn-primary" @click="savePet()">
                                Guardar
                            </button> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="modal">
            <ModalFotos tipo="asd" :fotos="fotos"/>
        </div>
    </div>
</template>

<script setup>
    import Swal from 'sweetalert2'
    import ModalFotos from '@/components/ModalFotos.vue';
    import {onMounted} from 'vue'
    import {useAppstore} from '@/store/index.js'
    import {usePetApistore} from '@/store/petsApi.js'
    import { storeToRefs } from 'pinia';
    import { ref, watch, computed  } from "vue";

    const usePetApi = usePetApistore()
    let {addPet, addRace, getRaces}= usePetApi
    let {races} = storeToRefs(usePetApi)

    const useApp = useAppstore()
    let {showModal, getDogs, getCats} = useApp
    let {modal, foto, fotos} = storeToRefs(useApp)

    
    let mensaje="mensaje error"
    let error= false
    //datos de la mascota 
    let nombre= ref(undefined) 
    let raza= ref(undefined)
    let color= ref(undefined)
    let especie= ref(undefined)
    let edad= ref(undefined)
    let genero= ref(undefined)
    let descripcion= ref(undefined) 
    //component search select  
    const razas = races.value;
    
    //component search select  
    let buscar = computed(() => { 
           
            if (raza.value === '' || raza.value === undefined) {
                return []
            }
            let matches = 0
            if(races.value.length>0){
                if(especie.value==='' || especie.value === undefined){
                    Swal.fire(
                    'No ha escogido la especie ',
                    'El campo de especie est?? vac??o',
                    'warning'
                    )
                }else{
                    return races.value.filter(item => { 
                        if(item.species.toLowerCase().includes(especie.value.toLowerCase())){
                            if (
                                item.race.toLowerCase().includes(raza.value.toLowerCase())
                                && matches < 10
                            ) { 
                                matches++ 
                                return item
                            }
                            
                        }
                         
                    })
                }
            }else{
                return []
            }    

        
     })
    //component search select  
    const selectRaza = (item) => { 
        raza.value = item 
        buscar=[]
    }

    const saveRace = () => {
       console.log( raza.value)
        if(raza.value === undefined || raza.value === "" || especie.value === undefined || especie.value === ""){
            Swal.fire(
            'Verifique la Raza y Especie ',
            'El campo de raza o especie est?? vac??o',
            'warning'
            )
        } else{
            Swal.fire({
                title: '??Agregar Raza?',
                text: "??Desea registrar esta nueva raza?",
                icon: 'question',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si, estoy seguro'
                }).then((result) => {
                if (result.isConfirmed) {  
                    addRace(raza.value, especie.value)
                    Swal.fire(
                    'Raza agregada',
                    '',
                    'success'
                    )
                }
            })
            
        }
    }

    onMounted(() => {
        getRaces()
    })

    const openModal = () =>{ 
        let timerInterval 
        if(especie != null){
            Swal.fire({
                title: 'Accediendo a las fotos',
                html: 'Cargando <b></b> fotos',
                timer: 2000,
                timerProgressBar: true,
                didOpen: () => {
                    Swal.showLoading()
                    const b = Swal.getHtmlContainer().querySelector('b')
                    //console.log(especie)
                    if(especie.value === 'perro'){ 
                        error = false 
                        console.log("perros")
                        getDogs()  
                    }else if(especie.value === 'gato'){ 
                        error = false  
                        console.log("perros")
                        getCats()
                    }
                    timerInterval = setInterval(() => {
                        
                    },  2000 )
                },
                willClose: () => {
                    clearInterval(timerInterval)
                }
                }).then((result) => {
                    
                if (result.dismiss === Swal.DismissReason.timer) {
                    showModal()
                }
            })

        } else{
            Swal.fire(
            'Especie no elegida',
            'Por favor elegir la especie',
            'warning'
            )
            //error = true
            //mensaje = 'Por favor elegir la especie'
        }
    }

    const savePet = () =>{
        
        if(nombre.value === undefined   ||  descripcion.value === undefined || genero.value === undefined || edad.value === undefined || especie.value === undefined || color.value === undefined ){
            Swal.fire(
            'Campos incompletos',
            'Debes llenar todos los campos ',
            'warning'
            )
        }else{
            //
            Swal.fire({
                title: '??Est?? seguro?',
                text: "Revisa y confirma que los campos est??n cons los datos correctos",
                icon: 'question',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si, estoy seguro'
                }).then((result) => {
                if (result.isConfirmed) {
                    //
                    //
                    console.log("foto: ",foto.value) 
                    //console.log("vue: ",nombre,descripcion,raza,especie,color,genero,foto,edad, false)
                    addPet(nombre.value,descripcion.value,raza.value,especie.value,color.value, genero.value,foto.value,edad.value) 
                    clear()
                    
                }
            })

            //
        }
    }

    const clear = () =>{ 
        nombre.value = undefined
        raza.value = undefined
        color.value = undefined
        especie.value = undefined
        edad.value = undefined
        genero.value =undefined
        descripcion.value = undefined
        foto.value = undefined
    }
       
</script>

<style scoped>
body{
    color: #000;
    overflow-x: hidden;
    height: 100%; 
    background-repeat: no-repeat;
    background-size: 100% 100%;
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