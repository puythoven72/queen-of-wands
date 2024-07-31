
import axios from 'axios';
const ITEM_BASE_API_URL = "http://localhost:4000";
class emailAPI {
 




    sendMessage(messageForm) {
      // console.log(messageForm.get("from_email"));
      console.log(messageForm);
        //let auth_header = AuthServices.getAuthHeaders();
         return axios.post(ITEM_BASE_API_URL+"/sendMessage", {messageForm});
      }


}

export default new emailAPI;

