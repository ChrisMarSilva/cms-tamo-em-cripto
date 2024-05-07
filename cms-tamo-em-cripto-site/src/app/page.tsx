import Link from "next/link"

export default async function Home() {
  return (
    <>
      <h1>Home</h1>
      <p><Link className="underline ml-2" href="signin">Login</Link></p>
      <p><Link className="underline ml-2" href="signup">Criar Conta</Link></p>
    </>
  )
}