import { useNavigate } from "react-router-dom";
const Signin = () => {
  const navigate = useNavigate()
  const handleSignin=()=>{
    navigate('/signin')
  }
  return (
    <div className="">
      <div className="bg-indigo-50 flex justify-center items-center shadow-lg">

        {/* Image Section */}
        <div className="w-1/2 h-92vh hidden lg:block bg-white border">
          <img
            src="https://img.freepik.com/free-vector/organic-flat-blog-post-illustration-with-people_23-2148955260.jpg?t=st=1734586480~exp=1734590080~hmac=81de807528ee7e593b7420e1ddb035f563de5bb3afffd350eb4c71e83fdf79bc&w=1380"
            alt="Placeholder Image"
            className="object-contain w-full h-full"
          />
        </div>
        {/* Form Section */}
        <div className="p-8 w-full flex justify-center lg:w-1/2">
          <div className="bg-white p-8 rounded-lg shadow-xl border b max-w-sm w-full">
            <h2 className="text-2xl font-bold text-black text-center mb-6">Sign Up</h2>
            <form>
            <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  className="w-full px-4 py-2 border-2 border-gray-400  focus:border-indigo-500 focus:border-2 focus:outline-none rounded-md shadow-sm text-gray-900"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 border-2 border-gray-400  focus:border-indigo-500 focus:border-2 focus:outline-none rounded-md shadow-sm text-gray-900"
                  required
                />
              </div>
              <div className="mb-2">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  className="w-full px-4 py-2 border-2 border-gray-400  focus:border-indigo-500 focus:border-2 focus:outline-none rounded-md shadow-sm text-gray-900"
                  required
                />
              </div>
              <p className="pb-2">already have an account?<span className="text-indigo-500 font-bold cursor-pointer" onClick={handleSignin}> Sign In</span></p>
              <button
                type="submit"
                className="w-full bg-indigo-700 text-white py-2 rounded-md hover:bg-indigo-800 shadow-md transition"
              >
                Sign up
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
