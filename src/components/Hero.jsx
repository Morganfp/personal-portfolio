import heroEmoji from '../assets/hero-emoji.png';

function Hero() {
  return (
    <>
      <div className="flex mt-24 mx-6 justify-center md:gap-42 md:mt-24">
        {/* Text */}
        <div className="flex flex-col gap-3.5 items-start md:gap-4">
          <p className="text-sm md:text-xl">HI THERE 👋 I’M</p>
          <h1 className="text-4xl font-semibold md:text-7xl">
            Morgan <br /> Purcell
          </h1>
          <p className="text-sm text-[#00FFBB] md:text-xl">
            Founding Full Stack Engineer 👨‍💻
          </p>
          <p className="text-sm md:text-xl md:w-125">
            I'm a full stack engineer based in San Francisco, CA, with
            experience as a founding engineer.
          </p>
          <button className="bg-[#00FFBB] text-[#212121] font-bold text-xs py-2 px-4 rounded-2xl md:text-base md:py-3 md:px-6 transform transition-all duration-300 ease-in-out hover:scale-105 hover:bg-[#00CC99]">
            <a href="#projects" className="cursor-pointer">
              My Work
            </a>
          </button>
        </div>
        {/* Image */}
        <div>
          <img src={heroEmoji} className="w-50 md:w-55" />
        </div>
      </div>
    </>
  );
}

export default Hero;
