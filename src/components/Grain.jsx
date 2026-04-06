export function Grain() {
  return (
    <div className="grain-overlay" aria-hidden>
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
        <defs>
          <filter id="cdm-noise" x="0" y="0">
            <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="4" stitchTiles="stitch" />
          </filter>
        </defs>
        <rect width="100%" height="100%" filter="url(#cdm-noise)" />
      </svg>
    </div>
  )
}
