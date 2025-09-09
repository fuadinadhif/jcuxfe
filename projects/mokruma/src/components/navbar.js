import { NavBarLink } from "./navbar-link";

export function NavBar() {
  return (
    <nav className="mx-[110px] flex flex-row gap-10 py-2 text-lg font-light justify-end">
      <NavBarLink textContent="Home" linkContent="/" />
      <NavBarLink textContent="Shop" linkContent="/shop" />
      <NavBarLink textContent="Blog" linkContent="/blog" />
      <NavBarLink textContent="Contact" linkContent="/contact" />
    </nav>
  );
}
