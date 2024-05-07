This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.




npm i -g npm@latest
npm i -g yarn

npx create-next-app@latest
cms-tamo-em-cripto-site
cms-tamo-em-cripto-site-auth

npm run dev
npm run dev -- -p 8080
yarn dev

----------------------------------------------------

npm i jose
npm i bcrypt
npm i axios
npm i zod
npm i jwt-decode
npm i cn -g
yarn lint
npm i next-themes
npm i lucide-react
npm i uuid --save 
npm i lodash --save 
npm i moment --save 

npm i @tanstack/react-table

npm i @tanstack/react-query
npm i -D @tanstack/eslint-plugin-query

npx shadcn-ui@latest init
npx shadcn-ui@latest add

npx shadcn-ui@latest add button
npx shadcn-ui@latest add alert-dialog
npx shadcn-ui@latest add avatar
npx shadcn-ui@latest add badge
npx shadcn-ui@latest add calendar
npx shadcn-ui@latest add card
npx shadcn-ui@latest add checkbox
npx shadcn-ui@latest add command
npx shadcn-ui@latest add table
npx shadcn-ui@latest add dialog
npx shadcn-ui@latest add drawer
npx shadcn-ui@latest add dropdown-menu
npx shadcn-ui@latest add hover-card
npx shadcn-ui@latest add input
npx shadcn-ui@latest add label
npx shadcn-ui@latest add menubar
npx shadcn-ui@latest add navigation-menu
npx shadcn-ui@latest add pagination
npx shadcn-ui@latest add popover
npx shadcn-ui@latest add progress
npx shadcn-ui@latest add radio-group
npx shadcn-ui@latest add scroll-area
npx shadcn-ui@latest add select
npx shadcn-ui@latest add separator
npx shadcn-ui@latest add skeleton
npx shadcn-ui@latest add sonner
npx shadcn-ui@latest add switch
npx shadcn-ui@latest add tabs
npx shadcn-ui@latest add textarea
npx shadcn-ui@latest add toast
npx shadcn-ui@latest add toggle
npx shadcn-ui@latest add toggle-group
npx shadcn-ui@latest add tooltip
npx shadcn-ui@latest add breadcrumb
npx shadcn-ui@latest add sheet

----------------------------------------------------



'use client'
import { useState, } from 'react'
import axios from 'axios'

const Home = () => {
  const [data, setData] = useState(null)

  const handleClickTeste01 = async () => {
    try {
      setData(null)
      console.clear()
      const response = await api.get('moedas')
      return response.data
      setData()
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        console.error(`ERRO-01: ${error.code} - ${error.message}`)
      } else {
        console.error(`ERRO-02: ${error}`)
      }
    }
  }


<button onClick={handleClickTeste01}>Teste01</button>
<p>{JSON.stringify(data)}</p>



----------------------------------------------------

const Login = () => {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    //const formData = new FormData(e.currentTarget)
    //const email = formData.get('email')
    //const password = formData.get('password')

    try {
      const response = await axios.post('https://sua-api-externa/login', {email, password}) //  JSON.stringify({ username, password }) // headers: {  'Content-Type': 'application/json' }

      if (response.data.success) {
        router.push('/home') //window.location.href = '/home'
      } else {
        setError(response.data.message)
        console.error(response?.data?.message || 'Login falhou: ')
      }
    } catch (error) {
      console.error(error)
      setError(err.response?.data?.error || 'Erro ao fazer login. Tente novamente.')
    }
  }


----------------------------------------------------
import { serialize } from 'cookie'
import type { NextApiRequest, NextApiResponse } from 'next'
import { encrypt } from '@/app/lib/session'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const sessionData = req.body
    const encryptedSessionData = encrypt(sessionData)

    const cookie = serialize('session', encryptedSessionData, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60 * 24 * 7, // One week
        path: '/',
    })
    
    res.setHeader('Set-Cookie', cookie)
    res.status(200).json({ message: 'Successfully set cookie!' })
}



----------------------------------------------------


async function getData() {
  const res = await fetch('https://api.example.com/...')
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}
 
export default async function Page() {
  const data = await getData()
 
  return <main></main>
}



import { NextResponse } from "next/server";

try {
 const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ error: "Not authorized" }, { status: 400 });
    }


if (!doesUserExist) {
      return NextResponse.json(
        { error: "User doesn't exist" },
        { status: 400 }
      );
    }

  return NextResponse.json({ success: "Email changed" }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }


 try {
    const { email, password } = await request.json();

    const bcrypt = require("bcrypt");

    const hashedPassword = await bcrypt.hash(password, 10);

    const client = await clientPromise;
    const db = client.db();

    const createAccount = await db
      .collection("users")
      .insertOne({ email: email, password: hashedPassword });

    return NextResponse.json({ success: "Account created" }, { status: 200 })
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }




const page = async () => {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  const user = session?.user

  return (
    <main className="max-w-7xl mx-auto my-12 space-y-5">
        <h1 className="text-2xl font-semibold">Welcome back, { user?.email }</h1>
        <DashboardForm email={ session?.user?.email as string }/>
    </main>
  );
};



import { useRouter } from "next/navigation";a
  const router = useRouter();

    if (!response?.error) {
        router.push("/dashboard");
    }


  async function onSubmit(values: z.infer<typeof formSchema>) {

if (data.error) {
      toast.error(data.error);
      return;
    }
    reloadSession();

    toast.success("Email changed!");
  }


Q





----------------------------------------------------