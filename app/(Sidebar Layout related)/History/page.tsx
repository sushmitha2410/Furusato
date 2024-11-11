import BigInfo from "@/components/BigInfoCard";
import PageHeaderTwo from "@/components/pageHeaderTwo";

const HistoryJapan = () => {
  return (
    <div>
      <PageHeaderTwo
        bgColor="bg-teal-950"
        maintext=" Delve into the Rich Tapestry of Japanese History"
        ptag=" Japan’s history is a journey through eras of samurai, emperors, and cultural transformation. From the ancient Jomon period to the Meiji Restoration, each chapter has shaped its unique traditions and global influence."
        imageOne="/History1.jpg"
        imageTwo="/History2.jpg"
      />
      <div className="mt-7 flex flex-wrap gap-y-4 justify-evenly">
        <BigInfo
          mainText="TIn the beginning, the Jomon period birthed Japan’s earliest inhabitants, who thrived as hunter-gatherers, leaving behind intricate pottery and a deep respect for nature. As time passed, the Yayoi period introduced rice agriculture, fostering a more settled lifestyle and social hierarchy. This transition marked a shift towards a more structured society, influenced by contact with neighboring cultures, notably from the Korean peninsula. The groundwork was laid for a unified Japan as new technologies and ideas spread across the archipelago."
          heading="Jomon-Yayoi Period (14,000 BCE–300 CE)"
          image="/History-JY.jpg"
          bgColor="bg-teal-100"
        />
        <BigInfo
          mainText="The Kofun period saw the emergence of powerful clans, exemplified by the construction of monumental burial mounds. This era was characterized by a growing central authority, culminating in the Asuka period, where Buddhism arrived, transforming the spiritual landscape. Prince Shotoku championed this new faith, intertwining it with governance, while adopting Chinese culture and philosophies. These influences helped forge a more cohesive identity for Japan, paving the way for the establishment of the first centralized government."
          heading="Kofun-Asuka Period (300–710)"
          image="/History-KA.jpeg"
          bgColor="bg-teal-100"
        />
        <BigInfo
          mainText="As Nara became the capital, Japan flourished culturally and politically. The Ritsuryō system codified laws and governance, while Buddhism blossomed through magnificent temple constructions. However, the capital soon moved to Heian-kyo (Kyoto), ushering in the Heian period, renowned for its courtly culture and the arts. The Tale of Genji, written during this time, illustrated the refinement of Japanese aesthetics and societal norms. This period of peace and prosperity was eventually challenged by the rise of the samurai class, foreshadowing the era of warfare that lay ahead."
          heading="Nara and Heian Periods (710–1185)"
          image="/History-Nara.jpeg"
          bgColor="bg-teal-100"
        />
        <BigInfo
          mainText="The Kamakura period heralded the ascendancy of the samurai with the establishment of the Kamakura shogunate, marking a shift in power from the imperial court to military leaders. The Mongol invasions tested this new order, but Japan's resilience shone through. The following Muromachi period was marked by cultural flourishing, even amidst feudal strife. As civil wars erupted, notable figures like Oda Nobunaga began to unify Japan. This tumultuous landscape set the stage for further consolidation of power and the emergence of new cultural forms."
          heading="Kamakura and Muromachi Periods (1185–1573)"
          image="/History-KM.webp"
          bgColor="bg-teal-100"
        />
        <BigInfo
          mainText="The Sengoku period, a time of constant warfare, witnessed rival daimyos battling for supremacy. The emergence of influential leaders like Oda Nobunaga and Toyotomi Hideyoshi ultimately led to the unification of Japan. The Azuchi-Momoyama period was characterized by Nobunaga’s innovative military strategies and Hideyoshi’s cultural advancements. This era introduced Japan to European influences through trade and the arrival of missionaries, broadening the nation’s horizons. The groundwork for a centralized rule was now firmly established, setting the stage for the Tokugawa shogunate."
          heading="Sengoku and Azuchi-Momoyama Periods (1467–1600)"
          image="/History-SAM.webp"
          bgColor="bg-teal-100"
        />
        <BigInfo
          mainText="With the establishment of the Tokugawa shogunate, Japan entered the Edo period, marked by a long era of peace and stability. The sakoku policy restricted foreign interactions, fostering a unique culture that flourished in the form of Kabuki theater and Ukiyo-e prints. Urban life thrived as commerce expanded, yet the seeds of discontent began to sprout within the rigid social hierarchy. By the mid-19th century, external pressures began to challenge this isolation, leading to profound changes in Japan's traditional way of life."
          heading="Edo Period (1603–1868)"
          image="/History-Edo.jpg"
          bgColor="bg-teal-100"
        />
        <BigInfo
          mainText="The Meiji Restoration marked a dramatic shift as Japan dismantled the feudal system and embraced modernization. Rapid industrialization transformed the nation, with new technologies and Western ideals reshaping society. As Japan emerged as a global power, the Taisho period saw a push for democracy and individual freedoms amidst the backdrop of international conflicts. Cultural exchanges flourished, blending Western influences with traditional practices, reflecting the ongoing evolution of Japanese identity in a rapidly changing world."
          heading="Meiji Restoration and Taisho Period (1868–1926)"
          image="/History-MRT.jpeg"
          bgColor="bg-teal-100"
        />
        <BigInfo
          mainText="The Showa period began under Emperor Hirohito and was defined by Japan’s militaristic expansion, culminating in World War II. Post-war, the country experienced a remarkable transformation, rebuilding its economy and society under Allied occupation. The subsequent Heisei period grappled with economic stagnation and societal changes, as Japan adapted to globalization while facing natural disasters and demographic challenges. The resilience of the Japanese people continued to shine, as they forged a new path forward while honoring their rich cultural heritage."
          heading="Showa and Heisei Periods (1926–2019)"
          image="/History-SH.jpg"
          bgColor="bg-teal-100"
        />
        <BigInfo
          mainText="The Reiwa period marks a new chapter in Japanese history, characterized by ongoing challenges, such as a declining population and environmental concerns. Japan is now navigating its place in an increasingly interconnected world, balancing traditional values with modern innovations. As the nation faces the complexities of the 21st century, it continues to embrace its cultural richness, looking toward the future while remembering its storied past."
          heading="Reiwa Period (2019–Present)"
          image="/History-Reiwa.jpeg"
          bgColor="bg-teal-100"
        />
      </div>
    </div>
  );
};

export default HistoryJapan;
