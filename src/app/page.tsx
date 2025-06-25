"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Navbar from "../../components/navbar";

interface Product {
  id: number;
  title: string;
  image: string;
}

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filtered, setFiltered] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=5")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setFiltered(data);
      });
  }, []);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const keyword = e.target.value;
    setSearchTerm(keyword);
    if (keyword.trim() === "") {
      setFiltered(products);
    } else {
      const result = products.filter((p) =>
        p.title.toLowerCase().includes(keyword.toLowerCase())
      );
      setFiltered(result);
    }
  };

  return (
    <div>
      <Navbar />
      <main className="p-6">
        <h1 className="text-2xl font-bold mb-4">Product Showcase</h1>

        <input
          type="text"
          placeholder="Search product..."
          value={searchTerm}
          onChange={handleSearch}
          className="w-full max-w-md mb-8 px-6 py-4 border border-blue-300"
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">
          {filtered.map((product) => (
            <div
              key={product.id}
              className="border p-6 rounded shadow hover:shadow-lg transition"
            >
              <img
                src={product.image}
                alt={product.title}
                className="h-32 mx-auto mb-2"
              />
              <h2 className="font-semibold text-center">{product.title}</h2>
              <Link href={`/products/${product.id}`}>
                <button className="mt-2 bg-gray-500 text-black px-4 py-2 rounded hover:bg-gray-600 w-full">
                  View Details
                </button>
              </Link>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}