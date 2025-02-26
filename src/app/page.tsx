import { Card, CardTitle, CardContent, CardHeader } from "@/components/ui/card";
import { Noto_Sans } from "next/font/google";

const notoSans = Noto_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});

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
    <div className={`${notoSans.className} min-h-screen bg-background`}>
      {/* 헤더 */}
      <header className="fixed top-0 left-0 right-0 bg-background py-6 border-b border-border z-10">
        <h1 className="text-3xl font-light text-center text-foreground tracking-wide">
          Velog-style Blog
        </h1>
      </header>

      {/* 메인 콘텐츠 */}
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
              <Card className="border border-border shadow-none hover:shadow-md transition-shadow duration-300 bg-card h-full flex flex-col">
                <CardHeader className="pb-3">
                  <CardTitle className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-2">
                    {post.description}
                  </p>
                  <p className="text-xs text-muted-foreground/70">
                    {post.date}
                  </p>
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
    </div>
  );
}
