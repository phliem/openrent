type ShareLinksType = {
  label: string;
  icon: string;
  href: string;
};

const SHARE_LINKS: ShareLinksType[] = [
  {
    label: "Facebook",
    icon: "fa-brands fa-facebook",
    href: "#",
  },
  {
    label: "X (Twitter)",
    icon: "fa-brands fa-x-twitter",
    href: "#",
  },
  {
    label: "Instagram",
    icon: "fa-brands fa-instagram",
    href: "#",
  },
  {
    label: "Email",
    icon: "fa-solid fa-envelope",
    href: "#",
  },
  {
    label: "Copy to clipboard",
    icon: "fa-solid fa-clipboard",
    href: "#",
  },
];

const Share = () => {
  return (
    <div className="p-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-700 dark:border-gray-600">
      <h4 className="mb-3 md:text-2xl font-bold text-gray-900 dark:text-white">
        Share Property
      </h4>
      <ul className="my-4 space-y-3">
        {SHARE_LINKS.map(({ label, icon, href }: ShareLinksType) => (
          <li key={label}>
            <a
              href={href}
              className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-200 hover:bg-gray-300 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
            >
              <i className={icon}></i>
              <span className="flex-1 ms-3 whitespace-nowrap">{label}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export { Share };
