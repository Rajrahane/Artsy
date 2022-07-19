const axios = require('axios')
const Authentication = require('../auth/Authentication.js');

class Search{

    static async search(query,size){
        const token = await Authentication.getToken()
        const response = await axios.get('https://api.artsy.net/api/search',{
            headers: {'X-XAPP-Token': token},
            params: {
                q: query,
                size: size
            }
        })
        return response
    }
    static async artists(id){
        const token = await Authentication.getToken()
        const response = await axios.get('https://api.artsy.net/api/artists/'+(id),{
            headers: {'X-XAPP-Token': token}
        })
        return response
    }
}

module.exports=Search