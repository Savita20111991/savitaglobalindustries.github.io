export default function Home() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "40px" }}>
      <header style={{ marginBottom: "40px" }}>
        <h1>Savita Global Industries</h1>
        <p>
          Manufacturer & Exporter of Quality Industrial Components from India
        </p>
      </header>

      <section>
        <h2>About Us</h2>
        <p>
          Savita Global Industries is an export-oriented company specializing in
          high-quality industrial products. We serve international markets with
          strict quality control and timely delivery.
        </p>
      </section>

      <section>
        <h2>Our Products</h2>
        <ul>
          <li>Brass Components</li>
          <li>Precision Industrial Parts</li>
          <li>Custom Manufactured Items</li>
        </ul>
      </section>

      <section>
        <h2>Export Markets</h2>
        <p>
          USA, Europe, Middle East, South East Asia and other global destinations.
        </p>
      </section>

      <section>
        <h2>Quality Assurance</h2>
        <p>
          Our products meet international standards with multi-level quality
          checks and inspection.
        </p>
      </section>

      <section>
        <h2>Contact Us</h2>
        <p>Email: info@savitaglobalindustries.com</p>
        <p>Phone: +91-XXXXXXXXXX</p>
      </section>

      <footer style={{ marginTop: "40px" }}>
        <p>© {new Date().getFullYear()} Savita Global Industries</p>
      </footer>
    </div>
  );
}
