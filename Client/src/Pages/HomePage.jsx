import { useState } from "react";
import "../App.css";
import Signin from "../Components/Signin";
import Signup from "../Components/Signup";

export function Homepage() {
    const [signin , setSignin] = useState(false)
    const [signup , setSignup] = useState(false)
   
    function signincontrol () {
        setSignin(true)
        setSignup(false)
    }
        function signupcontrol () {
        setSignup(true)
        setSignin(false)
    }
    function closeAuth() {
        setSignin(false)
        setSignup(false)
    }
    
  return (
    <>
    <main className="giglu-page" >
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Giglu home">
          giglu<span>.</span>
        </a>
        <nav className="main-nav" aria-label="Main navigation">
          <a href="#services">Explore services</a>
          <a href="#how-it-works">How it works</a>
        </nav>
        <div className="header-actions">
          <button onClick={signincontrol} className="button button-text">Sign in</button>
          <button onClick={signupcontrol} className="button button-dark button-small">
            Join Giglu <span aria-hidden="true">↗</span>
          </button>
        </div>
      </header>

      <section className="hero-section" id="home">
        <div className="hero-copy">
          <div className="eyebrow"><span className="live-dot" /> GOOD PEOPLE. CLOSE BY.</div>
          <h1>
            Your neighborhood
            <br />
            is full of <span>help.</span>
          </h1>
          <p className="hero-description">
            Find a helping hand or a rewarding gig right around the corner. Giglu brings
            your local community a little closer.
          </p>
          <div className="search-bar">
            <label className="search-icon" htmlFor="service-search" aria-hidden="true">⌕</label>
            <input
              id="service-search"
              placeholder="What can we help with?"
              aria-label="Search local services"
            />
            <button type="button" aria-label="Search services">Find a gig <span aria-hidden="true">→</span></button>
          </div>
          <div className="hero-footnote">
            <span className="avatar-stack" aria-hidden="true">
              <i>J</i><i>M</i><i>A</i><i>+</i>
            </span>
            <span><strong>Good things happen locally.</strong><br />Join neighbors making it happen.</span>
          </div>
        </div>

        <div className="hero-visual" aria-label="A preview of local gigs in your neighborhood">
          <div className="visual-sun" />
          <div className="visual-label"><span className="live-dot" /> HAPPENING NEAR YOU</div>
          <div className="map-lines map-lines-one" />
          <div className="map-lines map-lines-two" />
          <div className="map-pin pin-one"><span>🪴</span></div>
          <div className="map-pin pin-two"><span>🛠️</span></div>
          <div className="map-pin pin-three"><span>🐕</span></div>
          <div className="map-pin pin-four"><span>📦</span></div>
          <div className="neighborhood-card">
            <div className="neighborhood-icon">⌖</div>
            <div><span className="card-kicker">YOUR NEIGHBORHOOD</span><strong>Good help is close.</strong></div>
            <span className="card-arrow">↗</span>
          </div>
          <div className="gig-note">
            <span className="gig-note-icon">✦</span>
            <div><strong>Garden help needed</strong><small>0.4 miles away · Today</small></div>
            <span className="note-avatar">S</span>
          </div>
          <div className="visual-caption"><span>01 — 06</span><span>LOCAL GIGS, REAL CONNECTIONS</span></div>
        </div>
      </section>

      <section className="trust-strip" aria-label="Giglu benefits">
        <p>BIG HELP, FROM YOUR LITTLE CORNER OF THE WORLD.</p>
        <div><span>✳</span> Nearby by nature</div>
        <div><span>♡</span> Community first</div>
        <div><span>↗</span> Work on your terms</div>
      </section>

      <section className="services-section" id="services">
        <div className="section-heading">
          <div>
            <div className="eyebrow">A GOOD PLACE TO START</div>
            <h2>What do you need <span>done?</span></h2>
          </div>
          <p>Little jobs, big relief. Find your kind of help from people nearby.</p>
        </div>
        <div className="category-grid">
          <button className="category-card">
            <span className="category-icon category-icon-0">🧹</span>
            <span className="category-title">Home cleaning</span>
            <span className="category-detail">A fresh start, just around the corner</span>
            <span className="category-arrow" aria-hidden="true">↗</span>
          </button>
          <button className="category-card">
            <span className="category-icon category-icon-1">🔧</span>
            <span className="category-title">Repairs</span>
            <span className="category-detail">Small fixes, skilled hands</span>
            <span className="category-arrow" aria-hidden="true">↗</span>
          </button>
          <button className="category-card">
            <span className="category-icon category-icon-2">📦</span>
            <span className="category-title">Moving help</span>
            <span className="category-detail">Make your next move easier</span>
            <span className="category-arrow" aria-hidden="true">↗</span>
          </button>
          <button className="category-card">
            <span className="category-icon category-icon-0">🐾</span>
            <span className="category-title">Pet care</span>
            <span className="category-detail">Local love for your best friend</span>
            <span className="category-arrow" aria-hidden="true">↗</span>
          </button>
          <button className="category-card">
            <span className="category-icon category-icon-1">🛒</span>
            <span className="category-title">Errands</span>
            <span className="category-detail">Get your to-do list off your plate</span>
            <span className="category-arrow" aria-hidden="true">↗</span>
          </button>
          <button className="category-card">
            <span className="category-icon category-icon-2">🌱</span>
            <span className="category-title">Garden care</span>
            <span className="category-detail">A little help to grow</span>
            <span className="category-arrow" aria-hidden="true">↗</span>
          </button>
        </div>
        <div className="services-footer">
          <span>Have a skill to share? Your next gig could be just down the street.</span>
          <button className="button button-outline">Earn with Giglu <span aria-hidden="true">↗</span></button>
        </div>
      </section>

      <section className="how-section" id="how-it-works">
        <div className="how-intro">
          <div className="eyebrow">NEARBY MAKES IT BETTER</div>
          <h2>Simple as<br />neighbor to neighbor.</h2>
          <p>Skip the endless searching. Get the help you need and give local talent a chance to shine.</p>
          <button className="button button-dark">Get started <span aria-hidden="true">↗</span></button>
        </div>
        <div className="steps-list">
          <article className="step-card">
            <span className="step-number">01</span>
            <div><h3>Tell us what you need</h3><p>Pick a service and add your neighborhood.</p></div>
            <span className="step-mark" aria-hidden="true">↗</span>
          </article>
          <article className="step-card">
            <span className="step-number">02</span>
            <div><h3>Meet your local match</h3><p>Find trusted people who are already nearby.</p></div>
            <span className="step-mark" aria-hidden="true">↗</span>
          </article>
          <article className="step-card">
            <span className="step-number">03</span>
            <div><h3>Get it done</h3><p>Agree on the details and get back to your day.</p></div>
            <span className="step-mark" aria-hidden="true">↗</span>
          </article>
        </div>
      </section>

      <section className="closing-cta">
        <div className="closing-mark" aria-hidden="true">✳</div>
        <div><div className="eyebrow">IT STARTS RIGHT HERE</div><h2>Your people are closer than you think.</h2></div>
        <button className="button button-lime">Find your Giglu <span aria-hidden="true">↗</span></button>
      </section>

      <footer className="site-footer">
        <a className="brand" href="#home">giglu<span>.</span></a>
        <p>Good work. Good neighbors. Good things happen.</p>
        <span>© 2026 Giglu. Made for the neighborhood.</span>
      </footer>
    </main>

    {(signin || signup) && (
      <div className="auth-overlay" onClick={closeAuth}>
        <section
          className="auth-dialog"
          role="dialog"
          aria-modal="true"
          onClick={(event) => event.stopPropagation()}
        >
          <button className="auth-close" onClick={closeAuth} aria-label="Close dialog">
            ×
          </button>
          {signin ? (
            <Signin onCreateAccount={signupcontrol} />
          ) : (
            <Signup onSwitch={signincontrol} />
          )}
        </section>
      </div>
    )}
    
    </>
  );
}
