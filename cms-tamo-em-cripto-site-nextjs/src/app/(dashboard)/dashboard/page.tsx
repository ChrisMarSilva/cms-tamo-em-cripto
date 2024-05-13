import Link from 'next/link'
import Image from 'next/image'
import {
	ChevronLeft,
	ChevronRight,
	Copy,
	CreditCard,
	File,
	Home,
	LineChart,
	ListFilter,
	MoreVertical,
	Package,
	Package2,
	PanelLeft,
	Search,
	Settings,
	ShoppingCart,
	Truck,
	Users2,
} from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { Button } from '@/components/ui/button'
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import {
	DropdownMenu,
	DropdownMenuCheckboxItem,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Input } from '@/components/ui/input'
import {
	Pagination,
	PaginationContent,
	PaginationItem,
} from '@/components/ui/pagination'
import { Progress } from '@/components/ui/progress'
import { Separator } from '@/components/ui/separator'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from '@/components/ui/tooltip'
import ModeToggle from '@/components/custom/ModeToggle'
import LogoutButton from '@/components/custom/LogoutButton'
// import { getUserSession } from '@/lib/actions/session'
// import { getUserMe } from "@/lib/services/user-service";

export default function Dashboard() {
	// const user = await getUserMe(); // await getUserSession()
	//console.log('iat', new Date(user?.iat * 1000))

	return (
		<>
			<TooltipProvider>
				<div className="flex min-h-screen w-full flex-col bg-muted/40">
					<aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
						<nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
							<Link
								href="#"
								className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
							>
								<Home className="h-4 w-4 transition-all group-hover:scale-110" />
								<span className="sr-only">Dashboard</span>
							</Link>

							{/* <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href="#"
                    className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                  >
                    <Home className="h-5 w-5" />
                    <span className="sr-only">Dashboard</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right">Dashboard</TooltipContent>
              </Tooltip> */}

							{/* <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href="#"
                    className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                  >
                    <ShoppingCart className="h-5 w-5" />
                    <span className="sr-only">Orders</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right">Orders</TooltipContent>
              </Tooltip> */}
							<Tooltip>
								<TooltipTrigger asChild>
									<Link
										href="/produtos"
										className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
									>
										<Package className="h-5 w-5" />
										<span className="sr-only">Produtos</span>
									</Link>
								</TooltipTrigger>
								<TooltipContent side="right">Produtos</TooltipContent>
							</Tooltip>
							{/* <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href="#"
                    className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                  >
                    <Users2 className="h-5 w-5" />
                    <span className="sr-only">Customers</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right">Customers</TooltipContent>
              </Tooltip> */}
							<Tooltip>
								<TooltipTrigger asChild>
									<Link
										href="/testes"
										className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
									>
										<LineChart className="h-5 w-5" />
										<span className="sr-only">Análise</span>
									</Link>
								</TooltipTrigger>
								<TooltipContent side="right">Análise</TooltipContent>
							</Tooltip>
						</nav>
						{/* <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href="/configuracoes"
                    className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                  >
                    <Settings className="h-5 w-5" />
                    <span className="sr-only">Configurações</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right">Configurações</TooltipContent>
              </Tooltip>
            </nav> */}
					</aside>
					<div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
						<header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
							<Breadcrumb className="hidden md:flex">
								<BreadcrumbList>
									<BreadcrumbItem>
										<BreadcrumbPage>Dashboard</BreadcrumbPage>
									</BreadcrumbItem>
								</BreadcrumbList>
							</Breadcrumb>

							<div className="relative ml-auto flex-1 md:grow-0">
								<ModeToggle />
							</div>

							<DropdownMenu>
								<DropdownMenuTrigger asChild>
									<Button
										variant="outline"
										size="icon"
										className="overflow-hidden rounded-full"
									>
										<Image
											src="/placeholder-user.webp"
											width={36}
											height={36}
											alt="Avatar"
											className="overflow-hidden rounded-full"
										/>
									</Button>
								</DropdownMenuTrigger>
								<DropdownMenuContent align="end">
									<DropdownMenuLabel>Minha Conta</DropdownMenuLabel>
									<DropdownMenuSeparator />
									<DropdownMenuItem>Configurações</DropdownMenuItem>
									<DropdownMenuItem>Suporte</DropdownMenuItem>
									<DropdownMenuSeparator />
									<DropdownMenuItem>
										<LogoutButton />
									</DropdownMenuItem>
								</DropdownMenuContent>
							</DropdownMenu>
						</header>
						<main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
							&nbsp;
						</main>
					</div>
				</div>
			</TooltipProvider>
		</>
	)
}
