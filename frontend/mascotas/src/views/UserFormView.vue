<template>
    <div class="row d-flex justify-content-center vh-100" style="">
      <div class="col-xl-7 col-lg-8 col-md-9 col-11 text-center">
          
          <div class="card">
                <h5 class="text-center mb-4">Datos de Usuario</h5>
                <div class="form-card">
                    <div class="row justify-content-between text-left">
                        
                    </div>
                    <div class="row justify-content-between text-start">
                        <div class="form-group col-sm-6 flex-column d-flex"> 
                            <label class="form-control-label px-3">Nombres: </label> 
                            <input type="text" v-model="nombre" ref="anyName" > 
                        </div>
                        <div class="form-group col-sm-6 flex-column d-flex"> 
                            <label class="form-control-label px-3">Apellidos: </label> 
                            <input type="text" v-model="apellido" > 
                        </div>
                    </div>
                    <div class="row justify-content-between text-start"> 
                        <div class="form-group col-sm-12 flex-column d-flex"> 
                            <label class="form-control-label px-3">Correo:</label> 
                            <input type="email" v-model="email">  
                        </div>
                            
                     </div>

                     <div class="row justify-content-between text-start"> 
                        <div class="form-group col-sm-12 flex-column d-flex"> 
                            <label class="form-control-label px-3">Telefono:</label> 
                            <input type="number" v-model="tel" id="tel"> 
                        </div>
                     </div>
                    
                    <div class="row justify-content-end">
                        <div class="form-group col-sm-3"> 
                            <button  class="btn-block btn-primary" @click="saveUser()">
                                Guardar
                            </button> 
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    </div>
  
</template>

<script setup>  
    import Swal from 'sweetalert2'
    import {useUserStore } from '@/store/userApi.js'
    import { ref } from "vue";
    import { storeToRefs } from 'pinia';

    const useUserApi = useUserStore()
    let {addUser} = useUserApi
 
    let nombre =ref(undefined)
    let apellido = ref(undefined)
    let email = ref(undefined)
    let tel = ref(undefined)

    const saveUser = () =>{
        console.log(nombre.value+" "+apellido.value, email.value, tel.value) 
        if(nombre.value === undefined   ||  apellido.value  === undefined || email.value  === undefined || tel.value  === undefined ){
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
                icon: 'question',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si, estoy seguro'
                }).then((result) => {
                if (result.isConfirmed) { 
                   addUser(nombre.value+" "+apellido.value, email.value, tel.value)
                    clear() 
                }
            })

            //
        }
    }

    const clear = () =>{   
        nombre.value = undefined
        apellido.value  = undefined
        email.value  = undefined
        tel.value  = undefined
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