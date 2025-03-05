import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import { IoSearchOutline } from "react-icons/io5";
import { ThemeProvider } from "next-themes";
import { ThemeToggle } from "@/components/ThemeToggle";
import "./globals.css";

export const metadata: Metadata = {
  title: "블로그",
  description: "Wani 개발 블로그",
};
const notoSans = Noto_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <ThemeProvider attribute="class" defaultTheme={"light"}>
          <div className={`${notoSans.className} min-h-screen bg-background`}>
            {/* 헤더 */}
            <header className="fixed top-0 left-0 right-0 bg-background py-6  border-border z-10 flex justify-between">
              <h3 className="pl-8 text-2xl font-light text-left text-foreground tracking-wide">
                Wani Blog
              </h3>
              <div className="flex items-center gap-2 pr-8">
                <IoSearchOutline className="text-2xl" />
                <ThemeToggle />
              </div>
            </header>
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
