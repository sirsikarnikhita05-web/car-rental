export const cars = Array.from({ length: 40 }, (_, i) => ({
  id: i + 1,
  name: `Car Model ${i + 1}`,
  seats: 4 + (i % 3),
  fuel: i % 2 === 0 ? "Petrol" : "Diesel",
  price: 2000 + i * 50,
  image: `/images/car${(i % 10) + 1}.jpg`, // reuse 10 images
}));