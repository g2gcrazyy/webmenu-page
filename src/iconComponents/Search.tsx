import * as React from "react";

function SvgSearch(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 50 50" width="1em" height="1em" {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={2}
        d="M21 4a16 16 0 100 32 16 16 0 100-32z"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeMiterlimit={10}
        strokeWidth={4}
        d="M32.229 32.229L45.5 45.5"
      />
    </svg>
  );
}

export default SvgSearch;
