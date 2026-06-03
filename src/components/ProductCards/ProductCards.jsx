import "./ProductCards.css";

function ProductCards() {
  return (
    <section className="product-cards">
      <div className="cards-container">

        <div className="card">
          <img src="/bread-card.jpg" alt="Breads" />
          <h3>Breads</h3>
          <p>
            Sample text. Click to select the text box.
            Click again or double click to start editing
            the text.
          </p>
        </div>

        <div className="card">
          <img src="/cookies-card.jpg" alt="Cookies" />
          <h3>Cookies</h3>
          <p>
            Sample text. Click to select the text box.
            Click again or double click to start editing
            the text.
          </p>
        </div>

        <div className="card">
          <img src="/pastries-card.jpg" alt="Pastries" />
          <h3>Pastries</h3>
          <p>
            Sample text. Click to select the text box.
            Click again or double click to start editing
            the text.
          </p>
        </div>

      </div>
    </section>
  );
}

export default ProductCards;