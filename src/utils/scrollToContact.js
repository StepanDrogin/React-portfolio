const CONTACT_HASH = "#contact";
const CONTACT_DETAILS_ID = "contact-details";
const CONTACT_BOTTOM_GAP_TOKEN = "--spacing-40";
const CONTACT_BOTTOM_GAP_FALLBACK = 40;

function getContactBottomGap() {
  const tokenValue = window
    .getComputedStyle(document.documentElement)
    .getPropertyValue(CONTACT_BOTTOM_GAP_TOKEN);
  const parsedValue = Number.parseFloat(tokenValue);

  return Number.isFinite(parsedValue)
    ? parsedValue
    : CONTACT_BOTTOM_GAP_FALLBACK;
}

function getContactDetailsDocumentBottom(contactDetails) {
  const contactSection = document.getElementById("contact");
  const contactContent = contactDetails.closest(".contact-panel__content");

  if (!contactSection || !contactContent) {
    return window.scrollY + contactDetails.getBoundingClientRect().bottom;
  }

  const contactSectionTop =
    window.scrollY + contactSection.getBoundingClientRect().top;

  return (
    contactSectionTop +
    contactContent.offsetTop +
    contactDetails.offsetTop +
    contactDetails.offsetHeight
  );
}

export default function scrollToContact(event) {
  if (
    event.defaultPrevented ||
    event.button !== 0 ||
    event.metaKey ||
    event.ctrlKey ||
    event.shiftKey ||
    event.altKey
  ) {
    return;
  }

  event.preventDefault();

  const scheduleScroll =
    window.requestAnimationFrame || ((callback) => callback());

  scheduleScroll(() => {
    const contactDetails = document.getElementById(CONTACT_DETAILS_ID);

    if (!contactDetails) {
      window.location.hash = CONTACT_HASH;
      return;
    }

    const contactDetailsBottom =
      getContactDetailsDocumentBottom(contactDetails);
    const targetTop = Math.max(
      0,
      contactDetailsBottom - window.innerHeight + getContactBottomGap()
    );
    const prefersReducedMotion = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (window.location.hash !== CONTACT_HASH) {
      window.history.pushState(null, "", CONTACT_HASH);
    }

    window.scrollTo({
      behavior: prefersReducedMotion ? "auto" : "smooth",
      top: targetTop,
    });
  });
}
