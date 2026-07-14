import { contacts } from "../../data/portfolioContent";
import "./footer.css";

export default function Footer({ content }) {
  return (
    <footer
      aria-labelledby="contact-title"
      className="contact-panel"
      id="contact"
    >
      <div className="site-container">
        <div className="contact-panel__content" data-reveal="scale">
          <span className="ui-span eyebrow" data-reveal="clip">
            {content.eyebrow}
          </span>
          <h2
            className="ui-title contact-panel__title"
            data-reveal="clip"
            id="contact-title"
          >
            {content.title}
          </h2>
          <p className="contact-panel__description" data-reveal>
            {content.description}
          </p>

          <div className="contact-panel__availability" data-reveal>
            <span
              className="ui-span contact-panel__availability-dot"
              aria-hidden="true"
            />
            <span className="ui-span">
              {content.availability}
            </span>
          </div>

          <div
            aria-label={content.contactsLabel}
            className="contact-panel__contacts"
            data-reveal
            id="contact-details"
          >
            <a
              className="contact-panel__contact"
              href={contacts.telegram.href}
              rel="noreferrer noopener"
              target="_blank"
            >
              <span className="ui-span contact-panel__contact-label">
                Telegram
              </span>
              <span className="ui-span contact-panel__contact-value">
                {contacts.telegram.label}
              </span>
              <span
                aria-hidden="true"
                className="ui-span contact-panel__contact-arrow"
              >
                ↗
              </span>
            </a>
            <a
              className="contact-panel__contact"
              href={contacts.whatsapp.href}
              rel="noreferrer noopener"
              target="_blank"
            >
              <span className="ui-span contact-panel__contact-label">
                WhatsApp
              </span>
              <span className="ui-span contact-panel__contact-value">
                {contacts.whatsapp.label}
              </span>
              <span
                aria-hidden="true"
                className="ui-span contact-panel__contact-arrow"
              >
                ↗
              </span>
            </a>
            <a
              className="contact-panel__contact"
              href={contacts.phone.href}
            >
              <span className="ui-span contact-panel__contact-label">
                {content.phoneLabel}
              </span>
              <span className="ui-span contact-panel__contact-value">
                {contacts.phone.label}
              </span>
              <span
                aria-hidden="true"
                className="ui-span contact-panel__contact-arrow"
              >
                ↗
              </span>
            </a>
            <a
              className="contact-panel__contact"
              href={`mailto:${contacts.email}`}
            >
              <span className="ui-span contact-panel__contact-label">
                Email
              </span>
              <span className="ui-span contact-panel__contact-value">
                {contacts.email}
              </span>
              <span
                aria-hidden="true"
                className="ui-span contact-panel__contact-arrow"
              >
                ↗
              </span>
            </a>
          </div>
        </div>

        <div className="contact-panel__wordmark" aria-hidden="true">
          <span className="ui-span">{content.wordmark}</span>
        </div>

        <div className="contact-panel__footer">
          <span className="ui-span contact-panel__copyright">
            © {new Date().getFullYear()} {content.copyrightName}
          </span>
          <span className="ui-span contact-panel__role">
            {content.role}
          </span>
          <a className="contact-panel__back-to-top" href="#top">
            {content.backToTop}
          </a>
        </div>
      </div>
    </footer>
  );
}
