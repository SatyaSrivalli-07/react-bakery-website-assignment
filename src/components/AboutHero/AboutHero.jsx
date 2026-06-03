import "./AboutHero.css";

function AboutHero() {
  return (
    <section className="about-hero">

      <div className="about-overlay">

        <div className="about-logo">
          <img src="/bakery-logo.png" alt="Bakery Logo" />
        </div>

        <h1>
          We make homemade breads
          <br />
          and cakes
        </h1>

        <p>
          Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit.
        </p>

        <div className="about-buttons">

          <button className="about-btn">
            ABOUT US
          </button>

          <button className="products-btn">
            ALL PRODUCTS
          </button>

        </div>

      </div>

    </section>
  );
}

export default AboutHero;