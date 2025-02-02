import target1 from "../assets/images/audiences/target (1).svg";
import target2 from "../assets/images/audiences/target (2).svg";
import target3 from "../assets/images/audiences/target (3).svg"; // Corrected import

const TargetedAudience = () => (
  <section className="py-12">
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Targeted Audience
      </h2>
      {/* Audience Tags */}
      <div className="grid md:grid-cols-3 sm:grid-cols-1  justify-center gap-12 mb-12">
        {[
          { title: "Digital Ideators", image: target1 },
          { title: "Creators", image: target3 },
          { title: "Digital Creators", image: target2 },
        ].map((item, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <img
              src={item.image}
              alt={item.title}
              className="w-[150px] h-[150px] m-4 "
            />
            <div className="w-[280px] h-0.5 rounded-full my-4 bg-black"></div>
            <span className="px-4 py-2 text-indigo-600 rounded-full transition duration-300 transform hover:scale-105 text-2xl">
              {item.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TargetedAudience;
