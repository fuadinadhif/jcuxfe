import Link from "next/link";

export function Navbar() {
  return (
    <nav className="max-w-[1312px] w-full mx-auto flex justify-between items-center">
      <h1>
        <Link href="/" className="font-zain text-[80px] leading-[150%]">
          Javanice
        </Link>
      </h1>
      <ul className="flex gap-[76px]">
        <li>
          <Link className="text-h4 text-old-brown-1" href="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="text-h4 text-old-brown-1" href="/products">
            Product
          </Link>
        </li>
        <li>
          <Link className="text-h4 text-old-brown-1" href="/services">
            Service
          </Link>
        </li>
        <li>
          <Link className="text-h4 text-old-brown-1" href={"/about"}>
            About
          </Link>
        </li>
        <li>
          <Link className="text-h4 text-old-brown-1" href={"/contact"}>
            Contact
          </Link>
        </li>
        <li>
          <Link className="text-h4 text-old-brown-1" href={"/blog"}>
            Blog
          </Link>
        </li>
      </ul>
    </nav>
  );
}
