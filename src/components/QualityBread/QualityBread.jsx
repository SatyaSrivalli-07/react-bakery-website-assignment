import "./QualityBread.css";

function QualityBread() {
  return (
    <section className="quality-bread">

      <div className="top-row">

        <div className="bread-card">
          <img src="/baker1.jpg" alt="Bread" />

          <p>
            Tincidunt praesent semper feugiat nibh sed pulvinar
            proin gravida. Orci ac auctor augue mauris augue
            neque. Nunc lobortis mattis aliquam faucibus purus
            in massa. Porta lorem mollis aliquam ut porttitor leo.
          </p>
        </div>

        <div className="quality-heading">
          <h2>
            Quality Breads are
            <br />
            baked daily
          </h2>
        </div>

      </div>

      <div className="bottom-row">

        <div className="bread-card">
          <img src="/baker3.jpg" alt="Fresh Bread" />

          <p>
            Tincidunt praesent semper feugiat nibh sed pulvinar
            proin gravida. Orci ac auctor augue mauris augue
            neque. Nunc lobortis mattis aliquam faucibus purus
            in massa. Porta lorem mollis aliquam ut porttitor leo.
          </p>
        </div>

        <div className="bread-card">
          <img src="/baker2.jpg" alt="Baker" />

          <p>
            Tincidunt praesent semper feugiat nibh sed pulvinar
            proin gravida. Orci ac auctor augue mauris augue
            neque. Nunc lobortis mattis aliquam faucibus purus
            in massa. Porta lorem mollis aliquam ut porttitor leo.
          </p>

          <button className="bread-btn">
            VIEW PRODUCTS
          </button>
        </div>

      </div>

    </section>
  );
}

export default QualityBread;