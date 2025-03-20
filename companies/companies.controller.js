import CompaniesDataService from "./companies.data.service.js";

export default class CompaniesController{
    static async getCompanies(req, res){
        try {
            const companies = await CompaniesDataService.getCompanies();
            res.status(200).send(JSON.stringify(companies));
          } catch (error) {
            res.status(500).send(JSON.stringify(error));
          }
        
    }
}