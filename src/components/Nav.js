import { Link } from "react-router";

const Nav = () => {
  const menuList = [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "About",
      url: "/about",
    },
    {
      title: "Menu",
      url: "/menu",
    },
    {
      title: "Reservations",
      url: "/reservations",
    },
    {
      title: "Order Online",
      url: "/order-online",
    },
    {
      title: "Login",
      url: "/login",
    },
  ];
  return (
    <nav>
      <Link
        to="/"
        style={{ width: "25%", minWidth: "130px", maxWidth: "200px" }}
      >
        <img
          style={{ width: "100%", height: "auto", objectFit: "cover" }}
          src={`${process.env.PUBLIC_URL}/icons_assets/Logo.svg`}
        />
      </Link>
      <ul>
        {menuList.map((item, index) => {
          return (
            <Link className="nav-item" key={index} to={item.url}>
              {item.title}
            </Link>
          );
        })}
      </ul>
      <div className="mobile-menu-container">
        <img
          style={{ width: "100%", height: "auto" }}
          src={`${process.env.PUBLIC_URL}/icons_assets/icon _hamburger menu.svg`}
        />
      </div>
    </nav>
  );
};

export default Nav;
