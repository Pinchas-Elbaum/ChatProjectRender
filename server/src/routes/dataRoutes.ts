import { Router } from "express";
import { getAllUsers, getUserById } from "../controllers/dataController";


const dataRoutes = Router()

dataRoutes.get("/users", getAllUsers)
dataRoutes.get("/users/:id", getUserById)

export default dataRoutes