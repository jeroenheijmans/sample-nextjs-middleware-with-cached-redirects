import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import Link from "next/link";

import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="max-w-screen-lg mx-auto">
      <main className={`flex min-h-screen flex-col ${inter.className}`}>
        <header className="flex gap-4 p-4">
          <Link
            className="py-2 px-4 bg-amber-50/50 hover:bg-amber-50/75 hover:underline"
            href="/"
          >
            Home
          </Link>
          <Link
            className="py-2 px-4 bg-amber-50/50 hover:bg-amber-50/75 hover:underline"
            href="/manage"
          >
            Manage
          </Link>
          <Link
            className="py-2 px-4 bg-amber-50/50 hover:bg-amber-50/75 hover:underline"
            href="/about"
          >
            About
          </Link>
        </header>
        <main className="max-w-[1024px] p-4">
          <div>
            <Component {...pageProps} />
          </div>
        </main>
        <footer className="p-4 text-sm opacity-50 mt-auto">
          Sample NextJS application with Caching for Redirects
        </footer>
      </main>
    </div>
  );
}
