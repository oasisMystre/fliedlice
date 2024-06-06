import { socials } from "@/config/socials";
import clsx from "clsx";
import Link from "next/link";
import { MdClose } from "react-icons/md";

type LayoutNavigationProps = {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function LayoutNavigation({
  show,
  setShow,
}: LayoutNavigationProps) {
  return (
    <nav
      className={clsx(
        "flex-1 fixed inset-0 items-center bg-black/50 md:static md:flex-row md:bg-transparent",
        show ? "flex" : "hidden md:flex"
      )}
    >
      <div className="flex-1 flex flex-col bg-black text-white w-2/3 h-full md:flex-row md:bg-transparent md:text-black">
        <div className="flex flex-col md:hidden">
          <button
            className="self-end p-4"
            onClick={() => setShow(false)}
          >
            <MdClose className="text-xl" />
          </button>
        </div>
        <div className="flex flex-col  md:flex-1 md:flex-row md:items-center md:justify-center md:space-x-4">
          {socials.map((social, index) => (
            <Link
              href={social.href}
              key={index}
              className="p-4"
            >
              {social.name}
            </Link>
          ))}
        </div>
        <Link
          href="https://dexscreener.com/ethereum/0x22dA3dCbCEC36947De7C7aD3d3CA138E6d37f27d"
          className="self-start btn btn-primary md:self-auto"
        >
          Buy Now
        </Link>
      </div>
    </nav>
  );
}
