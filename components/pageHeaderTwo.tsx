import Image from "next/image";

interface PageHeaderTwoProps {
  bgColor: string;
  imageOne: string;
  maintext: string;
  ptag: string;
  imageTwo: string;
}

const PageHeaderTwo = ({
  bgColor,
  imageOne,
  imageTwo,
  maintext,
  ptag,
}: PageHeaderTwoProps) => {
  return (
    <div className="flex flex-wrap justify-evenly gap-y-10 ">
      <div
        className={`w-full h-96 ${bgColor} flex items-center justify-evenly px-4`}
      >
        <div className="flex w-full md:w-96 lg:w-96 flex-col">
          <p className="font-extrabold text-white text-3xl lg:text-4xl">
            {maintext}
          </p>
          <p className=" text-sm text-white lg:text-xl">{ptag}</p>
        </div>
        <div className="relative">
          <Image
            src={imageOne}
            alt="anime"
            height={100}
            width={230}
            className="rounded-tr-[60px] hidden md:hidden lg:block"
          />
          <Image
            src={imageTwo}
            alt="anime"
            height={100}
            width={150}
            className="absolute bottom-[-10px] left-[-80px] rounded-[100%] hidden md:hidden lg:block"
          />
        </div>
      </div>
    </div>
  );
};

export default PageHeaderTwo;
