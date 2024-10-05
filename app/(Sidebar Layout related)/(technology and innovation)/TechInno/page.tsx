import Image from "next/image";

const TechnologyAndInnovation = () => {
  return (
    <div className="max-w-[1000px] mx-auto">
      <div className="bg-custom-red lg:h-[90px] px-5 py-3 text-white relative flex flex-col justify-between">
        <h1 className="sm:text-xl lg:text-3xl font-bold">
          Technology and Innovation
        </h1>
      </div>
      <div className="flex justify-center relative">
        <Image
          src="/Tech-shinkansen.jpg"
          alt="tech-japan"
          width={700}
          height={400}
          className="mx-20 mt-5"
        />
        <h1 className="text-red-100 text-3xl font-bold tracking-widest absolute bottom-7">
          SHINKANSEN
        </h1>
      </div>

      <div className="p-5 pt-14 lg:pl5 lg:pr-10">
        <h1 className="text-center text-3xl font-bold">
          Bullet Trains (Shinkansen){" "}
        </h1>
        <p className="text-sm sm:sm md:text-sm lg:text-sm text-justify">
          Riding the Shinkansen isn’t just fast, it’s a whole experience! You
          can enjoy Ekiben (gourmet train station bento boxes), which are famous
          for being region-specific and super delicious. You might not know
          this, but Japan’s bullet trains have been so punctual that their
          average delay is only about 36 seconds per year! For tech fans,
          there's an exciting future to watch out for—the Maglev Shinkansen,
          which will connect Tokyo and Nagoya in just 40 minutes, traveling at
          over 500 km/h! It’s the perfect way to explore Japan in speed and
          style.
        </p>
        <div className="p-5 lg:pl-5 lg:pr-10 relative">
          <div className="max-w-[450px] p-5 pr-10">
            <h1 className="text-center text-3xl font-bold">
              Smart Home Technology{" "}
            </h1>
            <p className="text-sm sm:sm md:text-sm lg:text-sm text-justify">
              Japan’s smart home tech will make you feel like you’re living in
              the future. From voice-activated appliances to high-tech toilets
              that are heated and self-cleaning, you’ll find surprises in almost
              every home. But did you know? Some Japanese homes have AI-powered
              robots that manage groceries and help with household chores! Also,
              many homes now come with energy-efficient systems, such as solar
              panels and smart meters, which are great for sustainable
              travelers. When you stay in a ryokan or hotel, keep an eye out for
              these advanced features—they’re common, but often overlooked by
              first-time visitors!
            </p>
          </div>
          <div className="max-w-[450px] p-5 pr-10">
            <h1 className="text-center text-3xl font-bold">Robotics and AI </h1>
            <p className="text-sm sm:sm md:text-sm lg:text-sm text-justify">
              Japan's obsession with robotics will blow your mind! While
              everyone knows about ASIMO and Pepper, what’s lesser-known is how
              robots are seamlessly integrated into daily life. You’ll find
              robot assistants in hotels, stores, and even airports greeting you
              in multiple languages! Some restaurants have robot chefs or
              servers, and hospitals use AI-powered robots for patient care.
              Don’t miss Tokyo’s Robot Restaurant—a crazy, neon-lit show
              featuring robots dancing, battling, and putting on an
              unforgettable spectacle! Robotics here isn’t just science fiction;
              it’s part of the everyday adventure!
            </p>
          </div>
          <Image
            src="/Tech1.jpg"
            alt="tech-japan"
            width={400}
            height={400}
            className=" rounded-3xl hidden lg:block absolute right-3 top-5"
          />
        </div>
        <div className=" flex items-center p-5 md:justify-center sm:justify-center">
          <Image
            src="/Tech2.jpg"
            alt="tech-japan"
            width={400}
            height={400}
            className=" rounded-3xl hidden lg:block ml-10"
          />
          <div className="max-w-[450px] ml-20 p-5 md:ml-0 sm:ml-0">
            <h1 className="text-center text-3xl font-bold">5G Connectivity </h1>
            <p className="text-sm sm:sm md:text-sm lg:text-sm text-justify">
              Japan is one of the global leaders in 5G, and it's rapidly
              expanding! With 5G, you can stream HD videos or even VR
              experiences in real-time across major cities. Many travelers don't
              realize that 5G in Japan is transforming tourism too—imagine using
              AR apps to explore ancient temples with historical overlays or
              seeing live translations of street signs. Tokyo’s tech hubs are
              showcasing smart vending machines and connected devices, all
              thanks to 5G. It’s a futuristic experience everywhere you go, and
              it’s evolving fast!
            </p>
            <h1 className="text-center mt-14 text-3xl font-bold">
              Cashless Payments{" "}
            </h1>
            <p className="text-sm sm:sm md:text-sm lg:text-sm text-justify">
              Japan’s cashless revolution is making travel super easy! While
              Suica and Pasmo cards are used for transit, did you know you can
              also use them in convenience stores, vending machines, and even at
              some tourist attractions? QR code payments like PayPay are
              becoming trendy in local markets and food stalls. Fun fact: Japan
              is slowly transitioning from being a “cash society” to a
              tech-savvy, cashless country—especially during big events like the
              Tokyo Olympics. And those Suica cards? You can get them with cute
              designs, perfect for a unique souvenir!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnologyAndInnovation;
