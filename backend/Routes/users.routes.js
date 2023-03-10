import { Router } from "express";
import { getUsers, getUser, delUser, createUser, updateUser } from "../Controllers/users.controller.js";

const router = Router();

// ruta para obtner todos los usuarios
router.get(`/findall`, getUsers);

// ruta para obtener un usuario
router.get(`/find/:id`, getUser);

// ruta para crear un usuario
router.post(`/new`, createUser);

// ruta para eliminar un usuario
router.delete(`/del/:id`, delUser);

// ruta para actualizar un usuario
router.patch(`/update`, updateUser);

export default router;
