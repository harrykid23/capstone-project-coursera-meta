import { Link } from "react-router";

const HomePage = () => {
  const mealList = [
    {
      id: "1",
      title: "Greek salad",
      price: 12.99,
      description:
        "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. The famous greek salad of crispy lettuce, peppers, olives and our Chicago style.",
      image_url: `${process.env.PUBLIC_URL}/icons_assets/greek salad.jpg`,
    },
    {
      id: "2",
      title: "Bruchetta",
      price: 5.99,
      description:
        "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
      image_url: `${process.env.PUBLIC_URL}/icons_assets/bruchetta.svg`,
    },
    {
      id: "3",
      title: "Lemon Dessert",
      price: 5.0,
      description:
        "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
      image_url: `${process.env.PUBLIC_URL}/icons_assets/lemon dessert.jpg`,
    },
    {
      id: "4",
      title: "Greek salad 2",
      price: 12.99,
      description:
        "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
      image_url: `${process.env.PUBLIC_URL}/icons_assets/greek salad.jpg`,
    },
    {
      id: "5",
      title: "Bruchetta 2",
      price: 5.99,
      description:
        "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
      image_url: `${process.env.PUBLIC_URL}/icons_assets/bruchetta.svg`,
    },
    {
      id: "6",
      title: "Lemon Dessert 2",
      price: 5.0,
      description:
        "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
      image_url: `${process.env.PUBLIC_URL}/icons_assets/lemon dessert.jpg`,
    },
  ];
  return (
    <>
      <section id="section-hero">
        <div
          className="section-hero-col"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            gap: "3rem",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "inherit",
              alignItems: "inherit",
              width: "100%",
              gap: ".2rem",
            }}
          >
            <h1 className="font-markazi" style={{ color: "var(--color-2)" }}>
              Little Lemon
            </h1>
            <h2
              className="font-markazi"
              style={{
                color: "white",
                fontWeight: "normal",
                marginBottom: "1rem",
              }}
            >
              Chicago
            </h2>
            <p style={{ color: "white" }}>
              We are a family owned Mediterranean restaurant, focused on
              traditional recipes served with a modern twist.
            </p>
          </div>
          <Link className="button" to="/reservations" aria-label="On Click">
            Reserve a Table
          </Link>
        </div>
        <div
          className="section-hero-col"
          style={{
            position: "relative",
            zIndex: "10",
          }}
        >
          <img
            style={{
              position: "absolute",
              width: "60%",
              minWidth: "200px",
              maxWidth: "400px",
              aspectRatio: "1/1",
              objectFit: "cover",
              objectPosition: "center",
              borderRadius: "var(--container-radius)",
              left: "50%",
              transform: "translateX(-50%)",
              zIndex: "10",
            }}
            src={`${process.env.PUBLIC_URL}/icons_assets/restauranfood.jpg`}
          />
        </div>
      </section>

      <section style={{ flexDirection: "column" }}>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h2 className="font-markazi">This weeks specials!</h2>
          <Link to="/menu" className="button" aria-label="On Click">
            Online Menu
          </Link>
        </div>
        <div id="meals-container" style={{ paddingBottom: "2rem" }}>
          {mealList.map((item) => {
            return (
              <article
                key={item.id}
                className="article-card"
                style={{
                  display: "flex",
                  padding: "0px",
                  gap: "0px",
                  flexDirection: "column",
                  width: "300px",
                  flex: "0 0 auto",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    borderTopLeftRadius: "var(--container-radius)",
                    borderTopRightRadius: "var(--container-radius)",
                    overflow: "hidden",
                    aspectRatio: "1/1",
                  }}
                >
                  <img
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "center",
                    }}
                    src={item.image_url}
                  />
                </div>

                <div
                  className="article-card-description"
                  style={{
                    width: "100%",
                    borderBottomLeftRadius: "var(--container-radius)",
                    borderBottomRightRadius: "var(--container-radius)",
                    overflow: "hidden",
                    padding: "2rem",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    gap: "2rem",
                    flex: "1",
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <h4>{item.title}</h4>
                    <h4 style={{ color: "var(--color-4)" }}>${item.price}</h4>
                  </div>
                  <p>{item.description}</p>
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "center",
                      gap: ".5rem",
                    }}
                  >
                    <h4>Order a delivery</h4>
                    <img
                      style={{
                        height: "30px",
                        width: "auto",
                        objectFit: "contain",
                        marginBottom: "2px",
                      }}
                      src={`${process.env.PUBLIC_URL}/icons_assets/bike.png`}
                    />
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default HomePage;
