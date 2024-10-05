import PageHeader from "@/components/pageHeader";

const Money = () => {
  return (
    <div>
      <PageHeader
        bgColor="bg-lime-950"
        maintext="Smart Budgeting for Your Japanese Adventure"
        ptag="Find out how to make the most of your journey in Japan while being mindful of your budget"
        image="/Money-BG.jpg"
      />
      <div className="border-2 m-3 p-3 lg:m-8 lg:p-8">
        <h1 className="font-extrabold text-2xl lg:text-4xl mb-5 text-center">
          MONEY TRANSACTIONS
        </h1>
        <p className="text-justify pb-3 text-xs md:text-sm lg:text-sm">
          Japan&apos;s monetary system is a blend of traditional practices and
          modern conveniences, ensuring that travelers can navigate financial
          transactions seamlessly:
        </p>
        <p className="text-justify pb-3 text-xs md:text-sm lg:text-sm">
          <b>Currency and Cash Transactions :</b> The currency used in Japan is
          the yen (JPY). While Japan has been gradually adopting cashless
          payment systems, cash remains king in many aspects of daily life.
          Small shops, markets, and rural areas often only accept cash, making
          it essential for travelers to carry sufficient yen. ATMs in
          convenience stores (like 7-Eleven and Lawson) and post offices are
          reliable for withdrawing cash, and many accept foreign cards.
        </p>
        <p className="text-justify pb-3 text-xs md:text-sm lg:text-sm">
          <b>Credit and Debit Cards :</b> Major credit and debit cards like
          Visa, Mastercard, and JCB are widely accepted in urban areas,
          especially in hotels, restaurants, and large retail stores. However,
          it’s advisable to check ahead, as smaller establishments may not
          accept cards. Mobile payment options such as Apple Pay and Google Pay
          are gaining popularity, but having a backup cash option is always a
          good idea.
        </p>
        <p className="text-justify pb-3 text-xs md:text-sm lg:text-sm">
          <b>Currency Exchange :</b> Currency exchange can be done at airports,
          banks, and dedicated exchange offices. Although airport rates may not
          be the best, they offer convenience upon arrival. It’s often more
          advantageous to withdraw yen directly from ATMs using an international
          debit card, as this can yield better rates.
        </p>
        <p className="text-justify pb-3 text-xs md:text-sm lg:text-sm">
          <b>Understanding Fees :</b> Be aware of potential foreign transaction
          fees imposed by your bank when using cards overseas. Checking with
          your bank before traveling can help you avoid unexpected charges and
          find out if they have partnerships with Japanese banks that could
          minimize withdrawal fees.
        </p>
        <p className="text-justify pb-3 text-xs md:text-sm lg:text-sm">
          <b>Tipping Culture :</b> Japan has a unique tipping culture where
          tipping is not customary and can even be considered rude. Exceptional
          service is expected, and the price you pay usually reflects the
          quality of service. Instead, expressing gratitude verbally or leaving
          a small gift can be a more appropriate way to show appreciation.
        </p>
      </div>
      <div className="border-2 m-3 p-3 lg:m-8 lg:p-8">
        <h1 className="font-extrabold text-2xl lg:text-4xl mb-5 text-center">
          BUDGETING FOR SMART SPENDING
        </h1>
        <p className="text-justify pb-3 text-xs md:text-sm lg:text-sm">
          Budgeting for a trip to Japan requires thoughtful planning to make the
          most of your experience while managing costs effectively:
        </p>
        <p className="text-justify pb-3 text-xs md:text-sm lg:text-sm">
          <b>Public Transportation Passes :</b> Take advantage of transportation
          passes like the Japan Rail Pass, which offers unlimited travel on most
          trains, including the Shinkansen, for a fixed period. Local transport
          cards, such as Suica or Pasmo, provide convenience and discounts on
          public transit in major cities.
        </p>
        <p className="text-justify pb-3 text-xs md:text-sm lg:text-sm">
          <b>Affordable Dining Options :</b> Japan is renowned for its
          affordable and delicious food options. Convenience stores and
          supermarkets offer ready-to-eat meals at a fraction of the price of
          restaurants. Additionally, look for local izakayas (casual pubs) where
          you can enjoy tasty dishes without breaking the bank.
        </p>
        <p className="text-justify pb-3 text-xs md:text-sm lg:text-sm">
          <b>Free and Low-Cost Attractions :</b> Japan boasts a plethora of free
          attractions, including parks, temples, and gardens. Many museums offer
          free entry on certain days, so it&apos;s wise to plan your visits
          around these opportunities. Participating in local festivals and
          events can also be a budget-friendly way to experience Japanese
          culture.
        </p>
        <p className="text-justify pb-3 text-xs md:text-sm lg:text-sm">
          <b>Shopping Wisely :</b> For souvenirs and gifts, explore 100-yen
          shops for unique items at unbeatable prices. When shopping in
          department stores, keep an eye out for sales and duty-free options for
          foreign travelers. Additionally, many places offer discounts for cash
          payments.
        </p>
        <p className="text-justify pb-3 text-xs md:text-sm lg:text-sm">
          <b>Track Your Spending :</b> Keep a daily budget and track your
          expenses to avoid overspending. Using budgeting apps can help you stay
          organized and aware of where your money goes during your trip. Setting
          daily limits can help you manage your finances effectively without
          sacrificing experiences.
        </p>
      </div>
    </div>
  );
};

export default Money;
