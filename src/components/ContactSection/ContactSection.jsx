import "./ContactSection.css";

function ContactSection() {
  return (
    <section className="contact-section">

      <div className="contact-container">

        <div className="newsletter">

          <h2>Sign up for the newsletter</h2>

          <p>
            Want to be the first to know about our news?
            Subscribe to the newsletter to keep abreast of all events.
          </p>

          <div className="newsletter-form">
            <input
              type="email"
              placeholder="Enter a valid email address"
            />
            <button>SUBMIT</button>
          </div>

          <div className="social-icons">
            <span>📘</span>
            <span>🐦</span>
            <span>📸</span>
            <span>📌</span>
          </div>

        </div>

        <div className="location">

          <h2>Hours & Location</h2>

          <p>
            14 E 12th St,<br />
            New York, NY 10007
          </p>

          <p>(123) 456-2253</p>

          <p>
            Monday - Sunday<br />
            7:00am - 8:00pm
          </p>

          <p>Image from Freepik</p>

        </div>

      </div>

    </section>
  );
}

export default ContactSection;