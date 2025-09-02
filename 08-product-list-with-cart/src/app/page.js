import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-beige-100 h-screen">
      {/* <Image
        src={"/images/image-waffle-desktop.jpg"}
        alt="Waffle image"
        width={208}
        height={208}
        className="rounded-md"
      /> */}
      <div className="w-fit">
        <div className="w-52 h-52 relative">
          <Image
            src={"/images/image-waffle-desktop.jpg"}
            alt="Waffle image"
            fill
            className="rounded-lg"
          />
        </div>
        <button className="flex mx-auto gap-2 bg-white px-6 py-2 rounded-full border-maroon border-1 -mt-[22px] relative z-10 cursor-pointer">
          <div className="relative w-6 h-6">
            <Image src={"/images/icon-add-to-cart.svg"} alt="Cart icon" fill />
          </div>
          <span>Add to Cart</span>
        </button>
        <div className="font-red-hat-text">
          <span className="text-xs font-light text-beige-400">Waffle</span>
          <p className="font-bold text-beige-900">Waffle with Berries</p>
          <span className="font-bold text-maroon">$6.50</span>
        </div>
      </div>
    </main>
  );
}
