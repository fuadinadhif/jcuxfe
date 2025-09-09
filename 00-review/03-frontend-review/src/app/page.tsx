import Image from "next/image";

import { MachineCard } from "@/components/machine-card";

export default function Home() {
  return (
    <main className="font-poppins min-h-screen max-w-[704px] grid place-items-center mx-auto">
      <section>
        {/* section title */}
        <h2 className="text-center">Mesin Kopi Berkualitas</h2>

        {/* section description */}
        <p className="text-center">
          Kami menyediakan mesin kopi secondhand berkualitas, telah melalui
          proses pengecekan menyeluruh oleh teknisi ahli. Cocok untuk kebutuhan
          rumah, kafe, atau bisnis dengan harga lebih terjangkau tanpa
          mengorbankan performa.
        </p>

        <div className="grid gap-10 md:gap-2 w-fit mx-auto grid-cols-1 md:grid-cols-3">
          <MachineCard />
          <MachineCard />
          <MachineCard />
        </div>

        <div className="relative w-[500px] h-[200px]">
          <p className="border-3 text-white border-green-500 absolute z-100">
            Wega Airy
          </p>
          <Image
            src="/images/machine-1.png"
            alt="Wega airy machine"
            fill
            className="border-3 border-red-500 absolute object-cover"
          />
          <div className="bg-black h-full w-full absolute opacity-25"></div>
        </div>
      </section>
    </main>
  );
}
