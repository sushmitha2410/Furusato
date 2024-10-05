import DescriptionCard from "@/components/descriptionCard";
import PageHeader from "@/components/pageHeader";
import Image from "next/image";
const PopCulture = () => {
  return (
    <div className=" flex flex-wrap justify-evenly gap-y-6">
      <div className="w-full">
        <PageHeader
          bgColor="bg-orange-800"
          maintext="Find some popular Animes, pop groups/singers and movies below"
          ptag="These are just a few of the many masterpieces that were created within
            the borders of Japan"
          image="/Pop-ABG.jpg"
        />
      </div>
      <div className="flex flex-wrap justify-evenly gap-6 ">
        <DescriptionCard
          heading="Naruto"
          description="Follows Naruto Uzumaki, a young ninja seeking recognition and dreaming of becoming Hokage, the leader of his village, while dealing with his inner demon, the Nine-Tails."
          image="/Naruto.webp"
          bgcolour="bg-orange-100"
        />
        <DescriptionCard
          heading="One Piece"
          description="Monkey D. Luffy, a boy with rubber powers, sets sail with his crew to find the legendary One Piece treasure and become the Pirate King."
          image="/onepiece.jpg"
          bgcolour="bg-orange-100"
        />
        <DescriptionCard
          heading="Attack on Titan"
          description="Humanity is on the brink of extinction, living inside walls to escape giant humanoid Titans. Eren Yeager and his friends fight to protect their people from these monstrous threats."
          image="/AOT.jpg"
          bgcolour="bg-orange-100"
        />
        <DescriptionCard
          heading="Dragon Ball Z"
          description="Goku and his friends battle powerful foes to protect Earth, unlocking new powers along the way. The series blends martial arts, aliens, and intense battles."
          image="/DBZ.avif"
          bgcolour="bg-orange-100"
        />
        <DescriptionCard
          heading="My Hero Academia"
          description="In a world where most people have superpowers (Quirks), Izuku Midoriya, born Quirkless, aims to become the world’s greatest hero with help from All Might, the Symbol of Peace."
          image="/MHA.jpg"
          bgcolour="bg-orange-100"
        />
      </div>
      <div className="flex flex-wrap justify-evenly gap-6">
        <DescriptionCard
          heading="Arashi"
          description="A popular boy band known for their catchy pop songs, energetic performances, and engaging personalities. Their songs often reflect positivity, fun, and love."
          image="/Arashi.jpg"
          bgcolour="bg-orange-100"
        />
        <DescriptionCard
          heading="Hikaru Utada"
          description="Known for soulful ballads and contributions to the Kingdom Hearts video game series, her songs mix pop, R&B, and electronic elements."
          image="/Hikaru.jpg"
          bgcolour="bg-orange-100"
        />
        <DescriptionCard
          heading="Perfume"
          description="This girl group blends futuristic electronic pop with synchronized dance performances, creating a unique sound and visual experience."
          image="/perfume.jpg"
          bgcolour="bg-orange-100"
        />
        <DescriptionCard
          heading="BABYMETAL"
          description="A fusion of heavy metal and idol pop, BABYMETAL has gained international fame for their high-energy performances and catchy, genre-defying music."
          image="/BM.jpeg"
          bgcolour="bg-orange-100"
        />
        <DescriptionCard
          heading="Fuji Kaze"
          description="Known for his unique blend of pop and R&B, Fuji Kaze has gained recognition for his soulful voice and heartfelt lyrics. His music often explores themes of love and personal reflection, resonating with a wide audience."
          image="/FK.jpeg"
          bgcolour="bg-orange-100"
        />
      </div>
      <div className="flex flex-wrap justify-evenly gap-6">
        <DescriptionCard
          heading="Seven Samurai"
          description="Akira Kurosawa’s epic samurai film where seven ronin are hired to defend a village from bandits, known for its strong character development and battle sequences."
          image="/7Samurai.jpeg"
          bgcolour="bg-orange-100"
        />
        <DescriptionCard
          heading="Godzilla"
          description="A monster film where the giant lizard Godzilla wreaks havoc on Tokyo, symbolizing post-war nuclear fears and becoming an iconic figure in global cinema."
          image="/Godzilla.jpeg"
          bgcolour="bg-orange-100"
        />
        <DescriptionCard
          heading="Battle Royale"
          description="In a dystopian future, high school students are forced into a deadly game where they must fight to the death until only one remains."
          image="/BR.jpeg"
          bgcolour="bg-orange-100"
        />
        <DescriptionCard
          heading="Ringu"
          description="A horror film about a cursed videotape that causes viewers to die seven days after watching it, blending psychological terror and supernatural elements."
          image="/Ringu.jpeg"
          bgcolour="bg-orange-100"
        />
        <DescriptionCard
          heading="Your Name"
          description="A romantic fantasy anime about two teenagers who mysteriously swap bodies, leading to a journey of self-discovery and love across time and space."
          image="/YN.png"
          bgcolour="bg-orange-100"
        />
      </div>
    </div>
  );
};

export default PopCulture;
