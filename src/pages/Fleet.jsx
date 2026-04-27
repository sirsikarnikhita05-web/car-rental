import { cars } from "../data";
import CarCard from "../components/CarCard";

export default function Fleet() {
  return (
    <div className="p-6 grid md:grid-cols-3 gap-6">
      {cars.map((car) => (
        <CarCard key={car.id} car={car} />
      ))}
    </div>
  );
}