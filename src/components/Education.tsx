const items = [
  {
    title: "IITRAM, Ahmedabad",
    logo: "https://iitram.ac.in/upload/iitram_logo_only.jpg",
    course: "B.Tech in Computer Engineering",
    start: "2022",
    end: "2026",
    score: "CPI: 8.97",
  },
  {
    title: "Kendriya Vidyalaya, Porbandar",
    logo: "https://cdnbbsr.s3waas.gov.in/s3kv034949e9e953d67db8f5257383f828/uploads/2023/04/2023042118.svg",
    course: "12th Science - CBSE",
    start: "2022",
    end: "2026",
    score: "93.2%",
  },
  {
    title: "Kendriya Vidyalaya, Porbandar",
    logo: "https://cdnbbsr.s3waas.gov.in/s3kv034949e9e953d67db8f5257383f828/uploads/2023/04/2023042118.svg",
    course: "10th Board - CBSE",
    start: "2022",
    end: "2026",
    score: "91.8%",
  },
];
const Education = () => {
  return (
    <div className="pb-10 px-4 sm:px-6 md:px-8" data-theme="black">
      <div className="max-w-3xl mx-auto space-y-4 text-center md:text-left">
        <h1 className="text-lg sm:text-xl md:text-2xl font-bold heading">
          Education
        </h1>
        <div className="pt-3 space-y-4">
          {items.map((element, index) => {
            return (
              <div key={index}>
                <div className="flex flex-col sm:flex-row items-center sm:items-center gap-4 sm:gap-6 justify-between rounded-lg py-1">
                  <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 flex-1 w-full">
                    <div className="logo flex-shrink-0">
                      <img
                        src={element.logo}
                        alt=""
                        className="bg-white w-12 h-12 sm:w-[50px] sm:h-[50px] object-contain p-2 rounded-full shadow"
                      />
                    </div>
                    <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                      <p className="heading text-base sm:text-md md:text-lg font-bold">
                        {element.title}
                      </p>
                      <p className="text-xs sm:text-sm">{element.course}</p>
                    </div>
                  </div>
                  <div className="duration mt-2 sm:mt-0 text-center sm:text-right">
                    <p className="text-xs sm:text-sm">
                      {element.start} - {element.end}
                    </p>
                    <p className="text-xs sm:text-sm">{element.score}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Education;
