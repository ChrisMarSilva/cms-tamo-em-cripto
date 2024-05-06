import { getAuthToken } from "./get-token"
//import { getStrapiURL } from "@/lib/utils"
//import qs from "qs"
import api from "@/data/api"

// const query = qs.stringify({
//   populate: { image: { fields: ["url", "alternativeText"] } },
// })

export async function getUserMeLoader() {
  const authToken = await getAuthToken()
  if (!authToken) return { ok: false, data: null, error: null }

  //const baseUrl = getStrapiURL()

  //const url = new URL("/api/users/me", baseUrl)
  const url = new URL("https://api.escuelajs.co/api/v1/auth/profile")
  //url.search = query
  // console.log(url.href)
  
  try {

    // try {
    //   const config = {headers: {"Content-Type": "application/json", Authorization: `Bearer ${authToken}` }}
    //   const res = await api.get("auth/profile") 
    //   console.log(res.data)
    // } catch (error) {
    //   console.error(error)
    // }

    const response = await fetch(url.href, {
      method: "GET",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${authToken}`},
      cache: "no-cache",
    })

    const data = await response.json()
    if (data.error) return { ok: false, data: null, error: data.error }
    
    return { ok: true, data: data, error: null }
  } catch (error) {
    console.log(error)
    return { ok: false, data: null, error: error }
  }
}