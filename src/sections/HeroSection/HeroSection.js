import Image from "next/image";
import hero from "../../../public/hero.svg";

const HeroSection = () => {
  return (
    <section className="bg-base-200">
      <div className="container">
        <div className="hero min-h-screen lg:w-full">
          <div className="hero-content flex-col lg:flex-row-reverse  lg:w-full lg:justify-between">
            <Image
              width={500}
              height={500}
              src={hero.src}
              className="md:max-w-md rounded-lg mb-6 md:mb-0 px-4 md:px-0 py-5"
              alt="Hero Section Image"
            />
            <div className="max-w-xlg">
              <h1 className="capitalize">We helps brands grow by unlcashing the potential of imernet</h1>
              <p className="py-6 max-w-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas amet voluptatibus, minima, doloremque sint quam ea aspernatur ad minus mollitia similique modi ratione consequatur delectus.
              </p>
              <button className="my-btn">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
