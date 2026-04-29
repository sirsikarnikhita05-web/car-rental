import { NavLink } from "react-router-dom";

const linkClass =
  "px-4 py-2 transition duration-300 hover:text-secondary hover:bg-primary rounded";

export default function Navbar() {
  return (
    <nav className="bg-primary text-white flex justify-between p-4">
      <h1 className="text-xl font-bold">CarRental</h1>

      <div className="flex gap-4">
        {["/", "/fleet", "/offers", "/faq", "/contact"].map((path, i) => (
          <NavLink
            key={i}
            to={path}
            className={({ isActive }) =>
              `${linkClass} ${isActive ? "bg-secondary text-primary" : ""}`
            
            }
          >
            {path === "/" ? "Home" : path.replace("/", "")}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
src/components/Navbar.jsx

