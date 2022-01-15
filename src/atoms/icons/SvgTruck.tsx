import * as React from "react";
import { SVGProps } from "react";

const SvgTruck = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={200}
    height={200}
    viewBox="0 0 150 150"
    {...props}
  >
    <path d="M68 38c-3.9.9-9 6-9 9 0 1.9-.7 2-10.8 2-15 0-17.8 1.5-24.4 13L19 70.5V100h4.9c4.3 0 5.1.3 5.6 2.2 1.1 3.6 5.6 7.7 9.4 8.8 6.6 1.8 13.2-1.4 16.6-8l1.6-3h33.7l1.9 3.7c2.4 5 9.2 8.7 14.3 7.8 4.7-.9 8.9-4.1 10.7-8.2l1.4-3.4 5.4.6 5.5.7V37l-29.2.1c-16.1.1-30.9.5-32.8.9zm56 31v26h-2.2c-1.6 0-2.9-1.1-4.3-3.8-2.6-4.9-10-8.7-15-7.8-4.2.8-8.8 4.6-10.5 8.6l-1.2 3H64V47.9l2.5-2.4 2.4-2.5H124v26zm-66-7.5V68H27.1l3.1-5.4c1.7-3 4.1-5.9 5.2-6.5 1.2-.5 6.7-1 12.4-1L58 55v6.5zm0 23.2c0 5.8-.3 10.4-.6 10-.3-.3-1.3-2-2.2-3.9-2.3-4.5-9.8-8.3-14.7-7.4-4 .8-9 4.6-11.1 8.7-.8 1.6-2.1 2.9-2.9 2.9-1.2 0-1.5-1.9-1.5-10.5V74h33v10.7zm-9.9 7.2c4.5 4.5 3.7 10-1.8 12.9-3.2 1.7-5.7 1.5-8.7-.9-2.1-1.6-2.6-2.9-2.6-6.3 0-2.8.6-4.8 1.8-5.8 4.1-3.6 7.6-3.5 11.3.1zm63.2.2c.9 1.2 1.7 3.7 1.7 5.6 0 4.1-4 8.3-8 8.3s-8-4.2-8-8.3c0-7.7 9.4-11.4 14.3-5.6z" />
    <path d="M72.3 53c-2.5 1-2.6 1.1-1.7 3.4.5 1.4 2.9 1.6 16 1.6 14.6 0 15.4-.1 15.4-2 0-1-.9-2.4-1.9-3-2.4-1.2-24.7-1.2-27.8 0zM70.6 66.6c-.3.9-.4 2 0 2.5.3.5 10.2.9 22 .9h21.5l-.3-2.3c-.3-2.2-.4-2.2-21.4-2.5-18.7-.2-21.2-.1-21.8 1.4zM71 78.5c-1 1.2-1 1.8 0 3 1.9 2.2 16.5 2.1 17.4-.1 1.2-3.2-1.3-4.4-8.9-4.4-5.2 0-7.6.4-8.5 1.5z" />
  </svg>
);

export default SvgTruck;
