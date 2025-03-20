import UsersDataService from "./users.data.service.js";

export class UsersController{
    static async getUsers(req, res, next){
            try {
              const users = await UsersDataService.getUsers();
              res.status(200).send(JSON.stringify(users));
            } catch (error) {
              res.status(500).send(JSON.stringify(error));
            }
          }
}