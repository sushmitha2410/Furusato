"use client";
import { ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import { useState } from "react";

export const Sidebar = () => {
  const [openSublist, setOpenSublist] = useState<number | null>(null);

  const toggleSublist = (index: number) => {
    setOpenSublist((prev) => (prev === index ? null : index));
  };
  return (
    <>
      <aside className="group/sidebar flex w-60 flex-col border-r-2 fixed top-16 left-0 bottom-0 z-40 overflow-y-auto bg-white">
        <div className="flex justify-between items-center px-5 pt-5">
          <h1 className="text-xl font-extrabold">CONTENTS</h1>
        </div>
        <div className="p-2">
          <Button
            size="sm"
            variant="link"
            className="w-full flex items-center justify-between"
            onClick={() => toggleSublist(0)}
          >
            Culture and Tradition
            <ChevronRight
              className={`w-4 h-4 transition-transform ${openSublist === 0 ? "rotate-90" : ""}`}
            />
          </Button>
          {openSublist === 0 && (
            <ul className="pl-4">
              <li>
                <Link href="/SocialNorms" className="text-sm ">
                  <Button size="sm" variant="link">
                    Social Norms
                  </Button>
                </Link>
              </li>
              <li>
                <Link href="/Festivals" className="text-sm ">
                  <Button size="sm" variant="link">
                    Events and Festivals
                  </Button>
                </Link>
              </li>
            </ul>
          )}

          <Button
            size="sm"
            variant="link"
            className="w-full flex items-center justify-between"
            onClick={() => toggleSublist(1)}
          >
            History and Heritage
            <ChevronRight
              className={`w-4 h-4 transition-transform ${openSublist === 1 ? "rotate-90" : ""}`}
            />
          </Button>
          {openSublist === 1 && (
            <ul className=" pl-4">
              <li>
                <Link href="/History" className="text-sm ">
                  <Button size="sm" variant="link">
                    History
                  </Button>
                </Link>
              </li>
              <li>
                <Link href="A&A" className="text-sm ">
                  <Button size="sm" variant="link">
                    Art and Architecture
                  </Button>
                </Link>
              </li>
            </ul>
          )}

          <Button
            size="sm"
            variant="link"
            className="w-full flex items-center justify-between"
            onClick={() => toggleSublist(2)}
          >
            Fashion and Lifestyle
            <ChevronRight
              className={`w-4 h-4 transition-transform ${openSublist === 2 ? "rotate-90" : ""}`}
            />
          </Button>
          {openSublist === 2 && (
            <ul className=" pl-4">
              <li>
                <Link href="/Fashion" className="text-sm ">
                  <Button size="sm" variant="link">
                    Fashion
                  </Button>
                </Link>
              </li>
              <li>
                <Link href="/PopCulture" className="text-sm ">
                  <Button size="sm" variant="link">
                    Pop Culture
                  </Button>
                </Link>
              </li>
            </ul>
          )}
          <Button
            size="sm"
            variant="link"
            className="w-full flex items-center justify-between"
            onClick={() => toggleSublist(4)}
          >
            Money and Shopping
            <ChevronRight
              className={`w-4 h-4 transition-transform ${openSublist === 4 ? "rotate-90" : ""}`}
            />
          </Button>
          {openSublist === 4 && (
            <ul className=" pl-4">
              <li>
                <Link href="/Money" className="text-sm ">
                  <Button size="sm" variant="link">
                    Money and Budgeting
                  </Button>
                </Link>
              </li>
              <li>
                <Link href="/Shopping" className="text-sm ">
                  <Button size="sm" variant="link">
                    Shopping and Souvenirs
                  </Button>
                </Link>
              </li>
            </ul>
          )}

          <Link href="/Food">
            <Button
              size="sm"
              variant="link"
              className="w-full flex items-center justify-between"
            >
              Food
            </Button>
          </Link>
          <Link href="/Nature">
            <Button
              size="sm"
              variant="link"
              className="w-full flex items-center justify-between"
            >
              Nature and Outdoors
            </Button>
          </Link>
          <Link href="/Travel">
            <Button
              size="sm"
              variant="link"
              className="w-full flex items-center justify-between"
            >
              Travel and Accomodation
            </Button>
          </Link>
          <Link href="/TechInno">
            <Button
              size="sm"
              variant="link"
              className="w-full flex items-center justify-between"
            >
              Technology and Innovation
            </Button>
          </Link>
          <Link href="S&E">
            <Button
              size="sm"
              variant="link"
              className="w-full flex items-center justify-between"
            >
              Safety and Emergency
            </Button>
          </Link>
        </div>
      </aside>
    </>
  );
};
