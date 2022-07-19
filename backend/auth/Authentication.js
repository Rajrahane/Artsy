const axios = require('axios')

class Authentication{

    constructor(){
        this.token=null
        this.expiry=null
    }

    static async getToken(){
        if(!this.token || (!this.expiry || this.expiry < Date.now() ) ){
            const response = await axios.post('https://api.artsy.net/api/tokens/xapp_token',{
                client_id : '5febbe0e2960c95e7f9d',
                client_secret : 'a6ec174b97b8f9364603df80205d03bb'
            })
            this.token = response.data.token
            this.expiry= Date.parse(response.data.expires_at)
        }
        return this.token
    }
}
module.exports=Authentication