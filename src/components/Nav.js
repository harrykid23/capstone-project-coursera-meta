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
      <div style={{ width: "25%", maxWidth: "200px" }}>
        <img
          style={{ width: "100%", height: "auto", objectFit: "cover" }}
          src={`${process.env.PUBLIC_URL}/icons_assets/Logo.svg`}
        />
      </div>
      <ul>
        {menuList.map((item, index) => {
          return (
            <a key={index} href={item.url}>
              {item.title}
            </a>
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
