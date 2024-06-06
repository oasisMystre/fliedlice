import Image from "next/image";
import Link from "next/link";

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
          <Link
            href="https://dexscreener.com/ethereum/0x22dA3dCbCEC36947De7C7aD3d3CA138E6d37f27d"
            className="self-start btn btn-primary"
          >
            Buy Now
          </Link>
        </div>
      </div>
      <div>
        <Image src="/mascot.png" alt="Mascot" width={512} height={512} />
      </div>
    </div>
  );
}
