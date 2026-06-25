import React from "react";

export default function Banner() {
  const mobile = "/Banner.png";
  const desktop = "/master-Banner.webp";
  return (
    <section className="relative w-full min-h-150 md:min-h-120 flex items-center justify-center overflow-hidden bg-blue-900 text-white">
      <picture className=" absolute inset-0 w-full h-full object-cover">
        <source media="(min-width: 768px)" srcSet={desktop} alt="Desktop Img"/>
        <img
          src={mobile}
          alt="Banner Movil"
          className="absolute w-full h-full object-cover opacity-65"
        />
      </picture>
      <div className="absolute inset-0 flex justify-center items-center bg-linear-to-r from-black/70 to-black/40 z-10">
        <div className="relative  z-20 mx-auto max-w-4xl px-6 py-12 text-center md:text-left flex flex-col gap-6 items-center md:items-start">
          <p className="text-blue-400 font-bold">NEW COLLECTION 2024</p>
          <h1 className="text-4xl font-extrabold">
            REdefine Your Everyday Style
          </h1>
          <p>
            Discover our curated collection of premium essentials designed for
            the moedern lifestyle.
          </p>
          <div className="flex flex-col gap-3 w-full">
            <button className="bg-blue-600 py-3 rounded-xl" type="button">
              Shop Collection
            </button>
            <button
              className="bg-slate-600 opacity-50 py-3 rounded-xl"
              type="button"
            >
              View Lookbook
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
