export default class UsersMiddleware {
  static logger(req, res, next) {
      console.log(`USERS [${new Date()}] ${req.method} ${req.url}`);
      next();
  }

  static async validator(req, res, next){
    next()
        // throw 'Validation err'
  }
}
