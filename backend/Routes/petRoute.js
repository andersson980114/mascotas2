import express  from "express";
import { body } from "express-validator";
import { addPet, deletePet, findPet, upadtePet,findAllPet } from "../Controllers/petControllers.js";
import { validationResults } from "../Middlewares/petVali.js";

const router = express.Router()


router.post('/add', [
        body('name', 'Formato incorrecto')
            .trim()
            .isLength({min:2}),
        
        body('description', 'Formato incorrecto')
            .trim()
            .isLength({min:2}),

    ],
    validationResults,
    addPet
)



router.get('/findpet/:id', findPet)

router.put('/updatepet', upadtePet)

router.delete('/deletepet/:id', deletePet)

router.get('/findallpets', findAllPet)

export default router;