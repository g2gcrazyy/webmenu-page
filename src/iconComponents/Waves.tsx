import * as React from "react";

function SvgWaves(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="0.5rem" height="0.5rem" {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={2}
        d="M3 6c1.8 0 2.7-2 4.5-2s2.7 2 4.5 2 2.7-2 4.5-2 2.7 2 4.5 2M3 13c1.8 0 2.7-2 4.5-2s2.7 2 4.5 2 2.7-2 4.5-2 2.7 2 4.5 2M3 20c1.8 0 2.7-2 4.5-2s2.7 2 4.5 2 2.7-2 4.5-2 2.7 2 4.5 2"
      />
    </svg>
  );
}

export default SvgWaves;
