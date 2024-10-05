import PageHeader from "@/components/pageHeader";

const SocialNorms = () => {
  return (
    <div className="">
      <PageHeader
        maintext="Discover the Unique Social Norms of Japan"
        ptag="Japan’s social norms emphasize respect, harmony, and consideration for others. From bowing to removing shoes before entering a home, these customs reflect the country’s deep values of politeness and community."
        bgColor="bg-yellow-950"
        image="/SN-BG.jpg"
      />
      <div className="border-2 m-3 p-3 lg:m-8 lg:p-8">
        <h1 className="font-extrabold text-2xl lg:text-4xl mb-5 text-center">
          FOOD ETIQUETTE
        </h1>
        <p className="text-justify pb-3 text-xs md:text-sm lg:text-sm">
          Japan’s food culture is diverse, with each meal often considered a
          work of art. Following proper dining etiquette ensures you show
          respect for the chef’s skill.
        </p>
        <p className="text-justify pb-3 text-xs md:text-sm lg:text-sm">
          <b>Try Local Cuisine:</b> Japan offers a culinary adventure, from
          sushi and ramen to tempura and okonomiyaki. While Western food is
          available, exploring the local fare enhances your experience and
          supports traditional food culture.
        </p>
        <p className="text-justify pb-3 text-xs md:text-sm lg:text-sm">
          <b>Slurp Noodles:</b> When eating ramen, udon, or soba, slurping shows
          appreciation for the meal. However, with Western-style noodles like
          spaghetti, slurping is seen as inappropriate. Different contexts call
          for different manners.
        </p>
        <p className="text-justify pb-3 text-xs md:text-sm lg:text-sm">
          <b>Chopsticks Etiquette:</b> Chopstick manners are integral to
          Japanese dining. Stabbing food or playing with chopsticks is
          considered rude, and passing food chopstick-to-chopstick resembles a
          funeral ritual. Always use the serving utensils provided.
        </p>
      </div>
      <div className="border-2 m-3 p-3 lg:m-8 lg:p-8">
        <h1 className="font-extrabold text-2xl lg:text-4xl mb-5 text-center">
          PUBLIC TRANSPORTATION ETIQUETTE
        </h1>
        <p className="text-justify pb-3 text-xs md:text-sm lg:text-sm">
          Japan’s public transportation is famously punctual and peaceful,
          making it essential to respect the unspoken rules of silence and
          order.
        </p>
        <p className="text-justify pb-3 text-xs md:text-sm lg:text-sm">
          <b>Quiet in Public Spaces:</b> Trains and buses are often silent, with
          locals using the time to rest or work. If you need to talk, keep your
          voice low, and avoid making phone calls unless absolutely necessary.
        </p>
        <p className="text-justify pb-3 text-xs md:text-sm lg:text-sm">
          <b>Escalator Rules:</b> The rule varies depending on the region—stand
          on the left and walk on the right in Tokyo, while it’s the opposite in
          places like Osaka. Watch what others do to avoid blocking anyone in a
          rush.
        </p>
      </div>
      <div className="border-2 m-3 p-3 lg:m-8 lg:p-8">
        <h1 className="font-extrabold text-2xl lg:text-4xl mb-5 text-center">
          STREET ETIQUETTE
        </h1>
        <p className="text-justify pb-3 text-xs md:text-sm lg:text-sm">
          Japan’s public spaces are orderly, and maintaining this harmony means
          following simple but important social rules.
        </p>
        <p className="text-justify pb-3 text-xs md:text-sm lg:text-sm">
          <b>No Walking While Eating:</b> Eating on the go is uncommon in Japan,
          except in designated festival areas or near food stalls. It’s polite
          to finish your snack or meal at a nearby bench or standing table.
        </p>
        <p className="text-justify pb-3 text-xs md:text-sm lg:text-sm">
          <b>Hold on to Your Trash:</b> Japan takes pride in its cleanliness.
          Since public trash bins are rare, carrying a small bag for your trash
          is essential. You can dispose of it later near vending machines, in
          restrooms, or convenience stores.
        </p>
        <p className="text-justify pb-3 text-xs md:text-sm lg:text-sm">
          <b>Don’t Count Your Change:</b> In Japan, service is trusted, and
          counting change in front of the cashier might seem like a lack of
          faith in their honesty. Cashiers use small trays to give and receive
          money—an indirect, polite way of handling transactions.
        </p>
        <p className="text-justify pb-3 text-xs md:text-sm lg:text-sm">
          <b>Respect Geishas:</b> Geishas, especially in Kyoto, are revered
          cultural symbols trained in the arts. They are not street performers,
          so avoid asking for photos or interrupting them while they work.
          Observing from a respectful distance is ideal.
        </p>
        <p className="text-justify pb-3 text-xs md:text-sm lg:text-sm">
          <b>No Nose Blowing in Public:</b> In Japan, it’s considered impolite
          to blow your nose loudly in public places, such as restaurants or
          public transport. Instead, people discreetly dab their nose or wear
          masks to avoid drawing attention.
        </p>
      </div>

      <div className="border-2 m-3 p-3 lg:m-8 lg:p-8">
        <h1 className="font-extrabold text-2xl lg:text-4xl mb-5 text-center">
          INDOOR ETIQUETTE
        </h1>
        <p className="text-justify pb-3 text-xs md:text-sm lg:text-sm">
          Respect for cleanliness and order extends indoors, where shoes are
          often removed and specific customs are followed.
        </p>
        <p className="text-justify pb-3 text-xs md:text-sm lg:text-sm">
          <b>Remove Shoes Indoors:</b> Whether entering a traditional home,
          temple, or even some ryokan (traditional inns) and restaurants,
          removing shoes is a sign of respect. You’ll often be provided with
          indoor slippers, but always check before walking on tatami mats, which
          may require bare feet or socks.
        </p>
      </div>
    </div>
  );
};

export default SocialNorms;
