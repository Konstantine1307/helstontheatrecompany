import Layout from "../components/layout";
import Hero from "../components/hero";
import tiobe from "/public/TIOBEhomepage.webp";
import GoToProductions from "../components/utilities/goToProductionButton";
import CardDown from "../components/customcards/cardDown";
import TwoTextCards from "../components/twoTextCards";
import Image from "next/image";
import CastTiobe from "/public/TIOBE-cast.webp"

function TiobePlay() {
  return (
    <>
      <Hero
        title="Helston Theatre Company"
        subtitle="Presents"
        paragraph='"A handbag packed with laughter"'
        imageSrc={tiobe}
        width={488}
        height={690}
        layout="intrinsic"
        alt="The Importance Of Being Ernest - August 2022"
        button="Get your tickets"
        linkToPage="#show-description"
      />

      <div className="container pt-3 flex justify-end">
        <GoToProductions />
      </div>

      <h2 className="h2-brand my-16">Choose Your Venue</h2>

      <div className="py-16 px-3 -mt-12" id="show-description">
        <div className="container">
          <div className="flex flex-col space-y-6 md:flex-row md:space-y-0 md:space-x-6">
            <CardDown
              backImage='url("/TIOBE-bedruthantheatre-newquay.webp")'
              titleCard="Bedruthan HTL"
              paragraph="Newquay"
              paragraph2="Aug 06, 2pm"
              paragraph3="Aug 06, 6.30pm"
              anchor="https://www.bedruthan.com/events/theatre-the-importance-of-being-earnest"
              target="_blank"
              buttonCard="Book here"
            />
            <CardDown
              backImage='url("/TIOBE-coronationpark-helston.webp")'
              titleCard="coronation park"
              paragraph="Helston"
              paragraph2="Aug 07"
              paragraph3="7.00pm"
              anchor="https://uk.patronbase.com/_CornishRivieraBoxOffice/Productions/HTC4/Performances"
              target="_blank"
              buttonCard="Book here"
            />
            <CardDown
              backImage='url("/TIOBE-penleepark-penzance.webp")'
              titleCard="penlee theatre"
              paragraph="Penlee Park, Penzance"
              paragraph2="Aug 08, 7.00pm"
              paragraph3="Aug 09, 2pm & 7.30pm"
              anchor="https://www.penleeparktheatre.com/events/"
              target="_blank"
              buttonCard="Book here"
            />
          </div>
        </div>
      </div>
      <h2 className="h2-brand my-16">The Importance Of Being Ernest</h2>
      <div className="relative container flex flex-col max-w-6xl px-6 text-white md:flex-row md:px-0 ">
        {/* Image */}
        <Image
          src={CastTiobe}
          alt="The Importance of Being Earnets cast - Helston Theatre Company"
          width={940}
          height={788}
          className="rounded-2xl"
        />

        {/* Text Container */}
        <div className="-bottom-32 md:bottom-0 pr-0 bg-brand-gradient absolute md:right-0 rounded-t-xl ">
          <p className="max-w-3xl bg-brand-blue text-lg text-justify font-light p-8">
            Grab your picnic blankets and cucumber sandwiches because there’s
            only TWO WEEKS to go until we open The Importance of being Earnest!
            You do not want to miss this hilarious play of romantic confusion,
            sprinkled with Victorian sensibilities
          </p>
        </div>
      </div>
      <div className="pb-12 pt-32 md:pt-0">
        <TwoTextCards
          text1="Duplicity and deception, hilarity and handbags!
          Laugh out loud as Helston Theatre Company bluff and bluster their way through Oscar Wilde’s satirical masterpiece, his last and most loved comedy, The Importance of Being Earnest.Often described as a trivial comedy for serious people, the story of two bachelors, John 'Jack' Worthing and Algernon 'Algy' Moncrieff, who create alter egos named Ernest to escape their tiresome lives. They attempt to win the hearts of two women who, conveniently, claim to only love men called Ernest."
          text2="It soon becomes quite a struggle to keep up with their own stories and they quickly are entangled in a tale of disguise, deception and misadventure! The quite bonkers plot of this play mocks Victorian sensibilities with some of the best loved and frankly ludicrous characters to be found on the modern stage.The Importance of Being Earnest is one of those iconic plays by Oscar Wilde that engages themes such as marriage, class, social expectations, and the lifestyles of the English upper class and is still, quite rightly, enduringly popular today."
        />
      </div>

     
    </>
  );
}

TiobePlay.getLayout = function getLayout(page) {
  return (
    <Layout> 
      {page}  
    </Layout>
  );
};

export default TiobePlay;
