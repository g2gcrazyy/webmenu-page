import * as React from "react";

function SvgPlus(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 30 30" width="1rem" height="1rem" {...props}>
      <path d="M15 3C8.373 3 3 8.373 3 15s5.373 12 12 12 12-5.373 12-12S21.627 3 15 3zm6 13h-5v5a1 1 0 11-2 0v-5H9a1 1 0 110-2h5V9a1 1 0 112 0v5h5a1 1 0 110 2z" 
      fill="currentColor"/>
    </svg>
  );
}

export default SvgPlus;
