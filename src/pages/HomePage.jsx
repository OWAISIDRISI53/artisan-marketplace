import { Link } from "react-router-dom";
import watchImage from "../assets/watch.jpg";
import heroImage from "../assets/hero-image.avif";
import testimoniesImage from "../assets/testimonials.jpeg";
import Footer from "../components/Footer"; // Importing Footer component

const HomePage = () => {
  return (
    <div>
      <Link
        to="/chat"
        className="fixed bottom-5 right-5 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-500 transition duration-300"
      >
        <i className="fas fa-comment-alt"></i>
      </Link>
      {/* Hero Section */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          {/* Left: Content */}
          <div className="w-full md:w-1/2 text-center md:text-left px-6 md:px-12">
            <h1 className="text-4xl font-bold mb-4 text-gray-900">
              Welcome to Artisan Marketplace
            </h1>
            <p className="text-lg text-gray-700 mb-6">
              Discover hand-made, unique crafts from skilled artisans all around
              the world. Our platform connects you to the finest hand-crafted
              goods, whether you are looking for home decor, jewelry, or
              exclusive art pieces.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Every product is custom-made with passion and precision by local
              artisans. Support small businesses and bring a unique touch to
              your life with our collection of one-of-a-kind items.
            </p>
            <Link
              to="/products"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-500"
            >
              Shop Now
            </Link>
          </div>

          {/* Right: Image */}
          <div className="w-full md:w-1/2 mt-8 md:mt-0">
            <img
              src={heroImage}
              alt="Artisan Craft Showcase"
              className="w-full h-auto rounded-lg shadow-md object-cover"
              style={{ maxHeight: "400px" }}
            />
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">
            Featured Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {[1, 2, 3, 4].map((item, index) => (
              <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-lg">
                <img
                  className="w-full h-64 object-cover mb-4 rounded-lg"
                  src={watchImage}
                  alt={`Product ${item}`}
                />
                <h3 className="text-xl font-semibold text-gray-900">
                  Product Name {item}
                </h3>
                <p className="text-gray-700 mb-4">₹{2500 + item * 100}.00</p>
                <Link
                  to="/products"
                  className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-500"
                >
                  View Product
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[1, 2, 3].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex flex-col items-center">
                  {/* Image */}
                  <img
                    // src={`https://source.unsplash.com/random/200x200?customer${item}`} // Random image for demonstration
                    src={testimoniesImage}
                    alt={`Customer ${item}`}
                    className="mb-4 w-24 h-24 rounded-full object-cover border-2 border-blue-600"
                  />
                  <p className="text-gray-700 mb-4">
                    {
                      "The quality of the artisan products I received is top-notch. Highly recommend!"
                    }
                  </p>
                  <h3 className="font-bold text-gray-900">Customer {item}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            About Artisan Marketplace
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Artisan Marketplace is a global platform where skilled artisans from
            around the world showcase their handmade crafts. We provide a
            platform for unique and custom-made products, connecting creators
            with customers.
          </p>
          <Link
            to="/about"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-500"
          >
            Learn More
          </Link>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Are you an Artisan?
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Join us today to showcase your products to the world!
          </p>
          <Link
            to="/signup"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-500"
          >
            Get Started
          </Link>
        </div>
      </section>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default HomePage;
