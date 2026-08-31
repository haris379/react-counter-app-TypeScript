import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const userId = localStorage.getItem("userId");
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    navigate("/");
  };

  return (
    <nav className="bg-gray-100 shadow-sm">
      <div className="w-full px-4 py-3 flex justify-between items-center">
        <Link
          to="/"
          className="flex items-center text-xl font-bold text-gray-800"
        >
          Counter App
        </Link>

        {userId ? (
          <button
            onClick={logout}
            className="btn-primary text-sm py-2 px-4"
          >
            Logout
          </button>
        ) : (
          <div className="flex gap-2">
            <Link
              to="/signup"
              className="btn-primary text-sm py-2 px-4"
            >
              Sign up
            </Link>

            <Link
              to="/login"
              className="btn-primary text-sm py-2 px-4"
            >
              Login
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;