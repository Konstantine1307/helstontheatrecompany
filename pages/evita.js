import Layout from "../components/layout";
import Hero from "../components/hero";
import GoToProductions from "../components/utilities/goToProductionButton";
import TwoTextCards from "../components/twoTextCards";
// import { Gallery } from "react-photoswipe-gallery";
// import GalleryImgCard from "../components/galleryImgCard";

// const ShowImages = [
//   {
//     id: 1,
//     original:
//       "https://res.cloudinary.com/dax2w65/image/upload/v1655199060/TWS-HTC/TWS-bride_pp760o.jpg",
//     width: "667",
//     height: "1000",
//     alt: "The Wedding Singer",
//     src: "https://res.cloudinary.com/dax2w65/image/upload/c_fit,h_175,w_175/v1655199060/TWS-HTC/TWS-bride_pp760o.jpg",
//   },
//   {
//     id: 2,
//     original:
//       "https://res.cloudinary.com/dax2w65/image/upload/v1655199010/TWS-HTC/TWS-nana_pynahr.jpg",
//     width: "667",
//     height: "1000",
//     alt: "The Wedding Singer",
//     src: "https://res.cloudinary.com/dax2w65/image/upload/c_fit,h_175,w_175/v1655199010/TWS-HTC/TWS-nana_pynahr.jpg",
//   },
//   {
//     id: 3,
//     original:
//       "https://res.cloudinary.com/dax2w65/image/upload/v1655199017/TWS-HTC/TWS-groom_mrluor.jpg",
//     width: "1000",
//     height: "667",
//     alt: "The Wedding Singer",
//     src: "https://res.cloudinary.com/dax2w65/image/upload/c_fit,h_175,w_175/v1655199017/TWS-HTC/TWS-groom_mrluor.jpg",
//   },
//   {
//     id: 4,
//     original:
//       "https://res.cloudinary.com/dax2w65/image/upload/v1655199035/TWS-HTC/TWS-blue-dance_jhstmz.jpg",
//     width: "1100",
//     height: "667",
//     alt: "The Wedding Singer",
//     src: "https://res.cloudinary.com/dax2w65/image/upload/c_fit,h_175,w_175/v1655199035/TWS-HTC/TWS-blue-dance_jhstmz.jpg",
//   },
//   {
//     id: 5,
//     original:
//       "https://res.cloudinary.com/dax2w65/image/upload/v1655198616/TWS-HTC/TheWeddingSinger_smqscr.webp",
//     width: "1200",
//     height: "800",
//     alt: "The Wedding Singer",
//     src: "https://res.cloudinary.com/dax2w65/image/upload/c_fit,h_175,w_175/v1655198616/TWS-HTC/TheWeddingSinger_smqscr.webp",
//   },
//   {
//     id: 6,
//     original:
//       "https://res.cloudinary.com/dax2w65/image/upload/v1655199014/TWS-HTC/TWS3_w22gk3.jpg",
//     width: "2048",
//     height: "1365",
//     alt: "The Wedding Singer",
//     src: "https://res.cloudinary.com/dax2w65/image/upload/c_fit,h_175,w_175/v1655199014/TWS-HTC/TWS3_w22gk3.jpg",
//   },
// ];

// function ShowGallery(src) {
//   const imgCards = ShowImages.map((item) => {
//     return <GalleryImgCard key={item.id} {...item} />;
//   });

//   return (
//     <div className="pb-20">
//       <div className="container flex items-center bg-inherit justify-center pb-10 py-5 shadow-2xl shadow-cyan-400/50 ">
//         <Gallery>
//           <div className="grid gap-20 grid-cols-2 md:grid-cols-3">{imgCards}</div>
//         </Gallery>
//       </div>
//     </div>
//   );
// }



function Evita() {
  return (
    <>
      <Hero
        title="Evita"
        paragraph="Minack Theatre - September 2023"
        imageSrc="/Evitashowpage.webp"
        width={600}
        height={600}
        alt="Evita at the Minack Theatre September 2023"
        button="News and information"
        linkToPage="#show-description"
      />

      <div className="container  pt-3  flex justify-end">
        <GoToProductions />
      </div>
      <h2 className="h2-brand my-16">Evita</h2>
      <div className="pb-12" id="show-description">
        <TwoTextCards
          text1="The second production delayed due to COVID is Andrew Lloyd Webber???s Evita which we will perform at The Minack Theatre in September 2023."
          text3="We will be starting performances on Sunday 3rd or Monday 4th September, with 2 matinee performances but we are still waiting for confirmation from the Minack for exact performance days. Rehearsals will begin in May with launch and audition info to be announced."
          text4="Director - Paul Blaber"
          text6="Musical Director ??? Scott Waters"
          text8="Musical staging and choreography - Anita O'Hara"
          text5="If you have any questions about Evita please contact Paul - paulblaber@outlook.com"
        />
      </div>
      {/* <div className="container">
        <ShowGallery src={ShowImages} />
      </div> */}
    </>
  );
}

Evita.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}   
    </Layout>
  );
};

export default Evita;
