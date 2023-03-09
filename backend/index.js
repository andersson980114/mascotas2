import "dotenv/config"  //No sé
import "./DataBase/conectDb.js"
import express from 'express'
import cors from 'cors'
import petRouter from './Routes/petRoute.js'
const app = express();


// const whiteList = ['http://localhost:8080', '*']

// app.use(cors({
//     origin: (origin, callback) => {
//         if (whiteList.includes(origin)) {
//           return callback(null, origin)
//         } else {
//           return callback("error cors origin: " + origin + " no autorizado")
//         }
//       }
// }))

app.use(express.json())

app.use('/api/v1/pet', petRouter)

 

const PORT = process.env.PORT || 5000 
app.listen(PORT, () => console.log("😎😎😉 http://localhost:" + PORT))
 