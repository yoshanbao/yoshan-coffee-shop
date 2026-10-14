type ScrollArrowProps = {
  direction: "left" | "right";
  label: string;
  controls: string;
  disabled: boolean;
  onClick: () => void;
  inverse?: boolean;
};

export function ScrollArrow({ direction, label, controls, disabled, onClick, inverse = false }: ScrollArrowProps) {
  return (
    <button
      type="button"
      aria-label={label}
      aria-controls={controls}
      disabled={disabled}
      onClick={onClick}
      className={`motion-control inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border transition-shadow disabled:cursor-default disabled:opacity-35 disabled:shadow-none ${inverse ? "border-white/20 bg-white/[0.08] text-white backdrop-blur-sm hover:border-white/35 hover:bg-white/[0.16]" : "border-border-hairline bg-canvas-white text-primary shadow-card hover:bg-pale-mint/60 hover:shadow-card-hover"}`}
    >
      <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d={direction === "left" ? "m15 18-6-6 6-6" : "m9 6 6 6-6 6"} />
      </svg>
    </button>
  );
}
