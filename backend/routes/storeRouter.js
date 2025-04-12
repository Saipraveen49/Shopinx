import express from "express";
import { getStores } from "../controller/storeController.js";


const storeRouter = express.Router()

storeRouter.get('/list', getStores);

export default storeRouter;