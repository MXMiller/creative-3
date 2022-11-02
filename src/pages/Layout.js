import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
    <nav class="navbar navbar-expand-sm bg-light">
      <div class="container-fluid" id="menu">
        <ul class="navbar-nav">
          <li class="nav-item">
            <Link class="nav-link" to="/">Home</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/s3">Life in the Multiverse</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/s1">Dimensions 2, 3, and Onward</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/s2">Little SCP-507 Lost</Link>
          </li>
        </ul>
      </div>
    </nav>

    <Outlet />
    </>
  );
};

export default Layout;