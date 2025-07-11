const items = [
  {
    title: "Ministry of Electronics and Information Technology",
    logo: "https://imgs.search.brave.com/t7lGHTkCtHjJJkTESOIIGebm3ejh0hKK-qTcQnd9whw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi81LzU1L0Vt/YmxlbV9vZl9JbmRp/YS5zdmcvNTEycHgt/RW1ibGVtX29mX0lu/ZGlhLnN2Zy5wbmc",
    role: "Summer Intern",
    start: "June 2025",
    end: "August 2025",
  },
  {
    title: "Teachnook",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGz7Z8piogossXHk1lceNKk40KUWpeC5ImGQ&s",
    role: "Application Developer",
    start: "December 2023",
    end: "February 2024",
  },
  {
    title: "IITRAM, Ahmedabad",
    logo: "https://iitram.ac.in/upload/iitram_logo_only.jpg",
    role: "Website Developer",
    start: "February 2023",
    end: "July 2023",
  },
];

const Experience = () => {
  return (
    <div data-theme="black" className="pb-10 px-4 sm:px-6 md:px-8">
      <div className="max-w-3xl mx-auto space-y-4 text-center md:text-left">
        <h1 className="text-lg sm:text-xl md:text-2xl font-bold heading">
          Experience
        </h1>
        <div className="pt-3 space-y-4">
          {items.map((element, index) => {
            return (
              <div
                className="flex flex-col sm:flex-row items-center sm:items-center gap-4 sm:gap-6 justify-between rounded-lg py-1"
                key={index}
              >
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
                    <p className="text-xs sm:text-sm">{element.role}</p>
                  </div>
                </div>
                <div className="duration mt-2 sm:mt-0 text-center sm:text-right">
                  <p className="text-xs sm:text-sm">
                    {element.start} - {element.end}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Experience;
