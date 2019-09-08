
import Axios from "axios";



// Token gidip  gelince var  ikinci kez gidince  yok --------------------------------------------------


export async function getRequest(url) {
    let token = localStorage.getItem('token');
    var config = {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Authorization': token
        },
    };


    let incomingResponse = await fetch(url, config);
    debugger;
    // localStorage.setItem('token',incomingResponse.token)
    if (incomingResponse.status === 401) {
        return incomingResponse;
    }
    incomingResponse = await incomingResponse.json();
    return incomingResponse;


}


export async function postRequest(url, data) {
    let token = localStorage.getItem('token');
    var config = {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Authorization': token
        },
    };
   
    debugger;
    let incommingResponse = await Axios.post(url, data, config)
  .then(res=>{
      console.log(res);
  })
    debugger;
    if (incommingResponse.status === 401) {
        return incommingResponse;
    }
    // if (localStorage.getItem('token') === null){
    //     localStorage.setItem('token', incommingResponse.token)
    // }
    localStorage.setItem('token', incommingResponse.token)
    debugger;
    return incommingResponse.data;
}




