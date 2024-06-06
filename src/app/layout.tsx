import clsx from "clsx";
import type { Metadata } from "next";

import "@/globals.css";
import { chinese } from "@/assets/fonts";
import LayoutHeader from "@/components/LayoutHeader";
import LayoutFooter from "@/components/LayoutFooter";

export const metadata: Metadata = {
  title: "FliedLice | Stir frying your investments",
  description:
    "Discover the delightful world of Fliedlice, the latest meme coin sensation that's taking the crypto market by storm. Join the Fliedlice community today and stir up your investments with a smile.",
metadataBase: new URL("https://fliedlice.xyz"),
openGraph: {
    images: "/banner.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx(chinese.className, "fixed inset-0 flex flex-col")}>
        <div className="flex-1 flex flex-col space-y-16 bg-gradient-to-b from-primary via-primary bg-no-repeat overflow-y-scroll">
          <LayoutHeader />
          {children}
          <LayoutFooter />
        </div>
      </body>
    </html>
  );
}
