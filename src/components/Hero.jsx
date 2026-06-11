import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">

        {/* IMAGE LEFT */}
        <div className="hero-image">
          <img src="/hero.jpg" alt="Bakery" />
        </div>

        {/* CONTENT RIGHT */}
        <div className="hero-text">
          <p className="hero-tag">
            FRESH BREAD & BAKED GOODS
          </p>

          <h1>
            Baked fresh daily by 
            <br/>
            bakers with passion
           
            </h1>

          <p className="contact">
            📍 254 W 27ST ST, NEW YORK, NY 10011
          </p>

          <p className="contact">
            📱 (212) 123-4567
          </p>

          <div className="timings">
            <p>Monday - Wednesday 9am - 7pm</p>
            <p>Thursday - Saturday 9am - 8pm</p>
            <p>Sunday 9am - 6pm</p>
          </div>

          <button>VIEW PRODUCTS</button>

          <p className="credit">
            Image from Freepik
          </p>
        </div>

      </div>
    </section>
  );
}

export default Hero;