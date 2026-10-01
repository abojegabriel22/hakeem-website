export function ManagementPage() {
  return (
    <>
      <section className="page-hero"><div className="container">
        <span className="eyebrow">Official management</span>
        <h1 className="display-title">The right conversation <em>starts here.</em></h1>
        <p className="lead">Business, commercial and professional engagement enquiries are directed through the management office.</p>
      </div></section>
      <section className="container management-layout">
        <div>
          <span className="eyebrow">Talent & commercial representation</span>
          <h2>Hakeem Kae-Kazim</h2>
          <p>For booking, commercial proposals, contract negotiations and media enquiries, please contact the management office using the details on this page.</p>
          <a className="button button-primary" href="#/booking">Send a booking enquiry <span aria-hidden="true">↗</span></a>
          <div className="representation-note">Management and representation wording is supplied for this website and should be published only once authorization has been confirmed by Hakeem or his authorized representative.</div>
        </div>
        <div>
          <dl className="manager-details">
            <div className="manager-row"><dt>Business manager</dt><dd>Johnmark Iyoo</dd></div>
            <div className="manager-row"><dt>WhatsApp / call</dt><dd><a href="https://wa.me/2348130178915">+234 813 017 8915</a></dd></div>
            <div className="manager-row"><dt>Email</dt><dd><a href="mailto:johnmarkiyoo@gmail.com">johnmarkiyoo@gmail.com</a></dd></div>
            <div className="manager-row"><dt>Instagram</dt><dd><a href="https://www.instagram.com/jm_concept_">@jm_concept_</a></dd></div>
            <div className="manager-row"><dt>Facebook</dt><dd>Johnmark Iyoo</dd></div>
          </dl>
        </div>
      </section>
    </>
  )
}