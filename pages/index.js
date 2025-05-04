import { useState } from 'react';
import Layout from '../components/Layout';
import ProductCard from '../components/ProductCard';
import ProductModal from '../components/ProductModal';

const products = [
  {
    id: 1,
    name: 'Mini Folding Portable Barbecue - Foldecue',
    description: 'Compact, foldable charcoal grill ideal for travel, picnics, and small gatherings.',
    price: '€44.99',
    image: '/images/foldecue1.jpg',
  },
  // Add other products similarly
];

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <Layout>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onClick={() => setSelectedProduct(product)}
          />
        ))}
      </div>
      <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
    </Layout>
  );
}

