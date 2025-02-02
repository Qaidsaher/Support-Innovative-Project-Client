import React from "react";
import about from "../assets/images/image 9.svg";

export const About = () => {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-10 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
          <div>
            <div className="max-w-lg md:max-w-none">
              <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
                Where Ideas & Investments Converge
              </h2>
              <p className="mt-4 text-gray-700 text-lg">
                We provide an integrated environment for exchanging ideas and
                investing in promising projects. Join us today to be part of the
                future of innovative transformations that shape the
                business world.
              </p>
            </div>
          </div>

          <div>
            <img src={about} className="rounded" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};
