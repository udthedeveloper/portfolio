import { Badge } from "./ui/badge";

const items = [
  {
    name: "d8a - Modern Data Analytics Platform",
    image:
      "https://camo.githubusercontent.com/81d63021da74de13d69f4c5e9288ea8bc0d1e15f11818c47592537a99e8acba9/68747470733a2f2f7777772e64726f70626f782e636f6d2f73636c2f66692f35357266717237387a3963777a6963726466776b382f53637265656e73686f742d46726f6d2d323032352d30362d32322d30302d34382d34352e706e673f726c6b65793d67356c7266733662367971666b6f78726e34656972686338792673743d723736347339383526646c3d30267261773d31",
    desc: "Provides powerful visualization and analysis tools for your data. Built with React, TypeScript, and Vite, it offers a seamless experience for data exploration and visualization.",
    github: "https://github.com/udaykumar-dhokia/d8a",
    users: "8",
    link: "https://d8a.vercel.app",
    isCompleted: false,
  },
  {
    name: "Portfolio",
    image:
      "https://ucf3bcdd4f496cd986a576933271.previews.dropboxusercontent.com/p/thumb/ACuDYcM6IeWdzKOmqqL0QEI-vfBE3lhVZkxxyQhNrjEThDOHvC3Bx11kgU3u70HnxHo2K4xjYS7rL819rN7CS59reaNb_brTblpBbfXvc1YYVuAoC_j8MzLCmv-Vz95po6Es1nBDG0oi6tpLpIxZGe65VomEs0a5-e6q4Nf63n77o6BsvIdsRX0t4kODyOzrlhCvFEXod4waEsvopRf38zFPasBV1-zJmJC9S4JL07R1nEJxYlXhvqU4lx1kiJ49eu4-Crd0YXuqRJAxnbwuvXSxR5eaWOzfAHlCHED2NwA1mHBSFMxFy_X5kZ-Ste8diaUSMRafS8RjIYT77xXng3IBOnm4NEM4YVMjJi4gETEhTJyCoUQpH-2gQVLZO5jUOYBkAeD0QesCb5HeMdK7bkAO/p.png?is_prewarmed=true",
    desc: "Provides powerful visualization and analysis tools for your data. Built with React, TypeScript, and Vite, it offers a seamless experience for data exploration and visualization.",
    github: "https://github.com/udaykumar-dhokia/d8a",
    users: "8",
    link: "https://udthedeveloper.me",
    isCompleted: true,
  },
  {
    name: "chatbox - GUI Software for Local LLMs",
    image:
      "https://github.com/udaykumar-dhokia/chatbox/raw/main/lib/assets/1.png",
    desc: "chatbox is an open-source software that provides a graphical user interface (GUI) for running large language models (LLMs) using the Ollama. This application allows users to interact with various LLM models, send messages, and receive responses in a chat-like interface.",
    github: "https://github.com/udaykumar-dhokia/chatbox",
    users: "2",
    link: "https://github.com/udaykumar-dhokia/chatbox",
    isCompleted: true,
  },
  {
    name: "unite - Project Management Software",
    image: "https://pbs.twimg.com/media/Gc_ndc4WcAAWg1v?format=jpg&name=large",
    desc: "This application enables users to create, assign, and monitor tasks, set deadlines, and collaborate with team members, ensuring projects are delivered on time and within scope.",
    github: "https://github.com/udaykumar-dhokia/unite",
    users: "7",
    link: "https://github.com/udaykumar-dhokia/unite",
    isCompleted: true,
  },
];

const Projects = () => {
  return (
    <div data-theme="black" className="pb-10 px-4 sm:px-6 md:px-8">
      <div className="max-w-3xl mx-auto space-y-6 text-center md:text-left">
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold heading mb-4">
          Projects
        </h3>
        <div className="space-y-6">
          {items.map((element, index) => (
            <div
              className="w-full flex flex-col sm:flex-row items-center gap-4 sm:gap-6 p-4 rounded-2xl border border-white/20 shadow-xl bg-white/10 dark:bg-black/20 backdrop-blur-md transition hover:scale-[1.02]"
              key={index}
            >
              <img
                src={element.image}
                alt={element.name}
                className="h-28 w-full sm:w-[220px] sm:h-[120px] object-cover rounded-xl shadow-md"
              />
              <div className="flex-1 flex flex-col gap-2">
                <a
                  href={element.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base sm:text-lg font-semibold text-white underline hover:text-blue-300"
                >
                  {element.name}
                </a>
                <p className="text-xs sm:text-sm text-white/80">
                  {element.desc}
                </p>
                <div className="flex flex-wrap items-center gap-2 sm:gap-3 mt-2">
                  {!element.isCompleted && (
                    <div className="flex items-center">
                      <Badge>
                        <div className="w-[5px] h-[5px] rounded-full bg-green-400 border-none"></div>
                        In Progress
                      </Badge>
                    </div>
                  )}
                  {element.name === "Portfolio" ? (
                    <Badge className="bg-green-900/20">
                      <div className="w-[5px] h-[5px] rounded-full bg-green-400 border-none"></div>
                      Live
                    </Badge>
                  ) : (
                    <Badge className="bg-gray-800 text-white hover:bg-gray-700 transition rounded-full">
                      <a
                        href={element.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center"
                      >
                        <svg
                          className="w-4 h-4 mr-1"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .98-.31 3.2 1.18a11.1 11.1 0 0 1 2.92-.39c.99 0 1.99.13 2.92.39 2.22-1.49 3.2-1.18 3.2-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.41-5.27 5.7.42.36.79 1.09.79 2.2 0 1.59-.01 2.87-.01 3.26 0 .31.21.68.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z" />
                        </svg>
                        GitHub
                      </a>
                    </Badge>
                  )}
                  <span className="text-xs text-gray-300">
                    {element.name != "Portfolio" && (
                      <Badge className="bg-green-900/20">
                        <div className="w-[5px] h-[5px] rounded-full bg-green-400 border-none"></div>
                        {element.users} users
                      </Badge>
                    )}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
