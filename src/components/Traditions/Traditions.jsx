import "./Traditions.css";

function Traditions() {
  return (
    <section className="traditions">

      <h1>Our Traditions</h1>

      <div className="tradition-item">
        <h2>Freshest baked treats</h2>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit
          esse cillum dolore eu fugiat nulla pariatur.
        </p>
      </div>

      <div className="line"></div>

      <div className="tradition-item">
        <h2>Bread Difference</h2>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit
          esse cillum dolore eu fugiat nulla pariatur.
        </p>
      </div>

      <div className="line"></div>

      <div className="tradition-item">
        <h2>Carefully sourced ingredients</h2>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit
          esse cillum dolore eu fugiat nulla pariatur.
        </p>
      </div>

      <button>VIEW PRODUCTS</button>

    </section>
  );
}

export default Traditions;