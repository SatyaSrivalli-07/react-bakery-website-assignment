import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <p>FRESH BREAD & BAKED GOODS</p>

        <h1>Baked fresh daily</h1>

        <p>254 W 27ST ST, NEW YORK, NY 10011</p>
        <p>(212) 123-4567</p>
        <p>Monday - Wednesday 9am - 7pm</p>
        <p>Thursday - Saturday 9am - 8pm</p>
        <p>Sunday 9am - 6pm</p>

        <button>VIEW PRODUCTS</button>
      </div>

      <div className="hero-image">
        <img
          src="https://images.unsplash.com/photo-1509440159596-0249088772ff"
          alt="bread"
        />
      </div>
    </section>
  );
}

export default Hero;