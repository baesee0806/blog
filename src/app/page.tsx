import { Card, CardTitle, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { fetchNotionData } from "@/lib/notion";
import Image from "next/image";

export default async function Home() {
  const data = await fetchNotionData();

  return (
    <main className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
        {data.map((post) => (
          <a
            key={post.id}
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block group"
          >
            <Card className="border border-border shadow-none hover:shadow-md transition-shadow duration-300 bg-card h-[400px] flex flex-col al">
              <div className="rounded-t-md overflow-hidden h-[199px]">
                {post?.coverImage ? (
                  <Image
                    src={post.coverImage}
                    alt=""
                    width={339}
                    height={199}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-[339px] h-[199px] bg-gray-200" />
                )}
              </div>
              <CardHeader className="pb-3">
                <CardTitle className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-sm text-muted-foreground line-clamp-2 mb-2">
                  {post?.subheading}
                </p>
                <p className="text-xs text-muted-foreground/70">{post.date}</p>
              </CardContent>
              <div className="px-6 pb-4 flex flex-wrap gap-2">
                {post.tags.map((tag: any) => (
                  <Badge key={tag} variant="outline">
                    #{tag}
                  </Badge>
                ))}
              </div>
            </Card>
          </a>
        ))}
      </div>
    </main>
  );
}
