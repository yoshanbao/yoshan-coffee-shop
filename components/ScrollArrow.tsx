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
      className={`motion-control inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border shadow-sm disabled:cursor-default disabled:opacity-35 ${inverse ? "border-white/30 bg-white/10 text-white hover:bg-white/20" : "border-border-hairline bg-canvas-white text-primary hover:bg-pale-mint"}`}
    >
      <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d={direction === "left" ? "m15 18-6-6 6-6" : "m9 6 6 6-6 6"} />
      </svg>
    </button>
  );
}
