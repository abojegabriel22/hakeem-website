import { useState, type FormEvent } from 'react'

const managementEmail = 'johnmarkiyoo@gmail.com'
const enquiryTypes = [
  'Film & television', 'Streaming production', 'Voiceover', 'Speaking & appearances',
  'Brand ambassadorship', 'Commercial endorsement', 'Nigerian production', 'International production', 'Other',
]

export function BookingPage() {
  const [status, setStatus] = useState('')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const attachment = form.get('attachment') as File | null
    const details = [
      `Name: ${form.get('name')}`, `Company / organisation: ${form.get('company')}`,
      `Email: ${form.get('email')}`, `Phone: ${form.get('phone')}`, `Country: ${form.get('country')}`,
      `Enquiry type: ${form.get('type')}`, `Production / brand: ${form.get('production')}`,
      `Proposed role: ${form.get('role')}`, `Proposed dates: ${form.get('dates')}`,
      `Budget / rate: ${form.get('budget')}`, `Project description: ${form.get('description')}`,
      `Message: ${form.get('message')}`,
      attachment?.name ? `Attachment to add to email: ${attachment.name}` : '',
    ].filter(Boolean).join('\n')

    window.location.href = `mailto:${managementEmail}?subject=${encodeURIComponent(`Booking enquiry: ${form.get('production') || form.get('type')}`)}&body=${encodeURIComponent(details)}`
    setStatus('Your email app should open with the enquiry details. Attach your script or proposal before sending.')
  }

  return (
    <>
      <section className="page-hero"><div className="container">
        <span className="eyebrow">Bookings & enquiries</span>
        <h1 className="display-title">Let’s make something <em>matter.</em></h1>
        <p className="lead">For screen, voice, speaking, commercial and international production enquiries, contact Hakeem’s management office.</p>
      </div></section>
      <section className="container booking-layout">
        <aside className="booking-aside">
          <span className="eyebrow">Professional engagements</span>
          <h2>Tell us about your project.</h2>
          <p>Share the essential details below. The form prepares an email to management for you to review and send.</p>
          <ul className="booking-categories">
            {enquiryTypes.slice(0, 8).map((type) => <li key={type}>{type}</li>)}
          </ul>
          <a className="text-link" href="#/management">Contact management directly <span aria-hidden="true">→</span></a>
        </aside>
        <form className="booking-form" onSubmit={handleSubmit}>
          <div className="form-field"><label htmlFor="name">Your name *</label><input id="name" name="name" autoComplete="name" required /></div>
          <div className="form-field"><label htmlFor="company">Company / organisation *</label><input id="company" name="company" autoComplete="organization" required /></div>
          <div className="form-field"><label htmlFor="email">Email *</label><input id="email" name="email" type="email" autoComplete="email" required /></div>
          <div className="form-field"><label htmlFor="phone">Phone</label><input id="phone" name="phone" type="tel" autoComplete="tel" /></div>
          <div className="form-field"><label htmlFor="country">Country</label><input id="country" name="country" autoComplete="country-name" /></div>
          <div className="form-field"><label htmlFor="type">Type of enquiry *</label><select id="type" name="type" defaultValue="" required><option value="" disabled>Select a category</option>{enquiryTypes.map((type) => <option key={type}>{type}</option>)}</select></div>
          <div className="form-field"><label htmlFor="production">Production / brand name</label><input id="production" name="production" /></div>
          <div className="form-field"><label htmlFor="role">Proposed role</label><input id="role" name="role" /></div>
          <div className="form-field"><label htmlFor="dates">Proposed dates</label><input id="dates" name="dates" placeholder="e.g. October–December 2026" /></div>
          <div className="form-field"><label htmlFor="budget">Budget / rate information</label><input id="budget" name="budget" /></div>
          <div className="form-field form-field-wide"><label htmlFor="description">Project description</label><textarea id="description" name="description" rows={3} /></div>
          <div className="form-field form-field-wide"><label htmlFor="message">Message *</label><textarea id="message" name="message" rows={4} required /></div>
          <div className="form-field form-field-wide"><label htmlFor="attachment">Script / proposal attachment</label><input id="attachment" name="attachment" type="file" accept=".pdf,.doc,.docx,.txt" /></div>
          <p className="form-note">This form opens your email app; it does not upload or store information. Attachments need to be added to the email after it opens.</p>
          {status && <p className="form-status" role="status">{status}</p>}
          <button className="button button-primary form-submit" type="submit">Prepare enquiry <span aria-hidden="true">↗</span></button>
        </form>
      </section>
    </>
  )
}