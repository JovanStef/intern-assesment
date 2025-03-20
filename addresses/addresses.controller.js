import AddressesDataService from "./addresses.data.service.js";

export default class AddressesController{
    static async getAddresses(req,res){
        try {
            const addresses = await AddressesDataService.getAddresses();
            res.status(200).send(JSON.stringify(addresses));
          } catch (error) {
            res.status(500).send(JSON.stringify(error));
          }
        
    }
}