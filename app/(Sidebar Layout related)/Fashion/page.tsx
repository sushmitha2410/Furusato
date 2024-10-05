import DescriptionCard from "@/components/descriptionCard";
import PageHeader from "@/components/pageHeader";

const Fashion = () => {
  return (
    <div className="flex flex-wrap justify-evenly gap-y-10 ">
      <div className="w-full">
        <PageHeader
          bgColor="bg-pink-950"
          maintext="Explore Iconic Japanese Fashion Trends and Designers"
          ptag="From cutting-edge streetwear to timeless traditional styles, Japan has been a global leader in fashion innovation and creativity."
          image="/FashionBG.jpg"
        />
      </div>
      <DescriptionCard
        heading="Harajuku Style"
        description="A vibrant, eclectic mix of fashion inspired by street culture, blending punk, gothic, kawaii, and traditional elements, often creating bold and unique looks."
        image="/HarajukuF.jpg"
        bgcolour="bg-pink-100"
      />
      <DescriptionCard
        heading="Lolita Fashion"
        description="A vibrant, eclectic mix of fashion inspired by street culture, blending punk, gothic, kawaii, and traditional elements, often creating bold and unique looks."
        image="/LolitaF.jpg"
        bgcolour="bg-pink-100"
      />
      <DescriptionCard
        heading="Gyaru"
        description="A fashion trend emphasizing glamour and a rebellious attitude, characterized by bold makeup, tanned skin, bleached hair, and trendy outfits."
        image="/GyaruF.jpg"
        bgcolour="bg-pink-100"
      />
      <DescriptionCard
        heading="Kimono"
        description="Traditional Japanese clothing worn for formal occasions, characterized by long sleeves, intricate patterns, and obi sashes, reflecting Japan’s cultural heritage.
"
        image="/KimonoF.jpg"
        bgcolour="bg-pink-100"
      />
      <DescriptionCard
        heading="Mori Girl"
        description="Inspired by a natural, forest-dwelling aesthetic, this style incorporates soft, layered fabrics in earthy tones, creating a whimsical and bohemian look."
        image="/MoriF.jpg"
        bgcolour="bg-pink-100"
      />
    </div>
  );
};

export default Fashion;
