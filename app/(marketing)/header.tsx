import React from "react";
import { Button } from "@/components/ui/button";
import {
  ClerkLoaded,
  ClerkLoading,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";
import { Loader } from "lucide-react";
import Image from "next/image";

const Header = () => {
  return (
    <header className="px-10 py-2 h-20 border-b-2 border-slate-100">
      <div className="py-2 flex items-center justify-between">
        <div className="flex items-center justify-center gap-x-3">
          <Image src="/logo.png" alt="Logo" height={50} width={50} />
          <h1 className="text-2xl font-extrabold">Furusato</h1>
        </div>
        <ClerkLoading>
          <Loader className="h-5 w-5 text-muted-foreground" />
        </ClerkLoading>
        <ClerkLoaded>
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <SignInButton
              mode="modal"
              fallbackRedirectUrl="/Home"
              forceRedirectUrl="/Home"
            >
              <Button size="lg" variant="default" className="font-extrabold">
                Login
              </Button>
            </SignInButton>
          </SignedOut>
        </ClerkLoaded>
      </div>
    </header>
  );
};

export default Header;
