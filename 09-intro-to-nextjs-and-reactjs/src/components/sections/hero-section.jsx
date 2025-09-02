import Button from "../custom-button";

export default function HeroSection() {
  const textButton = "Hero";

  return (
    <section className="min-h-screen grid place-items-center bg-rose-300">
      <h1>Hero Section</h1>
      <Button textContent={textButton} />
    </section>
  );
}
