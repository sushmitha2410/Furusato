import Image from "next/image";
import React from "react";

interface infoCardSmallProps {
  heading: string;
  description: string;
  image: string;
}

const InfoCardSmall = ({ heading, description, image }: infoCardSmallProps) => {
  return (
    <div className="border-2 p-4 h-64 w-[400px] rounded-lg border-slate-400 hover:bg-slate-200 flex justify-around items-center">
      <div className="w-[200px]">
        <h2 className="text-2xl font-extrabold py-3 text-center">{heading}</h2>
        <p className="py-3 text-sm text-justify hidden md:block">
          {description}
        </p>
      </div>
      <div>
        <Image src={image} alt={heading} height={100} width={100} />
      </div>
    </div>
  );
};

export default InfoCardSmall;
