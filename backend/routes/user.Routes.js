export { fetchUsers, getAllUsers };

import express from "express";
import { fetchUsers, getAllUsers } from "../controllers/controller.js";

const routes = express.Router();


routes.get("/list-users", getAllUsers);

export default routes;