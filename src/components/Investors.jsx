import React from "react";

const Investors = () => {
  return (
    <section className="py-12 ">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Investors
        </h2>
        {/* Profile Cards */}
        <div className="grid lg:gap-x-34 md:gap-x-10  md:grid-cols-3 items-center justify-center gap-y-8">
          {[
            {
              name: "Ruba Abdullrhman",
              description: "lorum ipsum lorum ipsum lorum ipsum lorum ipsum",
            },
            {
              name: "Amjad Aseery",
              description:
                "lorum ipsum lorum ipsum lorum ipsum lorum Bl bla bla bla bla bla bla bla bla",
            },
            {
              name: "Afnan Alqugtani",
              description:
                "Bl bla bla bla bla bla bla bla bla lorum ipsum lorum ipsum lorum ipsum lorum",
            },
          ].map((profile, idx) => (
            <div
              key={idx}
              className="shadow rounded-lg p-6 flex flex-col justify-between transition duration-300 transform hover:shadow-lg hover:scale-105 items-center bg-linear-gradient h-84  max-w-80"
            >
              <div className="flex flex-col items-center mt-8">
                <svg
                  className="w-[80px] h-[80px] "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="0.6"
                    d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a8.949 8.949 0 0 0 4.951-1.488A3.987 3.987 0 0 0 13 16h-2a3.987 3.987 0 0 0-3.951 3.512A8.948 8.948 0 0 0 12 21Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 text-center ">
                    {profile.name}
                  </h3>
                  <p className="mt-4 text-gray-600 text-center px-6">
                    {profile.description}
                  </p>
                </div>
              </div>

              <div className="mt-4 ">
                <a
                  href="#"
                  className="text-indigo-600 hover:underline px-8 py-3 rounded-full transition duration-300 transform hover:scale-105"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(166, 166, 166, 0.29) 0%, rgba(115, 115, 115, 0.29) 44.5%, rgba(86, 96, 107, 0.29) 67.5%, rgba(57, 76, 98, 0.29) 100%),linear-gradient(0deg, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05))",
                  }}
                >
                  View Profile
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <a
            href="#"
            className="text-indigo-600 font-medium transition duration-300 transform hover:underline hover:scale-105"
          >
            See All
          </a>
        </div>
      </div>
    </section>
  );
};

export default Investors;
// background: ;
