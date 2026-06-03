import "./OurBread.css";

function OurBread() {

 const breads = [
  {
    name: "White Bread",
    price: "$3.50",
    image: "/bread1.jpg"
  },
  {
    name: "Farming Bread",
    price: "$2.50",
    image: "/bread2.jpg"
  },
  {
    name: "Loaf Bread",
    price: "$5.50",
    image: "/bread3.jpg"
  },
  {
    name: "Sourdough",
    price: "$4.50",
    image: "/bread4.jpg"
  },
  {
    name: "Olive Bread",
    price: "$7.00",
    image: "/bread5.jpg"
  },
  {
    name: "Whole Grain",
    price: "$5.00",
    image: "/bread6.jpg"
  }
];

  return (
    <section className="ourbread">

      <h1>Our Bread</h1>

      <div className="bread-container">

        {breads.map((bread, index) => (
          <div className="bread-card" key={index}>

            <img
  src={bread.image}
  alt={bread.name}
  className="bread-image"
/>

            <h3>{bread.name}</h3>

            <p>{bread.price}</p>

          </div>
        ))}

      </div>

    </section>
  );
}

export default OurBread;