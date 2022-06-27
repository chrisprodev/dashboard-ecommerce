interface FiltersInterface {
  id: string;
  content: JSX.Element;
  icon: any;
}

export const mockFilters: FiltersInterface[] = [
  {
    id: "1",
    content: (
      <>
        <span>Status</span> is <span>Active</span>
      </>
    ),
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={3}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    ),
  },
  {
    id: "2",
    content: (
      <>
        <span>Revenue</span> is between <span>$500</span> and
        <span> $5000</span>
      </>
    ),
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={3}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    ),
  },
];
