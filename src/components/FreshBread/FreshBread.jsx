import "./FreshBread.css";

function FreshBread() {
  return (
    <section className="fresh-bread">

      <div className="fresh-left">

        <h5>Fresh baked breads</h5>

        <h2>
          Baked fresh daily by
          <br />
          bakers with passion
        </h2>

        <p>
          Article evident arrived express highest men did boy.
          Mistress sensible entirely am so. Quick can manor
          smart money hopes worth too.
        </p>

        <ul>
          <li>✓ Tasty, fresh bread baked daily</li>
          <li>✓ We bake real, clean-label bread</li>
        </ul>

        <button>VIEW PRODUCTS</button>

      </div>

      <div className="fresh-right">
        <img src="/freshbread.jpg" alt="Fresh Bread" />
      </div>

    </section>
  );
}

export default FreshBread;