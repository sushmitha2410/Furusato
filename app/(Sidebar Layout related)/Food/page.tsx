import InfoCardSmall from "@/components/infoCardSmall";
import PageHeader from "@/components/pageHeader";
import PageHeaderTwo from "@/components/pageHeaderTwo";

const Food = () => {
  return (
    <div>
      <PageHeader
        bgColor="bg-green-900"
        maintext="Discover Japan's Unique and Delicious Cuisine"
        ptag="From sushi and ramen to tempura, yakitori, and exquisite regional specialties, Japanese cuisine offers a diverse and rich culinary experience. Each dish reflects the artistry and deep cultural traditions that make Japan’s food scene a true global treasure."
        image="/FoodBG.jpg"
      />
      <h1 className="py-4 px-4 text-green-900 text-2xl md:text-3xl text-center">
        Traditional Japanese Cuisine
      </h1>
      <div className=" my-4 gap-y-12 flex flex-wrap justify-evenly">
        <InfoCardSmall
          heading="Sushi"
          description="A world-famous dish made with vinegared rice, seafood, and vegetables, often served with soy sauce and wasabi."
          image="/Sushi.avif"
        />
        <InfoCardSmall
          heading="Sashimi"
          description="Fresh, thinly sliced raw fish or seafood, usually served with soy sauce, wasabi, and pickled ginger."
          image="/sashimi.avif"
        />
        <InfoCardSmall
          heading="Tempura"
          description="Lightly battered and deep-fried seafood and vegetables, known for its crispy texture."
          image="/tempura.avif"
        />
        <InfoCardSmall
          heading="Ramen"
          description="A noodle soup dish with a rich broth, typically made from pork, soy sauce, or miso, topped with meat, vegetables, and eggs."
          image="/ramen.avif"
        />
        <InfoCardSmall
          heading="Nabe"
          description="A hot pot dish where ingredients like meat, vegetables, and tofu are simmered together, often shared with others."
          image="/nabe.jpeg"
        />
        <InfoCardSmall
          heading="Miso Soup"
          description="A simple yet essential soup made with fermented soybean paste, tofu, seaweed, and green onions."
          image="/miso.jpeg"
        />
        <InfoCardSmall
          heading="Yakitori"
          description="Skewered, grilled chicken pieces, often seasoned with tare (soy-based sauce) or salt."
          image="/yakitori.jpg"
        />
      </div>
      <h1 className="py-4 px-4 text-green-900 text-2xl md:text-3xl text-center">
        Traditional Japanese Sweets (Wagashi)
      </h1>
      <div className=" my-4 gap-y-12 flex flex-wrap justify-evenly">
        <InfoCardSmall
          heading="Mochi"
          description="A chewy rice cake made from glutinous rice, often filled with sweet red bean paste or other ingredients."
          image="/mochi.avif"
        />
        <InfoCardSmall
          heading="Dorayaki"
          description="A pancake-like dessert filled with sweet red bean paste."
          image="/dorayaki.jpeg"
        />
        <InfoCardSmall
          heading="Manju"
          description="Steamed buns with sweet fillings, commonly filled with anko (sweet red bean paste)."
          image="/manju.jpeg"
        />
        <InfoCardSmall
          heading="Daifuku"
          description="A type of mochi filled with various sweet fillings, such as anko or fruits."
          image="/daifuku.jpeg"
        />
      </div>
      <h1 className="py-4 px-4 text-green-900 text-2xl md:text-3xl text-center">
        Modern Japanese Cuisine
      </h1>
      <div className=" my-4 gap-y-12 flex flex-wrap justify-evenly">
        <InfoCardSmall
          heading="Katsu"
          description="Breaded and deep-fried meat cutlets, often served with rice and miso soup (e.g., Tonkatsu – pork cutlet)."
          image="/katsu.avif"
        />
        <InfoCardSmall
          heading="Okonomiyaki"
          description="A savory pancake made with flour, eggs, shredded cabbage, and a variety of toppings like meat or seafood."
          image="/okonomoyaki.jpg"
        />
        <InfoCardSmall
          heading="Takoyaki"
          description="Ball-shaped snacks filled with diced octopus, topped with takoyaki sauce, mayonnaise, and bonito flakes."
          image="/takoyaki.jpeg"
        />
        <InfoCardSmall
          heading="Kare"
          description="A mild, thick curry served over rice, often accompanied by breaded pork cutlet (katsu curry)."
          image="/kare.jpg"
        />
        <InfoCardSmall
          heading="Omurice"
          description="Fried rice wrapped in a thin omelet, often topped with ketchup or demi-glace sauce."
          image="/omurice.jpeg"
        />
      </div>
      <h1 className="py-4 px-4 text-green-900 text-2xl md:text-3xl text-center">
        Popular Street Foods
      </h1>
      <div className=" my-4 gap-y-12 flex flex-wrap justify-evenly">
        <InfoCardSmall
          heading="Taiyaki"
          description="Fish-shaped cakes with sweet fillings."
          image="/taiyaki.avif"
        />
        <InfoCardSmall
          heading="Yaki Imo"
          description="Grilled sweet potatoes, a favorite during colder months."
          image="/yakiimo.jpeg"
        />
        <InfoCardSmall
          heading="Crepes"
          description="Japanese-style crepes filled with fruits, whipped cream, or savory ingredients, popular in Harajuku."
          image="/crepes.jpeg"
        />
        <InfoCardSmall
          heading="Kakigori"
          description="Shaved ice flavored with syrups, often enjoyed in the summer."
          image="/kakigori.jpeg"
        />
      </div>
    </div>
  );
};

export default Food;
