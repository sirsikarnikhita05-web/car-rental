export default function Home() {
  return (
    <div className="p-6">
      <div className="bg-primary text-white p-10 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold mb-4">
          Find Your Perfect Ride
        </h1>

        <div className="grid md:grid-cols-4 gap-4">
          <input className="p-2 rounded text-black" placeholder="Location" />
          <input type="date" className="p-2 rounded text-black" />
          <input type="date" className="p-2 rounded text-black" />
          <select className="p-2 rounded text-black">
            <option>All Cars</option>
            <option>SUV</option>
            <option>Sedan</option>
          </select>
        </div>

        <button className="mt-4 bg-secondary text-primary px-6 py-2 rounded hover:scale-105 transition">
          Search
        </button>
      </div>
    </div>
  );
}