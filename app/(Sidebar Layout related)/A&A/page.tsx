import BigInfo from "@/components/BigInfoCard";
import InfoCard from "@/components/infoCard";
import PageHeaderTwo from "@/components/pageHeaderTwo";

const ArtAndArchitecture = () => {
  return (
    <div>
      <PageHeaderTwo
        bgColor="bg-slate-900"
        imageOne="/MJArc.avif"
        imageTwo="/TJArt.avif"
        maintext="Explore the Timeless Beauty of Japanese Architecture"
        ptag="Japanese architecture beautifully merges simplicity and nature, from ancient temples to modern skyscrapers. Each design reflects harmony, balance, and the nation's rich cultural heritage."
      />
      <p className="text-2xl font-extrabold lg:text-4xl text-center py-7">
        Traditional Japanese Art
      </p>
      <div className="flex flex-wrap justify-evenly gap-y-4">
        <BigInfo
          heading="Ink Painting (Sumi-e)"
          mainText="Sumi-e is a meditative art form that emphasizes simplicity and the beauty of negative space. Artists use a limited palette of black ink, applying varying brush strokes to create depth and emotion in their compositions. This minimalist style often captures landscapes, nature, and elements of Zen philosophy, allowing viewers to appreciate the serenity and harmony inherent in the art."
          image="/Sumi.jpg"
          bgColor="bg-slate-200"
        />
        <BigInfo
          heading="Ukiyo-e"
          mainText="Ukiyo-e, meaning 'pictures of the floating world' flourished during Japan's Edo period. These woodblock prints beautifully illustrate the vibrancy of daily life, capturing scenes of kabuki actors, beautiful women, and breathtaking landscapes. Artists like Hokusai and Hiroshige became renowned for their ability to convey movement and emotion, making Ukiyo-e a significant influence on Western art movements, including Impressionism."
          image="/History-Edo.jpg"
          bgColor="bg-slate-200"
        />
        <BigInfo
          heading="Ikebana"
          mainText="Ikebana, the art of flower arranging, goes beyond mere decoration; it reflects the beauty of nature through careful composition. Each arrangement emphasizes balance, harmony, and a connection to the seasons. Practitioners use various materials, including branches and leaves, and focus on line, balance, and simplicity. This ancient art form encourages mindfulness and contemplation, making it a unique expression of Japanese aesthetics."
          image="/Ikebana.jpeg"
          bgColor="bg-slate-200"
        />
        <BigInfo
          heading="Origami"
          mainText="Origami, the intricate art of paper folding, transforms simple sheets of paper into detailed sculptures and designs. Rooted in Japanese culture, it encompasses a range of styles and techniques, from traditional models like cranes and flowers to modern interpretations that push the boundaries of creativity. Origami promotes patience and precision, inviting both children and adults to explore the endless possibilities of paper."
          image="/Origami.jpg"
          bgColor="bg-slate-200"
        />
        <BigInfo
          heading="Caligraphy (Shodo)"
          mainText="Calligraphy, known as Shodo, is a revered art form in Japan, where the beauty of writing becomes an expression of art. Using brush and ink, calligraphers create characters that convey both meaning and emotion, emphasizing the rhythm and flow of each stroke. Shodo reflects the artist’s spirit and mastery of technique, transforming words into captivating visual art. This practice also serves as a form of meditation, enhancing focus and creativity."
          image="/Calligrapy.jpg"
          bgColor="bg-slate-200"
        />
      </div>
      <p className="text-2xl font-extrabold lg:text-4xl text-center py-7">
        Traditional Japanese Architecture
      </p>
      <div className="flex flex-wrap justify-evenly gap-y-4">
        <BigInfo
          heading="Shinto Shrines"
          mainText="Shinto shrines are sacred spaces that embody Japan's spiritual heritage. Characterized by their wooden structures, thatched roofs, and simple yet elegant designs, these shrines serve as places of worship and reflection. The famous Ise Shrine, with its sacred rituals and dedication to the sun goddess Amaterasu, showcases the deep connection between nature and spirituality in Japanese architecture, inviting visitors to experience tranquility and reverence."
          image="/ShintoShrine.jpg"
          bgColor="bg-slate-200"
        />
        <BigInfo
          heading="Buddhist Temples"
          mainText="Buddhist temples, such as the Todai-ji Temple in Nara, are ornate structures that reflect Japan’s spiritual journey. These temples often feature impressive wooden architecture, intricate carvings, and majestic pagodas that house sacred relics. Each temple serves as a place for meditation, prayer, and community gatherings, embodying the harmonious relationship between art, spirituality, and nature in Japanese culture."
          image="/BuddhistTemple.jpg"
          bgColor="bg-slate-200"
        />
        <BigInfo
          heading="Tea Houses (Chashitsu)"
          mainText="Tea houses, or Chashitsu, are intimate spaces designed for the Japanese tea ceremony, emphasizing harmony and tranquility. With natural materials, sliding doors, and tatami mat flooring, their minimalist architecture reflects Zen principles, fostering mindfulness and a deep connection to nature."
          image="/TeaHouse.jpg"
          bgColor="bg-slate-200"
        />
        <BigInfo
          heading="Castles(Shiro)"
          mainText="Japanese castles are symbols of power and defense. Featuring wooden and stone elements, high walls, and intricate defense systems, they showcase the artistry of feudal Japan. Each castle reflects the rich history of samurai and warfare while blending functionality with beauty in stunning landscapes."
          image="/Shiro.jpg"
          bgColor="bg-slate-200"
        />
        <BigInfo
          heading="Machiya"
          mainText="Machiya are traditional wooden townhouses that reflect the lifestyle of urban dwellers in historical Japan. Often found in Kyoto, these narrow-fronted homes feature deep interiors designed for both living and commerce. The architectural style emphasizes harmony with the environment, utilizing natural materials and promoting ventilation and light. Machiya exemplify the blending of residential and commercial spaces, preserving a unique aspect of Japanese culture."
          image="/Machiya.jpg"
          bgColor="bg-slate-200"
        />
      </div>
      <p className="text-2xl font-extrabold lg:text-4xl text-center py-7">
        Modern Japanese Architecture
      </p>
      <div className="flex flex-wrap justify-evenly gap-y-4">
        <BigInfo
          heading="Metabolism Movement"
          mainText="The Metabolism movement emerged in the 1960s as a radical architectural philosophy that embraced modular and organic structures. Architects like Kisho Kurokawa designed buildings such as the Nakagin Capsule Tower, which symbolizes flexibility and adaptability. This avant-garde movement sought to address urbanization challenges by proposing buildings that could evolve over time, reflecting Japan's dynamic culture and innovative spirit."
          image="/MetaMove.jpg"
          bgColor="bg-slate-200"
        />
        <BigInfo
          heading="Minimalism"
          mainText="Contemporary Japanese architecture is often characterized by minimalism, emphasizing clean lines, natural materials, and a harmonious connection to nature. Renowned architects like Tadao Ando create spaces that evoke tranquility and reflection. By blending indoor and outdoor environments, minimalist designs invite occupants to appreciate simplicity and beauty, fostering a deeper connection with their surroundings."
          image="/Minimalism.jpg"
          bgColor="bg-slate-200"
        />
        <BigInfo
          heading="Brutalism"
          mainText=" Post-war Japanese architecture embraced Brutalism, focusing on raw concrete and bold forms. This style is exemplified in structures like the National Museum of Western Art in Tokyo, where the emphasis on materiality and geometric shapes creates a powerful visual impact. Brutalism reflects Japan's resilience and innovation during a transformative period, showcasing how architecture can convey cultural identity and history."
          image="/Brutalism.jpg"
          bgColor="bg-slate-200"
        />
      </div>
    </div>
  );
};

export default ArtAndArchitecture;
