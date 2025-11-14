import type { SVGProps } from 'react';

type SiteLogoProps = SVGProps<SVGSVGElement> & {
  width?: number;
  height?: number;
};

const SiteLogo = (props: SiteLogoProps = { width: 30, height: 40 }) => (
  <svg
    width={props.width}
    height={props.height}
    viewBox="0 0 30 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="m15 0 5.454 5.333L0 25.333V14.667z" fill="#06d1d4" />
    <path
      d="M2.908 28.177 15 40l15-14.667V14.667l-9.545-9.334L0 25.333l.004.005 20.45-20.005v15.334l-9.204 9v-9.535z"
      fill="var(--color-primary)"
    />
  </svg>
);

export default SiteLogo;
