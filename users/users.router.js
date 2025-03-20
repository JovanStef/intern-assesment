import express from "express";
import { UsersController } from "./users.controller.js";
import UsersMiddleware from "./users.middleware.js";

const usersRouter = express.Router()

usersRouter.get("/", [UsersMiddleware.logger ,UsersMiddleware.validator, UsersController.getUsers ])

export default usersRouter