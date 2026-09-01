import { useState } from 'react';
import type { FormEvent } from 'react';
import { contact, profile } from '../content';
import { reveal } from '../hooks/useReveal';

const ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT as string | undefined;

type Errors = { name?: string; email?: string; project?: string };

function validate(values: { name: string; email: string; project: string }): Errors {
  const errors: Errors = {};
  if (!values.name.trim()) errors.name = 'Your name, please.';
  if (!values.email.trim()) errors.email = 'An email address, please.';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) errors.email = "That email doesn't look right.";
  if (values.project.trim().length < 20) errors.project = 'A sentence or two about the scope (20 characters minimum).';
  return errors;
}

export default function ContactSection() {
  const [values, setValues] = useState({ name: '', email: '', project: '' });
  const [errors, setErrors] = useState<Errors>({});
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const set = (key: keyof typeof values) => (event: { target: { value: string } }) =>
    setValues((prev) => ({ ...prev, [key]: event.target.value }));

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length) return;

    if (!ENDPOINT) {
      const body = encodeURIComponent(`${values.project}\n\n— ${values.name} (${values.email})`);
      window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
        `New project enquiry — ${values.name}`,
      )}&body=${body}`;
      setSent(true);
      return;
    }

    setSending(true);
    try {
      const response = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });
      if (!response.ok) throw new Error(String(response.status));
      setSent(true);
    } catch {
      setErrors({ project: `Something went wrong — email ${profile.email} directly.` });
    } finally {
      setSending(false);
    }
  }

  return (
    <section id="contact" className="contact">
      <h2 className="contact__title" {...reveal(0)}>
        {contact.heading}
      </h2>
      <p className="contact__body" {...reveal(0)}>
        {contact.body}
      </p>
      <div className="contact__grid" {...reveal(1)}>
        {sent ? (
          <p className="form__success" role="status">
            {contact.success}
          </p>
        ) : (
          <form className="form" onSubmit={onSubmit} noValidate>
            <div className="field">
              <label className="sr-only" htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                className="input"
                type="text"
                placeholder="Name"
                value={values.name}
                onChange={set('name')}
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? 'name-error' : undefined}
              />
              {errors.name && <span className="error" id="name-error">{errors.name}</span>}
            </div>

            <div className="field">
              <label className="sr-only" htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                className="input"
                type="email"
                placeholder="Email"
                value={values.email}
                onChange={set('email')}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? 'email-error' : undefined}
              />
              {errors.email && <span className="error" id="email-error">{errors.email}</span>}
            </div>

            <div className="field">
              <label className="sr-only" htmlFor="project">Scope, timeline, budget range</label>
              <textarea
                id="project"
                name="project"
                className="input"
                rows={3}
                placeholder="Scope, timeline, budget range"
                value={values.project}
                onChange={set('project')}
                aria-invalid={Boolean(errors.project)}
                aria-describedby={errors.project ? 'project-error' : undefined}
              />
              {errors.project && <span className="error" id="project-error">{errors.project}</span>}
            </div>

            <button className="submit" type="submit" disabled={sending}>
              {sending ? 'Sending' : contact.submit} <span aria-hidden="true">→</span>
            </button>
          </form>
        )}

        <div className="contact__aside">
          <a className="contact__mail" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
          <div className="contact__lines">
            {profile.phone}
            <br />
            {profile.location}
            <br />
            {profile.responseTime}
          </div>
          <div className="contact__links">
            <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a href={`${import.meta.env.BASE_URL}${profile.cv}`} download>Download CV</a>
          </div>
        </div>
      </div>
    </section>
  );
}
