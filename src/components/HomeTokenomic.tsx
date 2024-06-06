import { inter } from "@/assets/fonts";
import clsx from "clsx";

export default function HomeTokenomic() {
  return (
    <section className="flex flex-col bg-black text-white p-8 space-y-4 md:flex-row md:space-x-8 md:space-y-0 md:items-center md:justify-center">
      <div className="flex-1 shrink-0 flex flex-col space-y-2">
        <h1 className="text-4xl font-extrabold">Supply</h1>
        <p className={clsx(inter.className, "text-white/90")}>
          1,000,000,000,000 Tokens
        </p>
      </div>
      <div className="flex-1 shrink-0 flex flex-col space-y-2">
        <h1 className="text-4xl font-extrabold">Liquidity</h1>
        <p className={clsx(inter.className, "text-white/90")}>100% Locked</p>
      </div>
      <div className="flex-1 shrink-0 flex flex-col space-y-2">
        <h1 className="text-4xl font-extrabold">Tax</h1>
        <p className={clsx(inter.className, "text-white/90")}>Buy/Sell 0</p>
      </div>
    </section>
  );
}
