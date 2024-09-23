import { useState } from "react";

const Account = () => {
  // Placeholder user data, you would typically fetch this from your backend or context
  const [user] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
  });

  const handleLogout = () => {
    // Logic for logging out the user
    alert("This action required a bakend to work");
    console.log("User logged out");
  };

  const handleUpdatePassword = () => {
    // Logic for updating password
    alert("This action required a bakend to work");
    console.log("Redirect to update password");
  };

  return (
    <div className="account-container p-6 bg-gray-100 shadow-lg rounded-lg max-w-md mx-auto mt-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        My Account
      </h2>
      <div className="account-info bg-white p-4 rounded-md shadow-sm">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">
          Account Details
        </h3>
        <p className="text-gray-700 mb-2">
          <strong>Name: </strong> {user.name}
        </p>
        <p className="text-gray-700 mb-6">
          <strong>Email: </strong> {user.email}
        </p>

        <div className="account-actions space-y-4">
          <button
            onClick={handleUpdatePassword}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md"
          >
            Update Password
          </button>
          <button
            onClick={handleLogout}
            className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-md"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Account;
