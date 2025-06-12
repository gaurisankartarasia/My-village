interface DropdownItem {
  title: string;
  href: string;
  description: string;
}

interface NavLink {
  title: string;
  href?: string;
  isDropdown?: boolean;
  dropdownItems?: DropdownItem[];
}

export const navLinks: NavLink[] = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about/" },
  { title: "History", href: "/history/" },
  { title: "Kings", href: "/kings/" },
  { title: "Attractions", href: "/attractions/" },
  { title: "Culture & Traditions", href: "/culture_traditions/" },
  { title: "Gallery", href: "/gallery/" },
  { title: "Videos", href: "/videos/" },
  {
    title: "More",
    isDropdown: true,
    dropdownItems: [
      {
        title: "Submit your idea",
        href: "/help/submit_content",
        description: "Submit your idea or content to be added to the website.",
      },
      {
        title: "Feedback or Report",
        href: "/feedback",
        description:
          "Feedback your experience or report errors if you find any.",
      },
    ],
  },
];
