
import Link from "next/link";


const ProductionsData = () => {
  const projects_data = [
    {
      category: "2021",
      color: "#5737f5",
      text: "Tell Me On a Sunday",
      link: "https://www.facebook.com/media/set/?vanity=HelstonTheatreCompany&set=a.4240090692742336",
      text2: "James and the Giant Peach",
      link2:
"https://www.facebook.com/media/set/?vanity=HelstonTheatreCompany&set=a.4240080592743346",
      text3: "Movies 2 Musicals",
      link3: "https://www.facebook.com/HelstonTheatreCompany/photos/",
    },
    {
      category: "2020",
      text: "Aladdin",
      color: "	#d70078",
      link: "https://www.facebook.com/HelstonTheatreCompany/photos/",
    },
    {
      category: "2019",
      color: "#3240af",
      text: "Dick Whittington",
      link: "https://www.facebook.com/HelstonTheatreCompany/photos/?tab=album&album_id=2042564099161684",
      text2: "Whistle Down the Wind",
      link2:
        "https://www.facebook.com/HelstonTheatreCompany/photos/?tab=album&album_id=2158469154237844",
      text3: "The Wind in the Willows",
      link3:
        "https://www.facebook.com/HelstonTheatreCompany/photos/?tab=album&album_id=2352684551482969",
      text4: "9 to 5",
      link4:
        "https://www.facebook.com/DiscoverHelston/photos/?tab=album&album_id=1542779992547182",
    },
    {
      category: "2018",
      color: "#7F57F1",
      text: "Snow White and the Seven Dwarfs",
      link: "https://www.facebook.com/HelstonTheatreCompany/photos/?tab=album&album_id=1585570348194397",
      text2: "Avenue Q",
      link2:
        "https://www.facebook.com/HelstonTheatreCompany/photos/?tab=album&album_id=1671484599602971",
      text3: "Jamaica Inn",
      link3:
        "https://www.facebook.com/HelstonTheatreCompany/photos/?tab=album&album_id=1903220696429359",
      text4: "My Fair Lady",
      link4:
        "https://www.facebook.com/HelstonTheatreCompany/photos/?tab=album&album_id=1903220696429359",
    },
    {
      category: "2017",
      color: "#df3393",
      text: "Cinderella",
      link: "https://www.facebook.com/HelstonTheatreCompany/photos/?tab=album&album_id=1234549093296526",
      text2: "RENT",
      link2:
        "https://www.facebook.com/HelstonTheatreCompany/photos/?tab=album&album_id=1327976880620413",
      text3: "Night at the Museum",
      link3:
        "https://www.facebook.com/HelstonTheatreCompany/photos/?tab=album&album_id=1376513982433369",
      text4: "Movies to Musicals",
      link4:
        "https://www.facebook.com/HelstonTheatreCompany/photos/?tab=album&album_id=1429900663761367",
      text5: "Oklahoma",
      link5:
        "https://www.facebook.com/HelstonTheatreCompany/photos/?tab=album&album_id=1491086284309471",
    },
    {
      category: "2016",
      color: "#2633a1",
      text: "Aladdin",
      link: "https://www.facebook.com/HelstonTheatreCompany/photos/",
      text2: "Our House",
      link2:
        "https://www.facebook.com/HelstonTheatreCompany/photos/?tab=album&album_id=993732190711552",
      text3: "The Government Inspector",
      link3: "https://www.facebook.com/HelstonTheatreCompany/photos/",
    },
    {
      category: "2015",
      color: "#e766ae",
      text: "Festival Nightmare",
      link: "https://www.facebook.com/HelstonTheatreCompany/photos/",
      text2: "Mother Goose",
      link2:
        "https://www.facebook.com/HelstonTheatreCompany/photos/?tab=album&album_id=773790942705679",
      text3: "Sunset Boulevard",
      link3:
        "https://www.facebook.com/HelstonTheatreCompany/photos/?tab=album&album_id=808976719187101",
      text4: "The Hypochondriac",
      link4:
        "https://www.facebook.com/HelstonTheatreCompany/photos/?tab=album&album_id=870838709667568",
    },
    {
      category: "2014",
      color: "#0d0d6d",
      text: "Jack and The Beanstalk",
      link: "https://www.facebook.com/HelstonTheatreCompany/photos/?tab=album&album_id=586974684720640",
      text2: "Oh What A Lovely War",
      link2:
        "https://www.facebook.com/HelstonTheatreCompany/photos/?tab=album&album_id=728939663857474",
      text3: "There Goes the Bride",
      link3:
        "https://www.facebook.com/HelstonTheatreCompany/photos/?tab=album&album_id=678230942261680",
      text4: "Alternative Accommodation",
      link4: "https://www.facebook.com/HelstonTheatreCompany/photos/",
      text5: "Musical Memories",
      link5: "https://www.facebook.com/HelstonTheatreCompany/photos/",
    },
    {
      category: "2013",
      color: "#ef99c9",
      text: "Cinderella",
      link: "https://www.facebook.com/HelstonTheatreCompany/photos/",
      text2: "Oliver!",
      link2: "https://www.facebook.com/HelstonTheatreCompany/photos/",
      text3: "When We Are Married",
      link3:
        "https://www.facebook.com/HelstonTheatreCompany/photos/?tab=album&album_id=500574886693954",
      text4: "Between Mouthfulls",
      link4: "https://www.facebook.com/HelstonTheatreCompany/photos/",
    },
    {
      category: "2012",
      color: "#00003d",
      text: "Dick Whittington",
      link: "https://www.facebook.com/HelstonTheatreCompany/photos/",
      text2: "David Copperfield",
      link2: "https://www.facebook.com/HelstonTheatreCompany/photos",
    },
    {
      category: "2011",
      color: "#d70078",
      text: "Aladdin",
      link: "https://www.facebook.com/HelstonTheatreCompany/photos/",
      text2: "Annie Get Your Gun",
      link2: "https://www.facebook.com/HelstonTheatreCompany/photos/",
      text3: "Fish Out of Water",
      link3: "https://www.facebook.com/HelstonTheatreCompany/photos/",
    },
  ];

  return (
    <>
      <section className="section-global container" id="past-productions">
        <h2 className="h2-brand my-20">
         Past Productions
        </h2>
        <div className="max-w-8xl">
          <p className="text-2xl text-center text-white pb-6 shadow-xl">Visit our production photo albums</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <ProductionCards data={projects_data} />
          </div>
        </div>
      </section>
    </>
  );
};

