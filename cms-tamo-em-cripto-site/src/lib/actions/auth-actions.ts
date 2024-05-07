"use server"

import bcrypt from 'bcrypt'
import { z } from 'zod'
import { redirect } from "next/navigation"
import { createSession, deleteSession } from './session'
import {registerUserService, loginUserService} from "@/lib/services/auth-service"

// export type FormState =
//   | {
//       errors?: {
//         name?: string[]
//         email?: string[]
//         password?: string[]}
//       message?: string
//     }
//   | undefined

const schemaRegister = z.object({
  username: z.string().min(3).max(50, {message: "Username must be between 3 and 50 characters" }).trim(),
  email: z.string().email({message: "Please enter a valid email address"}).trim(),
  password: z.string().min(6).max(100, {message: "Password must be between 6 and 100 characters" }).trim(),
  //password: z.string().min(8, { message: 'Be at least 8 characters long' }).regex(/[a-zA-Z]/, { message: 'Contain at least one letter.' }).regex(/[0-9]/, { message: 'Contain at least one number.' }).regex(/[^a-zA-Z0-9]/, {message: 'Contain at least one special character.'}).trim(),
})

const schemaLogin = z.object({
  //identifier: z.string().min(3, {message: "Identifier must have at least 3 or more characters"}).max(20, {message: "Please enter a valid username or email address"}).trim(),
  email: z.string().email({message: "Please enter a valid email address"}).trim(),
  password: z.string().min(6, {message: "Password must have at least 6 or more characters"}).max(100, {message: "Password must be between 6 and 100 characters",}).trim(),
})

export async function registerUserAction(prevState: any, formData: FormData) {
  // 1. Validate form fields
  const validatedFields = schemaRegister.safeParse({
      username: formData.get("username"),
      email: formData.get("email"),
      password: formData.get("password"),
  })

  // If any form fields are invalid, return early
  if (!validatedFields.success) return {errors: validatedFields.error.flatten().fieldErrors}  //return { ...prevState, zodErrors: validatedFields.error.flatten().fieldErrors, strapiErrors: null, message: "Missing Fields. Failed to Register."}

  // 2. Prepare data for insertion into database (e.g. Hash the user's password before storing it )
  //const { name, email, password } = validatedFields.data
  //const hashedPassword = await bcrypt.hash(password, 10)

  // 3. Insert the user into the database or call an Auth Library's API
  const response = await registerUserService(validatedFields.data)
  if (!response) return {errors: "Ops! Something went wrong. Please try again."} // return { ...prevState, strapiErrors: null, zodErrors: null, message: "Ops! Something went wrong. Please try again."}
  if (response.error) return {errors: response.error} // return { ...prevState, strapiErrors: responseData.error, zodErrors: null, message: "Failed to Register."}
  if (response.message) return {errors: response.message} // return { ...prevState, strapiErrors: responseData.message, zodErrors: null, message: "Failed to Register."}

  // 4. Create user session'
  await createSession(response.access_token)

  // 5. Redirect user
  redirect('/dashboard')
}

export async function loginUserAction(prevState: any, formData: FormData) {
  // 1. Validate form fields
  const validatedFields = schemaLogin.safeParse({
    email: formData.get("email"), // identifier: formData.get("identifier"),
    password: formData.get("password"),
  })
  

  // If any form fields are invalid, return early
  if (!validatedFields.success) return {errors: validatedFields.error.flatten().fieldErrors}  //return {...prevState, zodErrors: validatedFields.error.flatten().fieldErrors, message: "Missing Fields. Failed to Login."}

  // 2. Prepare data for insertion into database (e.g. Hash the user's password before storing it )
  //const { name, email, password } = validatedFields.data
  //const hashedPassword = await bcrypt.hash(password, 10)

    // 3. Insert the user into the database or call an Auth Library's API
    const response = await loginUserService(validatedFields.data)
    
    if (!response) return {errors: "Ops! Something went wrong. Please try again."} // return { ...prevState, strapiErrors: responseData.error, zodErrors: null, message: "Ops! Something went wrong. Please try again."}
    if (response.error) return {errors: response.error} // return { ...prevState, strapiErrors: responseData.error, zodErrors: null, message: "Failed to Login."}
    if (response.message) return {errors: response.message} // return { ...prevState, strapiErrors: responseData.message, zodErrors: null, message: "Failed to Login."}

  // 4. Create user session'
  await createSession(response.access_token)

  // 5. Redirect user
  redirect('/dashboard')
}

export async function logoutAction() {
  deleteSession()
  redirect("/")
}
