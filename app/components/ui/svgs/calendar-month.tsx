import type { SVGProps } from 'react';

type CalendarMonthProps = SVGProps<SVGSVGElement> & {
  monthNumber: string;
};

const CalendarMonth = (props: CalendarMonthProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="var(--foreground)"
    viewBox="0 0 256 256"
    {...props}
  >
    <path
      d="M 208 34 L 182 34 L 182 24 C 182 20.686 179.314 18 176 18 C 172.686 18 170 20.686 170 24 L 170 34 L 86 34 L 86 24 C 86 20.686 83.314 18 80 18 C 76.686 18 74 20.686 74 24 L 74 34 L 48 34 C 40.268 34 34 40.268 34 48 L 34 208 C 34 215.732 40.268 222 48 222 L 208 222 C 215.732 222 222 215.732 222 208 L 222 48 C 222 40.268 215.732 34 208 34 Z M 48 46 L 74 46 L 74 56 C 74 59.314 76.686 62 80 62 C 83.314 62 86 59.314 86 56 L 86 46 L 170 46 L 170 56 C 170 59.314 172.686 62 176 62 C 179.314 62 182 59.314 182 56 L 182 46 L 208 46 C 209.105 46 210 46.895 210 48 L 210 82 L 46 82 L 46 48 C 46 46.895 46.895 46 48 46 Z M 208 210 L 48 210 C 46.895 210 46 209.105 46 208 L 46 94 L 210 94 L 210 208 C 210 209.105 209.105 210 208 210 Z"
      id="object-0"
    />
    <text
      style={{
        fontFamily: '&quot',
        fontSize: 103,
        fontWeight: 536,
        whiteSpace: 'pre'
      }}
      x={70}
      y={189.445}
      id="object-1"
    >
      {props.monthNumber}
    </text>
    <defs>
      <style>
        {
          '@import url(https://fonts.googleapis.com/css2?family=Inter%3Aital%2Cwght%400%2C100..900%3B1%2C100..900&display=swap);'
        }
      </style>
    </defs>
  </svg>
);

export default CalendarMonth;
