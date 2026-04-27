const offers = [
  {
    id: 1,
    title: "Weekend Special",
    desc: "Get 20% off on weekend bookings.",
    discount: "20% OFF",
    image: "/images/offer1.jpg",
  },
  {
    id: 2,
    title: "First Ride Free",
    desc: "Enjoy ₹500 off on your first booking.",
    discount: "₹500 OFF",
    image: "/images/offer2.jpg",
  },
  {
    id: 3,
    title: "Luxury Deal",
    desc: "Flat 15% off on luxury cars.",
    discount: "15% OFF",
    image: "/images/offer3.jpg",
  },
  {
    id: 4,
    title: "Long Trip Offer",
    desc: "Book for 5+ days and get 25% off.",
    discount: "25% OFF",
    image: "/images/offer4.jpg",
  },
  {
    id: 5,
    title: "Festival Sale",
    desc: "Special festive discounts on all cars.",
    discount: "30% OFF",
    image: "/images/offer5.jpg",
  },
  {
    id: 6,
    title: "Corporate Deal",
    desc: "Exclusive offers for corporate users.",
    discount: "18% OFF",
    image: "/images/offer6.jpg",
  },
];

export default function Offers() {
  return (
    <div className="bg-secondary min-h-screen p-6 fade-in">
      
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary mb-3">
          Latest Offers
        </h1>
        <p className="text-gray-600 max-w-xl mx-auto">
          Grab the best deals and save more on your next ride.
        </p>
      </div>

      {/* Offers Grid */}
      <div className="grid md:grid-cols-3 gap-8">
        {offers.map((offer) => (
          <div
            key={offer.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 group"
          >
            {/* Image */}
            <div className="relative overflow-hidden">
              <img
                src={offer.image}
                alt={offer.title}
                className="w-full h-48 object-cover brightness-90 group-hover:brightness-110 transition duration-300"
              />

              {/* Discount Badge */}
              <span className="absolute top-3 left-3 bg-primary text-white px-3 py-1 text-sm rounded shadow">
                {offer.discount}
              </span>
            </div>

            {/* Content */}
            <div className="p-5">
              <h2 className="text-xl font-bold mb-2">
                {offer.title}
              </h2>

              <p className="text-gray-600 text-sm mb-4">
                {offer.desc}
              </p>

              <button className="w-full bg-primary text-white py-2 rounded hover:bg-opacity-80 hover:scale-105 transition duration-300">
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Banner Section */}
      <div className="mt-16 bg-primary text-white rounded-xl p-10 text-center shadow-lg">
        <h2 className="text-3xl font-bold mb-3">
          Limited Time Deals 🚗
        </h2>
        <p className="mb-6">
          Don’t miss out on exclusive discounts. Book your ride today!
        </p>

        <button className="bg-secondary text-primary px-8 py-3 rounded-lg font-semibold hover:scale-105 transition duration-300">
          Explore Cars
        </button>
      </div>
    </div>
  );
}
public/images/offer1.jpg
public/images/offer2.jpg
public/images/offer3.jpg
public/images/offer4.jpg
public/images/offer5.jpg
public/images/offer6.jpg