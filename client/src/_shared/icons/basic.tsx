const basic: {[index: string]: React.ReactNode} = {
  activity: (
    <>
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </>
  ),
  airplay: (
    <>
      <path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1" />
      <polygon points="12 15 17 21 7 21 12 15" />
    </>
  ),
  alertCircle: (
    <>
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="8" x2="12" y2="12" />
      <line x1="12" y1="16" x2="12.01" y2="16" />
    </>
  ),
  alertOctagon: (
    <>
      <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2" />
      <line x1="12" y1="8" x2="12" y2="12" />
      <line x1="12" y1="16" x2="12.01" y2="16" />
    </>
  ),
  alertTriangle: (
    <>
      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
      <line x1="12" y1="9" x2="12" y2="13" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </>
  ),
  alignCenter: (
    <>
      <line x1="18" y1="10" x2="6" y2="10" />
      <line x1="21" y1="6" x2="3" y2="6" />
      <line x1="21" y1="14" x2="3" y2="14" />
      <line x1="18" y1="18" x2="6" y2="18" />
    </>
  ),
  alignJustify: (
    <>
      <line x1="21" y1="10" x2="3" y2="10" />
      <line x1="21" y1="6" x2="3" y2="6" />
      <line x1="21" y1="14" x2="3" y2="14" />
      <line x1="21" y1="18" x2="3" y2="18" />
    </>
  ),
  alignLeft: (
    <>
      <line x1="17" y1="10" x2="3" y2="10" />
      <line x1="21" y1="6" x2="3" y2="6" />
      <line x1="21" y1="14" x2="3" y2="14" />
      <line x1="17" y1="18" x2="3" y2="18" />
    </>
  ),
  alignRight: (
    <>
      <line x1="21" y1="10" x2="7" y2="10" />
      <line x1="21" y1="6" x2="3" y2="6" />
      <line x1="21" y1="14" x2="3" y2="14" />
      <line x1="21" y1="18" x2="7" y2="18" />
    </>
  ),
  anchor: (
    <>
      <circle cx="12" cy="5" r="3" />
      <line x1="12" y1="22" x2="12" y2="8" />
      <path d="M5 12H2a10 10 0 0 0 20 0h-3" />
    </>
  ),
  search: (
    <>
      <path
        d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
        stroke="#2F363D"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.0004 21.0004L16.6504 16.6504"
        stroke="#2F363D"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
  notification: (
    <>
      <path
        d="M12.0196 2.91016C8.7096 2.91016 6.0196 5.60016 6.0196 8.91016V11.8002C6.0196 12.4102 5.7596 13.3402 5.4496 13.8602L4.2996 15.7702C3.5896 16.9502 4.0796 18.2602 5.3796 18.7002C9.6896 20.1402 14.3396 20.1402 18.6496 18.7002C19.8596 18.3002 20.3896 16.8702 19.7296 15.7702L18.5796 13.8602C18.2796 13.3402 18.0196 12.4102 18.0196 11.8002V8.91016C18.0196 5.61016 15.3196 2.91016 12.0196 2.91016Z"
        stroke="#292D32"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        d="M13.8699 3.19945C13.5599 3.10945 13.2399 3.03945 12.9099 2.99945C11.9499 2.87945 11.0299 2.94945 10.1699 3.19945C10.4599 2.45945 11.1799 1.93945 12.0199 1.93945C12.8599 1.93945 13.5799 2.45945 13.8699 3.19945Z"
        stroke="#292D32"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.0195 19.0605C15.0195 20.7105 13.6695 22.0605 12.0195 22.0605C11.1995 22.0605 10.4395 21.7205 9.89953 21.1805C9.35953 20.6405 9.01953 19.8805 9.01953 19.0605"
        stroke="#292D32"
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
    </>
  ),
  rightArrow: (
    <>
      <path
        d="M8.59082 5.72754L13.3635 10.5003L8.59082 15.273"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
  main: (
    <>
      <path
        d="M13.6385 4.2652L4.63853 12.6288C4.23134 13.0072 4 13.538 4 14.0939V26H26V14.0939C26 13.538 25.7687 13.0072 25.3615 12.6288L16.3615 4.2652C15.5939 3.55195 14.4061 3.55195 13.6385 4.2652Z"
        fill="white"
        stroke="#232323"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect
        x="11"
        y="18"
        width="8"
        height="8"
        fill="white"
        stroke="#232323"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </>
  ),
  content: (
    <>
      <rect
        x="4"
        y="4"
        width="22"
        height="22"
        rx="2"
        fill="white"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M10 10H21"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 15H18"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 21H15"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
  plus: (
    <>
      <circle cx="15" cy="15" r="12" fill="white" strokeWidth="1.5" />
      <path d="M8.33398 15H21.6673" strokeWidth="1.5" strokeLinecap="round" />
      <path
        d="M15 8.33398L15 21.6673"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </>
  ),
  study: (
    <>
      <rect
        x="4"
        y="6"
        width="20"
        height="20"
        rx="2"
        fill="white"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M9 20H19"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22.6113 2.70711C23.0018 2.31658 23.6349 2.31658 24.0255 2.70711L26.2933 4.97491C26.6838 5.36544 26.6838 5.9986 26.2933 6.38913L18.7158 13.9666L15.0338 10.2845L22.6113 2.70711Z"
        fill="white"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M13.6524 15.3479L18.7152 13.9672L15.0332 10.2852L13.6524 15.3479Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.5 5.5L24 9"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
  my: (
    <>
      <circle cx="15" cy="15" r="12" fill="white" strokeWidth="1.5" />
      <circle cx="15" cy="11" r="4" strokeWidth="1.5" />
      <path
        d="M5 21C8.11111 18.7361 16.4667 15.5667 25 21"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
};

export default basic;
