import "./AboutInfo.css";

function AboutInfo() {
  return (
    <section className="about-info">

      <div className="info-card">

        <img src="/story.jpg" alt="Our Story" />

        <h3>OUR STORY</h3>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>

        <a href="/">LEARN MORE</a>

      </div>

      <div className="info-card">

        <img src="/ourbread-about.jpg" alt="Our Bread" />

        <h3>OUR BREAD</h3>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>

        <a href="/">LEARN MORE</a>

      </div>

    </section>
  );
}

export default AboutInfo;