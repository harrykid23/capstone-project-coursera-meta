import { useState } from "react";
import { Link } from "react-router";

const MenuComponent = ({ setIsOpen }) => {
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
    <ul>
      {menuList.map((item, index) => {
        return (
          <Link
            onClick={() => setIsOpen?.(false)}
            className="nav-item"
            key={index}
            to={item.url}
          >
            {item.title}
          </Link>
        );
      })}
    </ul>
  );
};

const MenuModal = ({ isOpen, setIsOpen }) => {
  return (
    <div
      style={{
        position: "fixed",
        top: "0",
        left: "0",
        width: "100%",
        height: "100vh",
        display: isOpen ? "flex" : "none",
        justifyContent: "center",
        alignItems: "center",
        zIndex: "20",
      }}
    >
      <div
        style={{
          background: "var(--color-1)",
          opacity: ".6",
          width: "100%",
          height: "100%",
          position: "absolute",
          zIndex: "20",
        }}
        onClick={() => setIsOpen(false)}
      ></div>
      <div
        style={{
          width: "80%",
          height: "auto",
          padding: "2rem",
          borderRadius: "var(--container-radius)",
          overflow: "hidden",
          zIndex: "30",
          background: "white",
        }}
      >
        <MenuComponent setIsOpen={setIsOpen} />
      </div>
    </div>
  );
};

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
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
      <div className="desktop-menu-container">
        <MenuComponent />
      </div>
      <div className="mobile-menu-container">
        <img
          style={{ width: "100%", height: "auto", cursor: "pointer" }}
          src={`${process.env.PUBLIC_URL}/icons_assets/icon _hamburger menu.svg`}
          onClick={() => setIsOpen(true)}
        />
        <MenuModal isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </nav>
  );
};

export default Nav;
