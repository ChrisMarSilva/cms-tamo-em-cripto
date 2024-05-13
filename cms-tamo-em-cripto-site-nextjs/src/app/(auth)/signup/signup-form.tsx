'use client'

import Link from 'next/link'
import { useFormState } from 'react-dom'
import {
	CardTitle,
	CardDescription,
	CardHeader,
	CardContent,
	CardFooter,
	Card,
} from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { ZodErrors } from '@/components/custom/ZodErrors'
import { StrapiErrors } from '@/components/custom/StrapiErrors'
import { SubmitButton } from '@/components/custom/SubmitButton'
import { registerUserAction } from '@/lib/actions/auth-actions'

const INITIAL_STATE = { data: null }

// value="John"
// value="john@mail.com"
// value="changeme"

export function SignupForm() {
	const [formState, formAction] = useFormState(
		registerUserAction,
		INITIAL_STATE
	)

	return (
		<div className="w-full max-w-md">
			<form action={formAction}>
				<Card>
					<CardHeader className="space-y-1">
						<CardTitle className="text-3xl font-bold">Criar Conta</CardTitle>
						<CardDescription>
							Insira seus dados para criar uma nova conta
						</CardDescription>
					</CardHeader>
					<CardContent className="space-y-4">
						<div className="space-y-2">
							<Label htmlFor="username">Username</Label>
							<Input
								id="username"
								name="username"
								type="text"
								placeholder="username"
							/>
							<ZodErrors error={formState?.zodErrors?.username} />
							{formState?.errors?.username && (
								<p className="text-pink-500 text-xs italic mt-1 py-2">
									{formState.errors.username}
								</p>
							)}
						</div>
						<div className="space-y-2">
							<Label htmlFor="email">Email</Label>
							<Input
								id="email"
								name="email"
								type="email"
								placeholder="name@example.com"
							/>
							<ZodErrors error={formState?.zodErrors?.email} />
							{formState?.errors?.email && (
								<p className="text-pink-500 text-xs italic mt-1 py-2">
									{formState.errors.email}
								</p>
							)}
						</div>
						<div className="space-y-2">
							<Label htmlFor="password">Password</Label>
							<Input
								id="password"
								name="password"
								type="password"
								placeholder="password"
							/>
							<ZodErrors error={formState?.zodErrors?.password} />
							{formState?.errors?.password && (
								<div>
									<p>Password must:</p>
									<ul>
										{formState.errors.password.map((error) => (
											<li
												key={error}
												className="text-pink-500 text-xs italic mt-1 py-2"
											>
												- {error}
											</li>
										))}
									</ul>
								</div>
							)}
						</div>
					</CardContent>
					<CardFooter className="flex flex-col">
						<SubmitButton
							className="w-full"
							text="Sign Up"
							loadingText="Loading"
						/>
						<StrapiErrors error={formState?.strapiErrors} />
						{formState?.errors?.message && (
							<p className="text-pink-500 text-md italic py-2">
								{formState.errors.message}
							</p>
						)}
					</CardFooter>
				</Card>
				<div className="mt-4 text-center text-sm">
					Ter uma conta?
					<Link className="underline ml-2" href="signin">
						Login
					</Link>
				</div>
				<div className="mt-1 text-center text-sm">
					<Link className="underline ml-2" href="/">
						Voltar
					</Link>
				</div>
			</form>
		</div>
	)
}
