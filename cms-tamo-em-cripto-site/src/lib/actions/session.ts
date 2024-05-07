import 'server-only'

import { cache } from 'react'
import { NextRequest, NextResponse } from "next/server"
import { cookies } from 'next/headers'
import { SignJWT, jwtVerify } from 'jose'
import { jwtDecode } from "jwt-decode"

const secretKey = process.env.NEXT_SESSION_SECRET
const encodedKey = new TextEncoder().encode(secretKey)

export async function encrypt(payload: any) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('7d') // "10 sec from now"
    .sign(encodedKey)
}

export async function decrypt(session: string | undefined = ''): Promise<any> {
  try {
    const { payload } = await jwtVerify(session, encodedKey, { algorithms: ['HS256'] })
    return payload
  } catch (error) {
    console.log('Failed to verify session')
  }
}

export async function getSession() {
  //const cookie = request.cookies.get("session")?.value
  const cookie = cookies().get('session')?.value
  if (!cookie) return null

  const session = await decrypt(cookie)
  if (!session) return null

  return session
}

export async function createSession(token: string) {
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
  const session = await encrypt({ token, expiresAt }) // JSON.stringify(token)

  cookies().set('session', session, {
    expires: expiresAt,
    maxAge: 60 * 60 * 24 * 7, // 1 week
    path: '/',
    domain: process.env.HOST ?? "localhost",
    httpOnly: true,
    secure: true, // process.env.NODE_ENV === "production",
    sameSite: 'lax',
  })
}

export async function updateSession(request: NextRequest) {
  const session = await getSession()
  if (!session) return null

  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
  session.expires = expiresAt

  const response = NextResponse.next()
  response.cookies.set({
    name: "session", 
    value: await encrypt(session), 
    expires: session.expires,
    maxAge: 60 * 60 * 24 * 7, // 1 week
    path: "/", 
    domain: process.env.HOST ?? "localhost",
    httpOnly: true, 
    secure: true, 
    sameSite: 'lax',
  })
  
  return response

  
  // cookies().set('session', session, {
  //   expires: expiresAt,
  //   maxAge: 60 * 60 * 24 * 7, // 1 week
  //   path: '/',
  //   domain: process.env.HOST ?? "localhost",
  //   httpOnly: true,
  //   secure: true, // process.env.NODE_ENV === "production",
  //   sameSite: 'lax',
  // })
}

export function deleteSession() {
  //cookies().set("session", "", { ...config, maxAge: 0, expires: new Date(0) });
  cookies().delete('session')
}

export async function verifySession() { // export const verifySession = cache(async () => {
  const session = await getSession()
  if (!session || !session?.token) return null // redirect('/login')

  return { isAuth: true, token: session.token }
} // })

export async function getUserSession() { // export const getUserSession = cache(async () => {
  const session = await verifySession()
  if (!session || !session?.token) return null

  const token = session?.token
  return jwtDecode(token)
} // })
