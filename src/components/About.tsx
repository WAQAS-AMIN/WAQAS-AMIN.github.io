import { about, services, stack } from '../content';
import { reveal } from '../hooks/useReveal';

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about__portrait" {...reveal(0)}>
        <span>{about.portraitCaption}</span>
      </div>

      <div className="about__col">
        <h2 className="eyebrow about__eyebrow" {...reveal(1)}>
          {about.eyebrow}
        </h2>
        <p className="about__lead" {...reveal(2)}>
          {about.lead}
        </p>
        <p className="about__body" {...reveal(3)}>
          {about.body}
        </p>

        <div className="services" {...reveal(4)}>
          {services.map((service) => (
            <div className="service" key={service.label}>
              {service.label}
              <span>{service.meta}</span>
            </div>
          ))}
        </div>

        <div className="stack-block" {...reveal(5)}>
          <h3 className="eyebrow">Stack</h3>
          <div className="chips">
            {stack.map((item) => (
              <span className="chip" key={item}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
