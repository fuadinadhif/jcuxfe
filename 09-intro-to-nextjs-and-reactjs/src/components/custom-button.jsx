export default function Button(props) {
  console.log(props);

  return (
    <button className="rounded-full py-2 px-6 bg-amber-300 text-black uppercase">
      {props.textContent}
    </button>
  );
}
