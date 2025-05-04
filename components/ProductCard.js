export default function ProductCard({ product, onClick }) {
  return (
    <div
      className="bg-white rounded-lg shadow hover:shadow-lg transition cursor-pointer"
      onClick={onClick}
    >
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-64 object-cover rounded-t-lg"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800">{product.name}</h2>
        <p className="text-sm text-gray-600">{product.description}</p>
        <p className="mt-2 text-green-700 font-bold">{product.price}</p>
      </div>
    </div>
  );
}
