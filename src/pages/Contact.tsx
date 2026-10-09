import { useState, type FormEvent } from 'react'
import { Seo } from '@/components/seo/Seo'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { products } from '@/config/products'

type FormState = {
  name: string
  email: string
  subject: string
  message: string
}

type FieldErrors = Partial<Record<keyof FormState, string>>

const initial: FormState = {
  name: '',
  email: '',
  subject: '',
  message: '',
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

export function Contact() {
  const [form, setForm] = useState<FormState>(initial)
  const [errors, setErrors] = useState<FieldErrors>({})
  const [status, setStatus] = useState<'idle' | 'loading' | 'ready' | 'error'>('idle')
  const [statusMessage, setStatusMessage] = useState('')

  function validate(values: FormState): FieldErrors {
    const next: FieldErrors = {}
    if (!values.name.trim()) next.name = 'Name is required.'
    if (!values.email.trim()) next.email = 'Email is required.'
    else if (!isValidEmail(values.email.trim())) next.email = 'Enter a valid email address.'
    if (!values.subject.trim()) next.subject = 'Subject is required.'
    if (!values.message.trim()) next.message = 'Message is required.'
    else if (values.message.trim().length < 10) {
      next.message = 'Please write at least 10 characters.'
    }
    return next
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const nextErrors = validate(form)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) {
      setStatus('error')
      setStatusMessage('Please fix the highlighted fields.')
      return
    }

    setStatus('loading')
    setStatusMessage('Preparing your email client…')

    try {
      const body = [
        `Name: ${form.name.trim()}`,
        `Email: ${form.email.trim()}`,
        '',
        form.message.trim(),
      ].join('\n')

      const mailto = `mailto:${products.supportEmail}?subject=${encodeURIComponent(
        form.subject.trim(),
      )}&body=${encodeURIComponent(body)}`

      window.location.href = mailto
      setStatus('ready')
      setStatusMessage(
        `No contact API is connected yet. Your email app should open with a message to ${products.supportEmail}. If nothing opens, email us directly.`,
      )
    } catch {
      setStatus('error')
      setStatusMessage(
        `Could not open your email client. Please email ${products.supportEmail} directly.`,
      )
    }
  }

  return (
    <>
      <Seo
        title="Contact"
        description="Contact the SociTea team for support, questions, or product feedback."
        path="/contact"
      />
      <section className="pb-20 pt-14 sm:pt-16">
        <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading
              as="h1"
              eyebrow="Contact"
              title="Let's talk SociTea."
              description="Questions, feedback, or partnership notes — reach the team through the form or email."
            />
            <div className="mt-8 rounded-3xl border border-line bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold text-ink">Support email</p>
              <a
                href={`mailto:${products.supportEmail}`}
                className="mt-2 inline-block text-forest underline-offset-4 hover:underline"
              >
                {products.supportEmail}
              </a>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                Submissions are not stored in a database from this website. The form uses a mailto
                fallback so your message opens in your configured email application.
              </p>
            </div>
          </div>

          <form
            onSubmit={onSubmit}
            className="rounded-3xl border border-line bg-white p-6 shadow-soft sm:p-8"
            noValidate
          >
            <Field
              label="Name"
              id="name"
              error={errors.name}
              value={form.name}
              onChange={(value) => setForm((prev) => ({ ...prev, name: value }))}
              required
            />
            <Field
              label="Email"
              id="email"
              type="email"
              error={errors.email}
              value={form.email}
              onChange={(value) => setForm((prev) => ({ ...prev, email: value }))}
              required
            />
            <Field
              label="Subject"
              id="subject"
              error={errors.subject}
              value={form.subject}
              onChange={(value) => setForm((prev) => ({ ...prev, subject: value }))}
              required
            />
            <Field
              label="Message"
              id="message"
              as="textarea"
              error={errors.message}
              value={form.message}
              onChange={(value) => setForm((prev) => ({ ...prev, message: value }))}
              required
            />

            <Button type="submit" className="mt-2 w-full sm:w-auto" disabled={status === 'loading'}>
              {status === 'loading' ? 'Preparing…' : 'Send message'}
            </Button>

            {statusMessage && (
              <p
                className={[
                  'mt-4 text-sm leading-relaxed',
                  status === 'error' ? 'text-red-700' : 'text-muted',
                ].join(' ')}
                role="status"
              >
                {statusMessage}
              </p>
            )}
          </form>
        </Container>
      </section>
    </>
  )
}

function Field({
  label,
  id,
  value,
  onChange,
  error,
  required,
  type = 'text',
  as = 'input',
}: {
  label: string
  id: string
  value: string
  onChange: (value: string) => void
  error?: string
  required?: boolean
  type?: string
  as?: 'input' | 'textarea'
}) {
  const shared =
    'mt-1.5 w-full rounded-2xl border bg-cream/40 px-3.5 py-2.5 text-sm text-ink transition focus:border-forest/40 focus:bg-white ' +
    (error ? 'border-red-400' : 'border-line')

  return (
    <div className="mb-4">
      <label htmlFor={id} className="text-sm font-semibold text-ink">
        {label}
        {required && <span className="text-forest"> *</span>}
      </label>
      {as === 'textarea' ? (
        <textarea
          id={id}
          name={id}
          required={required}
          value={value}
          rows={5}
          className={shared + ' min-h-[140px] resize-y'}
          onChange={(event) => onChange(event.target.value)}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${id}-error` : undefined}
        />
      ) : (
        <input
          id={id}
          name={id}
          type={type}
          required={required}
          value={value}
          className={shared}
          onChange={(event) => onChange(event.target.value)}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${id}-error` : undefined}
        />
      )}
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-xs text-red-700">
          {error}
        </p>
      )}
    </div>
  )
}
