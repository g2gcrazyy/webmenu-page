import * as React from "react";

function SvgSort(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 50 50" width="1em" height="1em" {...props}>
      <path fill="currentColor"  d="M46 17H4l21 22z" />
    </svg>
  );
}

export default SvgSort;
