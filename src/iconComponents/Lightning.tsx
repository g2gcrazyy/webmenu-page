import * as React from "react";

function SvgLightning(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg fill="#fff" viewBox="0 0 50 50" width="1em" height="1em" {...props}>
      <path d="M16 50a1 1 0 01-.948-1.317L22.613 26H15a1.001 1.001 0 01-.923-1.384l10-24A1 1 0 0125 0h9.5a1 1 0 01.913 1.408L27.543 19H35a1 1 0 01.837 1.547l-19 29A.998.998 0 0116 50z" />
    </svg>
  );
}

export default SvgLightning;
