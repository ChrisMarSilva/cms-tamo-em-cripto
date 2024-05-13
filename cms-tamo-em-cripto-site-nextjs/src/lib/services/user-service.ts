'use server'

import api from './api-service'
import { User } from '@/lib/types/user'
//import { getSession } from "@/lib/actions/session";

export async function getUserMe() {
	try {
		//const session = await getSession();
		//if (!session) return { ok: false, data: null, error: null };

		// const config = { withCredentials: true,  headers: { Authorization: `Bearer ${session.token}` }, };
		const response = await api.get('auth/profile')

		const data = await response.data
		if (!data) return { ok: false, data: null, error: 'Erro geral' }
		if (data.error) return { ok: false, data: null, error: data.error }

		return { ok: true, data: data, error: null }
	} catch (error: any) {
		console.error(error)
		return { ok: false, data: null, error: error }
		return error.message
	}
}

export default async function getUser(userId: string): Promise<User> {
	try {
		const response = await api.get<User>(`users/${userId}`)

		const data = await response.data
		if (!data) return { ok: false, data: null, error: 'Erro geral' }
		if (data.error) return { ok: false, data: null, error: data.error }

		return { ok: true, data: data, error: null }
	} catch (error: any) {
		console.error(error)
		return { ok: false, data: null, error: error }
		throw new Error('Failed to fetch user')
	}
}
type UserProps = {
	id: number
	userId: number
	title: string
	body: string
}

export const getAllUsers = async (): Promise<UserProps[]> => {
	//export async function getAllUsers(): Promise<UserProps[]> {
	try {
		const response = await api.get<UserProps[]>('users')

		const data = await response.data
		if (!data) return { ok: false, data: null, error: 'Erro geral' }
		if (data.error) return { ok: false, data: null, error: data.error }

		return { ok: true, data: data, error: null }
	} catch (error: any) {
		console.error(error)
		return { ok: false, data: null, error: error }
		throw new Error('Failed to fetch data')
	}
}

type PostProps = {
	id: number
	userId: number
	title: string
	body: string
}

export const getUserPosts = async (userId: string): Promise<PostProps[]> => {
	//export async function getUserPosts(userId: string): Promise<PostProps[]> {
	try {
		const response = await api.get<PostProps[]>(`posts?userId=${userId}`)

		const data = await response.data
		if (!data) return { ok: false, data: null, error: 'Erro geral' }
		if (data.error) return { ok: false, data: null, error: data.error }

		return { ok: true, data: data, error: null }
	} catch (error: any) {
		console.error(error)
		return { ok: false, data: null, error: error }
		throw new Error('Failed to fetch data')
	}
}

// const postsData: Promise<PostProps[]> = getPosts();
// const posts = await postsData;

export const postUserFn = async (formData: any): Promise<UserProps> => {
	try {
		const body = { id: formData.id, name: formData.name, email: formData.email }
		const res = await api.post<User>('user', body)
		return res.data
	} catch (error) {
		console.error(error)
		throw new Error('Failed to fetch user')
	}
}

export const deleteUserFn = async (id: number): Promise<UserProps> => {
	try {
		const res = await api.delete<UserProps>(`user/${id}`)
		return res.data
	} catch (error) {
		console.error(error)
		throw new Error('Failed to fetch user')
	}
}
