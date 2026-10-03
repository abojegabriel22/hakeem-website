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
            <div className="manager-row"><dt>WhatsApp / call</dt><dd><a className="whatsapp-link" href="https://wa.me/2348130178915?text=Hello%2C%20I%E2%80%99m%20contacting%20you%20regarding%20a%20professional%20booking%20enquiry%20for%20Hakeem%20Kae-Kazim.%20Could%20you%20please%20share%20the%20appropriate%20next%20steps%3F" aria-label="Chat with management on WhatsApp at +234 813 017 8915">
              <svg className="whatsapp-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path d="M12 2a9.8 9.8 0 0 0-8.4 14.85L2.3 22l5.3-1.39A10 10 0 1 0 12 2Zm0 18a8 8 0 0 1-4.08-1.12l-.29-.17-3.14.82.84-3.06-.19-.31A8 8 0 1 1 12 20Zm4.39-5.98c-.24-.12-1.43-.71-1.65-.79-.22-.08-.38-.12-.54.12-.16.24-.62.79-.76.95-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.21-1.43-1.35-1.67-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.47-.4-.4-.54-.41h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2 0 1.17.86 2.3.98 2.46.12.16 1.69 2.58 4.09 3.62.57.25 1.02.4 1.37.51.58.18 1.1.15 1.51.09.46-.07 1.43-.58 1.63-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z" />
              </svg>
              <span>Message on WhatsApp</span>
              <span className="whatsapp-arrow" aria-hidden="true">↗</span>
            </a></dd></div>
            <div className="manager-row"><dt>Email</dt><dd><a href="mailto:johnmarkiyoo@gmail.com">johnmarkiyoo@gmail.com</a></dd></div>
            <div className="manager-row"><dt>Instagram</dt><dd><a href="https://www.instagram.com/jm_concept_">@jm_concept_</a></dd></div>
            <div className="manager-row"><dt>Facebook</dt><dd>Johnmark Iyoo</dd></div>
          </dl>
        </div>
      </section>
    </>
  )
}