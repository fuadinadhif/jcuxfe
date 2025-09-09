import Image from "next/image";

export default function BlogSection() {
  return (
    <section className="min-h-screen py-[65px] px-[110px]">
      <div className="max-w-[1060px] mx-auto flex flex-col font-instrument-sans">
        {/* Title */}
        <h1 className="text-[40px] mb-[40px] font-medium">Quick Reads</h1>

        {/* Container for Left and Right Side */}
        <div className="grid grid-cols-[573px_467px] gap-5">
          {/* Left Side */}
          <div className="flex flex-col">
            <div className="relative w-full h-[470px] mb-5 rounded-[10px]">
              <Image src="/images/mokruma_blog_1.svg" alt="Pastries" fill />
            </div>

            <div className="font-montserrat">
              <p className="mb-5">October 23, 2025</p>
              <h1 className="text-2xl font-medium mb-[10px] hover:text-maroon cursor-pointer">
                All You Need to Know Abour Mokruma
              </h1>
              <p className="text-lg">
                absdnsjd sndsndasj ansdjnscjasn enfaoscsdjfne jhihi hihib b
                fenfdjskmcksnc fanfjksanc fjnjdnjsanmca ajdmnask.
              </p>
            </div>
          </div>

          {/* Right Side */}
          <div className="grid grid-rows-3 gap-5 font-montserrat">
            <div className="grid grid-cols-[231px_1fr] gap-5">
              <div className="relative h-full w-full rounded-[10px] overflow-hidden">
                <Image
                  className="object-cover"
                  src="/images/mokruma_blog_2.svg"
                  alt="Cookie Dough"
                  fill
                />
              </div>
              <div>
                <p className="text-xl mb-5">September 2, 2025</p>
                <h1 className="text-2xl font-medium hover:text-maroon cursor-pointer">
                  Mokruma Cookie in the Making
                </h1>
              </div>
            </div>

            <div className="grid grid-cols-[231px_1fr] gap-5">
              <div className="relative h-full w-full rounded-[10px] overflow-hidden">
                <Image
                  className="object-cover"
                  src="/images/mokruma_blog_3.svg"
                  alt="Cookie Dough"
                  fill
                />
              </div>
              <div>
                <p className="text-xl mb-5">September 2, 2025</p>
                <h1 className="text-2xl font-medium hover:text-maroon cursor-pointer">
                  The Sweetest Box to Gift
                </h1>
              </div>
            </div>

            <div className="grid grid-cols-[231px_1fr] gap-5">
              <div className="relative h-full w-full rounded-[10px] overflow-hidden">
                <Image
                  className="object-cover"
                  src="/images/mokruma_blog_4.svg"
                  alt="Cookie Dough"
                  fill
                />
              </div>
              <div>
                <p className="text-xl mb-5">September 2, 2025</p>
                <h1 className="text-2xl font-medium hover:text-maroon cursor-pointer">
                  Brewing Tips for You to Follow
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
