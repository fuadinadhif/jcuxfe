import Link from "next/link";
import { Navbar } from "@/components/navbar";

export default function Products() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="bg-brown-6 min-h-screen"></main>
      <footer className="max-w-[1312px] w-full mx-auto">
        <h1 className="font-zain text-[42px] leading-[150%]">
          <Link href="/">Javanice</Link>
        </h1>
      </footer>
    </>
  );
}
