import UnitToggle from "../UnitToggle";
import SearchBar from "../SearchBar";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2 className="logo">Weather Analytics</h2>

      <div className="nav-right">
        <SearchBar />
        <UnitToggle />
      </div>
    </nav>
  );
};

export default Navbar;