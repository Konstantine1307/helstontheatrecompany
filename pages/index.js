import Layout from "../components/layout";
import Hero from "../components/hero";
import tiobe from '/public/TIOBEhomepage-full-size.webp'
import CardDown from "../components/customcards/cardDown";
import Welcome from "../components/welcome";


function Index() {
  return (
    <>
      <Hero
        title="HELSTON THEATRE COMPANY"
        subtitle="From Pantomimes to Musicals and Plays,
        we aim to perform amazing theatre with the support and participation
        of our community."
        subtitle2=" It's where the community is."
        paragraph2="August 2022:"
        paragraph3="The Importance Of Being Earnest"
        imageSrc={tiobe}
        layout="intrinsic"
        alt="The Importance of Being Earnest poster for summer 2022 play"
        button="Book Now"
        linkToPage="/tiobe"
      />

      

      <div className="container  px-4 pt-4 md:mt-12 mb-12">
        <h2 className="h2-brand mb-8 md:mb-16">Upcoming Productions</h2>
        <div className="flex flex-col space-y-8 pb-8 md:pb-0 md:flex-row md:space-y-0 md:space-x-6">
          <CardDown
            backImage='url("/JATBshowpage-small.webp")'
            titleCard="Jack & The Beanstalk"
            paragraph2="25 - 29 January 2023"
            anchor="/jackAndTheBeanstalk"
            buttonCard="Find out more"
          />
          <CardDown
            backImage='url("/SToddshowpage.webp")'
            titleCard="Sweeney Todd"
            paragraph2="23 - 29 April 2023"
            anchor="/sweeneyTodd"
            buttonCard="Find out more"
          />
          <CardDown
            backImage='url("/Evitashowpage.webp")'
            titleCard="Evita"
            paragraph2="September 2023"
            anchor="/evita"
            buttonCard="Find Out More"
          />
        </div>
      </div>
      {/* <div className="container  px-4 pt-4 md:mt-12">
        <div className="flex flex-col space-y-8 pb-8 md:pb-0 md:flex-row md:space-y-0 md:space-x-6">
          <CardDown
            backImage='url("/card-background1.webp")'
            titleCard="3+ Shows/year"
            paragraph="Pantos, Musicals, Plays"
            anchor="/productions"
            buttonCard="Find out more"
          />
          <CardDown
            backImage='url("/card-background5.webp")'
            titleCard="100+ Members"
            paragraph="For the community"
            anchor="/about"
            buttonCard="Find out more"
          />
          <CardDown
            backImage='url("/card-background1.webp")'
            titleCard="52+ Awards"
            paragraph="Share our success"
            anchor="/about/#awards"
            buttonCard="Find out more"
          />
        </div>
      </div> */}
    </>
  );
}


Index.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
     
      <Welcome />
     
    </Layout>
  );
};

export default Index
