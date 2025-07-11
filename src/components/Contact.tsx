const Contact = () => {
  return (
    <div className="pb-10 px-4 sm:px-6 md:px-8" data-theme="black">
      <div className="max-w-3xl mx-auto space-y-4 text-center md:text-left">
        <h1 className="text-lg sm:text-xl md:text-2xl font-bold heading">
          Contact
        </h1>
        <p className="italic text-sm sm:text-base">
          | Great software begins with a simple conversation. Let’s connect and
          build something meaningful together.💪
        </p>
        <p className="text-xs sm:text-sm md:text-base">
          I’m always open to new opportunities, collaborations, or just a good
          conversation about tech, design, and innovation. Whether you’re a
          fellow <span className="underline">developer</span>,{" "}
          <span className="underline">recruiter</span>,{" "}
          <span className="underline">startup founder</span>, or someone with an
          exciting idea — feel free to reach out!
        </p>
      </div>
    </div>
  );
};

export default Contact;
