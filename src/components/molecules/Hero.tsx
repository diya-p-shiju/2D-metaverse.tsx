import HeroImage from "../../assets/HeroImage.webp";

const Hero = () => {
  return (
    <section className="flex gap-5 justify-around text-white">
      <div>
        <h1>TEXT HEADING</h1>
      </div>
      <div>
        <img src={HeroImage} alt="Hero image" className="" />
        <p>heyyyy</p>
      </div>
    </section>
  );
};

export default Hero;
