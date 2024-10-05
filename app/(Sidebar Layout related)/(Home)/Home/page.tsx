import { Button } from "@/components/ui/button";
import Image from "next/image";

const HomePage = () => {
  return (
    <div className="max-w-[1000px] mx-auto">
      {/* Hero Section */}
      <div className="bg-custom-red lg:h-[130px] px-5 py-3 text-white relative flex flex-col justify-between">
        <div>
          <h1 className="text-2xl sm:text-xl lg:text-2xl font-bold">
            Learn more on why you should visit Japan!
          </h1>
          <h3 className="lg:font-bold md:font-bold text-sm sm:text-base sm:font-light">
            (Tch, do you really need a reason?)
          </h3>
          <h3 className=" sm:pt-4 font-extrabold text-xl sm:text-2xl lg:text-3xl tracking-wide">
            おかえりなさい
          </h3>
        </div>
        <Image
          src="/Home-Japan.png"
          alt="home-japan"
          width={500}
          height={200}
          className="hidden lg:block absolute right-10 top-24"
        />
      </div>
      <Button
        size="lg"
        variant="default"
        className="hidden lg:block font-extrabold absolute right-20 "
      >
        &larr; Find out more
      </Button>
      <div className=" max-w-[400px] px-5 pt-3 lg:pr-6">
        <p className="text-sm sm:sm md:text-sm lg:text-sm text-justify">
          If you haven&apos;t visited Japan yet, then this blog is for you! It
          has everything from how to manage your budget to the best authentic
          foods you can try to the best places you can visit that make Japan...
          well, Japan! In this blog you&apos;ll find new dimensions on why
          people admire Japan so much. It’s a mind-blowing fusion of ancient
          wonder and futuristic marvel that no other country can match. You can
          step into centuries-old temples in the morning, then dive into
          neon-lit streets buzzing with the latest tech by night. The food?
          Unrivaled – we’re talking <b>sushi, ramen,</b> and street food
          that&apos;ll ruin all other meals for you. And nature? From the
          dreamlike <b>cherry blossoms</b> to the majestic <b>Mount Fuji,</b>{" "}
          it’s like stepping into a painting. Honestly, Japan is an experience
          the world simply cannot afford to miss. So why aren’t you there
          already?
        </p>
      </div>
    </div>
  );
};

export default HomePage;
