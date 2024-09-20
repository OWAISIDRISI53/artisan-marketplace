import { useEffect, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);

  // Fetch products from JSON file
  useEffect(() => {
    fetch("/products.json")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const generateRandomImageUrl = (id) => {
    return `https://picsum.photos/200/300?random=${id}`;
  };

  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Our Products
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-lg p-6">
              <img
                src={generateRandomImageUrl(product.id)}
                alt={product.name}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h2 className="text-2xl font-semibold text-gray-800">
                {product.name}
              </h2>
              <p className="text-gray-600">{product.description}</p>
              <p className="text-blue-600 font-bold text-xl mt-4">
                {product.price}
              </p>
              <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
