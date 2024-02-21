import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="hero min-h-screen bg-base-200 shadow-xl" data-theme="dark">
      <div className="hero-content flex-col justify-center items-center lg:flex-row-reverse ">
        <Image
          height={500}
          width={500}
          src="/Assets/hero.png"
          alt="heroImage"
          className="opacity-80"
        />
        <div className="container flex flex-col items-center justify-center md:items-start">
          <h1 className="text-4xl font-bold sm:text-5xl">
            <span className="font-bold text-5xl sm:text-7xl text-primary">
              Play
            </span>{" "}
            Fun Games!
          </h1>
          <p className="py-6">
            Play quick games and make your mind and time relax.
          </p>
          <Link className="btn btn-primary" href="#games">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
