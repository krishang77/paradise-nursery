```jsx
import hero from "./assets/hero.jpg";

export function App() {
  const handleGetStarted = () => {
    const shopSection = document.getElementById("shop");

    if (shopSection) {
      shopSection.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.hash = "shop";
    }
  };

  return (
    <main className="landing-page">
      <section
        className="landing-hero"
        style={{ "--hero-image": `url(${hero})` }}
      >
        <div className="landing-copy">
          <p className="eyebrow">Welcome to Paradise Nursery</p>

          <h1>Paradise Nursery</h1>

          <p>
            Bring nature home with beautiful, healthy houseplants
            carefully selected to brighten every corner of your space.
          </p>

          <button
            type="button"
            className="get-started"
            onClick={handleGetStarted}
          >
            Get Started
          </button>
        </div>
      </section>

      <section id="about" className="landing-info">
        <div>
          <p className="eyebrow">Grow something beautiful</p>

          <h2>Your home deserves a little more green.</h2>

          <p>
            Paradise Nursery makes it simple to discover and shop
            houseplants for every kind of space. Explore our collection,
            choose your favorites, and bring a little piece of nature home.
          </p>
        </div>
      </section>
    </main>
  );
}

export default App;
```
