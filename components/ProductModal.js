export default function ProductModal({ product, onClose }) {
  if (!product) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg overflow-hidden shadow-lg max-w-2xl w-full">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-96 object-cover"
        />
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-800">{product.name}</h2>
          <p className="mt-4 text-gray-600">{product.description}</p>
          <p className="mt-4 text-green-700 font-bold text-xl">{product.price}</p>
          <button
            onClick={onClose}
            className="mt-6 inline-block bg-green-700 text-white px-6 py-2 rounded hover:bg-green-600"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
