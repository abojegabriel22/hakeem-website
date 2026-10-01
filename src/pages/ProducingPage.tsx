export function ProducingPage() {
  return (
    <>
      <section className="page-hero"><div className="container">
        <span className="eyebrow">Beyond the performance</span>
        <h1 className="display-title">Building stories <em>from the ground up.</em></h1>
        <p className="lead">A creative practice that extends into producing, directing and developing stories with an international point of view.</p>
      </div></section>
      <section className="container production-feature">
        <img className="production-art" src="/images/production-still.svg" alt="Cinematic production artwork placeholder" />
        <div>
          <span className="eyebrow">Feature directorial debut</span>
          <h2>It’s the Blackness</h2>
          <p>Hakeem’s completed feature directorial debut, marking a significant new chapter in his work behind the camera.</p>
          <div className="project-note">For production details, current availability and partnership enquiries, contact the management office.</div>
        </div>
      </section>
      <section className="recognition-band">
        <div className="container">
          <span className="eyebrow">In development</span>
          <div className="recognition-grid">
            <div className="recognition-item"><strong>A New Africa</strong><span>A project in Hakeem’s producing and creative slate.</span></div>
            <div className="recognition-item"><strong>Producing</strong><span>Developing stories and screen projects for an international audience.</span></div>
            <div className="recognition-item"><strong>Collaborate</strong><span>For partnership, financing and production enquiries, get in touch.</span></div>
          </div>
          <a className="button button-primary" href="#/booking" style={{ marginTop: 32 }}>Discuss a project <span aria-hidden="true">↗</span></a>
        </div>
      </section>
    </>
  )
}