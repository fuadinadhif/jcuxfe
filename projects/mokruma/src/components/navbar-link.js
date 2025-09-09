export function NavBarLink(props) {
  return (
    <a href={props.linkContent} className="hover:text-maroon cursor-pointer">
      {props.textContent}
    </a>
  );
}
