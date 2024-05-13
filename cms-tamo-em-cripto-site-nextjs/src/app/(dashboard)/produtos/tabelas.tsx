'use client'

import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table'
import {
	Pagination,
	PaginationContent,
	PaginationEllipsis,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from '@/components/ui/pagination'
import { Button } from '@/components/ui/button'
import {
	ChevronLeft,
	ChevronRight,
	ArrowDownUp,
	Grip,
	ChevronDown,
} from 'lucide-react'
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'
import { Input } from '@/components/ui/input'
import {
	DropdownMenu,
	DropdownMenuCheckboxItem,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
	useReactTable,
	ColumnDef,
	flexRender,
	getCoreRowModel,
	getPaginationRowModel,
	getSortedRowModel,
	ColumnFiltersState,
	SortingState,
	VisibilityState,
	getFilteredRowModel,
} from '@tanstack/react-table'
import { useState, useMemo } from 'react'

// columns.tsx
export type Payment = {
	//  interface Payment {
	albumId: number
	id: number
	title: string
	url: string
	thumbnailUrl: string
}

export const columns: ColumnDef<Payment>[] = [
	{
		accessorKey: 'id',
		header: ({ column }) => {
			return (
				<Button
					variant="ghost"
					onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
				>
					ID
				</Button>
			)
		},
		cell: ({ row }) => <div className="lowercase">{row.getValue('id')}</div>,
	},
	{
		accessorKey: 'title',
		header: ({ column }) => {
			return (
				<Button
					variant="ghost"
					onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
				>
					Título
					<ArrowDownUp className="ml-2 h-4 w-4" />
				</Button>
			)
		},
		cell: ({ row }) => <div className="lowercase">{row.getValue('title')}</div>,
	},
	{
		accessorKey: 'url',
		header: ({ column }) => {
			return (
				<Button
					variant="ghost"
					onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
				>
					URL
				</Button>
			)
		},
		cell: ({ row }) => <div className="lowercase">{row.getValue('url')}</div>,
	},
	{
		accessorKey: 'thumbnailUrl',
		header: 'URL Miniatura',
	},
	{
		id: 'actions',
		enableHiding: false,
		cell: ({ row }) => {
			const payment = row.original

			return (
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant="ghost" className="h-8 w-8 p-0">
							<span className="sr-only">Open menu</span>
							<Grip className="h-4 w-4" />
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent align="end">
						<DropdownMenuLabel>Actions</DropdownMenuLabel>
						<DropdownMenuItem
							onClick={() => navigator.clipboard.writeText(payment.id)}
						>
							Copy payment ID
						</DropdownMenuItem>
						<DropdownMenuSeparator />
						<DropdownMenuItem>View customer</DropdownMenuItem>
						<DropdownMenuItem>View payment details</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			)
		},
	},
]

//data-table.tsx

interface DataTableProps<TData, TValue> {
	columns: ColumnDef<TData, TValue>[]
	data: TData[]
}

type ColumnSort = {
	id: string
	desc: boolean
}

type SortingState = ColumnSort[]

export type PaginationState = {
	pageIndex: number
	pageSize: number
	currentPage: number
	totalPage: number
	startRecord: number
	endRecord: number
	totalRecords: number
}

export function DataTable<TData, TValue>({
	columns,
	data,
}: DataTableProps<TData, TValue>) {
	const [pagination, setPagination] = useState<PaginationState>({
		pageIndex: 0,
		pageSize: 10,
		currentPage: 1,
		totalPage: Math.ceil(data.length / 10),
		startRecord: 1,
		endRecord: 10,
		totalRecords: data.length,
	})
	const [columnOrder, setColumnOrder] = useState<string[]>([
		'id',
		'title',
		'url',
		'thumbnailUrl',
	])
	const [sorting, setSorting] = useState<SortingState>([])
	const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
	const [rowSelection, setRowSelection] = useState({})

	const table = useReactTable({
		data,
		columns,
		getCoreRowModel: getCoreRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		getSortedRowModel: getSortedRowModel(),
		getFilteredRowModel: getFilteredRowModel(),
		onSortingChange: setSorting,
		onColumnFiltersChange: setColumnFilters,
		onRowSelectionChange: setRowSelection,
		onColumnOrderChange: setColumnOrder,
		manualPagination: false,
		manualSorting: true,
		autoResetPageIndex: true,
		enableColumnFilters: true,
		enableColumnResizing: true,
		enableMultiSort: true,
		sortDescFirst: true,
		onPaginationChange: async (updater) => {
			if (typeof updater !== 'function') return

			const newPageInfo = await updater(table.getState().pagination)
			setPagination(() => newPageInfo)

			const totalRecords = data.length || 0
			const pageIndex = newPageInfo?.pageIndex
			const pageSize = newPageInfo?.pageSize || 10
			const currentPage = pageIndex + 1 || 1
			const totalPage = Math.ceil(totalRecords / pageSize) //  (totalRecords + pageSize - 1) / pageSize | 0
			const startRecord = pageIndex * pageSize + 1 // (currentPage - 1) * pageSize + 1;
			const endRecord = Math.min(startRecord + pageSize - 1, totalRecords)

			setPagination({
				pageIndex: pageIndex,
				pageSize: pageSize,
				currentPage: currentPage,
				totalPage: totalPage,
				startRecord: startRecord,
				endRecord: endRecord,
				totalRecords: totalRecords,
			})
		},
		onSortingChange: (data) => {
			setSorting(data)
			onSort?.(data)
		},
		state: {
			columnOrder,
			pagination,
			sorting,
			columnFilters,
			rowSelection,
		},
	})

	return (
		<>
			<div className="w-full">
				<Card x-chunk="dashboard-05-chunk-3">
					<CardHeader className="px-7">
						<CardTitle>Produtos</CardTitle>
						<CardDescription>Pedidos recentes...</CardDescription>
					</CardHeader>
					<CardContent className="p-6 text-sm">
						<div className="flex items-center py-4">
							<Input
								placeholder="Filter titulo..."
								value={
									(table.getColumn('title')?.getFilterValue() as string) ?? ''
								}
								onChange={(event) =>
									table.getColumn('title')?.setFilterValue(event.target.value)
								}
								className="max-w-sm"
							/>
						</div>
						<div className="rounded-md border">
							<Table>
								<TableHeader>
									{table.getHeaderGroups().map((headerGroup) => (
										<TableRow key={headerGroup.id}>
											{headerGroup.headers.map((header) => {
												return (
													<TableHead
														className="hidden sm:table-cell"
														key={header.id}
													>
														{header.isPlaceholder
															? null
															: flexRender(
																	header.column.columnDef.header,
																	header.getContext()
																)}
													</TableHead>
												)
											})}
										</TableRow>
									))}
								</TableHeader>
								<TableBody>
									{table.getRowModel().rows?.length ? (
										table.getRowModel().rows.map((row) => (
											<TableRow
												key={row.id}
												data-state={row.getIsSelected() && 'selected'}
												className={row.getIsSelected() && 'bg-accent'}
											>
												{row.getVisibleCells().map((cell) => (
													<TableCell
														className="hidden sm:table-cell"
														key={cell.id}
													>
														{flexRender(
															cell.column.columnDef.cell,
															cell.getContext()
														)}
													</TableCell>
												))}
											</TableRow>
										))
									) : (
										<TableRow>
											<TableCell
												colSpan={columns.length}
												className="h-24 text-center"
											>
												Sem dados.
											</TableCell>
										</TableRow>
									)}
								</TableBody>
							</Table>
						</div>

						{/* <div className="flex items-center justify-end space-x-2 py-4">
							<div className="flex-1 text-xs text-muted-foreground">
								Página: {pagination?.currentPage}/{pagination?.totalPage} -
								Mostrando {pagination?.startRecord} a {pagination?.endRecord} de{' '}
								{pagination?.totalRecords} registros
							</div>
							<div className="space-x-2">
								<Button
									variant="outline"
									size="sm"
									onClick={() => table.previousPage()}
									disabled={!table.getCanPreviousPage()}
								>
									Anterior
								</Button>
								<Button
									variant="outline"
									size="sm"
									onClick={() => table.nextPage()}
									disabled={!table.getCanNextPage()}
								>
									Próximo
								</Button>
							</div>
						</div> */}
					</CardContent>
					<CardFooter className="flex flex-row items-center border-t bg-muted/50 px-6 py-3">
						<div className="flex items-center justify-end space-x-2 py-4">
							<div className="flex-1 text-xs text-muted-foreground">
								Página: {pagination?.currentPage}/{pagination?.totalPage} -
								Mostrando {pagination?.startRecord} a {pagination?.endRecord} de{' '}
								{pagination?.totalRecords} registros
							</div>
						</div>
						<Pagination className="ml-auto mr-0 w-auto">
							<PaginationContent className="space-x-1">
								<PaginationItem>
									<Button
										size="icon"
										variant="outline"
										className="h-6 w-6"
										onClick={() => table.firstPage()}
										disabled={!table.getCanPreviousPage()}
									>
										{'<<'}
									</Button>
								</PaginationItem>
								<PaginationItem>
									<Button
										size="icon"
										variant="outline"
										className="h-6 w-6"
										onClick={() => table.previousPage()}
										disabled={!table.getCanPreviousPage()}
									>
										<ChevronLeft className="h-3.5 w-3.5" />
										<span className="sr-only">Anterior</span>
									</Button>
								</PaginationItem>
								<PaginationItem>
									<Button
										size="icon"
										variant="outline"
										className="h-6 w-6"
										onClick={() => table.nextPage()}
										disabled={!table.getCanNextPage()}
									>
										<ChevronRight className="h-3.5 w-3.5" />
										<span className="sr-only">Próximo</span>
									</Button>
								</PaginationItem>
								<PaginationItem>
									<Button
										size="icon"
										variant="outline"
										className="h-6 w-6"
										onClick={() => table.lastPage()}
										disabled={!table.getCanNextPage()}
									>
										{'>>'}
									</Button>
								</PaginationItem>
							</PaginationContent>
						</Pagination>

						{/* <Select
						onChange={(e) => {
							table.setPageSize(Number(e.target.value))
						}}
					>
						<SelectTrigger className="w-[180px]">
							<SelectValue placeholder="10" />
						</SelectTrigger>
						<SelectContent>
							{[10, 20, 30, 40, 50].map((pageSize) => (
								<SelectItem key={pageSize} value={pageSize}>
									{pageSize}
								</SelectItem>
							))}
						</SelectContent>
					</Select> */}

						{/* <select
						value={table.getState().pagination.pageSize}
						onChange={(e) => {
							table.setPageSize(Number(e.target.value))
						}}
					>
						{[10, 20, 30, 40, 50].map((pageSize) => (
							<option key={pageSize} value={pageSize}>
								{pageSize}
							</option>
						))}
					</select> */}
					</CardFooter>
				</Card>
			</div>
		</>
	)
}
