
import Image from "next/image";
import Link from "next/link";
import ButtonCard from "./utilities/buttonCard";
import styles from "./Hero.module.css"

function Hero({title, subtitle, subtitle2, paragraph,paragraph2, paragraph3, imageSrc, alt, width, height, layout, linkToPage, button,}) {

  return (
    <section className={styles.bgHero}>
        <div className="flex flex-col-reverse md:flex-row items-center mx-auto p-6 ">

          {/* Image */}
          <div className="sm:mt-0 md:mt-10 max-w-sm md:max-w-2xl ">
            <Image
              src={imageSrc}
              alt={alt}
              width={width}
              height={height}
              layout={layout}
              
            />
          </div>

          {/* Text Content */}
          <div className="max-w-md lg:max-w-2xl px-10 pb-5 md:pr-4 text-center md:motion-safe:animate-fadeIn duration-500 space-y-4 md:space-y-8">
            <h1 className="font-heading text-4xl tracking-wider text-white">
              {title}
            </h1>
            <h2 className="text-xl font-thin tracking-wide text-white ">
              {subtitle}
              <br />
              {subtitle2}
            </h2>
            <p className="text-md md:text-xl text-white tracking-wide pb-6">
              {paragraph}
              <br />
              <span className="leading-loose">{paragraph2}</span>        
              <br />  
              <span className="italic tracking-widest text-2xl leading-loose">{paragraph3}</span>
            </p>

            {/* Button */}
            <Link href={`${linkToPage}`}>
              <a>
                <ButtonCard buttonCard={button} />
              </a>
            </Link>
          </div>
        </div>
      
    </section>
  );
}

export default Hero;
