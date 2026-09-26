import hero from "./assets/hero.jpg";

export function App() {
  return (
    <section className="landing-hero" style={{ "--hero-image": `url(${hero})` }}>
      <div className="landing-copy">
        <p className="eyebrow">Your home, a little greener</p>
        <h1>Paradise Nursery</h1>
        <p>Find a plant to love and make a brighter corner of your home.</p>
        <a className="get-started" href="#shop">Get Started</a>
      </div>
    </section>
  );
}
