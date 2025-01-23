"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/../public/Logo_1.svg";
import {
  Menu,
  X,
  ArrowRight,
  Home,
  Info,
  Briefcase,
  HelpCircle,
} from "lucide-react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { FaQq } from "react-icons/fa";

interface NavLink {
  href: string;
  text: string;
  icon: React.ReactNode;
}

const Header: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const sidebarRef = useRef<HTMLDivElement | null>(null);
  const toggleRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node) &&
        !toggleRef.current?.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const hiddenPaths = [/^\/studio(\/.*)?$/] as RegExp[];
  const isHiddenPath = hiddenPaths.some((pattern) => pattern.test(pathname));

  if (isHiddenPath) {
    return null;
  }

  const closeSidebar = (): void => setIsOpen(false);

  const navLinks: NavLink[] = [
    { href: "/about", text: "About Us", icon: <Info className="w-5 h-5" /> },
    {
      href: "/services", text: "Services", icon: <Briefcase className="w-5 h-5" />,
    },
    { href: "/works", text: "Our Work", icon: <Home className="w-5 h-5" /> },
  ];

  return (
    <header className="fixed w-full z-[10]">
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 transition-opacity z-30"
          onClick={closeSidebar}
        />
      )}

      {/* Main Header */}
      <div className="p-4 md:p-8 bg-black border-b-[1px] border-gray-800">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex items-center justify-between">
            {/* Mobile Menu Button */}
            <button
              ref={toggleRef}
              className="md:hidden p-2 hover:bg-white/20 rounded-lg transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <Menu className="w-6 h-6 text-white" />
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex flex-1 gap-8">
              {navLinks.slice(1, 3).map((link) => (
                <Link
                  key={link.text}
                  href={link.href}
                  className="BlauerNue-Semibold relative group text-white hover:text-white/75"
                >
                  <span className="relative">
                    {link.text}
                    <span className="absolute inset-x-0 bottom-0 h-0.5 bg-[#BE1E2D] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
                  </span>
                </Link>
              ))}
            </nav>

            {/* Logo */}
            <div className="flex-1 flex justify-center">
              <Link href={"/"}>
                <Image
                  src={Logo}
                  alt="Brand"
                  width={80}
                  height={80}
                  className="transform hover:scale-105 transition-transform duration-300"
                />
              </Link>
            </div>

            {/* Desktop Right Side */}
            <div className="hidden md:flex flex-1 justify-end gap-8 items-center">
              <Link
                href={"/about"}
                className="BlauerNue-Semibold relative group text-white hover:text-white/75"
              >
                <span className="relative">
                  About Us
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-[#BE1E2D] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
                </span>
              </Link>
              <Link
                href="/contact"
                className="BlauerNue-Semibold bg-[#BE1E2D] py-2 px-4 text-[#EDF0DA] flex items-center gap-2 rounded-lg hover:bg-[#273043] transform hover:-translate-y-0.5 transition-all duration-300"
              >
                Contact Us <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        ref={sidebarRef}
        className={`fixed top-0 left-0 h-full w-72 bg-[#273043] shadow-2xl transform transition-transform duration-300 ease-in-out z-40 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-8">
            <Image src={Logo} alt="Brand" width={60} height={60} />
            <button
              onClick={closeSidebar}
              className="p-2 hover:bg-gray-500 rounded-full transition-colors"
              aria-label="Close menu"
            >
              <X className="w-6 h-6 text-white" />
            </button>
          </div>

          <nav className="space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.text}
                href={link.href}
                className="flex items-center gap-3 p-3 hover:bg-gray-500 rounded-lg transition-colors group"
                onClick={closeSidebar}
              >
                <span className="text-white group-hover:text-white/75 transition-colors">
                  {link.icon}
                </span>
                <span className="text-white group-hover:text-white/75 transition-colors">
                  {link.text}
                </span>
              </Link>
            ))}
            <Button
              onClick={() => {
                router.push("/contact");
              }}
              className="block mt-6 BlauerNue-Semibold bg-[#BE1E2D] py-3 px-4 text-[#EDF0DA] rounded-lg hover:bg-[#273043] transition-colors text-center"
            >
              Contact Us
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
