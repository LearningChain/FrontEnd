const basic: {[index: string]: React.ReactNode} = {
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
  rightArrowNoTail: (
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
  rightArrow: (
    <>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21 12C21 12.4142 20.6642 12.75 20.25 12.75L3.75 12.75C3.33579 12.75 3 12.4142 3 12C3 11.5858 3.33579 11.25 3.75 11.25L20.25 11.25C20.6642 11.25 21 11.5858 21 12Z"
        fill="#232323"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.7803 11.4697C21.0732 11.7626 21.0732 12.2374 20.7803 12.5303L14.0303 19.2803C13.7374 19.5732 13.2626 19.5732 12.9697 19.2803C12.6768 18.9874 12.6768 18.5126 12.9697 18.2197L19.1893 12L12.9697 5.78033C12.6768 5.48744 12.6768 5.01256 12.9697 4.71967C13.2626 4.42678 13.7374 4.42678 14.0303 4.71967L20.7803 11.4697Z"
        fill="#232323"
      />
    </>
  ),
  leftArrow: (
    <>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 12C3 11.5858 3.33579 11.25 3.75 11.25L20.25 11.25C20.6642 11.25 21 11.5858 21 12C21 12.4142 20.6642 12.75 20.25 12.75L3.75 12.75C3.33579 12.75 3 12.4142 3 12Z"
        fill="black"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.21967 12.5303C2.92678 12.2374 2.92678 11.7626 3.21967 11.4697L9.96967 4.71967C10.2626 4.42678 10.7374 4.42678 11.0303 4.71967C11.3232 5.01257 11.3232 5.48744 11.0303 5.78033L4.81066 12L11.0303 18.2197C11.3232 18.5126 11.3232 18.9874 11.0303 19.2803C10.7374 19.5732 10.2626 19.5732 9.96967 19.2803L3.21967 12.5303Z"
        fill="black"
      />
    </>
  ),
  redDot: (
    <>
      <circle cx="7.5" cy="7.5" r="7.5" fill="#F22020" />
    </>
  ),
  filter: (
    <>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 16.125C3 15.7108 3.33579 15.375 3.75 15.375H13.875C14.2892 15.375 14.625 15.7108 14.625 16.125C14.625 16.5392 14.2892 16.875 13.875 16.875H3.75C3.33579 16.875 3 16.5392 3 16.125Z"
        fill="#232323"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.875 16.125C16.875 15.7108 17.2108 15.375 17.625 15.375H20.25C20.6642 15.375 21 15.7108 21 16.125C21 16.5392 20.6642 16.875 20.25 16.875H17.625C17.2108 16.875 16.875 16.5392 16.875 16.125Z"
        fill="#232323"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.75 15C15.1287 15 14.625 15.5037 14.625 16.125C14.625 16.7463 15.1287 17.25 15.75 17.25C16.3713 17.25 16.875 16.7463 16.875 16.125C16.875 15.5037 16.3713 15 15.75 15ZM13.125 16.125C13.125 14.6753 14.3003 13.5 15.75 13.5C17.1997 13.5 18.375 14.6753 18.375 16.125C18.375 17.5747 17.1997 18.75 15.75 18.75C14.3003 18.75 13.125 17.5747 13.125 16.125Z"
        fill="#232323"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 7.875C3 7.46079 3.33579 7.125 3.75 7.125H7.875C8.28921 7.125 8.625 7.46079 8.625 7.875C8.625 8.28921 8.28921 8.625 7.875 8.625H3.75C3.33579 8.625 3 8.28921 3 7.875Z"
        fill="#232323"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.875 7.875C10.875 7.46079 11.2108 7.125 11.625 7.125H20.25C20.6642 7.125 21 7.46079 21 7.875C21 8.28921 20.6642 8.625 20.25 8.625H11.625C11.2108 8.625 10.875 8.28921 10.875 7.875Z"
        fill="#232323"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.75 6.75C9.12868 6.75 8.625 7.25368 8.625 7.875C8.625 8.49632 9.12868 9 9.75 9C10.3713 9 10.875 8.49632 10.875 7.875C10.875 7.25368 10.3713 6.75 9.75 6.75ZM7.125 7.875C7.125 6.42525 8.30025 5.25 9.75 5.25C11.1997 5.25 12.375 6.42525 12.375 7.875C12.375 9.32475 11.1997 10.5 9.75 10.5C8.30025 10.5 7.125 9.32475 7.125 7.875Z"
        fill="#232323"
      />
    </>
  ),
  deleteX: (
    <>
      <circle cx="6" cy="6" r="6" fill="#E6FFB1" />
      <path
        d="M8 4L4 8"
        stroke="#232323"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 8L4 4"
        stroke="#232323"
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
  up: (
    <>
      <path
        d="M4.13397 0.5C4.51887 -0.166667 5.48113 -0.166666 5.86603 0.5L9.33013 6.5C9.71503 7.16667 9.2339 8 8.4641 8H1.5359C0.766098 8 0.284973 7.16667 0.669873 6.5L4.13397 0.5Z"
        fill="#3A82EE"
      />
    </>
  ),
  noChange: (
    <>
      <rect width="8" height="2" rx="1" fill="#808080" />
    </>
  ),
  down: (
    <>
      <path
        d="M5.86603 7.5C5.48113 8.16667 4.51887 8.16667 4.13397 7.5L0.669873 1.5C0.284972 0.833335 0.766098 8.94676e-07 1.5359 8.27378e-07L8.4641 2.21695e-07C9.2339 1.54397e-07 9.71503 0.833333 9.33013 1.5L5.86603 7.5Z"
        fill="#EE6060"
      />
    </>
  ),
};

export default basic;
