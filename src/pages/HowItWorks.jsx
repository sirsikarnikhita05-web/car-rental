import { FaSearch, FaCar, FaKey, FaRoad } from "react-icons/fa";

const steps = [
  {
    id: 1,
    title: "Search",
    desc: "Enter your location, dates, and preferred car type to find available vehicles.",
    icon: <FaSearch size={30} />,
    image: "/images/how1.jpg",
  },
  {
    id: 2,
    title: "Book",
    desc: "Choose your car and confirm your booking with our easy checkout process.",
    icon: <FaCar size={30} />,
    image: "/images/how2.jpg",
  },
  {
    id: 3,
    title: "Pick Up",
    desc: "Visit the selected location and pick up your car hassle-free.",
    icon: <FaKey size={30} />,
    image: "/images/how3.jpg",
  },
  {
    id: 4,
    title: "Drive",
    desc: "Enjoy your ride with comfort and freedom wherever you go.",
    icon: <FaRoad size={30} />,
    image: "/images/how4.jpg",
  },
];

export default function HowItWorks() {
  return (
    <div className="bg-secondary min-h-screen p-6 fade-in">
      
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary mb-3">
          How It Works
        </h1>
        <p className="text-gray-600 max-w-xl mx-auto">
          Renting a car has never been easier. Follow these simple steps and get on the road quickly.
        </p>
      </div>

      {/* Steps */}
      <div className="grid md:grid-cols-4 gap-8">
        {steps.map((step) => (
          <div
            key={step.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 group"
          >
            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={step.image}
                alt={step.title}
                className="w-full h-40 object-cover brightness-90 group-hover:brightness-110 transition duration-300"
              />
            </div>

            {/* Content */}
            <div className="p-5 text-center">
              <div className="flex justify-center items-center mb-3 text-primary">
                {step.icon}
              </div>

              <h2 className="text-xl font-bold mb-2">
                {step.title}
              </h2>

              <p className="text-gray-600 text-sm">
                {step.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Step Connector Line (desktop only) */}
      <div className="hidden md:flex justify-between items-center mt-10 px-10">
        {steps.map((step, index) => (
          <div key={index} className="flex-1 flex items-center">
            <div className="w-10 h-10 bg-primary text-white flex items-center justify-center rounded-full font-bold">
              {step.id}
            </div>

            {index !== steps.length - 1 && (
              <div className="flex-1 h-1 bg-primary opacity-30 mx-2"></div>
            )}
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center mt-12">
        <button className="bg-primary text-white px-8 py-3 rounded-lg shadow hover:scale-105 hover:bg-opacity-90 transition duration-300">
          Start Booking
        </button>
      </div>
    </div>
  );
}
