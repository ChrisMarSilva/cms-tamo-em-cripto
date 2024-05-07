"use server";

import api from "./api-service";
//import { getSession } from "@/lib/actions/session";

export async function getUserMe() {
  try {
    //const session = await getSession();
    //if (!session) return { ok: false, data: null, error: null };

    // const config = { withCredentials: true,  headers: { Authorization: `Bearer ${session.token}` }, };
    const response = await api.get("auth/profile");

    const data = await response.data;
    if (!data) return { ok: false, data: null, error: "Erro geral" };
    if (data.error) return { ok: false, data: null, error: data.error };

    return { ok: true, data: data, error: null };
  } catch (error) {
    console.log(error);
    return { ok: false, data: null, error: error };
  }
}
