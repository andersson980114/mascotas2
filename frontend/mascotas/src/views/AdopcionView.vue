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
                                <button v-if="!foto" class="btn-block btn-primary" @click="openModal()">
                                    cargar
                                </button> 
                                <button  v-else class="btn-block btn-info" @click="openModal()">
                                    cambiar
                                </button> 
                            </div>
                            <div class="form-group col-sm-6 flex-column d-flex"> 
                                <label class="form-control-label px-3">Raza:</label> 
                                <input type="text" v-model="raza"> 
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
                            <label class="form-control-label px-3">Género: </label>
                            <select class="form-control form-control-lg " v-model="genero"> 
                                <option value="macho">Macho</option>
                                <option value="hembra">Hembra</option>
                            </select>
                        </div>
                    </div>
                    <div class="row justify-content-between text-left">
                        <div class="form-group col-12 flex-column d-flex"> 
                            <label class="form-control-label px-3">Descripción:</label> 
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
    import {useAppstore} from '@/store/index.js'
    import { storeToRefs } from 'pinia';

    const useApp = useAppstore()
    let {showModal, getDogs, getCats} = useApp
    let {modal, foto, fotos} = storeToRefs(useApp)

    
    let mensaje="mensaje error"
    let error= false
    //datos de la mascota 
    let nombre= undefined
    let raza= undefined
    let color= undefined
    let especie= undefined
    let edad= undefined
    let genero= undefined
    let descripcion= undefined 

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
                    if(especie === 'perro'){ 
                        error = false 
                        getDogs()  
                    }else if(especie === 'gato'){ 
                        error = false  
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
        if(nombre === undefined   ||  descripcion === undefined || genero === undefined || edad === undefined || especie === undefined || color === undefined ){
            Swal.fire(
            'Campos incompletos',
            'Debes llenar todos los campos ',
            'warning'
            )
        }else{
            //
            Swal.fire({
                title: '¿Está seguro?',
                text: "Revisa y confirma que los campos estén cons los datos correctos",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si, estoy seguro'
                }).then((result) => {
                if (result.isConfirmed) {
                    //
                    //
                    clear()
                    Swal.fire(
                    'Almacenado',
                    'registro almacenado exitosamente',
                    'success'
                    )
                }
                })

            //
        }
    }

    const clear = () =>{
        nombre = undefined
        raza = undefined
        color = undefined
        especie = undefined
        edad = undefined,
        genero = undefined
        descripcion = undefined
        foto = undefined
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


</style>