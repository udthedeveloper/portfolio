import me from "../assets/me.png";
const Header = () => {
  return (
    <div data-theme="black" className="pb-10 px-4 sm:px-6 md:px-8 lg:px-0">
      <div className="max-w-3xl mx-auto text-center md:text-left">
        <div className="flex flex-col-reverse md:flex-row items-center md:items-start gap-8 md:gap-6">
          <div className="space-y-4 flex-1">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold head">
              Hi, 👋 <br /> I'm Udaykumar Dhokia
            </h1>
            <p className="text-base sm:text-lg md:text-xl">
              Full-Stack Developer | Software Engineer | Tech Enthusiast
            </p>
            <p className="text-sm sm:text-base">
              Passionate about building scalable web applications, solving
              real-world problems with clean code, and continuously learning new
              technologies.
            </p>
          </div>
          <img
            src={me}
            alt="Udaykumar Dhokia"
            className="w-28 h-28 sm:w-32 sm:h-32 md:w-48 md:h-48 rounded-full object-cover shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
