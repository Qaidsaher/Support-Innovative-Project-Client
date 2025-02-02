import stat1 from "../assets/images/stats/stats (1).svg";
import stat2 from "../assets/images/stats/stats (2).svg";
import stat3 from "../assets/images/stats/stats (3).svg";
import stat4 from "../assets/images/stats/stats (4).svg";

const Stats = () => (
  <section className="py-12 ">
    <div className="max-w-7xl mx-auto px-0">
      <h2 className="text-4xl  text-center text-gray-800 my-12">
        Key Metrics That Drive Our Success
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
        <div className="flex flex-col items-center w-full ">
          <img src={stat2} alt="Investors" />
          <p className="text-3xl font-bold mt-4 ">230,1</p>
          <p className="mt-2">Investors</p>
        </div>

        <div className="flex flex-col items-center w-full ">
          <img src={stat4} alt="Visitors" />
          <p className="text-3xl font-bold mt-4">323,1</p>
          <p className="mt-2">Visitors</p>
        </div>

        <div className="flex flex-col items-center w-full ">
          <img src={stat1} alt="Projects" />
          <p className="text-3xl font-bold mt-4">323,1</p>
          <p className="mt-2">Projects</p>
        </div>

        <div className="flex flex-col items-center w-full ">
          <img src={stat3} alt="Innovators" />
          <p className="text-3xl font-bold mt-4">346</p>
          <p className="mt-2">Innovators</p>
        </div>
      </div>
    </div>
  </section>
);

export default Stats;
