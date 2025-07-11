const items = [
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/250px-Visual_Studio_Code_1.35_icon.svg.png",
    name: "VS Code",
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Android_Studio_Logo_2024.svg/140px-Android_Studio_Logo_2024.svg.png",
    name: "Android Studio",
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/250px-GitHub_Invertocat_Logo.svg.png",
    name: "GitHub",
  },
  {
    logo: "https://images.seeklogo.com/logo-png/41/1/postman-logo-png_seeklogo-412593.png",
    name: "Postman",
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Vercel_logo_2025.svg/250px-Vercel_logo_2025.svg.png",
    name: "Vercel",
  },
  {
    logo: "https://1000logos.net/wp-content/uploads/2021/11/Docker-Logo-500x281.png",
    name: "Docker",
  },
  {
    logo: "https://freepnglogo.com/images/all_img/n8n-logo-5d74.png",
    name: "n8n",
  },
  {
    logo: "https://github.com/langflow-ai/langflow/raw/main/docs/static/img/langflow-logo-color-black-solid.svg",
    name: "Langflow",
  },
  {
    logo: "https://1000logos.net/wp-content/uploads/2024/09/Figma-Emblem-500x281.png",
    name: "Figma",
  },
];

const Tools = () => {
  return (
    <div data-theme="black" className="pb-10 px-4 sm:px-6 md:px-8">
      <div className="max-w-3xl mx-auto space-y-4 text-center md:text-left">
        <h1 className="text-lg sm:text-xl md:text-2xl font-bold heading">
          Hands-on
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

export default Tools;
