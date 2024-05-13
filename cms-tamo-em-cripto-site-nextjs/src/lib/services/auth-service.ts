'use server'

import api from './api-service'
import axios from 'axios'

interface RegisterUserProps {
	username: string
	email: string
	password: string
}

interface LoginUserProps {
	identifier: string
	password: string
}

export async function registerUserService(userData: RegisterUserProps) {
	try {
		// console.clear()
		const response = await api.post('auth/login', {
			email: userData.email,
			password: userData.password,
		})

		return response.data
	} catch (error: unknown) {
		console.error(
			error.response?.data?.error ||
				'Erro ao fazer o cadastro. Tente novamente.'
		)
		if (axios.isAxiosError(error)) {
			console.error(`ERRO-01: ${error.code} - ${error.message}`)
		} else {
			console.error(`ERRO-02: ${error}`)
		}
		throw error
	}
}

export async function loginUserService(userData: LoginUserProps) {
	try {
		const url = 'auth/login'
		const payload = {
			email: userData.identifier,
			password: userData.password,
		}
		const response = await api.post(url, payload)

		return response.data
	} catch (error: any) {
		console.error(
			error.response?.data?.error || 'Erro ao fazer o login. Tente novamente.'
		)
		if (axios.isAxiosError(error)) {
			console.error(`ERRO-01: ${error.code} - ${error.message}`)
		} else {
			console.error(`ERRO-02: ${error}`)
		}
		throw error
	}
}
