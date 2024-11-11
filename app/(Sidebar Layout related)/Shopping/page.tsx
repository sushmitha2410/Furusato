import InfoCardSmall from "@/components/infoCardSmall";
import PageHeader from "@/components/pageHeader";

const Shopping = () => {
  return (
    <div>
      <PageHeader
        bgColor="bg-indigo-950"
        maintext="Discover Unique Souvenirs from Japan!"
        ptag="Dive into our guide to find out how to shop for authentic Japanese souvenirs that capture the essence of your journey!"
        image="/Shop-BG.jpg"
      />
      <div className=" my-4 gap-y-12 flex flex-wrap justify-evenly">
        <InfoCardSmall
          heading="Omamori"
          description="Omamori are small amulets found at Shinto shrines and Buddhist temples, believed to provide protection and good fortune. They come in various types, offering blessings for health, love, or success. These are highly personalized and meaningful gifts."
          image="/Omamori.jpg"
        />
        <InfoCardSmall
          heading="Kokeshi Dolls"
          description="These simple, wooden dolls, traditionally handmade, are a symbol of Japan’s craftsmanship. Their round heads and cylindrical bodies, often painted with floral designs, make them a charming and artistic keepsake."
          image="/Kokeshi.jpg"
        />
        <InfoCardSmall
          heading="Furoshiki"
          description="Furoshiki is a traditional Japanese cloth used for wrapping gifts or carrying items. Made of silk or cotton and decorated with intricate patterns, multipurpose souvenir that can be reused in many creative ways."
          image="/Furoshiki.jpg"
        />
        <InfoCardSmall
          heading="Daruma Dolls"
          description="Daruma dolls are a symbol of perseverance and good luck. They have a distinctive round shape and hollow body, with one eye painted in. The other eye is painted once a goal is achieved, making them a great motivational gift."
          image="/Daruma.jpg"
        />
        <InfoCardSmall
          heading="Sensu(Folding Fans)"
          description="Japanese folding fans, or sensu, are both practical and decorative. They come in a variety of materials and designs, making them elegant gifts that evoke the aesthetic and cultural essence of Japan."
          image="/Sensu.jpg"
        />
        <InfoCardSmall
          heading="Yukata"
          description="A yukata is a casual, lightweight version of the traditional kimono, often worn during summer festivals. It’s an authentic souvenir that allows you to bring home a piece of Japanese fashion and cultural heritage."
          image="/KimonoF.jpg"
        />
        <InfoCardSmall
          heading="Tenugui"
          description="Tenugui are versatile, thin cotton towels used for various purposes, from wrapping gifts to personal use. They are often adorned with traditional Japanese prints and are a simple yet beautiful souvenir."
          image="/Tenugui.jpg"
        />
      </div>
    </div>
  );
};

export default Shopping;
