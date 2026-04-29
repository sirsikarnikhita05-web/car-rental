import { useState, useEffect } from "react";

export default function Hero() {
  const images = [
    "/images/hero1.jpg",
    "/images/hero2.jpg",
    "/images/hero3.jpg",
    "/images/hero4.jpg",
  ];

  const [current, setCurrent] = useState(0);

  // Auto slide every 4 sec
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const [form, setForm] = useState({
    location: "",
    pickup: "",
    drop: "",
    type: "All",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div className="relative h-[90vh] flex items-center justify-center overflow-hidden">

      {/* Background Slider */}
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt="hero"
          className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          } brightness-75`}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-primary/70"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 fade-in">
        
        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
          Find Your Perfect Ride 🚗
        </h1>

        <p className="mb-8 text-lg text-gray-200 max-w-xl mx-auto">
          Book from a wide range of cars at the best prices. Fast, easy, and reliable.
        </p>

        {/* Search Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-secondary text-black rounded-xl shadow-lg p-6 grid md:grid-cols-4 gap-4 max-w-5xl mx-auto"
        >
          <input
            type="text"
            name="location"
            placeholder="Pickup Location"
            value={form.location}
            onChange={handleChange}
            className="p-3 rounded border focus:outline-none focus:ring-2 focus:ring-primary"
          />

          <input
            type="date"
            name="pickup"
            value={form.pickup}
            onChange={handleChange}
            className="p-3 rounded border focus:outline-none focus:ring-2 focus:ring-primary"
          />

          <input
            type="date"
            name="drop"
            value={form.drop}
            onChange={handleChange}
            className="p-3 rounded border focus:outline-none focus:ring-2 focus:ring-primary"
          />

          <select
            name="type"
            value={form.type}
            onChange={handleChange}
            className="p-3 rounded border focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="All">All Cars</option>
            <option value="SUV">SUV</option>
            <option value="Sedan">Sedan</option>
            <option value="Luxury">Luxury</option>
          </select>

          <button
            type="submit"
            className="md:col-span-4 bg-primary text-white py-3 rounded-lg hover:scale-105 hover:bg-opacity-90 transition duration-300"
          >
            Search Cars
          </button>
        </form>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-6">
          {images.map((_, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full ${
                i === current ? "bg-white" : "bg-white/40"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
