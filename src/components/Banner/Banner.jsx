import "./Banner.css";

function Banner() {
  return (
    <section className="banner">
      <div className="banner-content">

        <div className="banner-left">
          <h1>
            Delicious Family
            <br/>
            Faves in every
            <br/>
            Loaf
          </h1>
        </div>

        <div className="banner-right">
          <p>
            Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur.
          </p>
          <p className="credit">
  Image by <a href="#">Freepik</a>
</p>

         <button className="banner-btn">LEARN MORE</button>
        </div>

      </div>
    </section>
  );
}

export default Banner;