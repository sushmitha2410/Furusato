import { CommonHeader } from "@/components/header";
import { Sidebar } from "@/components/sidebar";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const PagesLayout = ({ children }: Props) => {
  return (
    <>
      <CommonHeader />
      <div className="flex">
        <Sidebar />
        <main
          className="flex-1 overflow-y-auto pl-[225px]"
          style={{ marginTop: "3rem" }}
        >
          {/* Adjusted the padding and top margin to account for header height */}
          <div className="p-4">{children}</div>
        </main>
      </div>
    </>
  );
};

export default PagesLayout;
