import Image from "next/image";
import Link from "next/link";

export function MachineCard() {
  return (
    <div className="border w-fit">
      <div>
        <div className="relative w-[222px] h-[162px]">
          <Image
            src="/images/machine-1.png"
            alt="Wega airy machine"
            fill
            className="object-contain brightness-25 hover:brightness-100"
          />
        </div>
        <p className="text-center">Wega Airy</p>
        <p className="text-center">Rp 100.000.000,00</p>
      </div>
      <Link
        href="/wega-airy"
        className="relative mx-auto w-[25px] h-[25px] block"
      >
        <Image src="/images/right-arrow.svg" alt="Right arrow icon" fill />
      </Link>
    </div>
  );
}
