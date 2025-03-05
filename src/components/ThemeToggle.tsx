"use client";

import { useTheme } from "next-themes";
import { CiLight, CiDark } from "react-icons/ci";

export function ThemeToggle() {
  const { setTheme } = useTheme();

  return (
    <>
      <button
        onClick={() => setTheme("light")}
        className="cursor-pointer dark:block hidden"
      >
        <CiLight className="text-2xl" />
      </button>
      <button
        onClick={() => setTheme("dark")}
        className="cursor-pointer dark:hidden block"
      >
        <CiDark className="text-2xl" />
      </button>
    </>
  );
}
