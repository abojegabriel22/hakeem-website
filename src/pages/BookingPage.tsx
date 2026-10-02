import { useState, type FormEvent } from 'react'

const bookingApiUrl = import.meta.env.VITE_BOOKING_API_URL
const enquiryTypes = [
  'Film & television', 'Streaming production', 'Voiceover', 'Speaking & appearances',
  'Brand ambassadorship', 'Commercial endorsement', 'Nigerian production', 'International production', 'Other',
]

export function BookingPage() {
  const [status, setStatus] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const formElement = event.currentTarget
    const formData = new FormData(formElement)
    setStatus('')
    setIsSubmitting(true)

    try {
      const response = await fetch(bookingApiUrl, {
        method: 'POST',
        body: formData,
      })
      let result: { error?: unknown; message?: unknown }
      try {
        result = await response.json()
      } catch {
        throw new Error('The booking service returned an invalid response.')
      }

      if (!response.ok) {
        throw new Error(typeof result.error === 'string' ? result.error : 'We could not send your enquiry. Please try again later.')
      }
      if (typeof result.message !== 'string') {
        throw new Error('The booking service returned an invalid response.')
      }

      formElement.reset()
      setStatus(result.message)
    } catch (error) {
      setStatus(error instanceof Error ? error.message : 'Unable to send your enquiry. Please try again later.')
    } finally {
      setIsSubmitting(false)
    }
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
          <p>Share the essential details below. Your enquiry will be sent directly to Hakeem’s management.</p>
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
          <p className="form-note">Your enquiry and optional PDF, DOC, DOCX, or TXT attachment (up to 8 MB) will be sent to management.</p>
          {status && <p className="form-status" role="status">{status}</p>}
          <button className="button button-primary form-submit" type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Sending…' : 'Send enquiry'} <span aria-hidden="true">↗</span>
          </button>
        </form>
      </section>
    </>
  )
}