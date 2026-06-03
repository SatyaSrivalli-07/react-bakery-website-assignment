import "./Features.css";

function Features() {
  return (
    <section className="features">

      <div className="features-bg"></div>

      <div className="cards">

        <div className="card">
          <h1>01</h1>
          <h3>Bread</h3>
          <p>
            Freshly baked bread made daily using premium ingredients and
            traditional recipes.
          </p>
        </div>

        <div className="card">
          <h1>02</h1>
          <h3>Baguette</h3>
          <p>
            Crispy outside and soft inside, perfect for sandwiches and meals.
          </p>
        </div>

        <div className="card">
          <h1>03</h1>
          <h3>Mini Pizza</h3>
          <p>
            Delicious mini pizzas baked fresh with quality toppings.
          </p>
        </div>

        <div className="card">
          <h1>04</h1>
          <h3>Scone</h3>
          <p>
            Soft and buttery scones that pair perfectly with tea or coffee.
          </p>
        </div>

      </div>

    </section>
  );
}

export default Features;