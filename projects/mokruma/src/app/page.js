import Image from "next/image";
import { NavBar } from "../components/navbar";
import HeroSection from "@/sections/hero-section";
import FeaturedSection from "@/sections/featured-section";
import BlogSection from "@/sections/blog-section";
import TestimonialSection from "@/sections/testimonial-section";

export default function Home() {
  return (
    <main>
      <NavBar />
      <HeroSection />
      <FeaturedSection />
      <BlogSection />
      <TestimonialSection />
    </main>
  );
}
