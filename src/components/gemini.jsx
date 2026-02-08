import React from "react";

function App() {
  // Directly reference images from the public folder
  // No need for 'import' statements for these
  const menImage = "/assets/men.png"; // Path relative to your public folder root
  const womenImage = "/assets/women.png";
  const accessoriesImage = "/assets/accessories.png";
  const kidsImage = "/assets/kids.png";

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-6xl rounded-lg bg-white p-8 shadow-lg">
        {/* Editor's Pick Section */}
        <div className="mb-8 text-center">
          <h2 className="text-xl font-bold tracking-wide text-gray-800 uppercase">
            EDITOR'S PICK
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            Problems trying to resolve the conflict between
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="flex flex-col gap-4 md:flex-row">
          {/* Men's Section (Large Card) */}
          <div
            className="group relative min-h-[300px] flex-1 overflow-hidden rounded-lg bg-cover bg-center md:min-h-[400px]"
            style={{ backgroundImage: `url(${menImage})` }}
          >
            <div className="bg-opacity-20 group-hover:bg-opacity-0 absolute inset-0 flex items-end p-4 transition-opacity duration-300">
              <span className="bg-opacity-75 rounded bg-gray-800 px-3 py-1 text-lg font-semibold text-white">
                MEN
              </span>
            </div>
          </div>

          {/* Women's Section (Large Card) */}
          <div
            className="group relative min-h-[300px] flex-1 overflow-hidden rounded-lg bg-cover bg-center md:min-h-[400px]"
            style={{ backgroundImage: `url(${womenImage})` }}
          >
            <div className="bg-opacity-20 group-hover:bg-opacity-0 absolute inset-0 flex items-end bg-black p-4 transition-opacity duration-300">
              <span className="bg-opacity-75 rounded bg-gray-800 px-3 py-1 text-lg font-semibold text-white">
                WOMEN
              </span>
            </div>
          </div>

          {/* Accessories and Kids Sections (Vertical Stack) */}
          <div className="flex flex-1 flex-col gap-4">
            {/* Accessories Section (Smaller Card) */}
            <div
              className="group relative min-h-[150px] flex-1 overflow-hidden rounded-lg bg-cover bg-center md:min-h-[192px]"
              style={{ backgroundImage: `url(${accessoriesImage})` }}
            >
              <div className="bg-opacity-20 group-hover:bg-opacity-0 absolute inset-0 flex items-end bg-black p-4 transition-opacity duration-300">
                <span className="bg-opacity-75 rounded bg-gray-800 px-3 py-1 text-lg font-semibold text-white">
                  ACCESSORIES
                </span>
              </div>
            </div>

            {/* Kids Section (Smaller Card) */}
            <div
              className="group relative min-h-[150px] flex-1 overflow-hidden rounded-lg bg-cover bg-center md:min-h-[192px]"
              style={{ backgroundImage: `url(${kidsImage})` }}
            >
              <div className="bg-opacity-20 group-hover:bg-opacity-0 absolute inset-0 flex items-end bg-black p-4 transition-opacity duration-300">
                <span className="bg-opacity-75 rounded bg-gray-800 px-3 py-1 text-lg font-semibold text-white">
                  KIDS
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
