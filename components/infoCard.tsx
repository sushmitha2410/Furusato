import Image from "next/image";
import Link from "next/link";
import React from "react";

interface infoCardProps {
  heading: string;
  description: string;
  image: string;
}

const InfoCard = ({ heading, description, image }: infoCardProps) => {
  return (
    <Link
      href="/"
      className="border-2 p-4 h-64 w-[200px] md:h-96 md:w-[700px] rounded-lg border-slate-400 hover:bg-slate-200 flex justify-around items-center"
    >
      <div className="w-[350px]">
        <h2 className="text-2xl md:text-4xl font-extrabold py-3 text-center">
          {heading}
        </h2>
        <p className="py-3 text-xs md:text-lg text-justify">{description}</p>
      </div>
      <div>
        <Image
          src={image}
          alt={heading}
          height={200}
          width={200}
          className="hidden md:block"
        />
      </div>
    </Link>
  );
};

export default InfoCard;
