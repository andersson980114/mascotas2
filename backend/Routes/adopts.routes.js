import { Router } from "express";
import { getAllAdopts, getAdopt, createAdopt, updateAdopt, delAdopt } from "../Controllers/adopts.controller.js";

const router = Router();
// Ruta para obtenet todos las adopciones
router.get("/findall", getAllAdopts);

// Ruta para obtener una adopción
router.get("/find/:id", getAdopt);

// Ruta para crear una adopción
router.post("/new", createAdopt);

// Ruta para actualizar una adopción
router.patch("/update", updateAdopt);

// Ruta para eliminar una adopción
router.delete("/del/:id", delAdopt);

export default router;
