import express  from "express";
import { body } from "express-validator";
import { addRace, deleteRace, findRace, upadteRace,findAllRaces } from "../Controllers/raceControllers.js";
import { validationResults } from "../Middlewares/raceVali.js";

const router = express.Router()


router.post('/add', [
        body('race', 'Formato incorrecto')
            .trim()
            .isLength({min:5}),

    ],
    validationResults,
    addRace
)



router.get('/findrace', findRace)

router.put('/updaterace', upadteRace)

router.delete('/deleterace/:id', deleteRace)

router.get('/findallraces', findAllRaces)

export default router;