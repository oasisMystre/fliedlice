import Image from "next/image";

export default function HomeHeroSection() {
  return (
    <div className="flex flex-col space-y-8 md:flex-row md:space-y-0">
      <div className="flex-1 flex flex-col space-y-4 px-4 md:px-8">
        <div>
          <h1 className="text-4xl font-extrabold text-secondary">FliedLice</h1>
          <p>The Happiest Coin in the Crypto Bowl!</p>
        </div>
        <div className="flex flex-col space-y-2">
          <p className="text-sm text-black/50">
            0xf32b4277dE046257015348132Cb63b65ec7eA208
          </p>
          <button className="self-start btn btn-primary">Buy Now</button>
        </div>
      </div>
      <div>
        <Image src="/mascot.png" alt="Mascot" width={512} height={512} />
      </div>
    </div>
  );
}
