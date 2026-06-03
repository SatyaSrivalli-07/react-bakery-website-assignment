import "./LandingFeatures.css";
import {
  FaBreadSlice,
  FaTruck,
  FaUniversity,
  FaBoxOpen
} from "react-icons/fa";
import { GiHotMeal } from "react-icons/gi";

function LandingFeatures() {
  const features = [
    {
      icon: <FaBreadSlice />,
      title: "Baked Fresh Daily",
      text: "Our bread is baked fresh daily, contains no preservatives and is very high in quality."
    },
    {
      icon: <GiHotMeal />,
      title: "Great Value",
      text: "With the most competitive prices on the market we are able to deliver great value."
    },
    {
      icon: <FaUniversity />,
      title: "Institutions",
      text: "We serve universities, airlines, hotels and schools with daily fresh products."
    },
    {
      icon: <FaTruck />,
      title: "Delivery To Your Door",
      text: "Fast and reliable delivery service for all bakery products."
    },
    {
      icon: <FaBoxOpen />,
      title: "No Order Too Large",
      text: "Whether small or bulk orders, we can handle them efficiently."
    }
  ];

  return (
    <section className="landing-features">
      <h2>
        We bake fresh, handmade bread,
        pastries and cakes every day
      </h2>

      <div className="features-container">
        {features.map((item, index) => (
          <div className="feature-card" key={index}>
            <div className="feature-icon">
              {item.icon}
            </div>

            <h3>{item.title}</h3>

            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default LandingFeatures;