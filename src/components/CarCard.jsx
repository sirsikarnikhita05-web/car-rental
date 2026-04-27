import { Link } from "react-router-dom";

export default function CarCard({ car }) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
      <img
        src={car.image}
        alt={car.name}
        className="w-full h-48 object-cover brightness-90 hover:brightness-110 transition"
      />

      <div className="p-4">
        <h2 className="text-lg font-bold">{car.name}</h2>
        <p>{car.seats} Seats • {car.fuel} • AC</p>
        <p className="text-primary font-bold mt-2">₹{car.price}/day</p>

        <Link
          to={`/car/${car.id}`}
          className="block mt-3 bg-primary text-white text-center py-2 rounded hover:bg-opacity-80"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}