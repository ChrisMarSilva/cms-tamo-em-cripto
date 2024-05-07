'use server'

// import api from "./api"

const baseURL = process.env.NEXT_URL

interface RegisterUserProps {
    username: string
    email: string
    password: string
}

interface LoginUserProps {
    email: string // identifier
    password: string
}

export async function registerUserService(userData: RegisterUserProps) {
    try {

        const url = new URL("auth/login", baseURL)
        
        const response = await fetch(url.href, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ 'email': userData.email, 'password': userData.password }), // JSON.stringify({ ...userData }),
            cache: "no-cache",
        })

        return response.json()
    } catch (error) {
        console.error("Registration Service Error:", error)
        throw error
    }
}

export async function loginUserService(userData: LoginUserProps) {
    try {

        const url = new URL("auth/login", baseURL)

        const response = await fetch(url.href, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({ 'email': userData.email, 'password': userData.password }), // JSON.stringify({ ...userData }),
            cache: "no-cache",
        })

        return response.json()
    } catch (error) {
        console.error("Login Service Error:", error)
        throw error
    }
}
