// Areas Section Component
const areas = [
  {
    title: "Technology",
    icon: "🔧",
    color: "bg-blue-500",
    borderColor: "border-blue-500",
    description:
      "Technology is the set of tools and devices we use every day to make our lives easier. From computers and smartphones to smart apps, it drives progress and helps solve complex problems....",
  },
  {
    title: "Medicine",
    icon: "🩺",
    color: "bg-green-500",
    borderColor: "border-green-500",
    description:
      "Medicine is the science that studies the human body, its diseases, and methods of diagnosing and treating them. Medicine aims to maintain human health and well-being, and improve the quality of life....",
  },
  {
    title: "Agriculture",
    icon: "🌱",
    color: "bg-yellow-500",
    borderColor: "border-yellow-500",
    description:
      "Agriculture is the science of producing food and feed. It includes the growing of crops and the raising of animals...",
  },
  {
    title: "Business",
    icon: "💼",
    color: "bg-red-500",
    borderColor: "border-red-500",
    description:
      "Business administration is the study of how companies and organizations are managed to make a profit......",
  },
];

const Areas = () => (
  <section className="py-12">
    <div className="max-w-7xl mx-auto px-4">
      <h1 className="text-4xl font-bold mb-10 text-center">Areas</h1>
      <div className="grid grid-cols-1 gap-y-6">
        {areas.map((area, index) => (
          <div key={index} className="p-2">
            <div
              className={`grid grid-cols-3 items-center gap-6 ${
                index % 2 === 0 ? " justify-items-end " : "justify-items-start "
              } `}
            >
              <button
                className={`flex  items-center bg-linear-gradient p-3 rounded-md mb-4 h-34 w-full ${
                  index % 2 === 0 ? " order-first " : " order-last "
                } `}
              >
                <div className="flex items-center justify-between px-4">
                  <span className="text-4xl">{area.icon}</span>
                  <span className="text-2xl">{area.title}</span>
                </div>
              </button>
              <div
                className={`w-full border-t-2 ${area.borderColor} mb-4`}
              ></div>{" "}
              {/* Solid arrow line */}
              <p
                className={`text-lg ${
                  index % 2 === 0 ? " order-last " : " order-first "
                } `}
              >
                {area.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Areas;
