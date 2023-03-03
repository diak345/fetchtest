import axios from "axios";
/*
const params ={
  domain: "djvd47.fdma.go.jp" , 
  code : 
}
*/
const statusURL = "https://dicaster.evs.jp/api/fetch?domain=djvd47.fdma.go.jp&code=00"
const username = "administrator"
const password = "fdma47"
const Fetchcmd = (async(cmd,data)=>{
fetch(statusURL,{
  method: 'GET',
  mode: 'cors',
  headers:{
    Authorization:"Basic" + btoa(`${username}:${password}`)
  
  }
}).then((response) =>{console.log(response)})

return "result????"
})

export default Fetchcmd