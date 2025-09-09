import Image from "next/image";

export default function TestimonialSection() {
  return (
    <section>
      <div className="mx-[110px] h-screen">
        <h1 className="text-4xl">What Our Customers Say</h1>
        <div className="flex flex-row gap-5">
          <div className="bg-maroon text-white w-[520px] h-[310] flex flex-col gap-5 px-8 py-8 rounded-[10px]">
            <p>5.0 Star Rating</p>
            <p>
              “I recently discovered this brand and I'm officially hooked! The
              cookies are next level—crispy on the edges, soft and gooey in the
              center.”
            </p>
            <p className="mt-auto">Reviena A.</p>
          </div>

          <div className="bg-maroon text-white w-[520px] h-[310] flex flex-col gap-5 px-8 py-8 rounded-[10px]">
            <p>5.0 Star Rating</p>
            <p>
              “I recently discovered this brand and I'm officially hooked! The
              cookies are next level—crispy on the edges, soft and gooey in the
              center.”
            </p>
            <p className="mt-auto">Reviena A.</p>
          </div>

          <div className="bg-maroon text-white w-[520px] h-[310] flex flex-col gap-5 px-8 py-8 rounded-[10px]">
            <p>5.0 Star Rating</p>
            <p>
              “I recently discovered this brand and I'm officially hooked! The
              cookies are next level—crispy on the edges, soft and gooey in the
              center.”
            </p>
            <p className="mt-auto">Reviena A.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
