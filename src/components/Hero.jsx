import linkin from "../assets/images/social icons/linkin.svg";
import insta from "../assets/images/social icons/insta.svg";
import x from "../assets/images/social icons/x.svg";
const Hero = () => (
  <section className="pt-20 text-white min-h-[500px] px-4">
    <div className="max-w-7xl mx-auto px-4 py-16 ">
      <h1 className="text-4xl sm:text-5xl font-extrabold">
        Built to scale <br />
        all private funds
      </h1>
      <p className="mt-4 text-lg sm:text-xl">
        We provide an integrated environment for exchanging ideas and investing
        in promising projects. <br /> Join us today to be part of the future of
        innovative transformations that shape the business world.
      </p>
      <div className="my-8">
        <a
          href="#"
          className="px-8 py-3 bg-white text-indigo-600 font-semibold rounded-md transition duration-300 transform hover:bg-gray-100 hover:scale-105"
        >
          Join Now
        </a>
      </div>
      {/* Social Media Icons */}
      <div className="mt-6 flex justify-start gap-4">
        {/* LinkedIn Icon */}
        <a
          href="#"
          target="_blank"
          className="rounded-full border border-black p-2 bg-white hover:bg-indigo-500 hover:text-white w-12 h-12 flex items-center justify-center"
        >
          <img src={linkin} alt="" />
        </a>

        {/* Twitter Icon */}
        <a
          href="#"
          target="_blank"
          className="rounded-full border border-black p-2 bg-white hover:bg-indigo-500 hover:text-white w-12 h-12 flex items-center justify-center"
        >
          <img src={x} alt="" />
        </a>

        {/* Instagram Icon */}
        <a
          href="#"
          target="_blank"
          className="rounded-full border border-black p-2 bg-white hover:bg-indigo-500 hover:text-white w-12 h-12 flex items-center justify-center"
        >
          <img src={insta} alt="" />
        </a>
      </div>
    </div>
  </section>
);

export default Hero;
