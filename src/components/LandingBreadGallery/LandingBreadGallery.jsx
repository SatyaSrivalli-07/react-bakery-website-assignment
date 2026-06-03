import "./LandingBreadGallery.css";

function LandingBreadGallery() {
  return (
    <section className="landing-bread-gallery">

      <h2>Our Bread</h2>

      <p className="gallery-subtitle">
        A values-driven bakery
      </p>

      <div className="gallery-container">

        <img src="/bread-gallery1.jpg" alt="Bread" />
        <img src="/bread-gallery2.jpg" alt="Bread" />
        <img src="/bread-gallery3.jpg" alt="Bread" />
        <img src="/bread-gallery4.jpg" alt="Bread" />

      </div>

    </section>
  );
}

export default LandingBreadGallery;