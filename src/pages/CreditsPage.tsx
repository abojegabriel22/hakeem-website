const sections = [
  { title: 'Film', credits: [
    ['Hotel Rwanda', 'Feature film'], ['Troy', 'Feature film'], ['Pirates of the Caribbean', 'Feature film'],
    ['X-Men Origins: Wolverine', 'Feature film'], ['Godzilla vs. Kong', 'Feature film'], ['Riding with Sugar', 'Feature film'],
    ['Masinga: The Calling', 'Feature film'], ['Aníkúlápó', 'Feature film'],
  ] },
  { title: 'Television & Streaming', credits: [
    ['24', 'Television'], ['Black Sails', 'Television'], ['Troy: Fall of a City', 'Television'],
  ] },
  { title: 'Theatre', credits: [
    ['Royal Shakespeare Company', 'Theatre'], ['National Theatre', 'Theatre'],
  ] },
  { title: 'Voice', credits: [
    ['Voice performance', 'Animation · Games · Narration'],
  ] },
]

export function CreditsPage() {
  return (
    <>
      <section className="page-hero"><div className="container">
        <span className="eyebrow">Selected work</span>
        <h1 className="display-title">Screen, stage <em>& sound.</em></h1>
        <p className="lead">A selection of film, television, theatre and voice credits. For a complete professional CV, contact management.</p>
      </div></section>
      <div className="container">
        {sections.map((section) => <section className="credits-section" key={section.title}>
          <h2>{section.title}</h2>
          <div className="credit-list">
            {section.credits.map(([title, type]) => <div className="credit-row" key={title}><strong>{title}</strong><span>{type}</span></div>)}
          </div>
        </section>)}
      </div>
      <section className="container content-section">
        <span className="eyebrow">Awards & recognition</span>
        <div className="recognition-grid">
          <div className="recognition-item"><strong>SAFTA Golden Horn</strong><span>Best Supporting Actor · <em>Riding with Sugar</em></span></div>
          <div className="recognition-item"><strong>MEI International Film Festival</strong><span>Best Actor · <em>Masinga: The Calling</em></span></div>
          <div className="recognition-item"><strong>Awards nominations</strong><span>Africa Movie Academy Awards · Gemini Awards</span></div>
        </div>
      </section>
    </>
  )
}