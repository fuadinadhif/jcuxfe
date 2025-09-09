import Image from "next/image";

export default function HeroSection() {
  return (
    <section>
      <div className="mx-[110px] flex flex-col items-center">
        {/* Upper content */}
        <div>
          <h1 className="text-[64px] font-medium">Where Crumb Meets Aroma</h1>
          <p className="text-2xl">
            Delight friends, family, and yourself with our pastries, baked
            goods, and coffee.
          </p>
        </div>
        {/* Buttom content */}
        <div className="flex flex-row gap-10 items-center">
          <div>
            <Image
              src="/images/mokruma_hero_section.svg"
              alt="Pastries and Coffee"
              width={610}
              height={490}
            />
          </div>
          <div className="my-5 flex flex-col gap-5 w-[224px]">
            <div className="bg-lightgray flex flex-col gap-2.5 px-5 py-5 rounded-[10px]">
              <div className="w-[24px] h-[24px]">
                <Image
                  src="/icons/delivery_truck_black.svg"
                  alt="Pastries and Coffee"
                  width={24}
                  height={24}
                />
              </div>
              <h1 className="text-[16px]">Delivery</h1>
              <p className="text-[14px]">
                Get your treats fast and fresh-ready to be delivered.
              </p>
            </div>
            <div className="bg-lightgray flex flex-col gap-2.5 px-5 py-5 rounded-[10px]">
              <div className="w-[24px] h-[24px]">
                <Image
                  src="/icons/gifting_black.svg"
                  alt="Gift Box"
                  width={20}
                  height={20}
                />
              </div>
              <h1 className="text-[16px]">Gifting</h1>
              <p className="text-[14px]">
                Get your treats fast and fresh-ready to be delivered.
              </p>
            </div>
            <div className="bg-lightgray flex flex-col gap-2.5 px-5 py-5 rounded-[10px]">
              <div className="w-[24px] h-[24px]">
                <Image
                  src="/icons/events_black.svg"
                  alt="Event Calender"
                  width={20}
                  height={20}
                />
              </div>
              <h1 className="text-[16px]">Events</h1>
              <p className="text-[14px]">
                Get your treats fast and fresh-ready to be delivered.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
