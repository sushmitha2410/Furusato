import BigInfo from "@/components/BigInfoCard";
import PageHeader from "@/components/pageHeader";

const Nature = () => {
  return (
    <div className="">
      <PageHeader
        maintext="Be Awestruck by the Untouched Beauty of Japan’s Landscapes"
        ptag="From the iconic peak of Mount Fuji to serene bamboo forests and shimmering coastlines, every part of its nature feels like a work of art. Cascading waterfalls and tranquil forests create a deep sense of wonder and connection to nature’s unspoiled beauty."
        bgColor="bg-sky-950"
        image="/Nature-BG.jpg"
      />
      <div className="mt-4 flex flex-wrap items-center justify-evenly gap-y-4">
        <BigInfo
          image="/Fuji.jpg"
          mainText="Mount Fuji, Japan’s highest peak, is an iconic symbol of the country. Its symmetrical beauty and cultural significance have made it a must-visit spot for locals and tourists alike. Whether you hike the mountain or admire it from nearby locations like Lake Kawaguchiko, the sight is breathtaking. Mount Fuji is particularly stunning during cherry blossom season or when viewed against a sunrise. Fuji-san is also part of the UNESCO World Heritage list, and its presence in art and culture is deeply woven into Japan’s history."
          heading="Mount Fuji(富士山)"
          bgColor="bg-sky-50"
        />
        <BigInfo
          image="/FIS.jpg"
          mainText="Kyoto is the heart of traditional Japan, home to an array of stunning temples, shrines, and gardens. Key spots include the Golden Pavilion (Kinkaku-ji), Fushimi Inari Shrine with its thousands of red torii gates, and Arashiyama Bamboo Grove. As a former imperial capital, Kyoto exudes history and cultural heritage, making it a must-visit for those seeking a glimpse into Japan’s past. The cherry blossom season in spring transforms the city into a dreamlike landscape​"
          heading="Kyoto's Historic Temples"
          bgColor="bg-sky-50"
        />
        <BigInfo
          image="/Crossing.jpg"
          mainText="Japan’s sprawling capital is a city of contrasts, blending ancient temples like Senso-ji with futuristic architecture and neon-lit districts such as Shibuya and Shinjuku. Tokyo offers a vast range of attractions, from the historic Imperial Palace to the shopping districts of Ginza and Harajuku. The city is also a hub for culinary delights, housing the most Michelin-starred restaurants in the world. Tokyo’s blend of modernity and tradition keeps it high on every traveler’s list​"
          heading="Tokyo's Shibuya Crossing"
          bgColor="bg-sky-50"
        />
        <BigInfo
          image="/Dotonbori.jpg"
          mainText="Osaka, Japan’s third-largest city, is famous for its bustling urban vibe, historical landmarks, and food scene. Highlights include Osaka Castle, a striking remnant of Japan’s feudal era, and Universal Studios Japan. Dotonbori, a lively district along the canal, is known for its neon signs, street food stalls, and shopping. The city is the perfect destination for those who want to immerse themselves in Japan's vibrant urban culture​"
          heading="Osaka's Dotonbori District"
          bgColor="bg-sky-50"
        />
        <BigInfo
          image="/Todai-ji.jpg"
          mainText="Home to many of Japan's oldest temples, including Todai-ji, which houses the Great Buddha, Nara offers a quieter but no less impressive cultural experience. Nara Park is famous for its friendly free-roaming deer, considered sacred in Shinto tradition. This historical city, once the capital of Japan, is known for its peaceful, verdant landscapes and the serene atmosphere of its temples​"
          heading="Nara's Todai-ji Temple"
          bgColor="bg-sky-50"
        />
        <BigInfo
          image="/HPMP.jpg"
          mainText="Known for its poignant history, Hiroshima draws visitors to the Peace Memorial Park and the Atomic Bomb Dome, both UNESCO World Heritage sites, commemorating the events of World War II. The nearby Itsukushima Shrine on Miyajima Island, famous for its 'floating' torii gate, is another popular spot. Hiroshima is a city that has turned its tragic past into a symbol of peace and resilience​"
          heading="Hiroshima Peace Memorial Park"
          bgColor="bg-sky-50"
        />
        <BigInfo
          image="/Hakone.jpg"
          mainText="Famous for its hot springs, Hakone offers stunning views of Mount Fuji and picturesque scenery around Lake Ashi. The Hakone Open-Air Museum, featuring contemporary sculptures set against a mountainous backdrop, is a unique attraction. Visitors can also explore the area’s many onsen resorts, or take a boat cruise on the lake for unparalleled views of Fuji, especially on clear days​"
          heading="Hakone"
          bgColor="bg-sky-50"
        />
        <BigInfo
          image="/SnowFestival.jpg"
          mainText="As the capital of Hokkaido, Sapporo is known for its winter activities, especially during the famous Sapporo Snow Festival, where intricate ice sculptures line the streets. The city offers a mix of urban attractions and access to nearby mountains for skiing and hiking. In summer, Sapporo is a great base for exploring Hokkaido’s natural wonders, including national parks and flower fields​"
          heading="Sapporo"
          bgColor="bg-sky-50"
        />
        <BigInfo
          image="/Okinawa.jpeg"
          mainText="Okinawa offers a completely different side of Japan, with its subtropical climate and pristine beaches. These islands are known for their clear blue waters, snorkeling, and diving spots. Historically, Okinawa was its own kingdom before becoming part of Japan, giving the area a distinct culture and cuisine​"
          heading="Okinawa and the Southwest Islands"
          bgColor="bg-sky-50"
        />
        <BigInfo
          image="/Kinkaku.jpg"
          mainText="Located in Kyoto, Kinkaku-ji is one of Japan's most photographed and famous landmarks. The Zen Buddhist temple is covered in gold leaf, and its reflection on the surrounding pond is a stunning sight, especially in autumn. Visitors can explore the meticulously maintained gardens and experience the calm, reflective atmosphere that the temple exudes."
          heading="Kinkaku-ji (Golden Pavilion)"
          bgColor="bg-sky-50"
        />
      </div>
    </div>
  );
};

export default Nature;
