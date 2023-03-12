
import { defineStore } from 'pinia'
import {ref} from 'vue'
import axios from 'axios'
import Swal from 'sweetalert2'

export  const usePetApistore = defineStore('petApi', ()=>{
        //variables
        const baseUrl = 'http://localhost:5000/api/v1/pet'
        const pets = ref([])
        const pet = ref({})


        //logica
        const addPet = (name, description, race, species, color, gender, image, age ) =>{
            //console.log("node " ,name, description, race, species, color, gender, image, age, false)
            const isAdopted= false
            const headers = { "Authorization": "Bearer "}; 
            axios.post(baseUrl+'/add', {name, description, race, species, color, gender, image, age, isAdopted}, { headers })
                .then(res => {
                    Swal.fire(
                        'Almacenado',
                        'Mascota almacenada exitosamente',
                        'success'
                        )
                    getPets()}
                    )
                .catch(e => {
                    Swal.fire(
                        'Error de registro',
                        'Verifica los datos de registro',
                        'warning'
                    )
                    console.log(e)
                })
        }

        const getPets = () => {
            axios.get(baseUrl+'/findallpets')
                .then(res => {
                    pets.value = res.data.pets 
                    //console.log(pets.value)
                })
                .catch( e => {
                        console.log(e)
                    }
                ) 
        }

        const adoptPet = () => {

        }

        //returns
        return{
            pets,
            pet,
            addPet,
            getPets,
            adoptPet,
        }
    }
)