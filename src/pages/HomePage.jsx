// import React from 'react';
import watchImage from "../assets/watch.jpg";

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-100 dark:bg-gray-800 py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
            Welcome to Artisan Marketplace
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
            Discover hand-made, unique crafts from skilled artisans all around
            the world.
          </p>
          <a
            href="/products"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-500"
          >
            Shop Now
          </a>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">
            Featured Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {/* Product Card 1 */}
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <img
                className="w-full h-64 object-cover mb-4 rounded-lg"
                // src="https://source.unsplash.com/random/200x200?product"
                src={watchImage}
                alt="Product 1"
              />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Product Name
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">$25.00</p>
              <a
                href="/products"
                className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-500"
              >
                View Product
              </a>
            </div>

            {/* Add more product cards here */}

            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <img
                className="w-full h-64 object-cover mb-4 rounded-lg"
                // src="https://source.unsplash.com/random/200x200?product"
                src={watchImage}
                alt="Product 1"
              />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Product Name
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">₹2000.00</p>
              <a
                href="/products"
                className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-500"
              >
                View Product
              </a>
            </div>

            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <img
                className="w-full h-64 object-cover mb-4 rounded-lg"
                // src="https://source.unsplash.com/random/200x200?product"
                src={watchImage}
                alt="Product 1"
              />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Product Name
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">₹2500.00</p>
              <a
                href="/products"
                className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-500"
              >
                View Product
              </a>
            </div>

            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <img
                className="w-full h-64 object-cover mb-4 rounded-lg"
                // src="https://source.unsplash.com/random/200x200?product"
                src={watchImage}
                alt="Product 1"
              />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Product Name
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">₹2500.00</p>
              <a
                href="/products"
                className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-500"
              >
                View Product
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gray-100 dark:bg-gray-800 py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
            Are you an Artisan?
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
            Join us today to showcase your products to the world!
          </p>
          <a
            href="/signup"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-500"
          >
            Get Started
          </a>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
