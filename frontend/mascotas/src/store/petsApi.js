
import { defineStore } from 'pinia'
import {ref} from 'vue'
import axios from 'axios'
import Swal from 'sweetalert2'

export  const usePetApistore = defineStore('petApi', ()=>{
        //variables
        const baseUrl = 'http://localhost:5000/api/v1/pet'
        const raceUrl = 'http://localhost:5000/api/v1/race'
        const adoptUrl = 'http://localhost:5000/api/adopts/v1'
        const pets = ref([])
        const newPets = ref([])
        const races = ref([])
        const adopts = ref([])
        const pet = ref(undefined)
        const petId = ref(undefined)
        const petName = ref(undefined)
        const petDescription = ref(undefined)
        const petRace = ref(undefined) 
        const petSpecies = ref(undefined)
        const petColor = ref(undefined)
        const petGender = ref(undefined)
        const petImg = ref(undefined)
        const petAge = ref(undefined)

        const showForm = ref(false)
        const user = ref(undefined)


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
                    let copy = res.data.pets  
                    let count = 0
                    pets.value = copy.reverse().filter(item => item.isAdopted===false)
                    newPets.value =  copy.filter(item => {
                        if(item.isAdopted===false && count<4){
                            count++
                            return item
                        }
                    })
                })
                .catch( e => {
                        console.log(e)
                    }
                ) 
        }

        const getPet = (id) =>{
            axios.get(baseUrl+`/findpet/${id}`)
                .then(res => {
                    pet.value = res.data.pet
                    petName.value = pet.value.name
                    petSpecies.value = pet.value.species
                    console.log("pet",pet.value._id, petSpecies.value)
                })
                .catch( e => {
                        console.log(e)
                    }
                ) 
        } 

        const updatedPet = (_id, name, description, race, species, color, gender, image, age ) =>{
            //console.log("node " ,name, description, race, species, color, gender, image, age, false)
            const isAdopted= true
            const headers = { "Authorization": "Bearer "}; 
            axios.put(baseUrl+'/updatepet', {_id, name, description, race, species, color, gender, image, age, isAdopted}, { headers })
                .then(res => {
                    Swal.fire(
                        'Almacenado',
                        'adopción almacenada exitosamente',
                        'success'
                        ) 
                    console.log("adopción exitosa")
                    getPets()}
                    )
                .catch(e => {
                    Swal.fire(
                        'Error de registro',
                        'Verifica los datos de usuario',
                        'warning'
                    )
                    console.log(e)
                })
        }
 
        const addRace = (race, species) => {
            const headers = { "Authorization": "Bearer "}; 
            console.log("api:",race, species)
            axios.post(raceUrl+'/add', {race, species}, { headers })
                .then(res => {
                    Swal.fire(
                        'Almacenado',
                        'Raza almacenada exitosamente',
                        'success'
                        )
                        //getRaces()
                    }
                    )
                .catch(e => {
                    Swal.fire(
                        'Error de registro',
                        'Verifica los datos de Raza',
                        'warning'
                    )
                    console.log(e)
                })
        }
            const getRaces = () =>{
            axios.get(raceUrl+'/findallraces')
                .then(res => {
                    races.value = res.data.breeds
                    console.log(races.value  )
                })
                .catch( e => {
                        console.log(e)
                    }
                ) 
        }

        const adoptPet = (id, image, name, description, race, species, color, gender,  age) => {
            petId.value = id 
            petName.value = name
            petDescription.value = description
            petRace.value = race
            petSpecies.value = species
            petColor.value = color
            petGender.value = gender
            petImg.value = image
            petAge.value = age
            
            console.log("show:", petId.value, petName.value, petDescription.value, petRace.value, petSpecies.value, petColor.value, petGender.value, petImg.value, petAge.value )
            //console.log("show:", petName.value, petDescription.value, petRace.value, petSpecie.values, petColor.value, petGender.value, petImg.value, petAge.value )
            
            getPet(id) 
            showForm.value = true
        }

        const saveAdoptPer = (id_pet, petName, id_user, userName, image ) =>{ 
            const headers = { "Authorization": "Bearer "};  
            axios.post(adoptUrl+'/new', {id_pet, petName, id_user, userName, image },{ headers })
                    .then(res => {
                        
                            showForm.value = false
                            updatedPet (petId.value, petName, petDescription.value, petRace.value, petSpecies.value, petColor.value, petGender.value, petImg.value, petAge.value)
                        }
                    )
                    .catch(e => {
                        Swal.fire(
                            'Error de registro',
                            'Verifica los datos de usuario',
                            'warning'
                        )
                        console.log(e)
                    })
        }

        const getAdopts = () =>{
            axios.get(adoptUrl+'/findall')
                .then(res => {
                    adopts.value = res.data
                    console.log(  res.data )
                })
                .catch( e => {
                        console.log(e)
                    }
                ) 
        }


        //returns
        return{
            pets,
            newPets,
            pet,
            petId, 
            petName,
            petDescription, 
            petRace, 
            petSpecies,
             petColor, 
            petGender, 
            petImg, 
            petAge,
            races,
            adopts,
            user, 
            showForm,
            saveAdoptPer,
            addPet,
            getPets,
            adoptPet,
            addRace,
            getRaces,
            getAdopts,
        }
    }
)