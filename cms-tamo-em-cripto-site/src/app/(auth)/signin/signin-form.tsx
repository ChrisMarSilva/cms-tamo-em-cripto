'use client'

import Link from "next/link"
import { useFormStatus, useFormState } from 'react-dom'
import { loginUserAction } from '@/lib/actions/auth-actions'

export function SigninForm() {
    const [state, action] = useFormState(loginUserAction, undefined)
    const { pending } = useFormStatus()

    return (
        <div className="w-full max-w-md">
          <div className="space-y-1">
            <p className="text-3xl font-bold">Login</p>
            <p>Insira seus dados para fazer login em sua conta</p>
            <p><Link href="/">Voltar</Link></p>
            <p><Link className="underline ml-2" href="signup">Criar Conta</Link></p>
          </div>
          <form action={action}>
              <div>
                  <label htmlFor="email">Email</label>
                  <input id="email" name="email" type="email" value="john@mail.com" placeholder="name@example.com" />
                  {state?.errors?.email && <p className="text-pink-500 text-xs italic mt-1 py-2">{state.errors.email}</p>}
              </div>
              <div>
                  <label htmlFor="password">Password</label>
                  <input id="password" name="password" type="password" value="changeme" placeholder="password"/>
                  {state?.errors?.password && (
                    <div>
                        <p>Password must:</p>
                        <ul>{state.errors.password.map((error) => (<li key={error} className="text-pink-500 text-xs italic mt-1 py-2">- {error}</li>))}</ul>
                    </div>
                  )}
              </div>
              <button aria-disabled={pending} type="submit">
                  {pending ? 'Enviando...' : 'Entrar'}
              </button>
            {state?.errors?.message && <p className="text-pink-500 text-md italic py-2">{state.errors.message}</p>}
          </form>
        </div>
    )
}


/*


"use client";

import Link from "next/link";
import { useFormState } from "react-dom";
import { loginUserAction } from "@/data/actions/auth-actions";
import {CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { ZodErrors } from "@/components/custom/ZodErrors";
import { StrapiErrors } from "@/components/custom/StrapiErrors";
import { SubmitButton } from "@/components/custom/SubmitButton";

const INITIAL_STATE = {
  zodErrors: null,
  strapiErrors: null,
  data: null,
  message: null,
};

export function SigninForm() {
  const [formState, formAction] = useFormState(loginUserAction, INITIAL_STATE);
  return (
    <div className="w-full max-w-md">
      <form action={formAction}>
        <Card>
          <CardHeader className="space-y-1">
            <CardTitle className="text-3xl font-bold">Sign In</CardTitle>
            <CardDescription>
              Enter your details to sign in to your account
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="identifier" name="identifier" type="text" value="john@mail.com" placeholder="username or email"/>
              <ZodErrors error={formState?.zodErrors?.identifier} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" name="password" type="password" value="changeme" placeholder="password"/>
              <ZodErrors error={formState.zodErrors?.password} />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col">
            <SubmitButton className="w-full" text="Sign In" loadingText="Loading"/>
            <StrapiErrors error={formState?.strapiErrors} />
          </CardFooter>
        </Card>
        <div className="mt-4 text-center text-sm">
          Dont have an account?
          <Link className="underline ml-2" href="signup">
            Sign Up
          </Link>
        </div>
      </form>
    </div>
  );
}


*/