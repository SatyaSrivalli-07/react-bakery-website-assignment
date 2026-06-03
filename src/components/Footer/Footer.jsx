import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-logo">
        <h1>BAKERY</h1>
        <p>SINCE 2018</p>
      </div>

      <div className="footer-content">

        <div>
          <h3>Quick Links</h3>
          <p>About Us</p>
          <p>Bakery Menu</p>
          <p>Visit Us</p>
          <p>Testimonials</p>
        </div>

        <div>
          <h3>Help</h3>
          <p>FAQs</p>
          <p>Allergens</p>
          <p>Contact Us</p>
          <p>Have Your Say</p>
        </div>

        <div>
          <h3>Get In Touch</h3>
          <p>📍 14 E 12th St, New York</p>
          <p>✉ hi@bakery.com</p>
          <p>📞 +1 (234) 567-8910</p>
        </div>

        <div>
          <h3>Subscribe</h3>

          <input
            type="email"
            placeholder="Enter valid email address"
          />

          <button>SEND A MESSAGE</button>
        </div>

      </div>

      <p className="footer-credit">
        Images from Freepik
      </p>

    </footer>
  );
}

export default Footer;