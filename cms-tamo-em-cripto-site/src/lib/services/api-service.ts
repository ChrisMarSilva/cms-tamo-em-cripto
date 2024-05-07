import axios from "axios";
import { getSession } from "@/lib/actions/session";

const baseURL = process.env.NEXT_URL;

// "email": "john@mail.com",
// "password": "changeme"

const api = axios.create({
  baseURL: baseURL,
  timeout: 1000 * 30,
  headers: {
    "Cache-Control": "no-cache",
    "Content-Type": "application/json; charset=utf-8",
    Accept: "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

// request interceptor
api.interceptors.request.use(
  async (config) => {
    //console.info("api.interceptors.request.config");
    //console.info(config);

    const session = await getSession();
    if (!session && !session?.token) return config;

    // const accessTokenValid = Date.now() <= (session.exp ?? Date.now());
    // if (accessTokenValid) config.headers.Authorization =`Bearer ${session.token}`;
    // return config;

    config.headers.Authorization = `Bearer ${session.token}`;
    return config;
  },
  (error) => {
    console.error("api.interceptors.request.error");
    console.error(error);
    return Promise.reject(error);
  }
);

// response interceptor
api.interceptors.response.use(
  async (response) => {
    //console.info("api.interceptors.response");
    //console.info(response);
    return response;
  },
  (error) => {
    console.error("api.interceptors.response.error");
    console.error(error);
    return Promise.reject(error);
  }
);

export default api;
