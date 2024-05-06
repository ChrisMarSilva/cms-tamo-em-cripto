import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link className="underline ml-2" href="signin">Login</Link>
      <Link className="underline ml-2" href="signup">Criar Conta</Link>
    </div>
  )
}
