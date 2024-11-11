"use client";

import Image from "next/image";
import {
  ClerkLoaded,
  ClerkLoading,
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
} from "@clerk/nextjs";
import { Loader } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="max-w-[988px] mx-auto flex-1 w-full flex flex-col lg:flex-row items-center justify-around p-4 gap-2">
      <div
        className="relative flex flex-col items-center"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Image
          src="/red-circle.png"
          alt="Japan"
          height={350}
          width={350}
          className={`transition-transform duration-500 ease-in-out ${
            isHovered ? "scale-110" : "scale-100"
          }`}
        />
        <h1
          className={`absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-500 ease-in-out ${
            isHovered ? "-translate-y-20" : "translate-y-0"
          } text-2xl font-extrabold text-white text-center`}
        >
          Furusato
          <br />
          ふるさと
        </h1>
        {isHovered && (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-5 text-white transition-opacity duration-300">
            <p className="mt-[-30px] text-lg text-center">
              /fuɾuːsato/ . noun
              <br />
              Nostalgic longing for one&apos;s home; sense of belonging to the
              goodness in Japan.
            </p>
          </div>
        )}
      </div>
      <div className="flex flex-row items-center">
        <div className="flex flex-col items-center justify-end">
          <h1 className=" w-[500px] text-center text-2xl font-semibold my-3">
            Find out why Japan always stands out and gains admirers everyday!
          </h1>
          <ClerkLoading>
            <Loader className="h-5 w-5 text-muted-foreground animate-spin" />
          </ClerkLoading>
          <ClerkLoaded>
            <SignedOut>
              <SignUpButton
                mode="modal"
                fallbackRedirectUrl="/Home"
                forceRedirectUrl="/Home"
              >
                <Button
                  size="lg"
                  variant="secondary"
                  className="my-2 font-extrabold"
                >
                  Start Exploring !!
                </Button>
              </SignUpButton>
              <SignInButton
                mode="modal"
                fallbackRedirectUrl="/Home"
                forceRedirectUrl="/Home"
              >
                <Button
                  size="lg"
                  variant="secondary"
                  className="my-2 font-extrabold"
                >
                  Already Signed Up
                </Button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <Button
                size="lg"
                variant="secondary"
                className="font-extrabold my-3 md: mb-3"
                asChild
              >
                <Link href="/Home">Continue Exploring</Link>
              </Button>
            </SignedIn>
          </ClerkLoaded>
        </div>
      </div>
    </div>
  );
}
