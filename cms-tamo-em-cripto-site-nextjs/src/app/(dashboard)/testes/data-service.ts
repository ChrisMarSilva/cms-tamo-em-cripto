'use client'

import axios from 'axios'

interface PhotosProps {
	albumId: number
	id: number
	title: string
	url: string
	thumbnailUrl: string
}

const getRandomInt = (min, max) => {
	const minCeiled = Math.ceil(min)
	const maxFloored = Math.floor(max)
	return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled)
}

export const GetPhotos = async () => {
	try {
		if (getRandomInt(1, 2) == 1) {
			const url = `https://jsonplaceholder.typicode.com/photos/${getRandomInt(1, 5000)}`
			const response = await axios.get<PhotosProps>(url)
			return [response.data]
		}

		const url = 'https://jsonplaceholder.typicode.com/photos'
		const response = await axios.get<PhotosProps[]>(url)
		return response.data
	} catch (error: unknown) {
		console.error(error)
	}
}
