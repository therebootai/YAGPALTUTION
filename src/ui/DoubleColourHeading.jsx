export default function DoubleColourHeading({
  primarytext,
  secondarytext,
  className,
}) {
  return (
    <h2
      className={`tracking-[2.8px] ${className}`}
    >
      <span className="inline text-site-primary">{primarytext}</span>&nbsp;
      <span className="text-site-secondary inline">{secondarytext}</span>
    </h2>
  );
}
