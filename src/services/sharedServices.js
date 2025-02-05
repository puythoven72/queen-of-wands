import React from 'react';
import { useNavigate} from "react-router-dom";

class sharedServices extends React.Component {

    



    sendRsvp(data) {
       
      // console.log(messageForm.get("from_email"));
      console.log(data);
     //console.log("DAMN");
        //let auth_header = AuthServices.getAuthHeaders();
       //  return axios.post(ITEM_BASE_API_URL+"/sendMessage", {messageForm});
      }


}

export default new sharedServices;