import { Card, CardTitle, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";

const dummyPosts = [
  {
    id: "1",
    title: "Next.js로 블로그 만들기",
    description: "Next.js 14와 Notion API를 활용한 경험 공유",
    date: "2025-02-25",
    tags: ["Next.js", "Notion"],
    url: "https://example.com/1",
  },
  {
    id: "2",
    title: "Tailwind CSS 팁과 트릭",
    description: "빠르고 효율적인 스타일링 방법",
    date: "2025-02-24",
    tags: ["Tailwind", "CSS"],
    url: "https://example.com/2",
  },
];

export default async function Home() {
  return (
    <main className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
        {dummyPosts.map((post) => (
          <a
            key={post.id}
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block group"
          >
            <Card className="border border-border shadow-none hover:shadow-md transition-shadow duration-300 bg-card h-full flex flex-col al">
              <div className="rounded-t-md overflow-hidden">
                <Image
                  src={"https://dummyimage.com/340x200/000/ffffff"}
                  alt=""
                  width={339}
                  height={199}
                  className=""
                />
              </div>
              <CardHeader className="pb-3">
                <CardTitle className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-sm text-muted-foreground line-clamp-2 mb-2">
                  {post.description}
                </p>
                <p className="text-xs text-muted-foreground/70">{post.date}</p>
              </CardContent>
              <div className="px-6 pb-4 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </Card>
          </a>
        ))}
      </div>
    </main>
  );
}
