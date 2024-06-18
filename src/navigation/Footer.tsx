type FooterLinksType = {
  label: string;
  href: string;
};

const FOOTER_LINKS: FooterLinksType[] = [
  {
    label: "Blog",
    href: "#",
  },
  {
    label: "Help Center",
    href: "#",
  },

  {
    label: "Community",
    href: "#",
  },
  {
    label: "Terms",
    href: "#",
  },
  {
    label: "Privacy",
    href: "#",
  },
  {
    label: "Affiliates",
    href: "#",
  },
  {
    label: "Testimonials",
    href: "#",
  },
  {
    label: "Press",
    href: "#",
  },
  {
    label: "Job",
    href: "#",
  },
];
const Footer = () => {
  return (
    <footer className="bg-white border border-gray-200 rounded-lg shadow my-4 dark:bg-gray-700 dark:border-gray-600">
      <div className="w-full mx-auto p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 dark:text-gray-400">
          © 2012 - 2024{" "}
          <a href="#" className="hover:underline dark:hover:text-white">
            OpenRent Ltd
          </a>
        </span>
        <ul className="flex flex-wrap items-center text-sm font-medium text-gray-500 dark:text-gray-400 mt-4 md:mt-0 space-x-4">
          {FOOTER_LINKS.map(({ label, href }: FooterLinksType) => (
            <li key={label}>
              <a href={href} className="hover:underline dark:hover:text-white">
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export { Footer };
