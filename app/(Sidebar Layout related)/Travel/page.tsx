import PageHeaderTwo from "@/components/pageHeaderTwo";
import Image from "next/image";

const Travel = () => {
  return (
    <div className="">
      <PageHeaderTwo
        maintext="Explore Seamless Travel and Unique Stays in Japan"
        ptag="Japan offers a sophisticated transportation network and diverse accommodations, making travel effortless. Whether it's riding the iconic Shinkansen or staying in a traditional ryokan, every experience is steeped in culture and convenience."
        imageOne="/Travel-BG.jpg"
        imageTwo="/Accomodation-BG.jpg"
        bgColor="bg-stone-900"
      />
      <div className="border-2 m-3 p-3 lg:m-8 lg:p-8">
        <h1 className="font-extrabold text-2xl lg:text-4xl mb-5 text-center">
          TRAVEL AND TRANSPORTATION
        </h1>
        <p className="text-justify pb-3 text-xs md:text-sm lg:text-sm">
          Japan boasts one of the world’s most efficient and advanced
          transportation systems. Here are the key methods of getting around:
        </p>
        <p className="text-justify pb-3 text-xs md:text-sm lg:text-sm">
          <b>Shinkansen(Bullet Train) :</b> Japan&apos;s famous Shinkansen
          network provides lightning-fast travel between major cities like
          Tokyo, Kyoto, and Osaka. Known for punctuality and comfort, these
          trains offer a luxurious experience, especially for travelers with
          Japan Rail (JR) passes. The sleek design and speeds of up to 320 km/h
          make the Shinkansen not only a convenient mode of transport but also a
          symbol of Japan’s technological advancement.
        </p>
        <p className="text-justify pb-3 text-xs md:text-sm lg:text-sm">
          <b>Public Metro and Trains :</b> Major cities like Tokyo and Osaka
          have extensive public metro systems, making travel within urban areas
          incredibly efficient. Tokyo&apos;s metro is famously complex but
          well-organized, with clear signs and ticketing systems in English.
          Local trains and subways offer affordable and frequent services,
          catering to both daily commuters and tourists.
        </p>
        <p className="text-justify pb-3 text-xs md:text-sm lg:text-sm">
          <b>Buses :</b> While less common than trains, buses play a crucial
          role in reaching more remote areas and mountainous regions like the
          Japanese Alps. Both local and long-distance highway buses are widely
          available, offering cheaper alternatives to trains for budget
          travelers.
        </p>
        <p className="text-justify pb-3 text-xs md:text-sm lg:text-sm">
          <b>Taxis :</b> Taxis in Japan are known for their cleanliness and
          professionalism. Though expensive compared to public transport, taxis
          can be a convenient option, especially in rural areas or late at
          night. Most taxi drivers accept credit cards, and language barriers
          are often eased by in-car navigation systems.
        </p>
        <p className="text-justify pb-3 text-xs md:text-sm lg:text-sm">
          <b>Bicycles :</b> Cycling is a popular method of travel in cities like
          Kyoto and Nara, where the terrain is flat, and bike rentals are
          readily available. Bicycles offer a slower, more intimate way to
          explore historic areas and local neighborhoods.
        </p>
      </div>
      <div className="bg-stone-900 hidden md:hidden lg:flex h-96 justify-evenly items-center">
        <Image
          src="/Ryokan.jpg"
          alt="Ryokan"
          height={220}
          width={220}
          className="rounded-t-[100px]"
        />
        <Image
          src="/Minshuku.jpg"
          alt="Minshuku"
          height={220}
          width={220}
          className="rounded-t-[100px]"
        />
        <Image
          src="/Capsule.jpg"
          alt="Capsule Hotels"
          height={220}
          width={220}
          className="rounded-t-[100px]"
        />
      </div>

      <div className="border-2 m-3 p-3 lg:m-8 lg:p-8">
        <h1 className="font-extrabold text-2xl lg:text-4xl mb-5 text-center">
          ACCOMODATION
        </h1>
        <p className="text-justify pb-3 text-xs md:text-sm lg:text-sm">
          Japan offers a wide range of accommodations to fit every travelers
          budget and style:
        </p>
        <p className="text-justify pb-3 text-xs md:text-sm lg:text-sm">
          <b>Ryokan(Traditional Japanese Inns) :</b> Ryokan are a quintessential
          part of the Japanese experience, offering a glimpse into traditional
          hospitality. Guests can sleep on futons laid out on tatami mats,
          indulge in kaiseki (multi-course meals), and soak in onsen (hot
          springs). Located in scenic spots like Hakone and Kyoto, ryokans offer
          both luxury and cultural immersion, often with breathtaking views of
          nature.
        </p>
        <p className="text-justify pb-3 text-xs md:text-sm lg:text-sm">
          <b>Minshuku(Guesthouse) :</b> For a more personal touch, minshuku are
          family-run guesthouses offering simple accommodations and home-cooked
          meals. They are especially popular in rural areas and provide an
          opportunity to engage with locals and experience the warmth of
          Japanese hospitality in a homely setting.
        </p>
        <p className="text-justify pb-3 text-xs md:text-sm lg:text-sm">
          <b>Business Hotels :</b> Affordable, compact, and found near train
          stations, business hotels are ideal for budget-conscious travelers.
          Rooms are typically small but efficient, offering basic amenities like
          Wi-Fi, a desk, and private bathrooms. Chains like Toyoko Inn and APA
          Hotels are popular, providing reliable and comfortable stays across
          the country.
        </p>
        <p className="text-justify pb-3 text-xs md:text-sm lg:text-sm">
          <b>Capsule Hotels :</b> For a truly unique experience, try a capsule
          hotel. Originally designed for salarymen needing a quick rest, these
          tiny pod-like accommodations are now a hit with tourists seeking
          budget-friendly and quirky stays. Though small, capsules are often
          equipped with modern tech like TV screens, and shared facilities like
          showers and lockers are kept impeccably clean.
        </p>
        <p className="text-justify pb-3 text-xs md:text-sm lg:text-sm">
          <b>Luxury Hotels :</b> Japan boasts numerous five-star hotels,
          especially in cities like Tokyo and Kyoto. International chains like
          the Ritz-Carlton and local luxury brands such as Hoshinoya offer
          opulent rooms, world-class service, and gourmet dining. Many luxury
          hotels also provide traditional elements, such as tea ceremonies and
          Zen-inspired interiors.
        </p>
      </div>
    </div>
  );
};

export default Travel;
