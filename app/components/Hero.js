import Link from "next/link";
const Hero = () => {
  return (
      <div className="box w-full justify-center items-center px-[10vw] py-[5vh]">
        <div className="flex max-lg:flex-col-reverse w-full gap-3 h-full items-center justify-center">
          <div className="lg:w-1/2 flex flex-col gap-8 max-lg:gap-4 justify-center max-lg:px-3 px-10 text-left">
            <h2 className="text-4xl  max-lg:text-xl font-extrabold">
              Discover Your Passion, Build Your Future!
            </h2>
            <p className="text-lg max-lg:text-sm font-medium">
              Explore in-demand careers, get expert guidance, and acquire the
              skills needed to thrive in your industry. Let’s shape your future
              together!
            </p>
            <div className="flex gap-3 text-bold text-lg max-lg:text-sm">
              <Link href="/tracks" className="bg-white text-black px-4 py-2 rounded-xl text-center">
                Explore Careers
              </Link>
              <Link href="/network" className="bg-p5 text-white px-4 py-2 rounded-xl text-center">
                Join Community
              </Link>
            </div>
          </div>
          <div className="h-[400px] max-lg:hidden w-1 bg-p2 rounded-4xl"></div>
          <div className="w-[90vw] lg:hidden h-1 bg-p2 rounded-4xl"></div>
          <div className="relative lg:w-1/2 flex flex-col gap-5 justify-center items-center h-full">
            <span className="text-5xl  max-lg:text-3xl font-bold">
              <span className="text-white">Career</span>
              <span className="text-p2">Track</span>
            </span>
            <div className="text-lg text-center">Your Pathway to Success Starts Here!</div>
          </div>
        </div>
      </div>
  );
};


export default Hero;