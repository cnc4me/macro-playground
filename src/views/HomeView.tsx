import { ViewHeading } from "./ViewHeading";

const packages = [
  ["@cnc4me/chrysalis", "A thin wrapper around the Monaco editor to enable easy customization."],
  ["@cnc4me/fanuc-macro-b", "A complete environment "]
];

export const HomeView = () => {
  return (
    <div className="container bg-neutral-800">
      <ViewHeading value="About" />
      <div className="flex flex-row">
        <div className="pt-5">
          <p className="px-10 py-5 text-blue-300">Hello and welcome to the Fanuc Macro B online playground.</p>
          <p className="px-10 py-5 text-violet-400">
            This is a virtual environment for executing partial or full programs with evaluation of macro expressions.
          </p>
          <p className="px-10 py-5 text-purple-300">
            It was created with the goal of letting an operator view how a macro program might execute in the machine,
            without interrupting production.
          </p>
          <div className="px-10 py-5">
            <h3 className="pb-4 text-2xl text-purple-500">Packages</h3>
            <div className="grid grid-flow-col grid-cols-2 gap-2">
              {packages.map(([repoId, desc]) => {
                const href = `https://github.com/cnc4me/${repoId.split("/")[1]}`;

                return (
                  <div className="flex justify-center">
                    <div className="block text-center bg-white rounded-lg shadow-lg">
                      <div className="p-6">
                        <h5 className="mb-2 text-xl font-medium text-gray-900">{repoId}</h5>
                        <p className="mb-4 text-base text-gray-700">{desc}</p>
                        <button
                          type="button"
                          className=" inline-block px-6 py-2.5 bg-violet-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-violet-700 hover:shadow-lg focus:bg-violet-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-violet-800 active:shadow-lg transition duration-150 ease-in-out"
                        >
                          <a className="text-white" href={href}>
                            View on Github
                          </a>
                        </button>
                      </div>
                      {/* <div class="py-3 px-6 border-t border-gray-300 text-gray-600">
      2 days ago
    </div> */}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {/* <div className="p-2 border border-purple-500"></div> */}
      </div>
    </div>
  );
};
