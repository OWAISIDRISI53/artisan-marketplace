// import React from "react";

const Pricing = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Our Pricing Plans
        </h1>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-6">
          {/* Basic Plan */}
          <div className="w-full md:w-1/3 bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-center text-gray-700">
              Basic Plan
            </h2>
            <p className="text-center text-gray-500 mt-4">For small startups</p>
            <div className="text-center my-6">
              <span className="text-4xl font-bold">₹250</span>
              <span className="text-gray-500">/month</span>
            </div>
            <ul className="mb-6 space-y-4">
              <li className="text-gray-600">✔ 10 Products</li>
              <li className="text-gray-600">✔ Basic Support</li>
              <li className="text-gray-600">✔ Access to Marketplace</li>
            </ul>
            <div className="text-center">
              <button className="px-6 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600">
                Choose Plan
              </button>
            </div>
          </div>

          {/* Pro Plan */}
          <div className="w-full md:w-1/3 bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-center text-gray-700">
              Pro Plan
            </h2>
            <p className="text-center text-gray-500 mt-4">
              For growing businesses
            </p>
            <div className="text-center my-6">
              <span className="text-4xl font-bold">₹380</span>
              <span className="text-gray-500">/month</span>
            </div>
            <ul className="mb-6 space-y-4">
              <li className="text-gray-600">✔ 50 Products</li>
              <li className="text-gray-600">✔ Priority Support</li>
              <li className="text-gray-600">✔ Analytics Dashboard</li>
            </ul>
            <div className="text-center">
              <button className="px-6 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600">
                Choose Plan
              </button>
            </div>
          </div>

          {/* Enterprise Plan */}
          <div className="w-full md:w-1/3 bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-center text-gray-700">
              Enterprise Plan
            </h2>
            <p className="text-center text-gray-500 mt-4">
              For large enterprises
            </p>
            <div className="text-center my-6">
              <span className="text-4xl font-bold">₹550</span>
              <span className="text-gray-500">/month</span>
            </div>
            <ul className="mb-6 space-y-4">
              <li className="text-gray-600">✔ Unlimited Products</li>
              <li className="text-gray-600">✔ 24/7 Premium Support</li>
              <li className="text-gray-600">✔ Custom Solutions</li>
            </ul>
            <div className="text-center">
              <button className="px-6 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600">
                Choose Plan
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
