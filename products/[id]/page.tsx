'use client';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Navbar from '../../components/navbar';

interface Product {
  id: number;
  title: string;
  image: string;
  category: string;
  price: number;
  description: string;
}

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    if (id) {
      fetch(`https://fakestoreapi.com/products/${id}`)
        .then((res) => res.json())
        .then((data) => setProduct(data));
    }
  }, [id]);

  useEffect(() => {
    const fav = localStorage.getItem(`favorite-${id}`) === 'true';
    setIsFavorite(fav);
  }, [id]);

  const toggleFavorite = () => {
    const newValue = !isFavorite;
    setIsFavorite(newValue);
    localStorage.setItem(`favorite-${id}`, newValue.toString());
  };

  if (!product) return <div className="p-6">Loading...</div>;

  return (
    <div>
      <Navbar />
      <div className="p-8">
        <h1 className="text-4x2 font-bold mb-6">{product.title}</h1>
        <img src={product.image} alt={product.title} className="h-48 mb-6" />
        <p className="mb-4"><strong>Category:</strong> {product.category}</p>
        <p className="mb-4"><strong>Price:</strong> ${product.price}</p>
        <p className="mb-8">{product.description}</p>
        <button
          onClick={toggleFavorite}
          className={`px-4 py-2 rounded text-black ${
            isFavorite ? 'bg-blue-600' : 'bg-yellow-600'
          }`}
        >
          {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
        </button>
      </div>
    </div>
  );
}