const items = [
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png",
    name: "React",
  },
  {
    logo: "https://cdn.iconscout.com/icon/free/png-256/free-flutter-logo-icon-download-in-svg-png-gif-file-formats--brand-company-brands-pack-logos-icons-2285004.png?f=webp&w=256",
    name: ".dart",
  },
  {
    logo: "https://brandlogos.net/wp-content/uploads/2023/07/typescript-logo_brandlogos.net_hg0qh.png",
    name: "ts",
  },
  {
    logo: "https://logodownload.org/wp-content/uploads/2022/04/javascript-logo-0.png",
    name: "js",
  },
  {
    logo: "https://logowik.com/content/uploads/images/node-js6304.logowik.com.webp",
    name: "Node.js",
  },
  {
    logo: "https://www.pngall.com/wp-content/uploads/13/Mongodb-PNG-Pic.png",
    name: "MongoDB",
  },
  {
    logo: "https://seekvectors.com/storage/images/Firebase-01.svg",
    name: "Firebase",
  },
  {
    logo: "https://companieslogo.com/img/orig/supabase-554aca1c.png?t=1720244494",
    name: "Supabase",
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/306px-ISO_C%2B%2B_Logo.svg.png",
    name: ".cpp",
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/110px-Python-logo-notext.svg.png",
    name: ".py",
  },
];

const Skills = () => {
  return (
    <div data-theme="black" className="pb-10 px-4 sm:px-6 md:px-8">
      <div className="max-w-3xl mx-auto space-y-4 text-center md:text-left">
        <h1 className="text-lg sm:text-xl md:text-2xl font-bold heading">
          Skills
        </h1>
        <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 gap-4">
          {items.map((element, index) => {
            return (
              <div
                className="flex flex-col items-center justify-center gap-2"
                key={index}
              >
                <img
                  src={element.logo}
                  alt=""
                  className="bg-white w-10 h-10 sm:w-12 sm:h-12 md:w-[50px] md:h-[50px] object-contain p-1 rounded-full shadow"
                />
                <p className="text-xs sm:text-sm md:text-base">
                  {element.name}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
