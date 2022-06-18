import axios from "axios";

const BASE_URL = "https://stage.api.sloovi.com";



const TOKEN = JSON.parse(JSON.parse(localStorage.getItem('persist:root'))?.user ?? null)?.currentUser?.data.results.token || null;

console.log(TOKEN)



export const taskRequest = axios.create({
  baseURL: BASE_URL,
  headers : {
    'Authorization': 'Bearer ' + TOKEN,
    'Accept': 'application/json',
    'Content-Type': 'application/json', 
             
  },
});




export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers : {
    'Accept': 'application/json',
    'Content-Type': 'application/json', 
  },
});


