interface RollingTextProps {
  label: string;
}

export default function RollingText({ label }: RollingTextProps) {
  return (
    <>
      <span className="sr-only">{label}</span>
      <span className="roll-text" aria-hidden="true">
        <span className="roll-text__line">{label}</span>
        <span className="roll-text__line">{label}</span>
      </span>
    </>
  );
}
