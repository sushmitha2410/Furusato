import { ClerkLoaded, ClerkLoading, SignedIn, UserButton } from "@clerk/nextjs";
import { Loader } from "lucide-react";
import Image from "next/image";

export const CommonHeader = () => {
  return (
    <header className="px-3 py-1 h-16 border-b-2 border-slate-100 fixed top-0 left-0 right-0 z-50 bg-white">
      <div className="py-2 flex items-center justify-between">
        <div className="flex items-center justify-center gap-x-3">
          <Image src="/logo.png" alt="Logo" height={30} width={30} />
          <h1 className="text-xl font-extrabold">Furusato</h1>
        </div>
        <ClerkLoading>
          <Loader className="h-5 w-5 text-muted-foreground" />
        </ClerkLoading>
        <ClerkLoaded>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </ClerkLoaded>
      </div>
    </header>
  );
};
