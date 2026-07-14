export default function SectionHeading({
  eyebrow,
  title,
  description,
  titleId,
  align = "left",
}) {
  return (
    <div className={`section-heading section-heading--${align}`}>
      <span
        className="ui-span eyebrow"
        data-reveal="clip"
        style={{ "--motion-delay": "0ms" }}
      >
        {eyebrow}
      </span>
      <h2
        className="ui-title section-heading__title"
        data-reveal="clip"
        id={titleId}
        style={{ "--motion-delay": "80ms" }}
      >
        {title}
      </h2>
      {description ? (
        <p
          className="section-heading__description"
          data-reveal
          style={{ "--motion-delay": "160ms" }}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
