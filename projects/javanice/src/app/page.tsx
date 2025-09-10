import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-brown-6">
      <section className="min-h-screen py-[80px] px-[16px] grid place-items-center">
        <div className="max-w-[1312px] w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 place-items-center">
          {/* Image for desktop */}
          <div className="relative h-[614px] w-full hidden md:block ">
            <Image
              src="/images/tentang-kami-display-desktop.png"
              alt="Desktop display"
              fill
              className="object-contain"
            />
          </div>

          {/* Image for mobile */}
          <div className="grid grid-cols-[410px_1fr] gap-5 w-full h-[452px] md:hidden mb-[37px]">
            <div className="relative rounded-[15px] overflow-hidden">
              <Image
                src="/images/tentang-kami-1.jpg"
                alt="Mobile display 1"
                fill
                className="object-cover"
              />
            </div>
            <div className="grid grid-rows-2 gap-5">
              <div className="relative rounded-[15px] overflow-hidden">
                <Image
                  src="/images/tentang-kami-2.jpg"
                  alt="Mobile display 2"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative rounded-[15px] overflow-hidden">
                <Image
                  src="/images/tentang-kami-3.jpg"
                  alt="Mobile display 3"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="text-center md:text-left">
            <span className="font-poppins text-h3 text-brown-1 mb-9 block">
              Tentang Kami
            </span>
            <h2 className="font-poppins text-h2 text-brown-1 mb-4">
              Kami Disini Untuk Membantu Anda!
            </h2>
            <p className="text-b1 mb-12">
              Kami siap membantu kebutuhan servis mesin kopi Anda—mulai dari
              pemeriksaan, perbaikan, hingga penyediaan suku cadang. Layanan
              kami dirancang untuk memberikan solusi cepat, tepat, dan
              profesional.
            </p>
            <Link
              href="/contact"
              className="px-[83px] py-[18px] text-h4 bg-old-brown-1 text-white rounded-[15px] shadow-custom"
            >
              Hubungi Kami
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
