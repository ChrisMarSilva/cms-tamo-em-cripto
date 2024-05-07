'use server'

// import api from "./api"
import { getSession } from "@/lib/actions/session"

const baseURL = process.env.NEXT_URL

export async function getUserMe() {
    try {
        const session = await getSession()
        if (!session) return { ok: false, data: null, error: null }

        const url = new URL("auth/profile", baseURL)

        const response = await fetch(url.href, {
            method: "GET",
            headers: { "Content-Type": "application/json", Authorization: `Bearer ${session}`},
            cache: "no-cache",
        })

        const data = await response.json()
        if (!data) return { ok: false, data: null, error: "Erro geral" }
        if (data.error) return { ok: false, data: null, error: data.error }

        return { ok: true, data: data, error: null }
    } catch (error) {
        console.log(error)
        return { ok: false, data: null, error: error }
    }
}