"use client"
import { Facebook, Instagram, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const FooterSection = () => {
  const pathname = usePathname();

  const hiddenPaths = [/^\/studio(\/.*)?$/] as RegExp[];

  const isHiddenPath = hiddenPaths.some((pattern) => pattern.test(pathname));

  if (isHiddenPath) {
    return null;
  }

  return (
    <section className="border-t-[1px] w-full border-neutral-500/30">
      <main className="max-w-[1440px] m-auto mt-5">
        <div className="px-5 py-10 w-full flex-between gap-5">
          <div className="flex-[1] w-full flex flex-col gap-7 items-start justify-start">
            <Image src={"/logo_1.svg"} alt="" width={100} height={190} />
            <div className="flex flex-col gap-3">
              <h1 className="text-white text-2xl font-medium">CTA Agency</h1>
              <p className="text-gray-200 text-3xl lg:text-4xl font-medium max-w-[500px]">
                DESIGNING DIGITAL STRATEGIES.
              </p>
            </div>
          </div>
          <div className="flex-[1] w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-start gap-5">
            <div className="w-full flex flex-col gap-5 items-start justify-center">
              <h1 className="text-gray-300 text-xl font-bold">COMPANY</h1>
              <Link href={"/"} className="text-lg font-medium text-gray-400">
                Blog
              </Link>
              <Link href={"/"} className="text-lg font-medium text-gray-400">
                Careeers
              </Link>
              <Link href={"/"} className="text-lg font-medium text-gray-400">
                Pricing
              </Link>
            </div>
            <div className="w-full flex flex-col gap-5 items-start justify-center">
              <h1 className="text-gray-300 text-xl font-bold">RESOURCES</h1>
              <Link href={"/"} className="text-lg font-medium text-gray-400">
                Documentation
              </Link>
              <Link href={"/"} className="text-lg font-medium text-gray-400">
                Careeers
              </Link>
              <Link href={"/"} className="text-lg font-medium text-gray-400">
                Press Conferences
              </Link>
            </div>
            <div className="w-full flex flex-col gap-5 items-start justify-center">
              <h1 className="text-gray-300 text-xl font-bold">LEGAL</h1>
              <Link href={"/"} className="text-lg font-medium text-gray-400">
                Terms of service
              </Link>
              <Link href={"/"} className="text-lg font-medium text-gray-400">
                Privacy Policy
              </Link>
              <Link href={"/"} className="text-lg font-medium text-gray-400">
                Cookies Policy
              </Link>
              <Link href={"/"} className="text-lg font-medium text-gray-400">
                Data Processing
              </Link>
            </div>
          </div>
        </div>
        <div className="px-5 py-10 w-full flex-between gap-5 border-t-[1px] border-neutral-400/30">
          <div className="flex-[1] w-full flex-start">
            <p className="text-xl text-neutral-500">© CTA. All rights reserved</p>
          </div>
          <div className="flex-[1] w-full flex-end gap-5">
            <Link
              href={"/"}
              className="p-4 rounded-full border-[2px] border-neutral-500/40"
            >
              <Instagram height={20} width={20} className="invert text-neutral-500" />
            </Link>
            <Link
              href={"/"}
              className="p-4 rounded-full border-[2px] border-neutral-500/40"
            >
              <Facebook height={20} width={20} className="invert text-neutral-500" />
            </Link>
            <Link
              href={"/"}
              className="p-4 rounded-full border-[2px] border-neutral-500/40"
            >
              <Twitter height={20} width={20} className="invert text-neutral-500" />
            </Link>
          </div>
        </div>
      </main>
    </section>
  );
};

export default FooterSection;
