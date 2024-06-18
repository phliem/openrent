type SimilarPropertiesType = {
  url: string;
  title: string;
  subtitle: string;
  href: string;
};

const SIMILAR_PROPERTIES: SimilarPropertiesType[] = [
  {
    url: "/property-b.png",
    title: "2 bed, Hackney road",
    subtitle: "£2,500 p/m",
    href: "#",
  },
  {
    url: "/property-c.png",
    title: "1 bed, Hackney road",
    subtitle: "£2,000 p/m",
    href: "#",
  },
  {
    url: "/property-d.png",
    title: "2 bed, Claredale road",
    subtitle: "£2,300 p/m",
    href: "#",
  },
  {
    url: "/property-e.png",
    title: "3 bed, Forest road",
    subtitle: "£2,700 p/m",
    href: "#",
  },
  {
    url: "/property-f.png",
    title: "2 bed, Hackney road",
    subtitle: "£2,600 p/m",
    href: "#",
  },
];

export const Similar = () => {
  return (
    <div
      id="similar-properties"
      className="mt-4 p-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-700 dark:border-gray-600"
    >
      <h5 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
        Here are similar properties in the area
      </h5>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {SIMILAR_PROPERTIES.map(
          ({ url, title, subtitle, href }: SimilarPropertiesType) => (
            <div
              key={url}
              className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            >
              <img className="rounded-t-lg" src={url} alt="" />
              <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">
                  {title}
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {subtitle}
                </p>
                <a
                  href={href}
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300"
                >
                  Read More
                  <i className="fa-solid fa-arrow-right ms-1"></i>
                </a>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};
