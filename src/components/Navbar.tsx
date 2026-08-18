interface NavbarProps {
  totalCounters: number;
}

const Navbar = ({ totalCounters }: NavbarProps) => {
  return (
    <div>
      <nav className="navbar navbar-light bg-light shadow-sm">
        <div className="container-fluid">
          <a className="navbar-brand fw-bold" href="#">
            Navbar
            <span className="badge bg-primary rounded-pill ms-2">
              {totalCounters}
            </span>
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