const ProductionCards = ({ data }) => {
  return (
    <>
      {data.map((props, i) => (
        <div key={i}>
          <div
            className="group h-full rounded-md px-1  flex flex-col space-y-4 md:hover:bg-gradient-to-b md:hover:from-pink-500 md:hover:to-cyan-500 md:hover:scale-105 md:hover:text-black duration-300 transition-all "
            style={{ backgroundColor: `${props.color}da` }}
          >
            <div className="text-3xl h-16 pt-4 mb-6 text-center text-white shadow-lg shadow-current md:group-hover:text-black duration-150 ">
              {props.category}
            </div>
            <div className="flex flex-col space-y-4 pl-4 pb-4 font-mono underline underline-offset-4">
              <Link href={`${props.link}`} passHref>
                <a
                  target="_blank"
                  rel="noreferrer"
                >
                  {props.text}
                </a>
              </Link>
              <Link href={`${props.link2}`} passHref>
                <a
                  target="_blank"
                  rel="noreferrer"               
                >
                  {props.text2}
                </a>
              </Link>
              <Link href={`${props.link3}`} passHref>
                <a
                  target="_blank"
                  rel="noreferrer"           
                >
                  {props.text3}
                </a>
              </Link>
              <Link href={`${props.link4}`} passHref>
                <a
                  target="_blank"
                  rel="noreferrer"               
                >
                  {props.text4}
                </a>
              </Link>
              <Link href={`${props.link5}`} passHref>
                <a
                  target="_blank"
                  rel="noreferrer"              
                >
                  {props.text5}
                </a>
              </Link>
            </div>

          </div>
        </div>
      ))}
    </>
  );
};

export default ProductionsData;
