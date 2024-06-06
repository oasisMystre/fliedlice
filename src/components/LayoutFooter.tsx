import { inter } from "@/assets/fonts";

export default function LayoutFooter() {
  return (
    <footer className="flex flex-col space-y-16 bg-black text-white p-4 ">
      <div>
        <h1 className="text-4xl text-secondary font-extrabold">FliedLice</h1>
      </div>
      <div className="text-center text-sm">
        <p className={inter.className}>
          This token is simply a memecoin with no intrinsic value or expectation
          of financial return.
        </p>
      </div>
    </footer>
  );
}
