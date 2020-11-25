import * as React from "react";

function SvgCheckbox(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      fill="#939399"
      fillOpacity={0.3}
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      {...props}
    >
      <path d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2z" />
    </svg>
  );
}

export default SvgCheckbox;
