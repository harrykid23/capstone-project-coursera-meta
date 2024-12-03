import { Link } from "react-router";

const Footer = () => {
  const footerColumnList = [
    {
      title: "Doormat Navigation",
      urlList: [
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
      ],
    },
    {
      title: "Contact",
      urlList: [
        {
          title: "Address",
          url: "https://maps.google.com/",
        },
        {
          title: "Phone Number",
          url: "https://wa.me/62123123123",
        },
        {
          title: "Email",
          url: "mailto:little.lemon@mail.com",
        },
      ],
    },
    {
      title: "Social Media Links",
      urlList: [
        {
          title: "Instagram",
          url: "https://instagram.com/little.lemon",
        },
        {
          title: "TikTok",
          url: "https://tiktok.com/@little.lemon",
        },
      ],
    },
  ];
  return (
    <footer>
      <div>
        <img
          style={{
            width: "100%",
            height: "auto",
            objectFit: "contain",
            mixBlendMode: "multiply",
          }}
          src={`${process.env.PUBLIC_URL}/icons_assets/logo_portrait.png`}
        />
      </div>
      {footerColumnList.map((item, index) => {
        return (
          <div
            key={index}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "2rem",
              alignItems: "flex-start",
            }}
          >
            <h4 style={{ fontWeight: "bold", margin: "0" }}>{item.title}</h4>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                alignItems: "flex-start",
              }}
            >
              {item.urlList.map((item2, index2) => {
                if (item2.url[0] === "/") {
                  return (
                    <Link key={index2} to={item2.url}>
                      <span>{item2.title}</span>
                    </Link>
                  );
                } else {
                  return (
                    <a key={index2} href={item2.url}>
                      <span>{item2.title}</span>
                    </a>
                  );
                }
              })}
            </div>
          </div>
        );
      })}
    </footer>
  );
};

export default Footer;
