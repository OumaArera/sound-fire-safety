import { useEffect, useState, type FormEvent } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Check, LoaderCircle, Send, TriangleAlert } from 'lucide-react';
import { contact } from '@/data/site';
import { cn } from '@/lib/cn';

export const enquirySubjects = [
  'Request Service',
  'Schedule Inspection',
  'Buy Extinguishers',
  'Safety Training & Consultation',
  'Compliance Question',
  'General Enquiry',
];

type Status = 'idle' | 'submitting' | 'success' | 'error';

type Fields = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

const emptyFields: Fields = {
  name: '',
  email: '',
  phone: '',
  subject: enquirySubjects[0],
  message: '',
};

/**
 * Posts to VITE_CONTACT_ENDPOINT when configured (Formspree, Netlify Forms,
 * a serverless function — anything that accepts a JSON POST). Without an
 * endpoint it falls back to opening the visitor's mail client, so the form is
 * never a dead end before the backend is wired up.
 */
const ENDPOINT = import.meta.env.VITE_CONTACT_ENDPOINT as string | undefined;

export function ContactForm() {
  const [searchParams] = useSearchParams();
  const [fields, setFields] = useState<Fields>(emptyFields);
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [status, setStatus] = useState<Status>('idle');

  useEffect(() => {
    const subject = searchParams.get('subject');
    if (subject) {
      const matched = enquirySubjects.find(
        (option) => option.toLowerCase() === subject.toLowerCase(),
      );
      setFields((current) => ({ ...current, subject: matched ?? subject }));
    }
  }, [searchParams]);

  const update = (key: keyof Fields, value: string) => {
    setFields((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
  };

  const validate = () => {
    const next: Partial<Record<keyof Fields, string>> = {};
    if (!fields.name.trim()) next.name = 'Please enter your name.';
    if (!fields.email.trim()) {
      next.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(fields.email.trim())) {
      next.email = 'Please enter a valid email address.';
    }
    if (fields.phone.trim() && !/^[\d\s()+.-]{7,}$/.test(fields.phone.trim())) {
      next.phone = 'Please enter a valid phone number.';
    }
    if (fields.message.trim().length < 10) {
      next.message = 'Please tell us a little more (at least 10 characters).';
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const mailtoFallback = () => {
    const body = [
      `Name: ${fields.name}`,
      `Email: ${fields.email}`,
      fields.phone ? `Phone: ${fields.phone}` : null,
      '',
      fields.message,
    ]
      .filter(Boolean)
      .join('\n');

    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(
      `${fields.subject} — website enquiry`,
    )}&body=${encodeURIComponent(body)}`;
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validate()) return;

    setStatus('submitting');

    if (!ENDPOINT) {
      mailtoFallback();
      setStatus('success');
      setFields({ ...emptyFields, subject: fields.subject });
      return;
    }

    try {
      const response = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(fields),
      });
      if (!response.ok) throw new Error(`Request failed: ${response.status}`);
      setStatus('success');
      setFields(emptyFields);
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="rounded-xl border border-navy-100 bg-white p-8 text-center shadow-card">
        <span className="mx-auto inline-flex size-14 items-center justify-center rounded-full bg-flame-50 text-flame-600">
          <Check className="size-7" aria-hidden="true" />
        </span>
        <h3 className="mt-5 text-xl font-extrabold">Thank you — message sent</h3>
        <p className="mt-3 text-sm leading-relaxed text-navy-600">
          A member of our team will be in touch during working hours ({contact.hoursShort}). For
          anything urgent, please call us directly.
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="mt-6 font-display text-[13px] font-bold uppercase tracking-wide text-flame-600 underline-offset-4 hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="rounded-xl border border-navy-100 bg-white p-6 shadow-card sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label="Your Name"
          id="name"
          required
          value={fields.name}
          error={errors.name}
          onChange={(value) => update('name', value)}
          autoComplete="name"
        />
        <Field
          label="Email Address"
          id="email"
          type="email"
          required
          value={fields.email}
          error={errors.email}
          onChange={(value) => update('email', value)}
          autoComplete="email"
        />
        <Field
          label="Contact Number"
          id="phone"
          type="tel"
          value={fields.phone}
          error={errors.phone}
          onChange={(value) => update('phone', value)}
          autoComplete="tel"
        />

        <div>
          <label htmlFor="subject" className={labelClass}>
            Subject
          </label>
          <select
            id="subject"
            name="subject"
            value={fields.subject}
            onChange={(event) => update('subject', event.target.value)}
            className={cn(inputClass, 'appearance-none bg-white')}
          >
            {enquirySubjects.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
            {!enquirySubjects.includes(fields.subject) && (
              <option value={fields.subject}>{fields.subject}</option>
            )}
          </select>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="message" className={labelClass}>
            How can we help? <span className="text-flame-600">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={fields.message}
            onChange={(event) => update('message', event.target.value)}
            className={cn(inputClass, 'resize-y', errors.message && errorInputClass)}
            placeholder="Tell us about your site, how many extinguishers you have, or the service you need."
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? 'message-error' : undefined}
          />
          {errors.message && (
            <p id="message-error" className={errorTextClass}>
              {errors.message}
            </p>
          )}
        </div>
      </div>

      {status === 'error' && (
        <p className="mt-5 flex items-start gap-2 rounded-lg border border-flame-200 bg-flame-50 p-4 text-sm text-flame-800">
          <TriangleAlert className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
          <span>
            Something went wrong sending your message. Please try again, or email us directly at{' '}
            <a href={`mailto:${contact.email}`} className="font-semibold underline">
              {contact.email}
            </a>
            .
          </span>
        </p>
      )}

      <div className="mt-6 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="inline-flex items-center justify-center gap-2 rounded-md bg-flame-600 px-7 py-3.5 font-display text-sm font-bold uppercase tracking-wide text-white shadow-[0_10px_24px_-12px_rgba(200,16,46,0.9)] transition hover:-translate-y-0.5 hover:bg-flame-700 disabled:translate-y-0 disabled:opacity-70"
        >
          {status === 'submitting' ? (
            <LoaderCircle className="size-4 animate-spin" aria-hidden="true" />
          ) : (
            <Send className="size-4" aria-hidden="true" />
          )}
          {status === 'submitting' ? 'Sending…' : 'Send Message'}
        </button>
        <p className="text-xs leading-relaxed text-navy-500">
          We reply during working hours: {contact.hours}.
        </p>
      </div>
    </form>
  );
}

const labelClass = 'mb-2 block font-display text-xs font-bold uppercase tracking-wide text-navy-800';
const inputClass =
  'w-full rounded-md border border-navy-200 bg-white px-4 py-3 text-sm text-navy-900 transition placeholder:text-navy-400 focus:border-flame-600 focus:outline-none focus:ring-2 focus:ring-flame-600/20';
const errorInputClass = 'border-flame-500 focus:border-flame-600';
const errorTextClass = 'mt-2 text-xs font-medium text-flame-700';

type FieldProps = {
  label: string;
  id: keyof Fields;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  required?: boolean;
  error?: string;
  autoComplete?: string;
};

function Field({
  label,
  id,
  value,
  onChange,
  type = 'text',
  required,
  error,
  autoComplete,
}: FieldProps) {
  return (
    <div>
      <label htmlFor={id} className={labelClass}>
        {label} {required && <span className="text-flame-600">*</span>}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        autoComplete={autoComplete}
        onChange={(event) => onChange(event.target.value)}
        className={cn(inputClass, error && errorInputClass)}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
      />
      {error && (
        <p id={`${id}-error`} className={errorTextClass}>
          {error}
        </p>
      )}
    </div>
  );
}
