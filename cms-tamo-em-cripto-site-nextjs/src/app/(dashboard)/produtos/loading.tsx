import { Skeleton } from '@/components/ui/skeleton'

const SkeletonDemo = () => {
	return (
		<>
			<div className="flex items-center space-x-4">
				<Skeleton className="h-12 w-12 rounded-full" />
				<div className="space-y-2">
					<Skeleton className="h-4 w-[250px]" />
					<Skeleton className="h-4 w-[200px]" />
				</div>
			</div>
		</>
	)
}

const SkeletonCard = () => {
	return (
		<>
			<div className="flex flex-col space-y-3">
				<Skeleton className="h-[125px] w-[250px] rounded-xl" />
				<div className="space-y-2">
					<Skeleton className="h-4 w-[250px]" />
					<Skeleton className="h-4 w-[200px]" />
				</div>
			</div>
		</>
	)
}

export default function Loading() {
	return (
		<>
			<div className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
				<div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
					<SkeletonDemo />
					<SkeletonDemo />
					<SkeletonDemo />
					<SkeletonDemo />
				</div>
				<div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
					<SkeletonCard />
					<SkeletonCard />
					<SkeletonCard />
					<SkeletonCard />
				</div>
				<div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
					<SkeletonDemo />
					<SkeletonDemo />
					<SkeletonDemo />
					<SkeletonDemo />
				</div>
				<div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
					<SkeletonCard />
					<SkeletonCard />
					<SkeletonCard />
					<SkeletonCard />
				</div>
			</div>
		</>
	)
}
