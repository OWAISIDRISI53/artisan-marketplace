// import React from "react";

const Contact = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Contact Us
        </h1>
        <div className="flex flex-col md:flex-row md:space-x-8">
          {/* Contact Form */}
          <div className="w-full md:w-1/2 bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              Get In Touch
            </h2>
            <form action="#" method="POST">
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                  required
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="px-6 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* Contact Info */}
          <div className="w-full md:w-1/2 bg-white rounded-lg shadow-lg p-6 mt-6 md:mt-0">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              Contact Information
            </h2>
            <p className="text-gray-600 mb-4">
              Feel free to reach out to us through the form or contact us
              directly using the information below.
            </p>
            <ul className="space-y-4">
              <li className="text-gray-600">
                <strong>Address:</strong> 123 Artisan Street, City, Country
              </li>
              <li className="text-gray-600">
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:info@artisanmarketplace.com"
                  className="text-blue-500"
                >
                  info@artisanmarketplace.com
                </a>
              </li>
              <li className="text-gray-600">
                <strong>Phone:</strong> +123 456 7890
              </li>
              <li className="text-gray-600">
                <strong>Working Hours:</strong> Mon - Fri, 9:00 AM - 6:00 PM
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
