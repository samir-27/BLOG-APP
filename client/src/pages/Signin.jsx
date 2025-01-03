import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Signin = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/v1/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log(data)
      if (response.ok) {
        toast.success("Login successful!");
        navigate("/home");
      } else {
        toast.error(data.message || "Login failed. Please try again.");
      }
    } catch (error) {
      console.error("Error during login:", error);
      toast.error(`Something went wrong: ${error.message || "Please try again later."}`);
    }
  };

  const handleSignupRedirect = () => {
    navigate("/signup");
  };

  return (
    <div className="bg-indigo-50 flex justify-center items-center shadow-lg">
      {/* Image Section */}
      <div className="w-1/2 h-92vh hidden lg:block bg-white border">
        <img
          src="https://img.freepik.com/free-vector/organic-flat-blog-post-illustration-with-people_23-2148955260.jpg?t=st=1734586480~exp=1734590080~hmac=81de807528ee7e593b7420e1ddb035f563de5bb3afffd350eb4c71e83fdf79bc&w=1380"
          alt="Illustration"
          className="object-contain w-full h-full"
        />
      </div>

      {/* Form Section */}
      <div className="p-8 w-full flex justify-center lg:w-1/2">
        <div className="bg-white p-8 rounded-lg shadow-xl border max-w-sm w-full">
          <h2 className="text-2xl font-bold text-black text-center mb-6">Login</h2>
          <form onSubmit={handleSubmit}>
            {/* Email Input */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border-2 border-gray-400 focus:border-indigo-500 focus:outline-none rounded-md shadow-sm text-gray-900"
                required
              />
            </div>

            {/* Password Input */}
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border-2 border-gray-400 focus:border-indigo-500 focus:outline-none rounded-md shadow-sm text-gray-900"
                required
              />
            </div>

            {/* Signup Redirect */}
            <p className="pb-2">
              Haven&apos;t created an account?{" "}
              <span
                className="text-indigo-500 font-bold cursor-pointer"
                onClick={handleSignupRedirect}
              >
                Sign Up
              </span>
            </p>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-indigo-700 text-white py-2 rounded-md hover:bg-indigo-800 shadow-md transition"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signin;