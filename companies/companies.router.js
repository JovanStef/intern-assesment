import express from "express";
import CompaniesController from "./companies.controller.js";
const companiesRouter = express.Router()

companiesRouter.get('/',[CompaniesController.getCompanies])

export default companiesRouter