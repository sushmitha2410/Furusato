import Image from "next/image";

interface PageHeaderProps {
  bgColor: string;
  image: string;
  maintext: string;
  ptag: string;
}

const PageHeader = ({ bgColor, image, maintext, ptag }: PageHeaderProps) => {
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
        <Image
          src={image}
          alt="anime"
          height={100}
          width={230}
          className="rounded-bl-[40px] hidden md:hidden lg:block"
        />
      </div>
    </div>
  );
};

export default PageHeader;

/*<div className="flex flex-wrap justify-evenly gap-y-10 ">
<div className="w-full h-96 bg-pink-950 flex items-center justify-evenly px-4">
<div className="flex w-full md:w-96 lg:w-96 flex-col">
  <p className="font-extrabold text-white text-3xl lg:text-4xl">
    Explore Iconic Japanese Fashion Trends and Designers
  </p>
  <p className=" text-sm text-white lg:text-xl">
    From cutting-edge streetwear to timeless traditional styles, Japan
    has been a global leader in fashion innovation and creativity.
  </p>
</div>
<Image
  src="/FashionBG.jpg"
  alt="anime"
  height={100}
  width={230}
  className="rounded-bl-[40px] hidden md:hidden lg:block"
/>
</div>*/
