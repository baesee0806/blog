import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

export function PostCardSkeleton() {
  return (
    <Card className="border border-border shadow-none bg-card h-full flex flex-col">
      <div className="rounded-t-md overflow-hidden">
        <Skeleton className="w-full h-[199px]" />
      </div>
      <CardHeader className="pb-3">
        <Skeleton className="h-8 w-3/4" />
      </CardHeader>
      <CardContent className="flex-1">
        <Skeleton className="h-4 w-full mb-2" />
        <Skeleton className="h-4 w-1/2 mb-2" />
        <Skeleton className="h-3 w-1/3" />
      </CardContent>
      <div className="px-6 pb-4 flex flex-wrap gap-2">
        <Skeleton className="h-5 w-16 rounded-full" />
        <Skeleton className="h-5 w-16 rounded-full" />
        <Skeleton className="h-5 w-16 rounded-full" />
      </div>
    </Card>
  );
}
