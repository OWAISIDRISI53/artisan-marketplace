// import React from "react";
import Footer from "../components/Footer"; // Importing Footer component

const AboutPage = () => {
  return (
    <div>
      {/* About Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-8 text-gray-900">
            About Artisan Marketplace
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            Artisan Marketplace is a global platform dedicated to connecting
            skilled artisans with customers who appreciate unique, handmade
            products.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Our mission is to empower artisans by providing them a space to
            showcase their crafts and reach a wider audience. We believe in the
            power of handmade goods to tell stories, celebrate culture, and
            bring people together.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            We are committed to sustainability and ethical practices, ensuring
            that every purchase supports local communities and promotes fair
            trade.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            At Artisan Marketplace, every product has a story, and every
            purchase makes a difference. Join us in celebrating creativity and
            craftsmanship!
          </p>
          <a
            href="/signup"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-500"
          >
            Become a Seller
          </a>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                Community
              </h3>
              <p className="text-gray-700">
                We foster a supportive community for artisans and customers to
                connect and share their love for handmade crafts.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                Quality
              </h3>
              <p className="text-gray-700">
                Every product is handcrafted with care, ensuring the highest
                quality and attention to detail.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                Sustainability
              </h3>
              <p className="text-gray-700">
                We prioritize sustainable practices that benefit artisans and
                the environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default AboutPage;
