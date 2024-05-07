import Link from "next/link"
import { getUserSession } from '@/lib/actions/session'
import { logoutAction } from '@/lib/actions/auth-actions'
// import { getUserMe } from "@/lib/services/user-service"
// import { LogoutButton } from "@/components/custom/LogoutButton"

export default async function Dashboard() {
  const user = await getUserSession()

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <h1>Dashboard</h1>
      <br />

      <form action={logoutAction}>
        <button type="submit">LogOut</button>
      </form>

      <br />
      <pre>{JSON.stringify(user, null, 2)}</pre>
      
      {/* 
        <p>id: {user?.data?.id}</p>
        <p>email: {user?.data?.email}</p>
        <p>password: {user?.data?.password}</p>
        <p>name: {user?.data?.name}</p>
        <p>role: {user?.data?.role}</p>
        <p>avatar: {user?.data?.avatar}</p>
        <p>creationAt: {user?.data?.creationAt}</p>
        <p>updatedAt: {user?.data?.updatedAt}</p>
        if (userRole === 'admin') return <AdminDashboard />
        else if (userRole === 'user') return <UserDashboard />
        else redirect('/login')
      */}

    </div>
  )
}
