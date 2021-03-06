import * as React from "react";
import { SVGProps } from "react";

const SvgRadar = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={200}
    height={200}
    viewBox="0 0 150 150"
    {...props}
  >
    <path d="M55.7 22.5c-13 3.6-23.4 15.6-25.6 29.6-1.2 6.9-.3 9.2 3.3 8.7 1.6-.2 2.2-1.5 3.2-7.1 1.5-8.1 4.9-14.2 10.3-18.9 4.5-3.9 12-6.8 17.3-6.8 4.2 0 6.3-2.3 4.7-5.2-1.2-2.2-6.1-2.3-13.2-.3z" />
    <path d="M59.4 35.4c-9.3 2.9-16.9 12.9-16.2 21.2.3 3.4.6 3.9 2.8 3.9 2.5 0 3.1-1.1 4.5-7.8 1-5 6.4-9.7 12.5-11.1 4.8-1.1 5.5-1.6 5.8-3.8.2-1.9-.2-2.7-2-3.2-2.8-.7-2.4-.7-7.4.8zM91.5 57C86 62.5 81.3 67 81 67c-.3-.1-1.6-1-2.9-2.1-2-1.7-2.4-2.8-2.2-6.5.2-3.8-.3-4.9-2.8-7.4-4.9-5-12.5-3.9-15.7 2.2-3.5 6.8 1.2 14.2 9.1 14.3 3.2 0 5 .6 6.9 2.4l2.6 2.5-12.1 12.2C50.3 98.4 50.3 98.3 58.1 104c7.2 5.2 17.7 7.4 27.9 6l3.5-.5.3 5.7.3 5.8h-3.8c-4.9 0-6.6 1.1-6.1 4.1l.3 2.4 18.5.3c16.3.2 18.6 0 19.7-1.4 2.1-2.9-.1-5.4-4.7-5.4h-4v-12.9c0-11.9.2-13.3 2.8-18.7 2.3-5.1 2.7-7.1 2.7-15.4 0-8.1-.4-10.3-2.6-15-3.1-6.7-7.5-12-9.8-12-.9 0-6.1 4.5-11.6 10zm-23 1c0 1.8-.6 2.6-2.3 2.8-2.4.4-3.8-1.8-2.8-4.4.3-.9 1.5-1.4 2.8-1.2 1.7.2 2.3 1 2.3 2.8zm37.7 2.3c1.4 2.8 2.3 6.7 2.6 11.8.4 6.8.1 8.4-2.2 13.5-5 10.9-13.8 17.2-25.2 18.2-6.5.5-11.7-.7-17.2-4l-3.2-2 20.7-21.3c11.5-11.7 21.1-21 21.6-20.8.4.2 1.7 2.3 2.9 4.6zM103 112v9h-7v-7.3c0-6.8.2-7.3 2.8-8.9 1.5-.9 3-1.7 3.5-1.7.4-.1.7 3.9.7 8.9z" />
  </svg>
);

export default SvgRadar;
