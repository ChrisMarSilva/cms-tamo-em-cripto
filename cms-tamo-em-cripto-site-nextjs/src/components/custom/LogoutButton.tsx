import { LogOut } from 'lucide-react'
import { logoutAction } from '@/lib/actions/auth-actions'

export default function LogoutButton() {
	return (
		<form action={logoutAction}>
			<button type="submit" className="w-6 h-6 hover:text-primary">
				{/* <LogOut className="w-6 h-6 hover:text-primary" /> */}
				Logout
			</button>
		</form>
	)
}
