import Image from "next/image";

interface BigInfoProps {
  mainText: string;
  heading: string;
  image: string;
  bgColor: string;
}

const BigInfo = ({ mainText, heading, image, bgColor }: BigInfoProps) => {
  return (
    <div
      className={`border-2 p-4 h-[500px] w-[225px] lg:w-[450px] rounded-lg border-slate-400 hover:bg-slate-200 flex flex-col justify-evenly items-center ${bgColor}`}
    >
      <Image
        src={image}
        alt={heading}
        height={100}
        width={300}
        className="hidden lg:block"
      />
      <h2 className="text-sm lg:text-2xl font-extrabold text-center">
        {heading}
      </h2>
      <p className="text-xs text-justify">{mainText}</p>
    </div>
  );
};

export default BigInfo;
