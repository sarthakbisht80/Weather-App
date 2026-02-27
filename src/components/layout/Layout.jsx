import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="app-shell">
      <Navbar />
      <div className="container">{children}</div>
    </div>
  );
};

export default Layout;