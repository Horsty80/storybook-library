import * as React from "react";
import { SVGProps } from "react";

const SvgBulletPoint = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={72}
    height={72}
    viewBox="0 0 54 54"
    {...props}
  >
    <path d="M47 1.9c-18 5.8-32.4 18-40.7 34.6C3.9 41.2 0 51.9 0 53.7c0 .2 12.1.3 27 .3h27V27c0-14.9-.3-27-.7-26.9-.5 0-3.3.8-6.3 1.8z" />
  </svg>
);

export default SvgBulletPoint;
