import { useParams } from "react-router-dom";
import { cars } from "../data";

export default function CarDetail() {
  const { id } = useParams();
  const car = cars.find((c) => c.id === Number(id));

  return (
    <div className="p-6">
      <img
        src={car.image}
        className="w-full h-80 object-cover rounded brightness-90"
      />

      <h1 className="text-2xl font-bold mt-4">{car.name}</h1>

      <div className="mt-4">
        <details className="bg-white p-4 rounded shadow">
          <summary className="cursor-pointer font-bold">
            Rental Terms
          </summary>
          <p className="mt-2">Basic rental terms go here...</p>
        </details>
      </div>
    </div>
  );
}