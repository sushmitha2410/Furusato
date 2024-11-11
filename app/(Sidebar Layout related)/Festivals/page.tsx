import BigInfo from "@/components/BigInfoCard";
import PageHeaderTwo from "@/components/pageHeaderTwo";

const Festivals = () => {
  return (
    <div className="">
      <PageHeaderTwo
        maintext="Immerse Yourself in Japan's Vibrant Festivals"
        ptag=" Japan celebrates its rich culture through vibrant festivals year-round. From the cherry blossom-filled Hanami to the colorful parades of Gion Matsuri, these events highlight the nation's traditions, community spirit, and seasonal beauty."
        bgColor="bg-red-950"
        imageOne="/F-I1.jpg"
        imageTwo="/F-I2.jpg"
      />
      <h1 className="font-extrabold text-4xl lg:text-6xl text-center m-8">
        FESTIVALS
      </h1>
      <div className=" mt-7 flex flex-wrap gap-y-4 justify-evenly">
        <BigInfo
          mainText="Shogatsu, celebrated from January 1st to 3rd, is Japan’s most significant holiday. Families gather, clean their homes to welcome good fortune, and visit shrines or temples to pray for prosperity. Traditional foods like osechi-ryori are enjoyed, and many engage in hatsumode (first shrine visit) to mark a fresh start."
          heading="New Year's (Shogatsu)"
          bgColor="bg-red-50"
          image="/OsechiRyoriShogatsu.jpg"
        />
        <BigInfo
          mainText="Setsubun takes place in early February and marks the beginning of spring. The iconic custom involves throwing roasted soybeans to drive away evil spirits and bring good luck. Families chant “Oni wa soto, fuku wa uchi!” ('Demons out, fortune in!') while performing this ritual at home or shrines."
          heading="Setsubun"
          bgColor="bg-red-50"
          image="/Setsubun.jpg"
        />
        <BigInfo
          mainText="Held from late March to early April, Hanami celebrates the beauty of cherry blossoms (sakura). People gather in parks for picnics under the blooming trees, reflecting on the transient nature of life. The tradition fosters both appreciation for nature and social gatherings among friends and family."
          heading="Hanami (Cherry Blossom Viewing)"
          bgColor="bg-red-50"
          image="/Hanami.jpg"
        />
        <BigInfo
          mainText="Obon, celebrated in mid-August, honors ancestral spirits. Families return to their hometowns, visit graves, and offer food at home altars. Bon odori dances are performed, and lanterns guide spirits back to the other world. It’s a time of reflection, remembrance, and reconnecting with loved ones."
          heading="Obon"
          bgColor="bg-red-50"
          image="/Obon.jpg"
        />
        <BigInfo
          mainText="Celebrated on July 7th or August 7th, Tanabata is based on the ancient legend of two lovers, Orihime and Hikoboshi. People write wishes on colorful paper strips and hang them on bamboo branches. Streets and homes are adorned with vibrant decorations, creating a festive and magical atmosphere."
          heading="Tanabata (Star Festival)"
          bgColor="bg-red-50"
          image="/Tanabata.jpg"
        />
        <BigInfo
          mainText="Kyoto’s Gion Matsuri, held throughout July, is one of Japan’s most famous festivals. Originating in the 9th century, it features spectacular parades of elaborately decorated floats (yamaboko) and traditional ceremonies at Yasaka Shrine. This month-long event showcases the rich cultural heritage of Kyoto and attracts thousands of visitors."
          heading="Gion Matsuri"
          bgColor="bg-red-50"
          image="/GionMatsuri.jpg"
        />
        <BigInfo
          mainText="Held in mid-May, Sanja Matsuri is one of Tokyo's largest festivals, celebrating the founders of Sensoji Temple in Asakusa. The festival features lively processions with portable shrines (mikoshi), traditional performances, and a vibrant atmosphere. Millions of participants come together, highlighting community spirit and cultural pride."
          heading="Sanja Matsuri"
          bgColor="bg-red-50"
          image="/SanjaMatsuri.jpg"
        />
      </div>
      <h1 className="font-extrabold text-4xl lg:text-6xl text-center m-8">
        EVENTS
      </h1>
      <div className="mt-7 flex flex-wrap gap-y-4 justify-evenly">
        <BigInfo
          mainText="Golden Week is a string of national holidays from April 29th to May 5th, including Showa Day, Constitution Memorial Day, Greenery Day, and Children’s Day. It's one of Japan's busiest travel seasons, with many families going on trips and participating in various cultural events across the country."
          heading="Golden Week"
          bgColor="bg-red-50"
          image="/GoldenWeek.jpg"
        />
        <BigInfo
          mainText="Held in February, Sapporo Snow Festival transforms the city into a winter wonderland with enormous snow and ice sculptures. Visitors from around the world come to see intricate displays of famous landmarks, anime characters, and cultural symbols, making it one of Japan’s most popular winter events."
          heading="Sapporo Snow Festival"
          bgColor="bg-red-50"
          image="/SnowFestival.jpg"
        />
        <BigInfo
          mainText="On December 31st, Omisoka marks the last day of the year. Families gather for a final meal, often toshikoshi soba (year-crossing noodles), symbolizing a fresh start. At midnight, temple bells are rung 108 times to cleanse worldly desires and welcome the new year with purity."
          heading="Omisoka (New Year's Eve)"
          bgColor="bg-red-50"
          image="/Omisoka.jpg"
        />
        <BigInfo
          mainText="Koyo, occurring from October to November, is the autumn equivalent of cherry blossom viewing. People gather to admire the vibrant red, orange, and yellow leaves, especially those of Japanese maple trees. Popular spots for koyo include parks, temples, and gardens, offering stunning natural landscapes."
          heading="Koyo (Autumn Leaves Viewing)"
          bgColor="bg-red-50"
          image="/Koyomi.jpg"
        />
        <BigInfo
          mainText="Nagoya Matsuri, held in October, celebrates the city’s rich cultural history. The event features a grand parade of historical reenactments, traditional floats, and performances. It honors Japan's unification heroes—Oda Nobunaga, Toyotomi Hideyoshi, and Tokugawa Ieyasu—who were all connected to Nagoya’s legacy, creating a blend of history and festivity."
          heading="Nagoya Matsuri"
          bgColor="bg-red-50"
          image="/NagoyaMatsuri.jpg"
        />
      </div>
    </div>
  );
};

export default Festivals;
