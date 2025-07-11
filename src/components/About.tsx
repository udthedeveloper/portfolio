import LinkPreview from "./LinkPreview";

const About = () => {
  return (
    <div data-theme="black" className="pb-10 px-4 sm:px-6 md:px-8">
      <div className="max-w-3xl mx-auto space-y-4 text-center md:text-left">
        <h1 className="text-lg sm:text-xl md:text-2xl font-bold heading">
          About
        </h1>
        <p className="text-white/70 text-sm sm:text-base md:text-lg leading-relaxed">
          Aspiring Full-Stack Developer currently pursuing a B.Tech in Computer
          Science and Engineering from{" "}
          <LinkPreview
            href="https://iitram.ac.in"
            previewText="Indian Institute of Technology, Research and Management (IITRAM), Ahmedabad. Visit for more info."
          >
            IITRAM, Ahmedabad
          </LinkPreview>
          , with a strong academic foundation from{" "}
          <LinkPreview
            href="https://porbander.kvs.ac.in/"
            previewText="Kendriya Vidyalaya, Porbandar. Visit for more info."
          >
            Kendriya Vidyalaya, Porbandar
          </LinkPreview>
          . Passionate about building scalable applications, crafting intuitive
          UI/UX designs, and exploring emerging technologies.
        </p>
      </div>
    </div>
  );
};

export default About;
