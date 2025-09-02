import Link from "next/link";

import HeroSection from "@/components/sections/hero-section";
import AboutSection from "@/components/sections/about-section";
import ContactSection from "@/components/sections/contact-section";

export default function Home() {
  return (
    <main>
      <Link href="/blog">Blog Page</Link>
      <Link href="/history">History Page</Link>
      <Link href="/product/checkout">Checkout Page</Link>
      <HeroSection />
      <AboutSection />
      <ContactSection />
    </main>
  );
}

/* ---------------------------------- TASK ---------------------------------- */
// 1. Buat halaman checkout yang isinya adalah tulisan "Check Out Page"
// 2. route/url harus berbentuk seperti ini => localhost:3000/product/checkout
// 3. Tambah link di homepage untuk menuju ke halaman
