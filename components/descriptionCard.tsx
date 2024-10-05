import Image from "next/image";
import React from "react";

interface DescriptionCardProps {
  heading: string;
  description: string;
  image: string;
  bgcolour: string;
}

const DescriptionCard = ({
  heading,
  description,
  image,
  bgcolour,
}: DescriptionCardProps) => {
  return (
    <div
      className={`border-2 p-4 h-[500px] w-[270px] rounded-lg border-slate-400 hover:bg-slate-200 flex flex-col justify-center items-center ${bgcolour}`}
    >
      <Image src={image} alt={heading} height={100} width={200} />
      <h2 className="text-2xl font-extrabold py-4 text-center">{heading}</h2>
      <p className="text-xs md:text-sm text-center hidden md:block">
        {description}
      </p>
    </div>
  );
};

export default DescriptionCard;
