import Image from "next/image";

export default function FeaturedSection() {
  return (
    <section>
      <div className="bg-maroon h-screen grid place-items-center">
        {/* Container */}
        <div className="max-w-300 ml-auto overflow-hidden text-white">
          <h1 className="text-4xl">Our Best-Sellers</h1>

          {/* Caraousel */}
          <div className="max-w-screen overflow-x-scroll [scrollbar-width:none] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none]">
            <div className="flex flex-row gap-10 w-[2600px]">
              {/* Column 1 */}
              <div className="flex flex-col items-center gap-2.5">
                <div className="w-[400px] h-[400px] flex items-center justify-center">
                  <Image
                    src="/images/croissant_stroked.svg"
                    alt="Croissant"
                    width={346}
                    height={340}
                  />
                </div>
                <h1 className="text-2xl">Croissant</h1>
                <p>Rp30,000</p>
                <button className="px-6 py-3 rounded-full text-[18px] border border-white hover:bg-white hover:text-black cursor-pointer">
                  See Details
                </button>
              </div>

              {/* Column 2 */}
              <div className="flex flex-col items-center gap-2.5">
                <div className="w-[400px] h-[400px] flex items-center justify-center">
                  <Image
                    src="/images/apple_turnover_stroked.svg"
                    alt="Apple Turnover"
                    width={400}
                    height={400}
                  />
                </div>
                <h1 className="text-2xl">Apple Turnover</h1>
                <p>Rp30,000</p>
                <button className="px-6 py-3 rounded-full text-[18px] border border-white hover:bg-white hover:text-black cursor-pointer">
                  See Details
                </button>
              </div>

              {/* Column 3 */}
              <div className="flex flex-col items-center gap-2.5">
                <div className="w-[400px] h-[400px] flex items-center justify-center">
                  <Image
                    src="/images/pain_au_chocolat_stroked.svg"
                    alt="Pain au Chocolate"
                    width={320}
                    height={320}
                  />
                </div>
                <h1 className="text-2xl">Pain au Chocolat</h1>
                <p>Rp30,000</p>
                <button className="px-6 py-3 rounded-full text-[18px] border border-white hover:bg-white hover:text-black cursor-pointer">
                  See Details
                </button>
              </div>

              {/* Column 4 */}
              <div className="flex flex-col items-center gap-2.5">
                <div className="w-[400px] h-[400px] flex items-center justify-center">
                  <Image
                    src="/images/croissant_stroked.svg"
                    alt="Croissant"
                    width={346}
                    height={340}
                  />
                </div>
                <h1 className="text-2xl">Croissant</h1>
                <p>Rp30,000</p>
                <button className="px-6 py-3 rounded-full text-[18px] border border-white hover:bg-white hover:text-black cursor-pointer">
                  See Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
