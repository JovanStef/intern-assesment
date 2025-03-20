import express from "express";
import AddressesController from "./addresses.controller.js";
const addressesRouter = express.Router()

addressesRouter.get('/', [AddressesController.getAddresses])

export default addressesRouter