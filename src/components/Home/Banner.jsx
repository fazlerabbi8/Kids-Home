import Image from "next/image";

const Banner = () => {
  return (
    <section className="flex min-h-[500px] items-center justify-between">
      {/* Left */}
      <div className="w-1/2">
        <h1 className="text-5xl font-bold">
          Fun Starts Here!
        </h1>

        <p className="mt-4">
          Discover fun, creative and exciting products made just for kids.
        </p>

        <button className="mt-6 rounded-full bg-orange-500 px-6 py-3 text-white">
          Explore Products
        </button>
      </div>

      {/* Right */}
      <div className="w-1/2">
        <Image
          src="/assets/hero.png"
          alt="Kids playing with toys"
          width={700}
          height={500}
          priority
          className="w-full object-contain"
        />
      </div>
    </section>
  );
};

export default Banner;