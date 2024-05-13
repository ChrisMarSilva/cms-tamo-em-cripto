import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

export function convertLbsToKg(lbs) {
	return Number((lbs / 2.205).toFixed(0))
}
