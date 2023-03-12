import { defineStore } from 'pinia'
import {ref} from 'vue'
import axios from 'axios'  
import Swal from 'sweetalert2'

export  const useUserStore = defineStore('user', ()=>{
        //variables
        const baseUrl = 'http://localhost:5000/api/users/v1'
        let users = ref([])
        let user = ref({}) 
        let error = false
        /**
         /findall
         /find/:id
         /new
         /del/:id
         /update
         */
        //funciones
        const addUser = (name, email, tel ) =>{
            console.log (name, email, tel )
            const headers = { "Authorization": "Bearer "}; 
            axios.post(baseUrl+'/new', {name, email, tel }, { headers })
                .then(res => {  
                    console.log(res.data)
                    getUsers()
                    Swal.fire(
                        'Almacenado',
                        'Usuario almacenado exitosamente',
                        'success'
                        )
                   })
                .catch(e => { 
                        console.log("error api", e)
                        Swal.fire(
                            'Error de registro',
                            'Posiblemente el correo ya esté registrado',
                            'warning'
                        )
                    } 
                ) 
        }

        const getUsers = () => {
            axios.get(baseUrl+"/findall")
                .then(res => {
                    //console.log(res.data) 
                    users.value = res.data
                    console.log(users.value)
                    error = false
                }).catch( e => { 
                    console.log(e)
                    error = true
                }) 
        }

        //returns
        return{
            user,
            users, 
            addUser,
            getUsers
        }
    }
)
