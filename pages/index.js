import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { useState } from "react";

const products = [
  {
    id: 1,
    name: "Mini Folding Portable Barbecue - Foldecue",
    description: "Compact, foldable charcoal grill ideal for travel, picnics, and small gatherings. Durable and lightweight.",
    price: "€45",
    image: "/images/foldecue1.jpg"
  },
  {
    id: 2,
    name: "Coal Barbecue with Wheels - Algon",
    description: "A robust, mobile charcoal barbecue with large grilling surface and sleek design for garden use.",
    price: "€64",
    image: "/images/algon1.jpg"
  },
  {
    id: 3,
    name: "Coal Barbecue with Wheels - DKD Home Decor",
    description: "Stylish and sturdy charcoal grill with enhanced portability and black finish for a modern look.",
    price: "€85",
    image: "/images/dkd1.jpg"
  },
  {
    id: 4,
    name: "Multi-function Weather Station - Alecto",
    description: "Stay updated with temperature and lunar phases in a sleek, modern device. Ideal for indoor use.",
    price: "€33",
    image: "/images/alecto1.jpg"
  },
  {
    id: 5,
    name: "Environmental Thermometer - Ferrestock",
    description: "Classic wall-mounted thermometer for indoor/outdoor use. Displays Celsius and Fahrenheit.",
    price: "€19",
    image: "/images/thermometer1.jpg"
  },
  {
    id: 6,
    name: "Fountain Brown Plastic Resin",
    description: "Soothing resin fountain for indoor or garden settings. Compact and elegant.",
    price: "€66",
    image: "/images/fountain1.jpg"
  },
  {
    id: 7,
    name: "Fountain Oval Brown Resin",
    description: "Oval resin water fountain with a calming presence. Perfect for patios and interiors.",
    price: "€58",
    image: "/images/fountain2.jpg"
  },
  {
    id: 8,
    name: "Wireless Flame Speaker - InnovaGoods",
    description: "LED flame-effect speaker with Bluetooth 5.0. Combines ambiance and music perfectly.",
    price: "€45",
    image: "/images/speaker1.jpg"
  }
];

export default function Home() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="p-6 space-y-10">
      <header className="text-center space-y-2">
        <h1 className="text-4xl font-bold text-green-800">Garden&Company</h1>
        <p className="text-gray-600 text-lg">Premium tools and decor for modern outdoor living – made effortless.</p>
      </header>

      <section className="grid md:grid-cols-4 gap-6">
        {products.map(product => (
          <Card key={product.id} className="cursor-pointer hover:scale-105 transition-transform" onClick={() => setSelected(product)}>
            <div className="p-4">
              <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-xl mb-4" />
              <h2 className="text-lg font-semibold">{product.name}</h2>
              <p className="text-sm text-gray-500">{product.description}</p>
              <p className="mt-2 font-bold">{product.price}</p>
              <Button className="mt-4 w-full bg-green-700 hover:bg-green-600 text-white">Buy with Pay</Button>
            </div>
          </Card>
        ))}
      </section>

      {selected && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-xl animate-fade-in">
            <h2 className="text-2xl font-bold mb-2">{selected.name}</h2>
            <img src={selected.image} alt={selected.name} className="w-full h-64 object-cover rounded-lg mb-4" />
            <p className="mb-4 text-gray-600">{selected.description}</p>
            <p className="font-bold mb-4">{selected.price}</p>
            <Button className="bg-green-700 hover:bg-green-600 w-full text-white mb-2">Buy with Pay</Button>
            <Button variant="outline" className="w-full" onClick={() => setSelected(null)}>Close</Button>
          </div>
        </div>
      )}
    </div>
  );
}

