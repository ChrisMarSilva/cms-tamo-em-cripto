import axios from 'axios';

const baseURL = process.env.NEXT_PUBLIC_API_URL
//baseURL: process.env.NEXT_PUBLIC_MAIN_API,

const api = axios.create({
  baseURL: "https://api.escuelajs.co/api/v1/",
  timeout: 1000 * 30,
	//skipIntercept:false,
  withCredentials: true,
  responseType: 'json',
	headers: {
		//Authorization: localStorage.getItem('access_token')? 'Bearer ' + localStorage.getItem('access_token'): null,
    "Cache-Control": "no-cache",
		'Content-Type': 'application/json',
		'Accept': 'application/json',
    'Access-Control-Allow-Origin': '*', //  '*', // 'http://localhost:3000
    //   // 'Access-Control-Allow-Credentials': 'true',
    //   // 'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
    //   // 'Access-Control-Allow-Headers': 'Origin, Content-Type, Accept, Authorization, X-Auth-Token',
	},
});

api.interceptors.request.use(config => {
	// (response) => {
  //   //console.log("api.interceptors.response")
  //   //console.log(response)
	// 	return response;
	// },
  (err) => {
    //console.log("api.interceptors.error")
    //console.log(error)
    throw new Error(err);
	},
  //console.log("api.interceptors.config")
  //console.log(config)
  //return config
  (config) => {
    // config.headers.Authorization = `Bearer sometoken`;
    console.log("api.interceptors.config")
    console.log(config.headers.Authorization)
    return config;
  }
})

export default api;