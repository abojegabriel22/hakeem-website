export function HomePage() {
  return (
    <>
      <section className="home-hero">
        <img className="hero-art" src="/images/hakeem-hero.png" alt="Hakeem Kae-Kazim" />
        <div className="home-copy">
          <span className="eyebrow">A career without borders</span>
          <h1 className="home-title"><span>Hakeem</span><em>Kae-Kazim</em></h1>
          <p className="role-line">Actor · Producer · Director</p>
          <p className="hero-description">A career spanning international film, television, theatre and voice work.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#/booking">Book Hakeem <span aria-hidden="true">↗</span></a>
            <a className="button" href="#/credits">Explore credits <span aria-hidden="true">→</span></a>
          </div>
        </div>
        <span className="hero-index">London · Lagos · Worldwide</span>
      </section>

      <section className="credit-ribbon" aria-label="Selected credits">
        <span className="ribbon-label">Selected screen credits</span>
        <div className="ribbon-titles">
          <span>Hotel Rwanda</span><span>24</span><span>Black Sails</span><span>Godzilla vs. Kong</span><span>Aníkúlápó</span>
        </div>
      </section>

      <section className="container home-intro">
        <div>
          <span className="eyebrow">The work</span>
          <h2 className="display-title">Stories that travel <em>across worlds.</em></h2>
        </div>
        <div className="home-intro-copy">
          <p>Hakeem Kae-Kazim is a British-Nigerian actor, producer and director whose work moves between international cinema, television, theatre and voice performance.</p>
          <p>From landmark screen productions to new work behind the camera, his career brings together a distinct presence and a wide-ranging creative practice.</p>
          <a className="text-link" href="#/about">Discover Hakeem <span aria-hidden="true">→</span></a>
        </div>
      </section>

      <section className="recognition-band">
        <div className="container">
          <span className="eyebrow">Recognition</span>
          <div className="recognition-grid">
            <div className="recognition-item"><strong>SAFTA Golden Horn</strong><span>Best Supporting Actor · <em>Riding with Sugar</em></span></div>
            <div className="recognition-item"><strong>MEI International Film Festival</strong><span>Best Actor · <em>Masinga: The Calling</em></span></div>
            <div className="recognition-item"><strong>International recognition</strong><span>Africa Movie Academy Awards and Gemini Awards nominations</span></div>
          </div>
        </div>
      </section>
    </>
  )
}