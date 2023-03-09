
import { defineStore } from 'pinia'
import {ref} from 'vue'
import axios from 'axios'

export  const useAppstore = defineStore('app', ()=>{
        //variables
        let  modal = ref(false)
        let fotos = ref([])
        let foto = ref("")
        
        //funciones
        const showModal = () =>{   
                modal.value= !modal.value 
            return modal
        }

        const getDogs = () => { 
             
            for(var i=0; i<6; i++){
                let cont=i
                axios.get('https://dog.ceo/api/breeds/image/random')
                .then(res => {
                        var data = res.data 
                        fotos.value.push({
                            'id': cont,
                            'foto': data.message
                        })
                    })
                    .catch( e => {
                            console.log(e)
                        }
                    )

            }
 
            return fotos
        }

        const getCats = () =>{   
            axios.get('https://api.thecatapi.com/v1/images/search?limit=5')
            .then(res => {
                    var data = res.data  
                    for(var i = 0; i < 6; i++){ 
                        fotos.value.push(
                            {
                            'id': i,
                            'foto': data[i].url
                            }
                        )
                    }
                })
                .catch( e => {
                        console.log(e)
                    }
                ) 
            return fotos
      
        }

        const selectFoto = (url) =>{
            foto.value=url
            console.log(foto.value)
        }

        //return
        return{
            modal,
            fotos,
            foto,
            showModal,
            getDogs,
            getCats,
            selectFoto,
        }
    }
)